# Polling Agent API

## Abstract

This project is designed as backend API for the polling system. In this user can post question, user can add options to question, any user can give vote to the options. Any user can delete the option or question.
Detailed features are explained in following sections.

The Application is Hosted on: http://ec2-13-53-168-150.eu-north-1.compute.amazonaws.com:3000 (To get the required details add the routes mentioned in below API Routes section).
(Note: This AWS instance will be terminated once I start new project.)

## Features

Using this API any users can:

1. Add question
2. Add option to any question
3. Add Vote to options of any question
4. Can delete the question: But there are some conditions
     - If any option for the particular question has atleast one vote then the question cannot be deleted.
5. Can delete the option to the question:
     - If any option has at least one vote then it cannot be deleted.
6. Get the questions with all options
7. Get all the questions

All the required routes are mentioned in Git hub repository particular file.

## Technology Used:

1. NodeJs
2. MongoDB
3. Mongoose
4. Express JS

## API Routes
http://ec2-13-53-168-150.eu-north-1.compute.amazonaws.com:3000
- /api/questions  (To View All questions)
- /api/questions/create (To create a question)
- /api/questions/:id/options/create (To add options to a specific question)
- /api/questions/:id/delete (To delete a question)
- /api/options/:id/delete (To delete an option)
- /api/options/:id/add_vote (To increment the count of votes)
- /api/questions/:id (To view a question and it’s options)

## Setup

- Run **npm i** to install all the modules.
- Run server.js to start the application.

