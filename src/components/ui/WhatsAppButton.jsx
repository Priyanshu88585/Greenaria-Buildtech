export default function WhatsAppButton({ property }) {
  const phone = "918218035989";
  const message = encodeURIComponent(
    `Hello, I am interested in ${property.title} at ${property.location}`,
  );
  const link = `https://wa.me/${phone}?text=${message}`;
  return (
    <a className="whatsapp-btn" href={link} target="_blank" rel="noreferrer">
      💬 WhatsApp Inquiry
    </a>
  );
}
