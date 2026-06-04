import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    // Component.MathBackground(),
    // Component.AsciiPlasmaBackground(),
    // Component.AccessibilityPanel()
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/rbstrachan",
      Contact: "/contact",
      Colophon: "/colophon",
      Acknowledgements: "/acknowledgements",
      Accessibility: "/accessibility",
      Legal: "/legal/"
    },
  }),
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

    // Component.BrailleScramble(),
    Component.BookingButton(),
    Component.SpoilerEffect()
  ],
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
        { Component: Component.ReaderMode() },
        { Component: Component.LanguagePicker() }
      ],
    }),
    Component.Explorer(),
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.SidebarBio()),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.DesktopOnly(Component.Spacer()),
    Component.DesktopOnly(Component.SidebarLinks())
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
        { Component: Component.LanguagePicker() }
      ],
    }),
    Component.Explorer(),
    Component.DesktopOnly(Component.Spacer()),
    Component.DesktopOnly(Component.SidebarLinks())
  ],
  right: []
}
