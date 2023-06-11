import React, { useState } from "react";

import { Chat, ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate } from "langchain";

const chat = new Chat("<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>");

const entrepreneurPromptTemplate = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate("You are a social skill assistant that helps an entrepreneur perfect their pitch based on interviewer's reactions."),
    HumanMessagePromptTemplate.fromTemplate("The interviewer said: {interviewer_reaction}\nThe entrepreneur said: {entrepreneur_pitch}")
  ]);

async function generateEntrepreneurResponse(interviewerReaction, entrepreneurPitch) {
    const formattedPrompt = await entrepreneurPromptTemplate.formatPromptValue({
        interviewer_reaction: interviewerReaction,
        entrepreneur_pitch: entrepreneurPitch
    });
  
const response = await chat.generatePrompt([formattedPrompt]);
    return response.generations[0][0].text;
  }

  async function main() {
    const interviewerReaction = "I'm not sure I understand the value of your product.";
    const entrepreneurPitch = "Our app utilizes AI to help users develop their social skills by providing real-time feedback.";
    const suggestedResponse = await generateEntrepreneurResponse(interviewerReaction, entrepreneurPitch);
    console.log(suggestedResponse);
  }
  
main();

const ChatUI = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
  
    const generateEntrepreneurResponse = async (interviewerReaction, entrepreneurPitch) => {
      const formattedPrompt = await entrepreneurPromptTemplate.formatPromptValue({
        interviewer_reaction: interviewerReaction,
        entrepreneur_pitch: entrepreneurPitch
      });
  
      const response = await chat.generatePrompt([formattedPrompt]);
      return response.generations[0][0].text;
    };
  
    const handleSendMessage = async (e) => {
      e.preventDefault();
  
      // Simulate the interviewer's reaction (this can be replaced with more dynamic inputs)
      const interviewerReaction = "I'm not sure I understand the value of your product.";
  
      const suggestedResponse = await generateEntrepreneurResponse(interviewerReaction, inputValue);
  
      setMessages([...messages, { text: inputValue, isUser: true }, { text: suggestedResponse, isUser: false }]);
      setInputValue("");
    };

  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex-grow overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`rounded p-2 mb-2 text-white ${
              message.isUser
                ? "bg-indigo-600 ml-auto mr-4"
                : "bg-gray-600 ml-4 mr-auto"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="flex space-x-4">
        <input
          className="flex-grow rounded p-2"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message here"
        />
        <button
          className="bg-indigo-600 p-2 rounded text-white"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatUI;