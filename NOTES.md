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

## 5. Adding Static Files

-Anything we want to access directly froom the browser we can put it in **_static folder_**
-Example images...

## 6. Adding DYnamic Data

- Gatsby can bring in all data sources together into a single GraphQl layer called **the content mesh**
- It can do that by using **source plugins** for each data source that we use.. Example:

  - data from _Mongo DB_
  - data from _WordPress_, etc

- Now instead of quering all the different data sources, you only query one single graphql layer, because all the data is brought together.

- It creates a graphql API layer, based on the data sources we tell it to use, using the plugins in the _gatsby-config.js_ file

# 6.1. Page Queries

- To make queries in files that are inside our pages directory, we nedd to create a _query variable_ at the bottom of our pages and export it.
- We give assign it to _graphql`**Query goes in here**`_
- We have to import graphql from gatsby.
- Now to use the data in our component:
  - gatsby will fire the query,
  - It then gives us access to a **data** property inside our component using the props. _(props.data)_
