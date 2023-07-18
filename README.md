git add .
![](https://img.shields.io/badge/Microverse-blueviolet)

# Tv-Shows-Api

This Javascript app fetches Tv-shows from the TvMaze API. 

From the home page the user can input a term related to the Tv-show that they are searching for (could be the full name or part of the name of the Tv-show): 

![Homepage](/assets/for-presentation/Homepage.png?raw=true "Homepage")

The app will then render a listing of all the tv shows that match the search criteria, displaying their image as well as their name.

![Listing pre-likes](/assets/for-presentation/Tv-shows-listing-pre-likes.png?raw=true "Tv-Show listing pre-likes")

The user can the input "likes" on the Tv-show of his/her choice.

![Listing liked](/assets/for-presentation/Tv-shows-listing-liked.png?raw=true "Tv-Show listing liked")

The comment button brings up a popup window with additional information regarding the Tv-show (genre, language, network where it aired, rating, date when it premiered and when it ended), the comments posted by other users (if any)...

![Pop-up](/assets/for-presentation/Tv-show-details.png?raw=true "Tv-show details pop-up")

... as well as the form for the current user to input a comment.

![Comment form](/assets/for-presentation/Inputing-a-comment.png?raw=true "Comment form")

When the pop-up window is again accesed later, the user's comments will be displayed.

![Comment form](/assets/for-presentation/Displaying-a-comment.png?raw=true "Form post-comments")

The application makes API calls to the [TvMaze API](https://www.tvmaze.com/api) retrieving information about the movies. Another API, [Involvement API](https://www.notion.so/Involvement-API-869e60b5ad104603aa6db59e08150270), is responsible for saving likes and fetching the number of likes, saving comments and fetching a list of comments. All those functionalities are tied-up in a single codebase.


## Built With

* HTML
* CSS
* JavaScript
* Webpack
* TVMaze API
* Involvement API


## Video Demo

https://www.loom.com/share/8509cfbbfe2b448f878ab19fbcc7def4


## Getting Started

To get a local copy up and running follow these simple example steps.


### Setup and Install

* Open your terminal - Windows: `Win + R`, then type `cmd` | Mac: `Command + space`, then type `Terminal`
* Navigate to a directory of your choosing using the `cd` command
* Run this command in your OS terminal: `git clone git@github.com:German-Cobian/TV-Shows-API.git` to get a copy of the project
* Navigate to the project's directory using the `cd` command
* Once in the project's directory, run `npm install` and then `npm run build`
* To fire up the server run `npm start`
* Visit `http://localhost:8080/` in your browser to get into the app


## Authors

👤 **German Cobian**
* GitHub: [@German Cobian](https://github.com/German-Cobian)
* Twitter: [@GermanCobian2](https://twitter.com/GermanCobian2)
* LinkedIn: [@German Cobian](https://www.linkedin.com/in/german-cobian/)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/German-Cobian/TV-Shows-API/issues).


## Show your support

Give a ⭐️ if you like this project!


## Acknowledgments

Guidelines for this project supplied by [Microverse](https://github.com/microverseinc/curriculum-javascript/tree/main/group-capstone).


## 📝 License

This project is [MIT](https://github.com/German-Cobian/TV-Shows-API/blob/development/LICENSE) licensed.