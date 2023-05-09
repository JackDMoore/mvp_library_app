# Library App Pseudocode  

This is the pseudocode for a library app that is allowing a new librarian to register and login to the app securely. This then leads on to the librarian being able to view the database of books on the app as well as a specific book, add a book, delete a book.

## START PAGE 
SET starting page to main page  
SHOW database of books  
IF user interacts with the app   
&nbsp; THEN prompt a register or login option  
&nbsp; IF user chooses register  
&nbsp; &nbsp; &nbsp; THEN send user to register page and ask for registration details  
&nbsp; ELSE   
&nbsp; &nbsp; &nbsp; THEN send user to login page and ask for login details  
&nbsp; &nbsp; &nbsp; IF user login details equal registration details  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; THEN allow further access to the website   
&nbsp; &nbsp; &nbsp; END IF   
&nbsp; &nbsp; &nbsp; ELSE  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; THEN reload login page with error message  
&nbsp; END IF  

## SEARCH BAR  
INPUT user searches a book  
IF book is in database  
&nbsp; THEN send book information to user  
ELSE   
&nbsp; THEN send error 404 for missing book  
END IF 

## POST/UPDATE/DELETE PAGE  
INITIALIZE functions after user login is successful  
IF user interacts with post  
&nbsp; THEN user is prompted to add information to the database about a new book  
ELSE IF user interacts with UPDATE  
&nbsp; THEN user is prompted to update an existing book in the database  
ELSE   
&nbsp; THEN the user is prompted to delete a book of their choice from the database  
END IF  
