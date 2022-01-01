import {promises as fs} from "fs"
import path from "path"

export const generateTitle = (slug: string) => {
    return slug?.split("-").map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(" ")
}

export const getAllValidPaths = async (relativePathFromMDXSrcDir: string) => {
    const requestedDir = path.join(process.cwd(), "src/mdx", relativePathFromMDXSrcDir)
    const allFilesAndDirs = await fs.readdir(requestedDir)
    return Promise.all(allFilesAndDirs.map(async item => {
            if (item.includes(".mdx")) {
                if (item === "index.mdx")
                    return "/"
                return item.replace(".mdx", "")
            }
        }).filter(item => !!item)
    )
}

export const readMDXFileContent = async (relativePathFromMDXSrcDir: string, slug: string) => {
    const resourcePath = path.join(process.cwd(), "src/mdx", relativePathFromMDXSrcDir, slug + ".mdx")
    return await fs.readFile(resourcePath, "utf8")
}
