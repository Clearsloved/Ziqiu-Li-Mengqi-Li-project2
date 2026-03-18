# Sudoku

JavaScript, React and State Management

# Overview

As we continue our web development journey we will expand upon project 1 to create a single player-version of the popular board game Sudoku.  A (very impressive) online implementation can be found [here](https://www.websudoku.com/?select=1&level=1) and I’ll describe more fully below.  (Please keep in mind that my expectations for your project will be much simpler than what is linked there.)  When users enter your app, they should see a welcome page that contains nothing but the title of the game as well as ways to see the “rules and play the game page. 

The rules of Sudoku are simple: every column, row and sub-graph can only contain the numbers 1-X (where X is the height/width of the game board) exactly once.  You will create 2 versions of this game: an easy and normal mode.

For this project, you may work with two other students.

You are also welcome to use any JavaScript or CSS library for this project, but you must at least use the libraries taught in this course (react, react-router, etc.)

# Rubric

Core Functionality \- 25pts  
Working Github and Render Link \- 25pts  
Correct Views and Good Styling \- 10pts  
Well Written Code \- 10pts  
Stores, Actions and Reducers \- 10pts  
Demonstrating Proper React Principles \- 10pts  
Writeup \- 10pts  
Bonus Points \- 8pts

# Core Functionality

Sudoku is a number based on a grid.  The grid is made up of an equal number of rows and columns (X), with a number of sub grids equal to the number of rows/columns.  For this project we will have 2 versions of Sudokul: an easy mode, that is a 6X6 grid and a normal mode, a 9X9 grid.  The easy mode will also start with half the board filled out and the normal mode should have 28-30 cells filled out.

Each cell filled out at the start should NOT be editable, but every other square should be, even if the user has input an value (ie, values should be able to be changed later.)  If a user puts in a value that violates the legal placement rules, the cell should be highlighted with red.  Users should only be able to input a valid range of values in each square (ie 1-9 or 1-6), and all other values should be ignored.  Values should be able to be deleted.  

At the bottom of the page, there should be a “New Game” button that will create a new puzzle, and a “Reset” button that will revert the puzzle back to its original state.  Finally, there should be a timer at the top of the page.

Once all the squares are validly complete, the board should lock (ie, no more valid input) and a congratulations message should be displayed somewhere on the page.

# Working Github and Server Link

For this assignment, I recommend you use Render to host your code, but you are welcome to use any web hosting service you are comfortable with.  Please follow the instructions from the lectures or contact any of the teaching staff to get this set up if you need help.  Please be sure to add the TA’s as collaborators.

# Correct Views and Good Styling

The format of the website will be identical to project one, but many of the pages will continue to be mocked and not contain ANY functionality \[those page will have an underscore\].  Please also note the expected URLs: 

* **Home Page**  (/) \- There should be a home page that includes the title of the game (you can change it from Sudoku if you wish) and any other art of your choosing.  
* **Selection Page** (/games) \- There should be a game selection page.  You will create a list of game names along with the author’s name. Clicking on any of the titles will lead you to the Game Easy or Normal page.  This page will only include mocked, hardcoded data at this time.  
* **Normal Game Page** (/games/normal) \- this should be the normal game page.  Every time a user comes to this page, a normal game of Sudoku will be randomly generated (see Core Functionality)  
* **Easy Game Page** (/games/easy) \- this should be the easy game page.  Every time a user comes to this page, an easy game of Sudoku will be randomly generated (see Core Functionality)  
* **Rules Page** (/rules) \- One page should have the rules of the game listed out.  It should also include a “made by” or “credits” section that has a link to your email, Github, Linkedin, etc (you can use fake data if you prefer not to share these links.)  
* **High Score Page** (/scores) \- Page should be a mock “high scores” which will list made up usernames and the number of sudokus they’ve completed.  This page will only include mocked, hardcoded data at this time.  
* **Login Page** (/login) \- There should be a login page that should allow a user to input a username and a password (which should obscure the password using the appropriate input type.)  There should also be a submit button but the page itself should contain no or very little interactivity  
* **Register Page** (/register) \- There should be a register page that includes a username field, password field, verify password field and a submit button (which also won’t do anything at this time.)  

Remember that if there is something unclear or you wish to add more features, you may do so but call it out in the writeup.

The tiles on your board should have the following states:

* Unselected \- the style of a cell for the cells that are not currently selected (whether they have a value in them or not)  
* Selected \- make it clear that the user is able to input a number here.  
* Incorrect \- if the input number defies one of the rules of the game, the border of the cell should turn red and indicate that the   
* Hover \- show a variation of the above states for the user when the mouse if hovering over a square

Additionally, you should have a unique and consistent style across the different pages.  While the style is relatively simple here, consider adding style to buttons, on hover styling over cells so that the cursor turns to a pointer, fonts, background images, etc.  The screen should also present well on both mobile and desktop browsers: for instance, on mobile you should show the opponent and player board below each other; on desktop, show them next to each other.  You should have some sort of navbar or navigation aid that allows users to go between these different views.    
You are welcome to use any 3rd party styling libraries, such as Tailwind, React Bootstrap, Material UI, etc.  

# Well Written Code

Now that we’re writing logic, you must start considering the quality of the code you’re writing.  Functions should be simple, easy to read and avoid repetition.  React components should be small, reusable and have a single purpose.  We are not expecting you to use any more advanced JavaScript functionality, but you should be writing code that you would be happy to show to a potential employer.

# State Management

For this assignment, we will be using the Context API to manage and store data.  While state/memo/ref are fine, you should mostly be storing your data in Context.

# Demonstrating Proper React Principles

With the introduction of state, we learned about the unidirectional flow of information and how to separate the views from the data.  In this assignment you must:

* Have at least 4 different React components  
* One of those components must receive props from a parent component  
* You must have nested components  
* Some data must be passed from the child to the parent, but you should NOT do this with a function.  Rather, use your state management tool

# Bonus Points

Bonus points are optional so you are not allowed to ask the teaching staff for ANY assistance on these.  

## 3 Bonus Points: Local Storage

You will notice that if you reset the browser mid-game, the entire game will reset.  The goal here is to use local storage (window.localStorage) to store the state of the game after every action.  You will still need to use React Context or Redux, so keep in mind the following concerns:

* You should check that localStorage has data when the app first opens  
* You should update the localStorage data after each action  
* localStorage should ONLY be accessed through your React Context code  
* You should clear localStorage after the game is over (either through reset or a winner is decided)

## 4 Bonus Points: Backtracking

To ensure that each Sudoku board is only solvable one way, create the board using backtracking, an algorithm that tests to see if each board is uniquely solvable.  Link to the code in your writeup and discuss how it works.

## 5 Bonus Points: Hint System

Add a button to the page that says “Hint”.  When a user presses this button, the game highlight a single square (there may be multiple, but only choose one) that can accept a single, valid answer (ie, it should not break any placement rules AND there should be only one valid input.)  In the writeup, link to the code where you included this feature and describe your implementation details.

## 2 Bonus Points: Early Submission

If you submit this project 48 hours before the deadline, then you will receive 2 bonus points.

# Writeup

With your submission, you must include a write up that touches on the following points, each should be about a paragraph long (3-5 sentences).  You may discuss any other ideas that you deem relevant to this work:

* What were some challenges you faced while making this app?  
* Given more time, what additional features, functional or design changes would you make  
* What assumptions did you make while working on this assignment?  
* How long did this assignment take to complete? (may less than a paragraph in length)  
* What bonus points did you accomplish?  Please link to code where relevant and add any required details.

# Deliverables

Include all the following in your submission on Canvas.  You and your collaborator need to both submit the project (you may submit the same or separate writeups):

1. A link to your Github repo.  If you are working with a partner, you may submit a link to the same repo (for grading purposes, the TA’s will likely only look at a single repo so make sure they are identical.)  Please note that your Github repo should be named: {firstname}-{lastname}-project2, and if you’re working with a second person both names should appear on the repo.  
2. A video (uploaded or hosted anywhere you wish) of you or your collaborator walking through the project, talking about each page, anything you’re particularly proud of, and playing a few rounds of the game.  There is no time limit to this video but should typically be less than 5 minutes.  
3. A link to your Render app.  As above, if you are working with a collaborator, please submit the same link.  
4. Your writeup.  If you are working with a partner, you may each write this together or individually, but please indicate this with your submission.  
5. The name of your collaborator, if any  
6. Indicate if you attempted any of the bonus points