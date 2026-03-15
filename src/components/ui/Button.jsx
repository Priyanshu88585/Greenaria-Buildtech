export default function Button({
  text,
  type="button",
  onClick,
  variant="primary"
}) {

  return (

    <button
      type={type}
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {text}
    </button>

  )

}