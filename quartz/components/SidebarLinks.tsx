import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function SidebarLinks() {
  return (
    <div className="sidebar-links">
      <a href="/cv">CV</a>
      <a href="/guestbook">Guestbook</a>
    </div>
  )
}

export default (() => SidebarLinks) satisfies QuartzComponentConstructor
// <a href="/shop">Shop</a>
