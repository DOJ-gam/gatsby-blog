# DOJ - Learning Gatsby By Building a Blog

**Installation:** npm install -g gatsby-cli,

**Check Version:** gatsby --version,

**Check Help:** gatsby --help,

**Run Project:** gatsby develop,

# 1. Pages and Routes

- Any file inside the 'pages' folder can be accessed from the browser using '/thatPage'
- If you want to nest pages, you can do it by nesting as much folders as possible.

## 1.1 Adding a 404 page (Page not found)

- To add a pages not found, you just create a '404.js' file inside the 'pages folder', gatsby will show that page if page is not found..

# 2. Adding Links

- We need to import 'Link' from gatsby
- We we use the 'to' to state where the link should go:
  _\<Link to="/">Home\</Link>_

# 3. Making Layouts

- To create a layout, you create a 'layout file' and wrap any page that needs that layout using the children props...

# 4. Adding Styles

- TO add styles we crate a styles folder
- We can create styles using methods like:

  - **global.css**: used for global styling
  - **component.module.css**: for styling individual components
  - **Styled Components**: styling using styled components

  - We can later import the global style to our root file,
  - Import the others in respective components

# 5. Adding Static Files

-Anything we want to access directly froom the browser we can put it in **_static folder_**
-Example images...

# 6. Adding DYnamic Data

- Gatsby can bring in all data sources together into a single GraphQl layer called **the content mesh**
- It can do that by using **source plugins** for each data source that we use.. Example:

  - data from _Mongo DB_
  - data from _WordPress_, etc

- Now instead of quering all the different data sources, you only query one single graphql layer, because all the data is brought together.

- It creates a graphql API layer, based on the data sources we tell it to use, using the plugins in the _gatsby-config.js_ file

## 6.1. Page Queries

- To make queries in files that are inside our pages directory, we nedd to create a _query variable_ at the bottom of our pages and export it.
- We give assign it to _graphql`**Query goes in here**`_
- We have to import graphql from gatsby.
- Now to use the data in our component:
  - gatsby will fire the query,
  - It then gives us access to a **data** property inside our component using the props. _(props.data)_

## 6.2. Static Queries

- When we want to make qraphql queries in other components that are not in the pages directory, we will have to use static queries because the page queries will not work outside the pages folder
- To make this possible we import a hook from graphql called _useStaticQuery_.
- We wrap our graphql query inside the hook like:
  - useStaticQuery(_grqphql`queryGoesInHere`_)
- **Note:** is static queries you cannot use query variables, but in page queries you can
- Also you can only use the hook once in a component, you cant use it more tha once.

# 7. Data Sources

- Gatsby can work with multiple data sources, and it can add them all to our graphql layer
- For that to be possible: each source that we use, we will need to register a source plugin, so that gatsby can know how to connect to data data source.
- The source plugins are all registered inside the gatsby config file(inside the plugins array)
- Some plugins can be registered as just strings(name of the plugin),
- other times as an object(when they nedd extra configuration options)
- **Note** that plugins also need to be installed using _npm_ so that gatsby can find them

## 7.1. Source-filesystem

- is a gatsby plugin that allows us to use files and add them our graphql layer, so that we can query them in our graphql query.
- To us it we put it in an object with two properies:
  - 'resolve'=>tells gatsby which source plugin we qaqre using
  - 'options'=> is an object of options like:
    - _name=>_: the name instance of the plugin
    - _path=>_: tells gatsby which directory to look into for files(gatsby will use this to add those files to our graphql layer(anything inside this direcyory))
    - _ignore=>_ uses regex(maybe ignore dot files, etc)=>checkout docs for more..
- You can have multiple instances ofthe plugin

- After everything you can test it using graphiQL by quering 'file or allFile', then 'nodes'
  - This is because gatsby sees each individual file as a 'an individual node'
  - We can also get different properties of each node like:
    - _relative path =>_ is the file path from the main folder: fom folder defined in config file(name, eg. 'text1.txt', or 'folder/text1.txt')
    - _relative directory =>_ referes to weather the file is inside another directory inside the folder defined as the path in the config file.

### 7.1.1. Filtering:

- We can use something called **Query Arguements** to ftch only one out of the whole request based on a specific condition

# 8. Markdown Files

- We can add markdown files to our graphql layer
- It allows us to format text using very simple rules, (checkout guide): [_https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax_]
- You can format markdown like html files.
  - One of the important things to note about markdown files is the _frontmatther=>_ which is just like the metadata of a markdown file.
  - It starts with three dashes and ends with three ddashes _(---)_.., and between them we have different properties and values:
    "---
    title: Blog 1
    author: DOJ
    "---
  - We can access the markdown files in our graphql layer(things like the file paths, directory, size, etc..) but we cant really display its content in our browser
  - To access the file content we can use a _transformer plugin from gatsby =>_ what they do is take a data source and transform it to something easier to use in our components.
  - For markdown files, we can use the _gatsby-transformer-remark=>_ check docs

## 8.1. Multiple Queries

- You can have multiple queries in one file,
- All you need to do is put it inside the main query container
