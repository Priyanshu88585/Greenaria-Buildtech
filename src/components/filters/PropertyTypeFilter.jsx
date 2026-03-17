"use client";
const types = ["All Type","Residential","Commercial","Villa","Plot","Studio","SCO"];
export default function PropertyTypeFilter({ value, onChange }) {
  return (
    <div>
      <label className="form-label">Property Type</label>
      <select className="search-select" value={value || ""} onChange={e => onChange(e.target.value)}>
        {types.map(t => <option key={t}>{t}</option>)}
      </select>
    </div>
  );
}
