# Polling Agent API

## Abstract

This project is designed as backend API for the polling system. In this user can post question, user can add options to question, any user can give vote to the options. Any user can delete the option or question.
Detailed features are explained in following sections.

## Features

Using this API any users can:

1. Add question
2. Add option to any question
3. Add Vote to options of any question
4. Can delete the question: But there are some conditions
     - If any option for the particular question has atleast one vote then question cannot be deleted.
5. Can delete the option to the question:
     - If any option has atleast one vote then it cannot be deleted.
6. Get the questions with all options
7. Get the all questions

All the required routes are mentioned in Git hub repository particular file.

## Technology Used:

1. NodeJs
2. MongoDB
3. Mongoose
4. Express JS
