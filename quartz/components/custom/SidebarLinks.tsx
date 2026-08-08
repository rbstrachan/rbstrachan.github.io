import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function SidebarLinks({ fileData, displayClass }: QuartzComponentProps) {
  return (
    <div class={`sidebar-links ${displayClass ?? ""}`}>
      {fileData?.slug && fileData.slug !== "index" && <a href="/">About Me</a>}
      <span><a href="/cv">CV</a><small><b> ・ </b></small><a href="/qr">QR</a></span>
      <a href="/tutoring/lessons">Language Tutoring</a>
      <a href="/guestbook">Guestbook</a>
    </div>
  )
}

// <a href="/shop">Shop</a>
export default (() => SidebarLinks) satisfies QuartzComponentConstructor
