import { QuartzTransformerPlugin } from "../types"
import { Root } from "hast"
import { visit, SKIP } from "unist-util-visit"

export const SmallCaps: QuartzTransformerPlugin = () => {
  return {
    name: "SmallCaps",
    htmlPlugins() {
      return [
        () => {
          return (tree: Root) => {
            visit(tree, "text", (node, index, parent) => {
              if (!parent || index === undefined || typeof node.value !== "string") return

              if (parent.type === "element") {
                const ignoredTags = ["script", "style", "code", "pre"]
                if (ignoredTags.includes(parent.tagName)) {
                  return SKIP
                }

                if ((parent.properties?.className as string[])?.includes("small-caps")) {
                  return SKIP
                }
              }

              const upperCaseRegex = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]{3,}/g

              const text = node.value
              let match
              const newChildren: any[] = []
              let lastIndex = 0

              while ((match = upperCaseRegex.exec(text)) !== null) {
                const matchIndex = match.index
                const matchedText = match[0]

                if (matchIndex > lastIndex) {
                  newChildren.push({
                    type: "text",
                    value: text.substring(lastIndex, matchIndex)
                  })
                }

                newChildren.push({
                  type: "element",
                  tagName: "span",
                  properties: { className: ["small-caps"] },
                  children: [{ type: "text", value: matchedText }]
                })

                lastIndex = upperCaseRegex.lastIndex
              }

              if (lastIndex < text.length) {
                newChildren.push({
                  type: "text",
                  value: text.substring(lastIndex)
                })
              }

              if (newChildren.length > 0) {
                parent.children.splice(index, 1, ...newChildren)

                return [SKIP, index + newChildren.length]
              }
            })
          }
        }
      ]
    }
  }
}
