React was developed by facebook
Before react there was jQuery 
	created alot of inconsistencies if this happened do this
	had to manipulate the dom which is really difficult because it constantly changes(had to keep track) very slow development
	hard to scale as websites became more complex hard for teams to work on at the same time
Bread machine analogy just throw all the ingredients in and react does all the magic underneath the hood and put it out on a website
	very reliable and consistent
	mananges the view very well - make our websites the DOM change in predictable ways that is easy to scale and manage
React can be used with mobile devices to bult native apps, vr apps, build desktops apps, anywhere that has a view react can use it
facebook, netflix, and instagram all use react!

Principles to understand
	Thinking in components - think of this as lego blocks everyone builds a specific lego block and we just combine the lego blocks to create your website
		atoms - icons and small little divisible elements (images, text)
		molecules - formed by combining atoms with similar functionality such as navigation bar
		organism - alittle bigger than molecules that combine to a bigger scale functionality 
		templates - the combination of the organisms to give you an idea of how your website should look
		pages - which is the page of your app
	thinking in this fashion you can build small little components that you can reuse and put on different parts of the webpage
		write once and reuse can even be shared with the world
	because of the way react is structured it doesn't need to know about the rest of the webpage it works by itself bt reducing dependencies on the other parts of the site it can be plugged in anywhere

Second Principle 
	One way data flow
		tree like structure (looks like a binary tree)
			data flows from top to bottom
				if a compenent changes only the children know about the change (the parents don't need to know about the change) the direction of the data flow is always down stream
				The children that notice the change will act accordingly to the change as well
Third Principle
	Virtual dom (document object model)
		want to minimize the amound of dom manipulation that we do web browsers have to work really hard to achieve that reducing the performance of a webpage and increase bugs
	before react we were like painters tell the dom what to do with react we have a react bot which creates a virtual dom (javascript object) just describes the current state of the website
		we just give the object to bot and the react bot paints the picture in the most optimum way possible (does the dom manipulation for you)

	this is why it works every react is the machine and we can put it on any canvas we want to make changes to.

React has a great ecosystem one of the biggest for javascript and so many tools work with it(npm, node.js, babel, webpack, react/router, and more) 

.gitignore used for git to ignore certain files and folders
public folder
	manifest.json allows people download a short cut your website and have a icon on their desktop
favicon.ico is a little icon that appear in your website tab to the left of the title





