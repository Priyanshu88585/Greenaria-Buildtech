export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center gap-4">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-green-pale border-t-[var(--green)] animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-[var(--green-pale)] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="1.8">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <polyline points="9,22 9,12 15,12 15,22"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="font-heading font-black text-[16px] text-navy tracking-[.08em]">GREENARIA</span>
        <span className="font-heading font-600 text-[9px] text-[#2e7d32] tracking-[.18em] uppercase">BUILDTECH</span>
      </div>
    </div>
  );
}
