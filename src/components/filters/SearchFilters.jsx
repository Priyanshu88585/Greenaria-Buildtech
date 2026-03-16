"use client";
const sectors=["Select Sector","Sector 61","Sector 65","Sector 71","Sector 89","Sector 114","Golf Course Road","Dwarka Expressway","Noida","Dubai"];
const types=["All Type","Residential","Commercial","Villa","Plot","Studio","SCO"];
const budgets=["Select Budget","Under ₹50L","₹50L–₹1Cr","₹1Cr–₹2Cr","₹2Cr–₹5Cr","Above ₹5Cr"];
const bhks=["Any BHK","1 BHK","2 BHK","2.5 BHK","3 BHK","4 BHK","5+ BHK"];
export default function SearchFilters({ filters, onChange, onReset }) {
  return (
    <div className="flex flex-wrap gap-3 items-end">
      {[{label:"Location",key:"location",opts:sectors},{label:"Type",key:"type",opts:types},{label:"Budget",key:"budget",opts:budgets},{label:"BHK",key:"bhk",opts:bhks}].map(f=>(
        <div key={f.key} className="flex-1 min-w-[130px]">
          <label className="form-label">{f.label}</label>
          <select className="search-select" value={filters[f.key]||""} onChange={e=>onChange(f.key,e.target.value)}>
            {f.opts.map(o=><option key={o}>{o}</option>)}
          </select>
        </div>
      ))}
      {onReset&&<button onClick={onReset} className="btn-green-outline flex-shrink-0" style={{height:46}}>Reset</button>}
    </div>
  );
}
