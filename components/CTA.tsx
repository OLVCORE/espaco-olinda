import Link from 'next/link'
export function CTA({ href, label, primary=false }:{ href:string; label:string; primary?:boolean }){
  return (
    <Link href={href} className={primary ? "px-5 py-3 rounded bg-[#B48A36] text-[#0A0F1A] font-semibold"
                                         : "px-5 py-3 rounded ring-1 ring-white/20"}>
      {label}
    </Link>
  )
}