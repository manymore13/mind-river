import { syncRaw, rootRawDir } from './link-raw.mjs'

let watcher = null

async function startWatching(server) {
  let chokidar

  try {
    const mod = await import('chokidar')
    chokidar = mod.default || mod
  } catch {
    // Fallback: poll every 3 seconds if chokidar not available
    setInterval(syncRaw, 3000)
    console.log('[sync-raw] Polling mode (chokidar not available)')
    return
  }

  watcher = chokidar.watch(rootRawDir, {
    ignoreInitial: true,
    persistent: true,
  }).on('all', () => {
    console.log('[sync-raw] Detected change in raw/, syncing...')
    syncRaw()
  })

  server.httpServer?.on('close', () => {
    if (watcher) {
      watcher.close()
      watcher = null
    }
  })
}

export default function syncRawPlugin() {
  return {
    name: 'vitepress-plugin-sync-raw',

    configureServer(server) {
      // Sync on server start
      syncRaw()

      // Start async watcher (don't block server startup)
      startWatching(server)
    },

    buildStart() {
      syncRaw()
    },
  }
}
