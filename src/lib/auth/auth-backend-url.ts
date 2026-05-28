function resolveAuthBackendUrl(raw: string | undefined): string {
  const trimmed = String(raw ?? "").trim();
  if (!trimmed) return "https://auth.keyra.ie";
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed.replace(/\/$/, "");
  }
  if (trimmed.startsWith("/")) return "https://auth.keyra.ie";
  return `https://${trimmed.replace(/\/$/, "")}`;
}

export const AUTH_BACKEND_URL = resolveAuthBackendUrl(
  process.env.SIMSECURE_AUTH_BACKEND_URL ??
    process.env.NEXT_PUBLIC_SIMSECURE_AUTH_BACKEND_URL ??
    process.env.NEXT_PUBLIC_AUTH_BACKEND_URL,
);

