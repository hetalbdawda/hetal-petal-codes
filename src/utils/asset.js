// Resolve a public asset path against Vite's base URL so it works both
// locally ("/media/...") and under the GitHub Pages subpath
// ("/hetal-petal-codes/media/..."). Store paths with a leading slash.
export function asset(path) {
  return import.meta.env.BASE_URL + String(path).replace(/^\//, '')
}
