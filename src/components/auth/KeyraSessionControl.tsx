"use client";

import { useKeyraSession } from "@/contexts/KeyraSessionContext";
import { keyraAiAotiUrl, keyraGetStartedUrl } from "@/lib/keyraAppUrls";
import { openGetStartedPopup } from "@/lib/auth/openGetStartedPopup";

type Props = {
  className?: string;
};

export function KeyraSessionControl({ className }: Props) {
  const { user, headerLabel, logout } = useKeyraSession();

  if (user) {
    return (
      <button
        type="button"
        className={className}
        onClick={() => void logout()}
        title={headerLabel ?? "Signed in"}
      >
        Sign out
      </button>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        const returnUrl = `${keyraAiAotiUrl()}/?keyra_session=1`;
        const href = `${keyraGetStartedUrl()}/?return=${encodeURIComponent(returnUrl)}`;
        openGetStartedPopup(href);
      }}
    >
      Sign in
    </button>
  );
}

