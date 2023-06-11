import React from 'react';  
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