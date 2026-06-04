import type { QuartzComponent, QuartzComponentConstructor } from "./types"
import script from "../scripts/custom/spoiler.inline"

export default (() => {
  const SpoilerEffect: QuartzComponent = () => <></>

  SpoilerEffect.afterDOMLoaded = script

  SpoilerEffect.css = `
  spoiler {
    background-color: var(--dark);
    color: var(--dark);
    border-radius: 2px;
    padding: 0 2px;
    display: inline;
    transition: color 0.1s ease-in-out;
    user-select: none;
  }

  spoiler.revealed {
    background-color: transparent;
    color: var(--text);
    user-select: text !important;
  }
  `

  return SpoilerEffect
}) satisfies QuartzComponentConstructor
