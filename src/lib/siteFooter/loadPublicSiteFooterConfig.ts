import { keyraMarketingPublicOrigin } from "@/lib/keyraAppUrls";
import { getDefaultSiteFooterConfig } from "./defaults";
import type { SiteFooterConfig } from "./types";

const FOOTER_SITE_APP_ID =
  process.env.KEYRA_FOOTER_SITE_APP_ID?.trim() ||
  process.env.NEXT_PUBLIC_KEYRA_FOOTER_SITE_APP_ID?.trim() ||
  "ai-aoti";

function isSiteFooterConfig(value: unknown): value is SiteFooterConfig {
  if (!value || typeof value !== "object") return false;
  const payload = value as SiteFooterConfig;
  return (
    Boolean(payload.settings) &&
    Array.isArray(payload.onThisSiteLinks) &&
    Array.isArray(payload.keyraAppLinks) &&
    Array.isArray(payload.socialLinks)
  );
}

/**
 * Footer from keyra.ie CMS (`siteAppId=ai-aoti`) merged with AOTI on-site links and copy.
 */
export async function loadPublicSiteFooterConfig(): Promise<SiteFooterConfig> {
  const local = getDefaultSiteFooterConfig();
  const cmsOrigin = keyraMarketingPublicOrigin();
  const url = `${cmsOrigin}/api/public/site-footer?siteAppId=${encodeURIComponent(FOOTER_SITE_APP_ID)}`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return local;

    const remote: unknown = await res.json();
    if (!isSiteFooterConfig(remote)) return local;

    return {
      settings: {
        ...remote.settings,
        description: local.settings.description,
        onThisSiteLabel: local.settings.onThisSiteLabel,
        keyraAppsLabel: remote.settings.keyraAppsLabel || local.settings.keyraAppsLabel,
        logoSrc: remote.settings.logoSrc || local.settings.logoSrc,
      },
      onThisSiteLinks:
        local.onThisSiteLinks.length > 0 ? local.onThisSiteLinks : remote.onThisSiteLinks,
      keyraAppLinks:
        remote.keyraAppLinks.length > 0 ? remote.keyraAppLinks : local.keyraAppLinks,
      socialLinks:
        remote.socialLinks.length > 0 ? remote.socialLinks : local.socialLinks,
    };
  } catch {
    return local;
  }
}
