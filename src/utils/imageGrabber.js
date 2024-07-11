export default function getImageUrl(path) {
  if (!path) {
    throw new Error("Path is required");
  } else {
    const assistantLegend = {
      chatgpt: "chatgpt.png",
      gemini: "gemini.svg",
    };
    const newURL = new URL(
      `../assets/images/${assistantLegend[path]}`,
      import.meta.url
    ).href;
    return newURL;
  }
}
