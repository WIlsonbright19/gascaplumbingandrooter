export function UtilityBar() {
  return (
    <aside
      aria-label="Contact information"
      className="hidden md:block bg-[#0A3F4D] text-[#F6F1E7] border-b border-[#DCD3C0]/20 py-2 px-6 text-sm font-sans z-40 relative"
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 font-medium tracking-wide">
          <span>Family-owned plumbing in Oakland</span>
        </div>
        <div>
          <a
            href="tel:+15102396175"
            className="font-medium hover:text-[#DCEBE8] transition-colors focus-visible:rounded"
            aria-label="Call Gasca Plumbing & Rooter"
          >
            Call us
          </a>
        </div>
      </div>
    </aside>
  );
}
