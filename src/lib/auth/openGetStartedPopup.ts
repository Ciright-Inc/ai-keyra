export function openGetStartedPopup(href: string) {
  const popup = window.open(
    href,
    "keyra_get_started_login",
    "popup=yes,width=520,height=760,noopener",
  );
  if (!popup) window.location.href = href;
}

