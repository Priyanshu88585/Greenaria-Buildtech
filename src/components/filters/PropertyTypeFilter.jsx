export default function PropertyTypeFilter({ value, onChange }) {

  const types = [
    "Apartment",
    "Builder Floor",
    "Office",
    "Retail Shops",
    "Residential Plots",
    "Industrial Plots",
    "Agriculture Land",
    "Villas"
  ]

  return (

    <div className="filter-item">

      <label>Property Type</label>

      <select
        value={value}
        onChange={(e)=>onChange(e.target.value)}
      >

        <option value="">All Types</option>

        {types.map((type,index)=>(
          <option key={index} value={type}>
            {type}
          </option>
        ))}

      </select>

    </div>

  )

}