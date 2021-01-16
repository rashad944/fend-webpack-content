# Evaluate A News Article with (NLP) Natural Language Processing

This is the 4th project at [Udacity Front End Developer Nano Degree]

In this project we build a web tool that allows users to use Natural Language Processing (NLP) in evaluating articles or blogs found on other websites by submitting its URL and full sentiment analysis returned from [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis)

## Tools
* HTML
* CSS
* JavaScript
* NodeJS
* Webpack
* meaningcloud API
* Jest (for testing)

# Instructions

npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

5. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

6. Configure environment variables using dotenv package
	1. Install the dotenv package
	
	npm install dotenv

	2. Create a new `.env` file in the root of your project
	3. Fill the `.env` file with your API key like this:
	
	API_KEY=**************************
	
7. Start the project

`npm run build-prod` | Build project
`npm start` | Run project

8. Open browser at http://localhost:8081/
