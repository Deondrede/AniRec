## Setup
1. Clone the repository and download [Docker](https://www.docker.com/get-started) (You will also need to enable virtualization on your CPU, how to do this is specific to what kind of motherboard your PC uses and if it's even possible depends on what CPU you have)
2. Once Docker is installed open your terminal and change directories to where you cloned the repository
3. Once there, run the command `docker-compose up`, this will run the local web server along with the database and it should now appear in the desktop program. Now you should be able to access the local host by inputting [127.0.0.1:5000](http://127.0.0.1:5000) into your browser
## Why are we using Docker?
Because setting up a backend system can be pretty annoying involving configuring settings, creating and setting environment variables and having each one of us do that individually will eventually lead to someone messing something up. So it's just to save time and future frustration.
