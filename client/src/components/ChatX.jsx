import React, { useState } from "react";
import { ChatOpenAI } from "langchain/chat_models/openai";

const model = new ChatOpenAI({ openAIApiKey: "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", temperature: 0.9 });

const ChatUI = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const generateEntrepreneurResponse = async (interviewerReaction, entrepreneurPitch) => {
        const prompt = `You are a social skill assistant that helps an entrepreneur perfect their pitch based on interviewer's reactions.
    The interviewer said: ${interviewerReaction}
    The entrepreneur said: ${entrepreneurPitch}
    Response:`;

        const result = await model.call([
          {
            role: "system",
            content: prompt
          },
          {
            role: "user",
            content: entrepreneurPitch
          }
        ]);

        return result.generations[0][0].text.trim();
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