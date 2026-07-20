import { FilePath, joinSegments } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import fs from "fs"

export const WellKnown: QuartzEmitterPlugin = () => ({
  name: "WellKnown",
  async *emit({ argv }) {
    const srcDir = joinSegments(argv.directory, ".well-known")
    const destDir = joinSegments(argv.output, ".well-known")

    if (fs.existsSync(srcDir)) {
      await fs.promises.cp(srcDir, destDir, { recursive: true })
      yield destDir as FilePath
    }
  },
  async *partialEmit() {},
})
