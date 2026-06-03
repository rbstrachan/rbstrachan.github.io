import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

function SidebarBio({ displayClass }: QuartzComponentProps) {
  return (
    <div class={`sidebar-bio ${displayClass ?? ""}`}>
      <hr style="margin: 0 0 28px 0; border: none; border-top: 1px solid var(--lightgray);" />
      <div style="margin-bottom: 5px">he/him</div>
      <div>🇬🇧 🇫🇷</div>
    </div>
  )
}

export default (() => SidebarBio) satisfies QuartzComponentConstructor
