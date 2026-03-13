import type { QuartzComponent, QuartzComponentConstructor } from "./types"
import script from "./scripts/brailleScramble.inline"

export default (() => {
  const BrailleScramble: QuartzComponent = () => <></>

  BrailleScramble.afterDOMLoaded = script

  BrailleScramble.css = `
  .text-block {
    margin: 1vw;
    font-family: "Ubuntu Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace;
    font-size: clamp(14px, 4vw, 32px);
    color: var(--light);
    font-weight: 700;
    font-variant-ligatures: none;
  }

  .word { display: inline-block; white-space: nowrap; }

  .char {
    will-change: transform;
    display: inline-block;

    overflow: hidden;
    text-align: center;
    white-space: pre;

    line-height: 1.25em;
    width: 1.13ch;
  }

  [data-braille-scramble] {
    font-synthesis: none;
  }
  `

  return BrailleScramble
}) satisfies QuartzComponentConstructor
