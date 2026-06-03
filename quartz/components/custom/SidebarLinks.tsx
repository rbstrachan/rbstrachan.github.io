// import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
//
// function SidebarLinks() {
//   return (
//     <div class="sidebar-links">
//       <div><a href="/cv">CV</a>・<a href="/qr">QR</a></div>
//       <a href="/tutoring/lessons">Language Tutoring</a>
//       <a href="/guestbook">Guestbook</a>
//     </div>
//   )
// }
//
// export default (() => SidebarLinks) satisfies QuartzComponentConstructor
// // <a href="/shop">Shop</a>

import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function SidebarLinks({ displayClass }: QuartzComponentProps) {
  return (
    <div class={`sidebar-links ${displayClass ?? ""}`}>
      <div><a href="/cv">CV</a>・<a href="/qr">QR</a></div>
      <a href="/tutoring/lessons">Language Tutoring</a>
      <a href="/guestbook">Guestbook</a>
    </div>
  )
}

export default (() => SidebarLinks) satisfies QuartzComponentConstructor
