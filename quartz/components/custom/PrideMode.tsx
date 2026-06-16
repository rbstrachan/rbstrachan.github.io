import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { classNames } from "../../util/lang"

const PrideMode: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <>
      <a href="/pride"><div id="pride-bar"></div></a>
      <button
        id="pride-toggle"
        className={classNames(displayClass, "pride-toggle")}
        aria-label="Toggle Pride Theme"
        title="Toggle Pride Theme"
        type="button"
      >
        🏳️‍🌈
      </button>
    </>
  )
}

const prideScript = `
(() => {
  const init = () => {
    const toggleBtn = document.getElementById("pride-toggle")
    if (!toggleBtn) return

    const root = document.documentElement
    const stored = localStorage.getItem("theme-pride")

    if (stored === "disabled") {
      root.removeAttribute("data-theme-pride")
    } else {
      root.setAttribute("data-theme-pride", "enabled")
      if (stored === null) localStorage.setItem("theme-pride", "enabled")
    }

    toggleBtn.onclick = (e) => {
      const isPride = root.getAttribute("data-theme-pride") === "enabled"
      const x = e.clientX
      const y = e.clientY
      root.style.setProperty("--pride-x", \`\${x}px\`)
      root.style.setProperty("--pride-y", \`\${y}px\`)

      if (isPride) {
        root.removeAttribute("data-theme-pride")
        localStorage.setItem("theme-pride", "disabled")
      } else {
        root.setAttribute("data-theme-pride", "enabled")
        localStorage.setItem("theme-pride", "enabled")
      }
    }
  }

  init()
  document.addEventListener("nav", init)
  document.addEventListener("render", init)
})()
`

PrideMode.afterDOMLoaded = prideScript

export default (() => PrideMode) satisfies QuartzComponentConstructor
