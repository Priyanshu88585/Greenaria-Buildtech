"use client";
const locations = ["Select Sector","Sector 61","Sector 65","Sector 71","Sector 89","Sector 114","Golf Course Road","Dwarka Expressway","Noida"];
export default function LocationFilter({ value, onChange }) {
  return (
    <div>
      <label className="form-label">Location</label>
      <select className="search-select" value={value || ""} onChange={e => onChange(e.target.value)}>
        {locations.map(l => <option key={l}>{l}</option>)}
      </select>
    </div>
  );
}
