import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

function SidebarBio({ displayClass }: QuartzComponentProps) {
  return (
    <div class={`${displayClass ?? ""}`}>
      <div style="margin-bottom: 5px">he/him</div>
      <div>🇬🇧 🇫🇷</div>
    </div>
  )
}

export default (() => SidebarBio) satisfies QuartzComponentConstructor
