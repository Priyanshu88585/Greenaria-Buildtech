export default function PropertyDetails({ property }) {

  return (

    <div className="property-details">

      <h1>{property.title}</h1>

      <p className="location">
        {property.location}
      </p>

      <p className="price">
        {property.price}
      </p>

      <p className="description">
        {property.description}
      </p>

    </div>

  )

}