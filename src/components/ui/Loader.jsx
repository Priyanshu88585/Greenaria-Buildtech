export default function Loader({ size = "md" }) {
  const s = size === "sm" ? 40 : size === "lg" ? 80 : 60;

  return (
    <div className="flex items-center justify-center p-8">
      <div
        className="spinner"
        style={{ width: s, height: s, marginLeft: 0 }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>
    </div>
  );
}
