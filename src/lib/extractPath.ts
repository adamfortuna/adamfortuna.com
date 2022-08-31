export const extractPath = (url: string) => {
  if (!url || url.length === 0) {
    return null
  }

  try {
    return new URL(url).hostname
  } catch (e) {
    return null
  }
}
