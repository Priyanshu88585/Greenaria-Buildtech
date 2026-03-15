export default function Amenities({ amenities }) {

  return (

    <div className="amenities-section">

      <h3>Amenities</h3>

      <ul className="amenities-list">

        {amenities.map((item,index)=>(
          <li key={index}>
            {item}
          </li>
        ))}

      </ul>

    </div>

  )

}