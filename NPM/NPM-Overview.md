NPM(Node Package Handler) was created for developers to be able to share JavaScript code around the world. This code would help someone solve his/her problem.
This creates a base knowledge of scripts that people can constanly improve and build on top of.
Very rare that an app or website is built purely from scratch. No need to reinvent the wheel.
For example if you want to build something using virtual reality you can use someone elses code and build upon it to start my project.
Was orginally built for node but worked so was it was implemented everywhere else.
Both Yarn and NPM are very similar but Yarn isn't used as often

How NPM works
Search for packages in the NPM registry

The packages(or modules) contain two things: package.json(meta file that describes the package) + js file

Then compose or combine different pieces of code on your project to add functionality 

Benefits: 
gain expertise from others
some maybe better than you at a certain thing and you can use that knowledge

Downside:
not all packages are good code
anyone can upload to NPM 
adding more bytes to your project size even bigger
want to minimize the size of the project to build fast web apps

Three types of packages:

Ones for the Browser - front end (can all kinds of scripts to help with workflow such as jquery)

Second are ones that give you new commands that you can use on the command line (terminal)

Third are ones you can use on Node.js on the back end.

Three things you must have when starting a project in 2018
1. HTML + CSS + JavaScript (Must have one or can have multiple)
2. Github Repo + Git (Have project on github with source control)
3. Package.json file (Manage packages (NPM) other things that people have written with package.json)

Installing with -g means globally you can run it in the terminal 
Installing with -l mean locally giving you new options in the js file

npm init creates json file 
if we add local packages to our projects they are added to the json dependencies(packages our websites need to work) all of these packages live in the node modules folder

Things to consider:
Access with the team 
	How much weight is added to a package?
	is it worth it?
	is the code well written?
	is there a good community behind it?
	does it save time?

Dependencies 
	our projects depend on these packages
	a certain version must be located within the node modules folder 
	must match the json dependencies section
	adds an extra layer of complexity

json
	serves as a great resource for what packages our websites depend on

	"lodash": "^4.17.10" Semantic Versioning (semver) goes 
	# right to left (major release, minor release, patch release)

do not post node modules folder to github only the package .json which includes the information need to install them with the command npm install

dev dependency are packages that are only needed for development and testing it will never be shipped to a website where an end user would ever see

npm scripts allow you to do commands from the package.json file
scripts": {
    "build": "browserify script.js > bundle.js && live-server"
  }