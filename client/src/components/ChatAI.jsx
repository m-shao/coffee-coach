import { useState } from "react";
import "./style.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = "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";

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
      "You are a coffee chat coach that gives advice to the user (university-age entrepreneur who may lack social cues). Your job is to analyze the user's face when speaking to the investor and give the user advice on what they should do next. For example, 'fix your posture' when the user is slouching, or 'smile more' when the user is frowning. Don't reply in paragraphs.",
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
    <div className="App h-max">
        <MainContainer>
          <ChatContainer>
            <MessageList
              typingIndicator={
                typing ? (
                  <TypingIndicator content="Assistant is typing" />
                ) : null
              }
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput
              placeholder="Type message here.."
              onSend={handleSend}
            />
          </ChatContainer>
        </MainContainer>
        </div>
  );
}

export default ChatAI;
