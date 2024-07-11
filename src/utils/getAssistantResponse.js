export default async function getAssistantResponse(chatParams) {
  console.log("getAssistantResponse params", chatParams);
  const { messages, currentModel, chatType } = chatParams;
  const chatTokenLegend = {
    chatgpt: "ChatGPTAPIKey",
    gemini: "gemini",
  };

  const start = performance.now();
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(
          chatTokenLegend[chatType]
        )}`,
      },
      body: JSON.stringify({
        model: currentModel,
        messages: [
          ...messages.map((message) => ({
            role: message.sender === "user" ? "user" : "assistant",
            content: message.content,
          })),
        ],
      }),
    });

    console.log(response);
    const data = await response.json();
    const end = performance.now(); // End timing after response
    const timeTaken = ((end - start) / 1000).toFixed(2);

    return {
      message: data.choices[0].message.content,
      timeTaken,
    };
  } catch (error) {
    console.error(error);
  }
}
