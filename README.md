# Florin County Council Library 

## Description
Library app that is allowing a new librarian to register and login to the app securely. This then leads on to the librarian being able to view the database of books on the app as well as a specific book, add a book, delete a book.   
 
## Installation and usage 
1. First step is to clone the repository from Github using this [link](https://github.com/JackDMoore/mvp_library_app).
2. Create your own `.env` file in the api direcory and add `PORT=3000` and add `DB_URL=(creare and add your own database from ElephantSQL here)”`
3. Run the command `cd mvp_library_app` to go into the project directory.
4. Open Visual Studio Code using `code .` then go into the api folder using the command `cd api`.
5. Run `npm install -D` or `npm i -D` in the terminal.
6. Run `npm run setup-db` to create the database tables.
7. Run `npm run dev` to start the server.
8. In a web browser go to this [link](http://localhost:3000/) to view the working server.

## Preview
![Preivew](/Screenshot.png?raw=true "Optional Title")
## Technologies
JavaScript, HTML, CSS, Node, Git, Github, Express API, CORS, SQL, ElephantSQL, Render

## Process
### Front End:  
- User interface: The website should have a user-friendly interface that displays the books database and features for accessing different parts of the website.   
- Books: THe website has the database connected to the frontend to show off the books that it has and that they can always be edited when logged in.  
- Information: At the bottom of the website there is information that is important for a website and even more so for a library app.  
- Buttons for navigation: There are lots of buttons used to enhance the functions of the website and get the whole thing working appropriately.   
- Deployment: The frontend has been deployed using Render.  
### Back End: 
- Database: The website has a database that uses SQL to hae 3 tables for books, user_account and token so that the main database and the one for security are being used.  
- Server: The server contains all the important code for the functionality of the frontend like get, post, destroy methods.   
- API: The website has an API that connects the front-end with the back-end so that they can communicate with each other.  
- Authentication and Authorization: The website has a register and login page where you have to create a username and password to be able to add/edit/delete books.  
- Deployment: The backend has been deployed using Render.  

## Bugs
- Search Bar function

## Future Features 
- Bootstrap to help with design and features  
- User can rate books and write comments/ reviews  
- Local information and events happening in the community page  
- Log in for users of the library and the workers of the library. Different access.  
- User can see a recommended book section  
- Select and collect feature  
- Users should be able to filter books by  categories  
- Images for each book  

## Licence
- MIT LICENCE  
