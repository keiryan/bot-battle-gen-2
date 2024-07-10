export default async function getAssistantResponse(chatParams) {
  const { messages, currentModel, token } = chatParams;
  const start = performance.now(); // Start timing before request
  // const apiKey = localStorage.getItem();
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        model: currentModel,
        messages: [
          ...messages.map((message) => ({
            role: message.sender === "user" ? "user" : "assistant",
            content: message.message,
          })),
        ],
      }),
    });

    console.log(response);
    const data = await response.json();
    const end = performance.now(); // End timing after response
    const timeTaken = ((end - start) / 1000).toFixed(2);

    return {
      message: data,
      timeTaken,
    };
  } catch (error) {
    console.error(error);
  }
}
