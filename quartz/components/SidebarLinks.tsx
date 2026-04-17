import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function SidebarLinks() {
  return (
    <div className="sidebar-links">
      <div><a href="/cv">CV</a>・<a href="/qr">QR</a></div>
      <a href="/guestbook">Guestbook</a>
    </div>
  )
}

export default (() => SidebarLinks) satisfies QuartzComponentConstructor
// <a href="/tutoring/lessons">Language Tutoring</a>
// <a href="/shop">Shop</a>
