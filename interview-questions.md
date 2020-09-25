# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.



1. What is object destructuring?

  Your answer: Object destructuring is a technique used to keep code dry. Its syntax is { key } = stuff.you.don't.want.to.type.repeatedly.

  Researched answer: Should have been explicit - { key } = objectName. You can also efficiently destructure multiple values - { key1, key2, key3, key4 } = objectName. Incidentally, destructuring can also be applied to arrays.



2. What are React lifecycle methods? Provide three examples.

  Your answer: React lifestyle methods are used during the phases of the React lifecycle. There are three phases, I believe they are Mounting, Updating and Unmounting. I don't remember all the method names verbatim, but I think they're similar to componentWillUpdate(), componentDidUpdate(), etc.

  Researched answer: Got the phase names correct. Each of those also have their own Render and Commit phases. According to the React docs, these are the methods called (if needed) in each phase in order:
  
  Mounting Phase - **constructor(), static getDerivedStateFromProps(), **render(), **componentDidMount()
  
  Updating Phase - static getDerivedStateFromProps(), shouldComponentUpdate(), **render(), getSnapshotBeforeUpdate(), **componentDidUpdate()

  Unmounting Phase - **componentWillUnmount()

  ** denotes the most common methods called in each phase.

  

3. What is the difference between a class and an object?

  Your answer: An object is a data type in JavaScript that contains an arbitrary number of key/value pairs. A class is the blueprint for future objects that all share a certain number of identical keys. 

  Researched answer: Here's something I found that I like - A class has logical existence. An object has physical existence. Also - A class is a definition that is created once. Objects of that class are created as many times as you desire.



4. What is the difference between a HTML div and a span? 

  Your answer: A div is an HTML container that can house many other HTML objects, including other divs. Styling applied to a div can affect everything inside it unless that styling is overridden. Perhaps by a span. A span is an inline tag that contains and can therefore style only the text within it.

  Researched answer: Should have said that a div is a block level element. Besides that, I'm pretty happy with this.



5. What is React.Fragment (or <>) and why would you want to use it?

  Your answer: A React.Fragment is the equivalent of an unlabeled div. Since React's render method can only output a single container's contents, a fragment is often used to wrap multiple divs so they can be displayed.

  Researched answer: Probably better to state that it allows the render method to display multiple elements without using a div to wrap them. You would do this if it makes no semantic sense on your page for the elements to be part of the same div.



6. What are three options for creating responsive design?

  Your answer: React. And two other things I will tell you about below.

  Researched answer: I have googled much and am a little stumped here. I'm going to assume you're asking for specific techniques. In which case, you can use Flexbox, the CSS Grid Layout with fr units, and CSS Media Queries with break points.



7. What are props in React?

  Your answer: Props is short for properties. These are immutable attributes and methods passed from parent components to child components in the process of executing a functional React app.

  Researched answer: Props can be understood as a combination of HTML attributes and JavaScript arguments. Parent components pass props to child components as arguments through a syntax similar to HTML style attributes.



8. What is `this` in JavaScript?

  Your answer: `this` is a term used to refer to the object that employs it. It is specifically used to refer to the object's own properties and methods.

  Researched answer: `this` is a keyword used by an object to access its own properties and methods, whereby it can modify and interact with itself.



9. STRETCH: What is a ternary operator in JavaScript?

  Your answer: A ternary operator is an alternative syntax for an if/else statement. It's structure is: conditional ? action if true : action if false. Ternary operators can be extended into else if statements by placing further conditionals into the action if false fields.

  Researched answer: Ternary operators can also perform multiple operations upon resolving by separating those operations with a comma. 
  
  conditional ? first action if true, second action if true: first action if false, second action if false, third action if false



10. STRETCH: What is an anonymous function in JavaScript?

  Your answer: () => {}. An unnamed function that is triggered by a function or event. Can be used to call a function that requires arguments in an onClick or handleChange situation.

  Researched answer: While the function is unnamed, it can be saved to a variable on creation. Anonymous functions can also be self-executing - that is, they can execute as soon as they are created. In doing so, any variables created inside the function are destroyed as soon as the function resolves. The syntax for a self-executing function is (function() {function code})(). Seems that other valid syntaxes include:
  x => x + 1
  x => {return x + 1}
  (x, y) => x + y
  (x, y) => {return x + y}



## Looking Ahead: Terms for Next Week
- Ruby: Ruby is an interpreted, high-level programming language in which everything is an object. It is designed to be simple enough for beginners, but powerful enough for experienced developers. Other developer's libraries can be imported through RubyGems. 


- Object oriented programming: Object oriented programming is based on the use of objects, a data type that includes data and behavior. OOP utilizes the fact that objects can access and modify their own data by creating programs that consist of objects that interact with each other.


- RSpec: RSpec is a testing tool for Ruby which is installed through the rspec gem. It is behavior driven, meaning it cares about what the program does rather than how it does it. RSpec utilizes a User Story in its process broken into the steps: describe, context, it, expects.


- Instance variable: Instance variables are variables associated with classes that can differ in value between each instance of that class' objects.


- Ruby blocks: Ruby blocks are anonymous pieces of code. They can accept arguments and will return a value. Blocks can only be created by passing them to a method when the method is called.


- Ruby hashes: A Ruby hash is a data structure consisting of unique keys associated with a value or values.


- `getter` and `setter` methods in Ruby: A `getter` method is used to get the value of an instance variable. A `setter` method sets the value of an instance variable.
