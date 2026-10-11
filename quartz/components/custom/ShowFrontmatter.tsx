import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../../util/lang"
import { transformLink } from "../../util/path"

interface Options {
  includeKeys?: string[]
  excludeKeys?: string[]
}

const defaultOptions: Options = {
  excludeKeys: ["title", "draft", "comments", "aliases","enableToc", "cssclasses", "tags", "modified"],
}

const LINK_REGEX = /\[\[([^\]\|]+)(?:\|([^\]]+))?\]\]|\[([^\]]+)\]\(([^)]+)\)/g

export default ((userOpts?: Options) => {
  const opts = { ...defaultOptions, ...userOpts }

  const Frontmatter: QuartzComponent = ({
    fileData,
    cfg,
    allSlugs,
    displayClass,
  }: QuartzComponentProps) => {
    const frontmatter = fileData.frontmatter
    if (!frontmatter) return null

    const cssClasses = frontmatter.cssclasses
    if (cssClasses) {
      const classList = Array.isArray(cssClasses) ? cssClasses : String(cssClasses).split(" ")
      if (classList.includes("no-frontmatter")) {
        return null
      }
    }

    const entries = Object.entries(frontmatter).filter(([key]) => {
      if (key === "cssclasses") return false
      if (opts.excludeKeys?.includes(key)) return false
      if (opts.includeKeys && !opts.includeKeys.includes(key)) return false
      return true
    })

    const count = entries.length
    if (count === 0) return null

    const formatValueWithLinks = (val: string) => {
      const matches = [...val.matchAll(LINK_REGEX)]
      if (matches.length === 0) return val

      const parts: (string | JSX.Element)[] = []
      let lastIndex = 0

      matches.forEach((match, idx) => {
        const fullMatch = match[0]
        const matchIndex = match.index ?? 0

        if (matchIndex > lastIndex) {
          parts.push(val.slice(lastIndex, matchIndex))
        }

        if (match[1] !== undefined) {
          const rawTarget = match[1].trim()
          const alias = match[2] ? match[2].trim() : rawTarget

          const targetHref = transformLink(fileData.slug!, rawTarget, {
            allSlugs,
            strategy: cfg?.baseUrl ? "absolute" : "shortest",
            ...cfg,
          })

          parts.push(
            <a key={idx} href={targetHref} class="internal">
              {alias}
            </a>
          )
        } 

        else if (match[3] !== undefined) {
          const text = match[3].trim()
          const url = match[4].trim()
          const isExternal = /^https?:\/\//.test(url)

          parts.push(
            <a
              key={idx}
              href={url}
              class={isExternal ? "external" : "internal"}
              {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {text}
            </a>
          )
        }

        lastIndex = matchIndex + fullMatch.length
      })

      if (lastIndex < val.length) {
        parts.push(val.slice(lastIndex))
      }

      return parts
    }

    return (
      <div class={classNames(displayClass, "frontmatter-container")}>
        <details class="frontmatter-details">
          <summary class="frontmatter-summary">
            <div class="frontmatter-summary-content">
              <span class="frontmatter-title">Properties</span>
              <span class="frontmatter-count">{count}</span>
            </div>
          </summary>
          <table class="frontmatter-table">
            <tbody>
              {entries.map(([key, value]) => {
                let formattedContent: string | JSX.Element | (string | JSX.Element)[] = ""

                if (Array.isArray(value)) {
                  formattedContent = value.map((item, idx) => (
                    <span key={idx}>
                      {typeof item === "string" ? formatValueWithLinks(item) : String(item)}
                      {idx < value.length - 1 ? ", " : ""}
                    </span>
                  ))
                } else if (typeof value === "object" && value !== null) {
                  formattedContent = JSON.stringify(value)
                } else {
                  formattedContent = formatValueWithLinks(String(value))
                }

                return (
                  <tr key={key}>
                    <td class="frontmatter-key">{key}</td>
                    <td class="frontmatter-value">{formattedContent}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </details>
      </div>
    )
  }

  return Frontmatter
}) satisfies QuartzComponentConstructor