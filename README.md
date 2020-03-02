# **SAW-IT!**

**[ Web app can be accessed at: https://saw-it-here-first.netlify.com](https://saw-it-here-first.netlify.com)**

## A news and comment website not too dissimilar from REDDIT...

<img src='src/images/mobileMode.png' alt="screenshot" height='400'/>

This is the source code for the front-end portion of my portfolio project; SAW-IT. This website can be used to post comments and articles on various topics, in a similar fashion to REDDIT. Articles and comments can be 'applauded' to indicate enjoyment of the post.

Front-end is **REACT.js**, with @Reach router for Single-Page-Application routing, Axios for backend API requests, and Styled-Components for CSS/HTML management.

Back-end is **Node.js Express server**, with a **PostgreSQL** database. The source code for the back-end can be viewed at [https://github.com/stuart-p/sawit-server](https://github.com/stuart-p/sawit-server), and a live instance of the server can interrogated at [https://sawit-server.herokuapp.com/api](https://sawit-server.herokuapp.com/api)

## Getting Started (usage)

The website can be accessed using a web browser to visit the site [here](https://saw-it-here-first.netlify.com). It has been optimised for mobile usage, but can be viewed on desktop also.

The following pages and functionality is currently available:

```
https://saw-it-here-first.netlify.com
├── * (Header nav bar. Goto landing page, visit portfolio, browse all topics)

├── / (view all articles, sort and order all articles, applaud articles)
      ├── /about (general outline of project)
      ├── /topic
            ├──/topic_name (view articles on a topic, sort articles, applaud articles, add articles, delete articles)
                  ├── /article
                        ├──/article_id (view specific article details, view comments on an article, delete your own comments, add new comments, vote on comments)
```

A Header bar is present on all pages, and can be used for core navigation of the site. Pressing the arrow buttons displays the nav menu, which includes a list of all topics on the database, as well as links to the landing page, about page and an external link to my portfolio site.

The main landing page displays all articles on the database, and these can be ordered according to creation date, comment count and vote count. The data from the server is paginated, and this can be navigated using the arrow buttons at the bottom of the page.

The topic page shows all articles relating to a specific topic. Again, these can be sorted and paginated through. Clicking on an article card will bring up the article page. New articles can be added using the 'Add Article' button in the footer. You can delete your own comments using the trash icon on the article.

The Article page shows all comments relating to a specific article. Comments can be added to the database using the 'Add Comment' button in the footer, and you can delete your own comments using the trash can icon on the comment.

## Getting Started (development)

If you would like your own example of this front end up and running, you can use these instructions to start a local instance for development and testing purposes.

### Prerequisites

this project requires `NODE.js`, minimum version: V12. It has the following dependencies:

```
production:
react: ^16.12.0
@reach/router: ^1.3.1
axios: ^0.19.2
classnames: ^2.2.6
styled-components: ^5.0.1
react-app-rewired: ^2.1.5
react-app-rewire-styled-components: ^3.0.2
```

### Installation

to install:

- using your favourite command line interface (CLI) application, navigate to your preferred installation location, and run `git clone https://github.com/stuart-p/Saw-It.git`
- Navigate to the created folder using `cd Saw-It`, and open with your favourite software development environment
- run `npm install` to automatically install all dependencies
- run `npm start` to launch a locally-hosted instance of the web app. This will open automaticlly in your default web browser, however you can also open up the webpage manually by navigating to `http://localhost:3000/`

## Built with

This project was built with VSCode, using Javascript and the React.js front-end library. The initial project template was generated using `npx create-react-app`

## Author

This project was built by **Stuart Palmer** while studying at _NorthCoders_, in February 2020.
