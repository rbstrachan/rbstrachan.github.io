import { QuartzTransformerPlugin } from "../types"
import { Root } from "hast"
import { visit } from "unist-util-visit"

export const Dropcaps: QuartzTransformerPlugin = () => {
  return {
    name: "Dropcaps",
    htmlPlugins() {
      return [
        () => {
          return (tree: Root, file) => {

            // ADD CHECK FOR LIST PAGES HERE
            // RETURN SO SCRIPT DOESNT RUN
            // CURRENTLY THIS RUNS ON LIST PAGES BUT
            // HAS NO EFFECT AS DROPCAPS CSS RULE RESTRICTS IT

            // check for no-dropcap-no-smallcaps frontmatter cssclass
            const frontmatterClasses = file.data.frontmatter?.cssclasses
            if (
              frontmatterClasses &&
              (
                frontmatterClasses.includes("no-dropcap-no-smallcaps") ||
                frontmatterClasses.includes("no-dropcap")
              )
            ) {
              return
            }

            let firstParagraphFound = false

            visit(tree, "element", (node) => {
              if (firstParagraphFound || node.tagName !== "p") return

              let firstLetter: string | null = null

              function extractFirstLetter(currentNode: any): boolean {
                if (!currentNode.children) return false

                for (let i = 0; i < currentNode.children.length; i++) {
                  const child = currentNode.children[i]

                  if (child.type === "text" && child.value.trim().length > 0) {
                    const cleanText = child.value.trimStart()
                    firstLetter = cleanText.charAt(0)

                    const leadingWhitespace = child.value.length - child.value.trimStart().length
                    const whitespace = child.value.substring(0, leadingWhitespace)
                    child.value = whitespace + cleanText.substring(1)

                    return true
                  }

                  if (child.type === "element") {
                    if (extractFirstLetter(child)) return true
                  }
                }
                return false
              }

              const success = extractFirstLetter(node)

              if (success && firstLetter) {
                const dropcapSpan = {
                  type: "element",
                  tagName: "span",
                  properties: {
                    className: ["dropcap"],
                    "data-first-letter": firstLetter
                  },
                  children: [{ type: "text", value: firstLetter }]
                }

                node.children.unshift(dropcapSpan as any)
                firstParagraphFound = true
              }
            })
          }
        }
      ]
    }
  }
}
