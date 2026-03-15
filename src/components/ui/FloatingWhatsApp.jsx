export default function FloatingWhatsApp() {
  const phone = "918218035989";
  return (
    <a
      className="floating-whatsapp"
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
    >
      💬
    </a>
  );
}
