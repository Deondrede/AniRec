## How to 'talk' to the backend
For a specifics on how you can send requests to the backend, check the AniRec/anirec/src/components/landing_page/login.component.js file. But the main idea is that I've set up an endpoint for retrieving and sending user data. Once a POST request is received it runs a function that creates the entry in the database and the database is displayed in JSON format on the endpoint. Likewise, if you make a GET request then it will also be in JSON format. So let's say you want to signup, then you would send a POST request from React to Django and it will handle the creation of that user entry. 
## Setup
1. Clone the repository and download [Docker](https://www.docker.com/get-started) (You will also need to enable virtualization on your CPU, how to do this is specific to what kind of motherboard your PC uses and if it's even possible depends on what CPU you have)
2. Once Docker is installed open your terminal and change directories to where you cloned the repository
3. Once there, run the command `docker-compose up`, this will run the local web server along with the database and it should now appear in the desktop program. Now you should be able to access the local host by inputting [localhost:5000](http://localhost:5000) into your browser
## Why are we using Docker?
Because setting up a backend system can be pretty annoying involving configuring settings, creating and setting environment variables and having each one of us do that individually will eventually lead to someone messing something up. So essentially once you install it you shouldn't need to install all the other stuff needed for Django to run.So it's just to save time and future frustration.
