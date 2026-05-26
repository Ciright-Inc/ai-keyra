"use client";

import Link from "next/link";
import { useMemo } from "react";
import { KeyraAppLauncher } from "./KeyraAppLauncher";
import { MobileNav } from "./MobileNav";
import { KeyraLogo } from "@/components/brand/KeyraLogo";
import { NAV_LINKS_PRIMARY } from "@/lib/content";
import { keyraDeveloperPortalUrl } from "@/lib/keyraAppUrls";
import { NEW_TAB_LINK } from "@/lib/newTabLink";

type NavItem = { href: string; label: string; external?: boolean };

function buildNav(): NavItem[] {
  return [
    ...NAV_LINKS_PRIMARY.map((link) => ({ href: link.href, label: link.label })),
    { href: keyraDeveloperPortalUrl(), label: "Developers", external: true },
  ];
}

export function SiteHeader() {
  const nav = useMemo(() => buildNav(), []);

  return (
    <header className="keyra-site-header-shell z-[var(--keyra-z-header)]">
      <div className="relative mx-auto flex min-h-12 w-full min-w-0 max-w-7xl items-center justify-between gap-2 px-3 pt-1.5 sm:px-6 xl:h-14 xl:grid xl:grid-cols-[minmax(0,auto)_minmax(0,1fr)_auto] xl:items-center xl:gap-x-5 xl:pt-0">
        <Link
          href="/"
          className="relative z-0 flex min-w-0 shrink-0 items-center justify-start gap-2 overflow-visible xl:col-start-1 xl:row-start-1 xl:h-14 xl:pr-3"
          aria-label="Keyra AOTI home"
        >
          <KeyraLogo variant="header" showWordmark={false} />
          <span className="hidden sm:inline text-[10px] font-semibold tracking-[0.14em] text-keyra-primary/70 uppercase">
            AOTI
          </span>
        </Link>

        <nav
          className="relative hidden min-h-0 min-w-0 xl:col-start-2 xl:row-start-1 xl:flex xl:items-center xl:justify-center xl:mr-4"
          aria-label="Primary"
        >
          <div className="flex max-w-full flex-nowrap items-center justify-center gap-1 overflow-visible whitespace-nowrap px-2">
            {nav.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex min-w-fit shrink-0 items-center justify-center whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium leading-relaxed text-keyra-primary/90 transition-colors hover:bg-black/[0.05] hover:text-keyra-primary xl:px-3.5"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative flex min-w-fit shrink-0 items-center justify-center whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium leading-relaxed text-keyra-primary/90 transition-colors hover:bg-black/[0.05] hover:text-keyra-primary xl:px-3.5"
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </nav>

        <div className="relative z-10 flex shrink-0 flex-nowrap items-center justify-end gap-2 xl:col-start-3 xl:row-start-1 xl:gap-3 xl:pl-5">
          <div className="flex shrink-0 items-center gap-2">
            <KeyraAppLauncher />
            <MobileNav />
          </div>

          <div
            className="hidden min-w-0 shrink-0 flex-row flex-nowrap items-stretch rounded-[var(--keyra-radius-pill)] border border-keyra-border bg-keyra-surface/90 p-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md sm:flex sm:p-1"
            aria-label="Platform access"
          >
            <Link href="#platform" {...NEW_TAB_LINK} className="inline-flex min-w-0 shrink-0">
              <span className="flex items-center whitespace-nowrap rounded-[var(--keyra-radius-pill)] bg-[var(--keyra-action)] px-3 py-2 text-xs font-medium leading-none text-keyra-primary ring-1 ring-[var(--keyra-action-border)] transition-colors duration-150 ease-out hover:bg-[rgba(255,255,255,0.05)] sm:text-sm">
                Platform Access
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
