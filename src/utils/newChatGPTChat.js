export default function createNewChatGPTChat(chatParams) {
  const defaultChat = {
    id: Math.random(),
    messages: [],
    title: "New Chat",
    assistant: {
      name: "ChatGPT",
      avatar: "https://randomuser.me/api/portraits",
    },
    creationDate: Date.now(),
    model: chatParams?.model ?? "gpt-3.5-turbo",
    chatType: "chatgpt",
  };

  return defaultChat;
}
