const styles = {
  green:"badge-green", launch:"badge-launch", ready:"badge-ready",
  const:"badge-const", commercial:"badge-commercial", bhk:"badge-bhk",
};
export default function Badge({ type="green", children }) {
  return <span className={`badge ${styles[type]||"badge-green"}`}>{children}</span>;
}
