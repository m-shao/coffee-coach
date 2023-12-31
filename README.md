![image](https://github.com/m-shao/coffee-coach/assets/75395781/b1562c0c-f285-486d-80f0-a57494d91f3a)

## Inspiration
Due to the absence of in-person interactions during the COVID-19 pandemic, many students today struggle with controlling their expressions and body language while communicating with others face-to-face. Furthermore, there aren't many platforms that help hone these skills that are so crucial to expressing confidence and interest during conversations. This puts individuals who may be less socially adept at a loss on how to improve their communication skills. With Coffee Coach, we aim to help train people's non-verbal communication skills in order to help them achieve success!

## What it does
Coffee Coach helps ensure student success during coffee chats with industry professionals. To start off, the student can input information about who they're meeting as well as the length of the meeting. Our AI chatbot will suggest a potential schedule that the student can use to structure the coffee chat. Moreover, the Coffee Coach will provide a few sample questions the student can ask to ensure an informative and friendly experience.

During the coffee chat, the Coffee Coach will be analyzing the student's non-verbal communication skills—in particular, it will focus on facial expressions. Using sentiment analysis and machine learning, Coffee Coach will give feedback on the facial expressions of the student during the coffee chat. For example, if the student was showing an unfriendly or irritated expression, Coffee Coach would send the student a message to remind them to have an excited and engaging expression. 

## How we built it
Coffee Coach was built with Auth0 to implement an authentication system, as well as React and Javascript to create the interface, which constitutes what the user interacts with. We used a pre-trained model in combination with the face API to provide real-time sentiment analysis. The GPT API and Javascript to take input from the sentiment analysis, as well as the initial landing page to generate prompts throughout the coffee chat. 

## Microsoft Cloud
Originally, we wanted to use the Content Moderation and Speech-to-Text APIs from Microsoft Cloud in order to ensure that the student is speaking respectfully and formally to the professional. However, due to some complications with the sponsors we weren't able to access the APIs. We still put a rough implementation of what we would have liked to implement in our Github repository!

## Challenges we ran into
All of our team members are familiar with React, but we didn't know face API very well and implementing it with React proved extremely difficult. However, with enough willpower and extensive dives into different documentation, we were able to figure out a solution. We're so proud that we were able to power through!

We also fell into multiple slumps where we were seriously doubting the usefulness and feasibility of our project. We relied on each other to remind ourselves of our passion towards this project especially when we faced mountains of daunting errors. In the end, we were able to resolve the issues and realize our initial idea!

## Accomplishments that we're proud of
This project was the first time most of us experimented with computer vision, and it was definitely a learning curve. We're proud that we were able to figure it out in such a short amount 

## What we learned
This project was the first time most of us experimented with computer vision, and it was definitely a learning curve. 

## What's next for Coffee Coach
We're looking forward to adding body language feedback as well, like posture checks or fidget control. Also, we didn't have the time to implement an actual call feature on the website, and we would love to add that as soon as possible.
