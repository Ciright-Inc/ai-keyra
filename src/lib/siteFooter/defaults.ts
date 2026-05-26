import { KEYRA_LINKEDIN_URL, KEYRA_LOGO_SRC } from "@/lib/keyraBrandAssets";
import { getKeyraEcosystemAppLinks, keyraDeveloperPortalUrl } from "@/lib/keyraAppUrls";
import type { SiteFooterConfig, SiteFooterLinkView, SiteFooterSocialLinkView } from "./types";

const SETTINGS_ID = "ai-keyra-default";

const DEFAULT_DESCRIPTION =
  "Autonomous Operational Trust Infrastructure (AOTI) — rooted identity, operational authorization, runtime governance, and execution verification for secure autonomous systems.";

function defaultOnThisSiteLinks(): SiteFooterLinkView[] {
  const rows: Omit<SiteFooterLinkView, "id">[] = [
    { section: "ON_THIS_SITE", siteAppId: null, label: "Narrative", href: "/#narrative", description: null, isExternal: false, internalPath: null, sortOrder: 10, isPublished: true },
    { section: "ON_THIS_SITE", siteAppId: null, label: "KOTA", href: "/#kota", description: null, isExternal: false, internalPath: null, sortOrder: 20, isPublished: true },
    { section: "ON_THIS_SITE", siteAppId: null, label: "Protocols", href: "/#protocols", description: null, isExternal: false, internalPath: null, sortOrder: 30, isPublished: true },
    { section: "ON_THIS_SITE", siteAppId: null, label: "Security", href: "/#security", description: null, isExternal: false, internalPath: null, sortOrder: 40, isPublished: true },
    { section: "ON_THIS_SITE", siteAppId: null, label: "Deployment", href: "/#deployment", description: null, isExternal: false, internalPath: null, sortOrder: 50, isPublished: true },
    { section: "ON_THIS_SITE", siteAppId: null, label: "OTCC", href: "/#otcc", description: null, isExternal: false, internalPath: null, sortOrder: 60, isPublished: true },
    { section: "ON_THIS_SITE", siteAppId: null, label: "Platform", href: "/#platform", description: null, isExternal: false, internalPath: null, sortOrder: 70, isPublished: true },
    { section: "ON_THIS_SITE", siteAppId: null, label: "Research", href: "/#research", description: null, isExternal: false, internalPath: null, sortOrder: 80, isPublished: true },
    { section: "ON_THIS_SITE", siteAppId: null, label: "Contact", href: "https://keyra.ie/contact", description: null, isExternal: true, internalPath: null, sortOrder: 90, isPublished: true },
  ];
  return rows.map((row, index) => ({ ...row, id: `aoti-site-${index}` }));
}

function defaultKeyraAppLinks(): SiteFooterLinkView[] {
  return getKeyraEcosystemAppLinks().map((item, index) => ({
    id: `aoti-app-${item.id}`,
    section: "KEYRA_APPS" as const,
    siteAppId: item.id,
    label: item.label,
    href: item.href,
    description: item.description,
    isExternal: !item.internalPath,
    internalPath: item.internalPath ?? null,
    sortOrder: (index + 1) * 10,
    isPublished: true,
  }));
}

function defaultSocialLinks(): SiteFooterSocialLinkView[] {
  return [
    {
      id: "aoti-social-linkedin",
      platform: "LINKEDIN",
      label: "Keyra on LinkedIn",
      url: KEYRA_LINKEDIN_URL,
      sortOrder: 10,
      isPublished: true,
    },
  ];
}

export function getDefaultSiteFooterConfig(): SiteFooterConfig {
  return {
    settings: {
      id: SETTINGS_ID,
      logoSrc: KEYRA_LOGO_SRC,
      description: DEFAULT_DESCRIPTION,
      onThisSiteLabel: "On this site",
      keyraAppsLabel: "Keyra apps",
    },
    onThisSiteLinks: defaultOnThisSiteLinks(),
    keyraAppLinks: defaultKeyraAppLinks(),
    socialLinks: defaultSocialLinks(),
  };
}

export { keyraDeveloperPortalUrl };
