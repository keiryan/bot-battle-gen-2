// async callToApi() {
//     const start = performance.now(); // Start timing before request
//     const apiKey = localStorage.getItem("ChatGPTAPIKey");
//     try {
//       const response = await fetch(
//         "https://api.openai.com/v1/chat/completions",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${apiKey}`,
//           },
//           body: JSON.stringify({
//             model: this.currentModel,
//             messages: [
//               ...this.messages.map((message) => ({
//                 role: message.sender === "user" ? "user" : "assistant",
//                 content: message.message,
//               })),
//             ],
//           }),
//         }
//       );
//       const data = await response.json();
//       const end = performance.now(); // End timing after response

//     } catch (error) {
//       console.error(error);
//     }
//   },