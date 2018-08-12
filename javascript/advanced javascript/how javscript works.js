// How does JavaScript work?

What is a program?
-allocate memory to run programs
-parse and execute scripts // read and run commmands


JavaScript Engine 
Chrome - V8
Engine consists of two parts:
	memory heap - where memory allocation happens
		const a = 1;
		const b = 10;
		const c = 100;
	memory leaks - happen when you have unused memory laying around it fills up the memory heap.
		this is why global variable can be bad since if it is not maintained the memory heap fills up and you get memory leaks creating browser problems
	call stack - is where your code is read and executed it tells you where you are in the program
	// call stack
	console.log('1');
	console.log('2');
	console.log('3');
	reads from the top of the stack pushs to the stack runs the code then pops of the stack to continue reading the next line of code

	const one = () => {
		const two = () => {
			console.log('4');
		}
		two();
	}
	nothing left to push pop from the top // console.log() -> two() -> one() -> call stack empty
	console.log('4'); push
	two(); push
	one(); push
	// CALL STACK - first in last out

	JavaScript is a single threaded language that can be nonblocking 
		- single threaded means it has only one call stack meaning it can only do one thing at a time 
		- other languages can have multiple call stacks and are referred to as multi threaded
		- why is js single threaded? running on a single thread can be easy since you don't have to deal with complicated scenarios that can arise in multithreaded environments'
			- deadlocks 
		
	synchronous programming means line one gets executed at a time and the lines after one can not be executed after the next lines 

	stack overflow is when a stack when the call stack gets too big and runs out of space 
	// recursion - a funcution that calls itself
	function foo() {
		foo()
	}
	foo()
	// causes a stack overflow

	Asynchronous is like a behavoir which allows you too do other things inbetween while your message is being processed 
	console.log('1'); 
	// first param is the function you want to run than then the second param is the # of seconds you want to wait
	setTimeout(() => {
		console.log('2');
	}, 2000) // 2 seconds
	console.log('3');

	JavaScript Run-Time environment (included in the browsers)
		-Web APIs
		-Callback Queue
		-Event loops



	console.log('1'); 
	// first param is the function you want to run than then the second param is the # of seconds you want to wait
	setTimeout(() => {
		console.log('2');
	}, 2000) // 2 seconds
	console.log('3');
	
	if set time was set to 0 the out come would still be 1 3 2 
	this is because 2 is still running through the process of web api, callback queue, event loop, and callstack	

	// CALL STACK
	push console.log('1')
	// WEB API
	when set time out is done you have a callback 
	// CALLBACK QUEUE

	// EVENT LOOPS
	checks constantly if the callstack is empty if not thing is running in the JavaScript engine it will check for callbacks then the callback is put into the callstack


	Asynchronous happens alot 
		- talk between machines 
		- speaking to a database
		- making network requests
		- image processing 
		- reading files 

	What is the difference bewteen Asynchronous and synchronous programming?
	How does JavaScript work?
	Summary:	
	JavaScript is a single threaded languages that is nonblocking has one call stack and does one thing at a time. In order to not block the single thread, it can be Asynchronous
	with call back functions and they are run in the background, through the callback queue, then event loop to be brought back to the callstack. 































