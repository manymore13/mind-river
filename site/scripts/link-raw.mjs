import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const siteDir = path.resolve(__dirname, '..')
export const siteRawDir = path.join(siteDir, 'raw')
export const rootRawDir = path.resolve(siteDir, '..', 'raw')

export function forceRemove(dir) {
  if (!fs.existsSync(dir)) return true

  try {
    const stat = fs.lstatSync(dir)

    if (stat.isSymbolicLink() || stat.isSocket()) {
      fs.unlinkSync(dir)
      return true
    }

    if (stat.isDirectory()) {
      fs.rmSync(dir, { recursive: true, force: true })
      return true
    }

    // It's a file
    fs.unlinkSync(dir)
    return true
  } catch (err) {
    console.error('Failed to remove:', dir, err.message)
    return false
  }
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true })
  const entries = fs.readdirSync(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

export function syncRaw() {
  if (!forceRemove(siteRawDir)) return false

  if (!fs.existsSync(rootRawDir)) {
    fs.mkdirSync(siteRawDir, { recursive: true })
    return true
  }

  copyDir(rootRawDir, siteRawDir)
  console.log('[sync-raw] Synced raw directory')
  return true
}

// Run as standalone script
if (process.argv[1]?.endsWith('link-raw.mjs')) {
  console.log('Syncing raw directory...')
  if (syncRaw()) {
    console.log('SUCCESS')
  } else {
    console.error('ERROR: Cannot remove existing site/raw')
    process.exit(1)
  }
}
