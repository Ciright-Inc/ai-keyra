"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type KeyraSessionUser = {
  phoneE164?: string;
  displayName?: string | null;
};

type KeyraSessionContextValue = {
  user: KeyraSessionUser | null;
  refresh: () => Promise<void>;
  logout: () => Promise<void>;
  headerLabel: string | null;
};

const KeyraSessionContext = createContext<KeyraSessionContextValue | null>(null);
const AUTH_CHANNEL = "keyra-auth";

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object";
}

function toSessionUser(raw: unknown): KeyraSessionUser | null {
  if (!isRecord(raw)) return null;
  const phone =
    (typeof raw.phoneE164 === "string" && raw.phoneE164) ||
    (typeof raw.phone === "string" && raw.phone) ||
    undefined;
  const displayName =
    (typeof raw.displayName === "string" && raw.displayName) ||
    (typeof raw.fullName === "string" && raw.fullName) ||
    (typeof raw.name === "string" && raw.name) ||
    null;
  if (!phone && !displayName) return null;
  return { phoneE164: phone, displayName };
}

function toHeaderLabel(user: KeyraSessionUser | null): string | null {
  if (!user) return null;
  const name = String(user.displayName ?? "").trim();
  if (name) return name;
  const phone = String(user.phoneE164 ?? "").trim();
  return phone || null;
}

export function KeyraSessionProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<KeyraSessionUser | null>(null);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/session", {
        method: "GET",
        credentials: "include",
        cache: "no-store",
        headers: { "Cache-Control": "no-cache", Pragma: "no-cache" },
      });
      if (!res.ok) {
        setUser((prev) => (prev !== null ? null : prev));
        return;
      }
      const json = (await res.json()) as unknown;
      if (!isRecord(json) || !json.authenticated) {
        setUser((prev) => (prev !== null ? null : prev));
        return;
      }
      const nextUser = toSessionUser((json as any).user);
      setUser((prev) =>
        prev?.phoneE164 === nextUser?.phoneE164 && prev?.displayName === nextUser?.displayName
          ? prev
          : nextUser,
      );
    } catch {
      setUser((prev) => (prev !== null ? null : prev));
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => void refresh(), 0);
    return () => clearTimeout(t);
  }, [refresh]);

  useEffect(() => {
    const onVisible = () => {
      if (document.visibilityState === "visible") void refresh();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, [refresh]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const schedule = () => {
      clearInterval(interval);
      if (document.visibilityState === "visible") {
        interval = setInterval(() => void refresh(), 15_000);
      }
    };
    schedule();
    document.addEventListener("visibilitychange", schedule);
    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", schedule);
    };
  }, [refresh]);

  useEffect(() => {
    let channel: BroadcastChannel | undefined;
    try {
      channel = new BroadcastChannel(AUTH_CHANNEL);
      channel.onmessage = (e) => {
        if (e?.data?.type === "logout") setUser(null);
        if (e?.data?.type === "refresh") void refresh();
      };
    } catch {
      // ignore
    }
    return () => channel?.close();
  }, [refresh]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!event?.data || typeof event.data !== "object") return;
      const data = event.data as { type?: unknown };
      if (data.type !== "keyra:session-updated") return;
      void refresh();
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [refresh]);

  const logout = useCallback(async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    } catch {
      // ignore
    } finally {
      setUser(null);
    }
    try {
      new BroadcastChannel(AUTH_CHANNEL)?.postMessage({ type: "logout" });
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo<KeyraSessionContextValue>(
    () => ({
      user,
      refresh,
      logout,
      headerLabel: toHeaderLabel(user),
    }),
    [user, refresh, logout],
  );

  return <KeyraSessionContext.Provider value={value}>{children}</KeyraSessionContext.Provider>;
}

export function useKeyraSession() {
  const ctx = useContext(KeyraSessionContext);
  if (!ctx) throw new Error("useKeyraSession must be used within KeyraSessionProvider");
  return ctx;
}

