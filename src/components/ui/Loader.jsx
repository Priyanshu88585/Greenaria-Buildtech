export default function Loader({ size="md" }) {
  const s = size==="sm" ? 24 : size==="lg" ? 56 : 36;
  return (
    <div className="flex items-center justify-center p-8">
      <div className="rounded-full border-[3px] border-green-pale animate-spin"
        style={{ width:s, height:s, borderTopColor:"#2e7d32" }} />
    </div>
  );
}
