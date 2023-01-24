const projectsdata = [
	{
	title: "BUTTON HOOK FANTASY FOOTBALL",
	image: "./appvideo.gif",
	description:
        ".NET MAUI fantasy football application , ~8,400 lines of code , SUBMITTED to Microsoft App Store , backend built using custom .NET web API authentication and controller w/SQL DB hosted using Microsoft Azure , frontend downloadable from anywhere in the world from this website (click \"VIEW/DOWNLOAD\" below :)) , password reset , password generator",
    futurechanges: "Future features: weather forecast search page , search for players/teams w/ predictive typing , facilitate trades between teams , commissioner rights to add/drop players from non-commissioner owned teams , customizable light/dark theme , additional layers of security to the custom authentication protocol , optimized w/bulletproof asynchronous API/HTTP calls DISCLAIMER: App running slowly since uploading backend to Azure. Optimization and bandwidth evaluation in progress.",
    link: "https://buttonhookfantasyfootballdownload.b-cdn.net/Button%20Hook%20Fantasy%20Football.exe",
	},
	{
	title: "C# CONCURRENCY CALCULATOR",
	image: "./multithreading.svg",
	description:
		"C# concurrency calculator which drops runtime from ~27 seconds to ~4.2 seconds for a 640% reduction due to multithreading",
    futurechanges: "Future features: publish the .NET MAUI UI I built for this to the Microsoft App Store",
	link: "https://github.com/danwiener/ConcurrentCalculations",
	},
    {
        title: "C#/.NET MAUI Wordle Dictionary Game",
        image: "./wordle.gif",
        description:
            "C#/.NET MAUI dictionary game. The premise of this game is to guess a randomly selected 5-letter word within six attempts. The caveat is that your guess must be comprised of a real, legitimate word in the English dictionary. This app cross-references your word through a Merriam-Webster dictionary API to verify your word before you may proceed with your submission. If you guess a correct letter in the same location as it exists in the target word, the tile-behind will turn green, and if you guess a correct letter but in the wrong position, it will turn white. Please enjoy.",
        futurechanges: "Updated, more refined UI.",
        link: "https://wordledictionarygame.b-cdn.net/Wordle.exe",
    },
	{
	title: "NODE.JS PASSWORD GUESSING APP",
	image: "./unlock.svg",
	description:
		"Node.js/Puppeteer.js app which opens stateless browser and iteratively guesses 4 digit pin on https://www.guessthepin.com/ , password on this website changes periodically and app prints out result of each guess until correct password is guessed",
    futurechanges: "Future features: develop a React UI frontend for this and publish it for users to access on a website",
	link: "https://github.com/danwiener/GuessThePin",
	},
    {
    title: "REACT.JS PORTFOLIO WEBSITE (THIS WEBSITE)",
	image: "./resume.svg",
	description:
		"React.js/CSS/Bootstrap/HTML5 portfolio website built to demonstrate my projects , passions , and skills , utilizing React Components , React Routing , React States , Neumorphic Designs , Adobe tools , React-Icons , extensive CSS/Bootstrap conditional styling and animations , and my body of work",
	link: "https://www.henrikwiener.com/",
    futurechanges: "Future features: enhance accessbility for hearing/visually impaired , improve UI responsiveness to mobile device viewing , advanced animations and extensive Three.js/Web GL graphics throughout for a fully immersive , interactive user-experience",
	},
    {
        title: "PYTHON INFECTIOUS DISEASE DATA",
        image: "./infectiousdisease.svg",
        description:
            "Python app to extensively search and view infectious disease data in the United States for given list of diseases and between years specified in app",
        link: "https://github.com/danwiener/PythonDiseaseData",
        futurechanges: "Future features: Python TKinter interface",
    },
    {
        title: "PYTHON SWIMMER",
        image: "./swimmer.svg",
        description:
            "Python swimmer game app , enter name , gender , age to view Python swimmer object complete laps around a pool",
        link: "https://github.com/danwiener/PythonSwimmer",
        futurechanges: "Future features: Python TKinter interface",
        },
];

export default projectsdata