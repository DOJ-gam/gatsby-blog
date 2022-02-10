# DOJ - Learning Gatsby By Building a Blog

**Installation:** npm install -g gatsby-cli,

**Check Version:** gatsby --version,

**Check Help:** gatsby --help,

**Run Project:** gatsby develop,

## 1. Pages and Routes

- Any file inside the 'pages' folder can be accessed from the browser using '/thatPage'
- If you want to nest pages, you can do it by nesting as much folders as possible.

### 1.1 Adding a 404 page (Page not found)

- To add a pages not found, you just create a '404.js' file inside the 'pages folder', gatsby will show that page if page is not found..

## 2. Adding Links

- We need to import 'Link' from gatsby
- We we use the 'to' to state where the link should go:
  _\<Link to="/">Home\</Link>_

## 3. Making Layouts

- To create a layout, you create a 'layout file' and wrap any page that needs that layout using the children props...

## 4. Adding Styles

- TO add styles we crate a styles folder
- We can create styles using methods like:

  - **global.css**: used for global styling
  - **component.module.css**: for styling individual components
  - **Styled Components**: styling using styled components

  - We can later import the global style to our root file,
  - Import the others in respective components
