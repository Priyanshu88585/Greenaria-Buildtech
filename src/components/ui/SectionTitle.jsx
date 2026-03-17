export default function SectionTitle({ title, subtitle, desc, align="center" }) {
  return (
    <div className={`mb-[52px] ${align==="center"?"text-center":""}`}>
      <h2 className="section-title" style={{ fontSize:"clamp(1.2rem,2.5vw,1.85rem)" }}>{title}</h2>
      <div className={`gold-divider ${align==="left"?"left":""}`} />
      {subtitle && <p className="font-heading font-semibold" style={{ fontSize:14, color:"#2d2d2d", marginBottom:6 }}>{subtitle}</p>}
      {desc && <p style={{ color:"#6b7280", fontSize:15, maxWidth:620, margin:"0 auto" }}>{desc}</p>}
    </div>
  );
}
