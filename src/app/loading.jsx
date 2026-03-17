export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center gap-6">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-green-pale border-t-[var(--green)] animate-spin" />
      </div>
      <img
        src="/logos/company/logo-dark@2x.png"
        alt="Greenaria Buildtech"
        className="h-[40px] w-auto object-contain"
      />
    </div>
  );
}
