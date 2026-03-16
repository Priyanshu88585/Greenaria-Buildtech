"use client";
export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-6xl font-heading font-black text-[#2e7d32] mb-4">Oops!</div>
        <h2 className="font-heading font-bold text-2xl text-navy mb-2">Something went wrong</h2>
        <p className="text-gray-500 mb-6">{error?.message || "An unexpected error occurred."}</p>
        <button onClick={reset} className="btn-primary">Try Again</button>
      </div>
    </div>
  );
}
