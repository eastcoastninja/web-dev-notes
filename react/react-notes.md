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

State is the description of your app state is simply an object taht describes your application

A parent feeds the state to a child component as soon as the child component receives a state its a property that the child can never change that property.

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }
  render() {
      return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots={robots}/>
      </div>
    );
  }   
}

state is something that can change and affect our app this usually lives in the parent component

changes on an object must show this.

========
with an event you always have event.target.value which returns what was typed
=========

Anytime you make methods in react use arrow functions

App component has two states robots and search field.
Any component that owns state uses the syntax class so they can constructor function to create this.state - this is what changes in an app (what describes the app) 
virtual dom collects this entire state and react uses that state to render and pass them down as props to these components so that the components are just pure functions that render

live-server opens an to date version of your page
