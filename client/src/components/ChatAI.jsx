import { useState } from "react";
import { API_KEY } from "./key.js";

function ChatAI() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message:
        "Hey there! I'm your coffee coach. I'll be giving you advice on how to improve your social cues when speaking to the investor.",
      sender: "ChatGPT",
      direction: "incoming",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");


  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
      icon: {
        type: "image",
        value: "https://example.com/image.png",
      },
    };

    const newMessages = [...messages, newMessage];

    // update messages state
    setMessages(newMessages);

    // set typing indicator
    setTyping(true);

    // process message to chatgpt
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    // chatMessages {sender: "user" or "ChatGPT", message: "The message content here"}
    // apiMessages {role: "user" or "assistant", content: "The message content here"}

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    // role: "user"
    // role: "assistant"
    // role: "system"

    const systemMessage = {
      role: "system",
      content:
      "You are a coffee chat coach that gives advice to the user (university-age entrepreneur who may lack social cues). Your job is to analyze the user's face and emotions (THE FIRST RESPONSE WILL BE ABOUT HOW THE USER IS SURPRISED) when speaking to the investor and give the user advice on what they should do next. For example, 'fix your posture' when the user is slouching, or 'smile more' when the user is frowning. Don't reply in paragraphs.",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.choices[0].message.content);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setTyping(false);
      });
  }

  return (
<div className="flex flex-col h-full bg-neutral p-6">
  <div className="flex flex-col overflow-y-auto mb-4 flex-grow justify-end">
    {messages.map((message, i) => (
      <div
        key={i}
        className={`flex ${
          message.direction === "incoming" ? "flex-row-reverse" : ""
        } items-end mb-4`}
      >
        <div
          className={`p-2 rounded-lg ${
            message.direction === "incoming"
              ? "bg-green-200 text-green-800"
              : "bg-blue-200 text-blue-800"
          }`}
        >
          {message.message}
        </div>
      </div>
    ))}

        {typing && (
          <div className="self-center mb-4 font-white">
            <span className="text-gray-600">Assistant is typing...</span>
          </div>
        )}
      </div>
      <div className="mt-6">
        <input
          type="text"
          className="w-full rounded-lg border p-2 bg-neutral-600"
          placeholder="Type message here..."
          value={inputMessage}
          onChange={(event) => setInputMessage(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSend(inputMessage);
              setInputMessage("");
            }
          }}
        />
      </div>
    </div>
  );
}

export default ChatAI;