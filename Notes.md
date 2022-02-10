# DOJ - Learning Gatsby By Building a Blog

**Installation:** npm install -g gatsby-cli,
**Check Version:** gatsby --version,
**Check Help:** gatsby --help,
**Run Project:** gatsby develop,

## 1. Pages and Routes

-Any file inside the 'pages' folder can be accessed from the browser using '/thatPage'
-If you want to nest pages, you can do it by nesting as much folders as possible.

## Adding a 404 page (Page not found)

-To add a pages not found, you just create a '404.js' file inside the 'pages folder', gatsby will show that page if page is not found..

## 2. Adding Links

-We need to import 'Link' from gatsby
-We we use the 'to' to state where the link should go:
_\<Link to="/">Home</Link>_
