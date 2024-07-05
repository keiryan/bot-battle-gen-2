export default function getImageUrl(path) {
  const newURL = new URL(`../assets/images/${path}`, import.meta.url).href;
  return newURL;
}
