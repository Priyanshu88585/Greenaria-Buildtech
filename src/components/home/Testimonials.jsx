export default function Testimonials() {

  const testimonials = [
    {
      name:"Rahul Sharma",
      text:"Excellent real estate consultancy. They helped me buy my first apartment."
    },
    {
      name:"Amit Verma",
      text:"Very professional team and transparent deals."
    },
    {
      name:"Priya Singh",
      text:"Highly recommended for property investment."
    }
  ]

  return (

    <section className="testimonials">

      <div className="container">

        <h2>What Our Clients Say</h2>

        <div className="testimonial-grid">

          {testimonials.map((item,index)=>(
            <div key={index} className="testimonial-card">

              <p>{item.text}</p>

              <h4>{item.name}</h4>

            </div>
          ))}

        </div>

      </div>

    </section>

  )

}