Key prop should have an id that doesn't change like in the example here using i when looping the value would change if the loop expanded or shrinked but with the id it never chages 
	const cardsArray = robots.map((user, i) => {
		return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/> 
	})

Most of the react app components use desctructing of {props} to make something like this {robots} or this {name email id}

When returning on multiple lines wrap in ()
return (<Card 
		key={robots[i].id} 
		id={robots[i].id} 
		name={robots[i].name} 
		email={robots[i].email}
		/>
	  );

JSX is a preprocessor step that adds XML syntax to JavaScript.
Need to change file language to Babel JavaScript
Use {} around your values/variables for JSX to understand
Anything put inside the {// even commments is Javascripts} 
You always return something within the JSX 

Be sure when you import a component to export it as well with the keyword default and the location of the name component