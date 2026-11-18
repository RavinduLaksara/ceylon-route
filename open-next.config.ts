import { defineCloudflareConfig } from "@opennextjs/cloudflare";

/**
 * OpenNext → Cloudflare Workers config.
 *
 * Minimal setup for the free tier. The app renders fine without a persistent
 * incremental cache; to make `use cache` / ISR survive across requests later,
 * add an R2-backed cache here, e.g.:
 *
 *   import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";
 *   export default defineCloudflareConfig({ incrementalCache: r2IncrementalCache });
 *
 * (and bind an R2 bucket named NEXT_INC_CACHE_R2_BUCKET in wrangler.jsonc).
 */
export default defineCloudflareConfig();
