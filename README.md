## How to 'talk' to the backend
For specifics on how you can send requests to the backend, check the [login.component.js file](https://github.com/Deondrede/AniRec/blob/Backend/anirec/src/components/landing_page/login.component.js). But the main idea is that I've set up an endpoint for retrieving and sending user data. Once a POST request is received it runs a function that creates the entry in the database and the database is displayed in JSON format on the endpoint. Likewise, if you make a GET request then it will also be in JSON format. So let's say you want to signup, then you would send a POST request from React to Django and it will handle the creation of that user entry, you would do the same thing if let's say you wanted to save a user's preferred genres and anime they've already watched. If you want to update user's username and password make a POST request to [localhost:5000/users](http://localhost:5000/users), both username and password should be sent simultaneously. If you want to update a user's preferred genres make a POST request to [localhost:5000/genres](http://localhost:5000/genres), you must send the user's username along with what genre you want to add. If you want to update a user's watched anime make a POST request to [localhost:5000/anime](http://localhost:5000/anime), once again you must send their username and what anime you want to add.
## Setup
1. Clone the repository and download [Docker](https://www.docker.com/get-started) (You will also need to enable virtualization on your CPU, how to do this is specific to what kind of motherboard your PC uses and if it's even possible depends on what CPU you have)
2. Once Docker is installed open your terminal and change directories to where you cloned the repository
3. Once there, run the command `docker-compose up`, this will run the local web server along with the database and it should now appear in the desktop program. Now you should be able to access the local host by inputting [localhost:5000](http://localhost:5000) into your browser
4. You may see an error that states that your missing a module named 'corsheaders'. In a separate terminal, run the command `docker exec -it <TheNameOfTheContainer>_web_1 bash`.
5. Once that's done run `pip install django-cors-headers`, to double check that the module is installed
6. While you're in there run the command `python manage.py makemigrations` just in case, it should say "no changes detected"
7. Next, run the command `python manage.py migrate` 
8. Go back to the original terminal you had open and use Ctrl-C to stop it and then run the `docker-compose up` command again and that error should be gone.
## Why are we using Docker?
Because setting up a backend system can be pretty annoying involving configuring settings, creating and setting environment variables and having each one of us do that individually will eventually lead to someone messing something up. So essentially once you install it you shouldn't need to install all the other stuff needed for Django to run.So it's just to save time and future frustration.
## List of endpoints and how requests should be sent
All POST requests must also be sent with a username. On login, the user's username is stored in local storage you can find this out by using `window.localStorage.getItem("username")`
### /users
```javascript
    let bodyFormData = new FormData();
    bodyFormData.append("username", username); //usernames must be sent as "username"
    bodyFormData.append("password", password); //passwords must be sent as "password"
    axios({
        method: "post",
        url: "http://localhost:5000/users",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
```
### /anime
```javascript
    let bodyFormData = new FormData();
    bodyFormData.append("username", username);
    bodyFormData.append("anime", user_anime); //must be sent as "anime"
    axios({
        method: "post",
        url: "http://localhost:5000/anime",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
```
### /genre
```javascript
    let bodyFormData = new FormData();
    bodyFormData.append("username", username);
    bodyFormData.append("genre", user_genre); //must be sent as "genre"
    axios({
        method: "post",
        url: "http://localhost:5000/genre",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
```
