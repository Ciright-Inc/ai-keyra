import { SITE } from "@/lib/content";

export default function loading() {
  return (
    <div
      className="min-h-[60vh] flex items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      <div className="text-center">
        <div className="ds-caption-uppercase mb-2">{SITE.domain}</div>
        <div className="ds-caption-uppercase mb-4">{SITE.category}</div>
        <p className="ds-body-sm mb-6 max-w-xs mx-auto">{SITE.tagline}</p>
        <div className="h-1 w-32 mx-auto rounded-full bg-ds-surface-strong overflow-hidden">
          <div
            className="h-full w-1/2 rounded-full bg-ds-ink"
            style={{ animation: "ds-load 1.2s ease-in-out infinite" }}
          />
        </div>
      </div>
    </div>
  );
}
