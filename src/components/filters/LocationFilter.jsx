export default function LocationFilter({ value, onChange }) {

  const locations = [
    "Noida",
    "Greater Noida",
    "Yamuna Expressway",
    "Gurugram",
    "Mumbai",
    "Dubai"
  ]

  return (

    <div className="filter-item">

      <label>Location</label>

      <select
        value={value}
        onChange={(e)=>onChange(e.target.value)}
      >

        <option value="">All Locations</option>

        {locations.map((loc,index)=>(
          <option key={index} value={loc}>
            {loc}
          </option>
        ))}

      </select>

    </div>

  )

}