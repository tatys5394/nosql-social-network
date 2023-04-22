# NOSQL SOCIAL NETWORK APP README

## Description

The purpose of this project is to create an application that allows the user to type down notes, save them, and delete them as needed. Creating this application introduced me to working with express.js and getting more comfortable with working with creating backend server code. I learned how to create and work with routes and how to export the contents of those files into other files to make all of the content show up on the browser when the user deploys the page. I was also introduced to Heroku and learning how to deploy pages using the application.

## Table of Contents

* [Acceptance Criteria](#criteria)
* [Usage](#usage)
* [Screenshot](#screenshot)
* [Links](#video)

## User Story

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list


## Installation
In order to get this application running I first had to run "node server" in your terminal in order to get the server running on port 3001. I also used use Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Usage

In order to use this application the user must run node server and once the server is running on port 3001 the user should open up insomnia. Once there the user can test out the routes by typing in "http://localhost:3001" and after that if they want to test out the api user routes they would put "/api/users/". By setting the method to Get and pressing send the user will be able to "Get" all of the users that have been added. If the user wants to create a user the would change the method to Post and insert into the body the userName and the email of the user they want to create using proper JSON syntax. If the users wants to try to test out the rest of the routes I welcome the user to take a look at the demo video that I provided in this README (link found below).

## Screenshots
![logo](./images/get%20all%20users.png)
![logo](./images/update%20users.png)
![logo](./images/get%20all%20thoughts.png)
![logo](./images/create%20thoughts.png)

## Links
VIDEO DEMO: https://drive.google.com/file/d/1OCz6mDICN5VsVvZ18miXFyXNARd_TzJp/view?usp=sharing

GitHub Link: https://github.com/tatys5394/nosql-social-network.git
