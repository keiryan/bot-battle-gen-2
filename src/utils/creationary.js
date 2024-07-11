import createNewChatGPTChat from "../utils/newChatGPTChat";

export default function creationary(chatParams) {
  console.log("creationary params", chatParams);

  if (!chatParams) {
    return createNewChatGPTChat();
  } else if (chatParams.chatType === "chatgpt") {
    return createNewChatGPTChat(chatParams);
  }
}
