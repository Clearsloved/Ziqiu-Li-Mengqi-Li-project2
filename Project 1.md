# Sudoku: Part 1, Mock

## HTML, CSS, and Design

# Overview

In this first assignment, you will be constructing a mock website of the popular game, Sudoku.  This will NOT be an interactive page at all, but instead will show a game of Sudoku in progress that you can build on top of in the future.  The only tools you can use here are pure HTML and CSS, and future projects will build on top of this effort.

For this project, you can work with two other people.

Sudoku is a popular puzzle game.  It is played on a grid with equal number of squares for the height and width, with a couple of smaller, sub-grids.  The main rule is that each row, column and sub-grid should have a each number (between 1 and the height/width of the grid) only once. Here is an online implementation: [https://www.nytimes.com/puzzles/sudoku](https://www.nytimes.com/puzzles/sudoku).  You are NOT expected to implement this way, this link is simply to demonstrate the rules.

### Restriction

Please note that for this assignment You are not allowed to use any JavaScript, Ruby or other programming language, including the use of imported JS libraries.  You MAY import files or icons, but cannot use any style beyond this.  You are also forbidden from using any styling library, such as Bootstrap, Material, etc..  Do NOT use anything like React, Angular, Vue to help you on this assignment as the goal is to get comfortable with the basics, and you will lose points accordingly.

# Rubric

* Working Github and actively working URL \- 15%  
* All pages \- 25%  
* Navbar \- 15%  
* Mobile friendly design \- 5%  
* Use of the certain HTML Components \- 10%  
* Use of certain CSS properties and features \- 10%  
* Good and professional design \- 5%   
* Writeup \- 5%  
* Extra Credit 

## Working Github and actively working URL

The basic piece of this assignment is to make sure that all of your code is pushed, and that the website works for users.  If there are any additional login or verification steps, please make sure that that is provided in the instructions.  All written code must be well written, clear and follow patterns set out in this or other courses.  One important practice is that you must organize your code into correct folders and files: each page should have all appropriate files in the correct folder (except for the home page); the core HTML should be in an index.html (i.e., **I shouldn’t be able to see a .html in your URL paths ever**); common CSS should be stored in a common folder, and specific CSS in each correct folder.  There must be no JavaScript used on the site.

## Unique pages

Your personal site should have the following pages.  Please note that each of these will just be wireframes (or mocks).  You will only need to provide the HTML and CSS \- any logic or JavaScript will come in later assignments.  Each page should also have a title at the top of the what page is:  

1. **Home Page** \- There should be a home page that includes the title of the game (you can change it from Sudoku if you wish) and any other art of your choosing.  
2. **Selection Page** \- There should be a game selection page.  You will create a list of game names along with the author’s name (all made up.)  Clicking on any of the titles will lead you to the Game Hard page  
3. **Hard Game Page** \- there should be a sample game page that includes a 9X9 grid (with the appropriate subgrids).  Each cell should allow numbered inputs between 1-9.  There should also be a timer with a fake time on it  
4. **Easy Game Page** \- There should be a sample game page as above but with a 6X6 grid.  
5. **Rules Page** \- One page should have the rules of the game listed out.  It should also include a “made by” or “credits” section that has a link to your email, Github, Linkedin, etc (you can use fake data if you prefer not to share these links.)  
6. **High Score Page** \- Page should be a mock “high scores” which will list made up usernames and the number of sudokus they’ve completed  
7. **Login Page** \- There should be a login page that should allow a user to input a username and a password (which should obscure the password using the appropriate input type.)  There should also be a submit button (which won’t do anything at this time.)  
8. **Register Page** \- There should be a register page that includes a username field, password field, verify password field and a submit button (which also won’t do anything at this time.)

We are not too worried about the content of your website, so aspects like typos or bad grammar will not be evaluated too strongly.  You may also add other details to the page to make sure all of the requirements are being assessed.

## Navbar

A core feature of your site should be a navbar, so that users can easily access all information:

* It should stay in the same position, no matter where the user has scrolled  
* It should contain links to each of the pages above.  Additionally, when a user is on that page, you should use styling to indicate that that is where the user is currently looking.  
* It should have a title that references the name of the game  
* It should not cover any content, unless the user has scrolled down the page

## Mobile friendly design

Your website should look equally as good when on a mobile phone or desktop computer.  Some considerations:

* You may need to modify your navbar so that it shows as much space as possible.     
* All content should be equally accessible whether a user is on desktop or mobile  
* Text, images and other content should shrink and grow so that it is easier to see  
* Idea: it might be a good idea to move the navbar (say from the side to the bottom of the screen) when the user is in mobile or browser view.  
* We will check via the **iPhone Pro 12** size in the Developer Tools of Chrome

## Use of the certain HTML Components

Your website should should use, at least once, each of the following HTML elements:

* div  
* span  
* a  
* img  
* p  
* head   
* button  
* input  
* body   
* h1, h2, h3, h4, h5 or h6  
* ul or ol or table

Additionally, make sure that your id’s and classes are well named, as any poorly or carelessly named content may result in a lower score.   
Finally, you should ensure that there is little to no raw HTML on your page: everything should be styled in some capacity.

## Use of certain CSS properties and features

You website should use, at least once, each of the following CSS properties or features:

* font-family  
* background-color or background  
* margin  
* padding  
* position  
* align-items or text-align  
* flex or grid  
* @media queries  
* You must use at least two different pseudo-elements (e.g., :hover, :first-child, etc.)  
* transition/transform

Any use of the \`\!important\` feature will result in lost points.