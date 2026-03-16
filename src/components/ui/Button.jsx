export default function Button({ variant="primary", size="md", children, className="", ...props }) {
  const base = "inline-flex items-center justify-center gap-2 font-heading font-bold tracking-[.08em] uppercase rounded-lg border-none cursor-pointer transition-all duration-300";
  const variants = {
    primary: "btn-primary",
    outline: "btn-green-outline",
    ghost:   "bg-transparent text-green-primary hover:bg-green-pale",
    danger:  "bg-red-500 text-white hover:bg-red-600 shadow-[0_4px_14px_rgba(239,68,68,.35)]",
  };
  const sizes = { sm:"px-4 py-2 text-xs", md:"px-7 py-3 text-[13px]", lg:"px-9 py-4 text-sm" };
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
