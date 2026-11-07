// Shared site constants for the welcome and goodbye pages.
export const SITE_URL = "https://debugclip.online";
// NEXT_PUBLIC_API_BASE exists only to point a local build at `wrangler dev`.
// Leave it unset in Vercel: the production CSP only allows the default origin.
export const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://debugclip-api.debugclip.workers.dev";
export const SUPPORT_EMAIL = "support@debugclip.online";
export const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/mkkbdlmfhnogenmnffaanalbbbbmcfoe";
export const EDGE_STORE_URL = "https://microsoftedge.microsoft.com/addons/detail/facbdiihlbpfebhmbeipmjgigahmfkao";
