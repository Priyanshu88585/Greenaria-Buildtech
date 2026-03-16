export default function Amenities({ amenities }) {
  if (!amenities?.length) return null;
  return (
    <div>
      <h3 className="font-heading font-bold text-navy text-lg mb-4">Amenities</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {amenities.map(a => (
          <div key={a} className="flex items-center gap-2 p-3 rounded-xl bg-green-pale">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span className="text-sm font-medium text-navy">{a}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
