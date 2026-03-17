"use client";
const budgets = ["Select Budget","Under ₹50L","₹50L–₹1Cr","₹1Cr–₹2Cr","₹2Cr–₹5Cr","Above ₹5Cr"];
export default function PriceFilter({ value, onChange }) {
  return (
    <div>
      <label className="form-label">Budget</label>
      <select className="search-select" value={value || ""} onChange={e => onChange(e.target.value)}>
        {budgets.map(b => <option key={b}>{b}</option>)}
      </select>
    </div>
  );
}
