import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export const AsciiBackground: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <div className="ascii-bg-wrapper">
      <script type="module" src="https://ascii.rest/ascii.js"></script>
      <ascii-art piece="aurora-fjord"></ascii-art>
      {/* <ascii-art piece="black-hole"></ascii-art> */}
    </div>
  )
}

export default (() => AsciiBackground) satisfies QuartzComponentConstructor