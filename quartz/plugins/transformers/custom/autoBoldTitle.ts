import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import type { Text, Root, PhrasingContent } from "mdast"

export const AutoBoldTitle: QuartzTransformerPlugin = () => {
  return {
    name: "AutoBoldTitle",
    markdownPlugins() {
      return [
        () => {
          return (tree: Root, file) => {
            const title = file.data.frontmatter?.title || file.data.slug
            if (!title) return

            const escapedTitle = title.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            const regex = new RegExp(`\\b(${escapedTitle})\\b`, "gi")

            visit(tree, "text", (node: Text, index, parent) => {
              if (!parent || parent.type === "link" || parent.type === "code") return
              if (typeof index !== "number") return

              const value = node.value
              if (!regex.test(value)) return

              regex.lastIndex = 0

              const children: PhrasingContent[] = []
              let lastIndex = 0
              let match

              while ((match = regex.exec(value)) !== null) {
                if (match.index > lastIndex) {
                  children.push({
                    type: "text",
                    value: value.slice(lastIndex, match.index),
                  })
                }

                children.push({
                  type: "strong",
                  children: [{ type: "text", value: match[1] }],
                })

                lastIndex = regex.lastIndex
              }

              if (lastIndex < value.length) {
                children.push({
                  type: "text",
                  value: value.slice(lastIndex),
                })
              }

              parent.children.splice(index, 1, ...children)

              return index + children.length
            })
          }
        },
      ]
    },
  }
}
