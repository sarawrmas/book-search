# Book Search Engine

To fulfill the Challenge, you’ll need to do the following:

1. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

2. Modify the existing authentication middleware so that it works in the context of a GraphQL API.

3. Create an Apollo Provider so that requests can communicate with an Apollo Server.

4. Deploy the application to Heroku.

## Acceptance Criteria
WHEN I load the search engine  
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button

WHEN I click on the Search for Books menu option  
THEN I am presented with an input field to search for books and a submit button

WHEN I am not logged in and enter a search term in the input field and click the submit button  
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site

WHEN I click on the Login/Signup menu option  
THEN a modal appears on the screen with a toggle between the option to log in or sign up

WHEN the toggle is set to Signup  
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button

WHEN the toggle is set to Login  
THEN I am presented with two inputs for an email address and a password and login button

WHEN I enter a valid email address and create a password and click on the signup button  
THEN my user account is created and I am logged in to the site

WHEN I enter my account’s email address and password and click on the login button  
THEN I the modal closes and I am logged in to the site

WHEN I am logged in to the site  
THEN the menu options change to Search for Books, an option to see my saved books, and Logout

WHEN I am logged in and enter a search term in the input field and click the submit button  
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account

WHEN I click on the Save button on a book  
THEN that book’s information is saved to my account

WHEN I click on the option to see my saved books  
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account

WHEN I click on the Remove button on a book  
THEN that book is deleted from my saved books list

WHEN I click on the Logout button  
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button

## Front-End Specifications
<!-- * queries.js: This will hold the query GET_ME, which will execute the me query set up using Apollo Server. -->

<!-- * mutations.js:
  * LOGIN_USER will execute the loginUser mutation set up using Apollo Server.
  * ADD_USER will execute the addUser mutation.
  * SAVE_BOOK will execute the saveBook mutation.
  * REMOVE_BOOK will execute the removeBook mutation. -->

<!-- * App.js: Create an Apollo Provider to make every request work with the Apollo server. -->

<!-- * SearchBooks.js:
  * Use the Apollo useMutation() Hook to execute the SAVE_BOOK mutation in the handleSaveBook() function instead of the saveBook() function imported from the API file.
  * Make sure you keep the logic for saving the book's ID to state in the try...catch block! -->

* SavedBooks.js:
  * Remove the useEffect() Hook that sets the state for UserData.
  * Instead, use the useQuery() Hook to execute the GET_ME query on load and save it to a variable named userData.
  * Use the useMutation() Hook to execute the REMOVE_BOOK mutation in the handleDeleteBook() function instead of the deleteBook() function that's imported from API file. (Make sure you keep the removeBookId() function in place!)

* SignupForm.js: Replace the addUser() functionality imported from the API file with the ADD_USER mutation functionality.

* LoginForm.js: Replace the loginUser() functionality imported from the API file with the LOGIN_USER mutation functionality.