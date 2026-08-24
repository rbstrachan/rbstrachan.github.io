import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function SidebarLinks({ fileData, displayClass, cfg }: QuartzComponentProps) {
  const isFrench = cfg?.locale?.startsWith("fr") ?? false
  const prefix = isFrench ? "/fr" : ""

  return (
    <div class={`sidebar-links ${displayClass ?? ""}`}>
      {fileData?.slug && fileData.slug !== "index" && (
        <a href={`${prefix}/`}>{isFrench ? "À propos" : "About Me"}</a>
      )}
      <span>
        <a href={`${prefix}/cv`}>CV</a>
        <small><b> ・ </b></small>
        <a href={`${prefix}/qr`}>QR</a>
      </span>
      <span>
        <a href={`${prefix}/tutoring/lessons`}>
          {isFrench ? "Cours de langues" : "Language Tutoring"}
        </a>
        {/* <small><b> ・ </b></small>
        <a href={`${prefix}/tutoring/audit`}>
          {isFrench ? "Bilan" : "Audit"}
        </a> */}
      </span>
      <a href={`${prefix}/guestbook`}>
        {isFrench ? "Livre d'or" : "Guestbook"}
      </a>
    </div>
  )
}

export default (() => SidebarLinks) satisfies QuartzComponentConstructor
