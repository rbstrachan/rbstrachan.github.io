import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function SidebarLinks({ displayClass }: QuartzComponentProps) {
  return (
    <div class={`sidebar-links ${displayClass ?? ""}`}>
      {/* <a href="/about">About Me</a> */}
      <span><a href="/cv">CV</a><small><b> ・ </b></small><a href="/qr">QR</a></span>
      <a href="/tutoring/lessons">Language Tutoring</a>
      <a href="/guestbook">Guestbook</a>
    </div>
  )
}

export default (() => SidebarLinks) satisfies QuartzComponentConstructor
// <a href="/shop">Shop</a>
