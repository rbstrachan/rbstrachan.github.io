import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [Component.MathBackground()],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/rbstrachan",
      Contact: "mailto:ross@reiwa.ca",
      Colophon: "/colophon",
      Acknowledgements: "/acknowledgements"
    },
  }),
}

import { h } from "preact" // Add this import at the very top

// function ProfilePicture() {
//   return h("div", {
//     style: "display: flex; width: 100%;"
//   }, [
//     h("img", {
//       src: "/static/me.jpg",
//       class: "sidebar-profile-img",
//       alt: "Me"
//     })
//   ])
// }

function Bio() {
  return h("div", {}, [
    h("hr", {
      style: "margin: 0 0 28px 0; border: none; border-top: 1px solid var(--lightgray);"
    }),
    h("div", { style: "margin-bottom: 5px" }, ["he/him"]),
    h("div", {}, ["🇬🇧 🇫🇷"])
  ])
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    // Component.ConditionalRender({
    //   component: ProfilePicture,
    //   condition: (page) => page.fileData.slug === "index",
    // }),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
    Component.ConditionalRender({
      component: Bio,
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.DesktopOnly(Component.Spacer()), // DesktopOnly?
    Component.DesktopOnly(Component.SidebarLinks()) // DesktopOnly?
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
