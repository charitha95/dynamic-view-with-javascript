The test was very interesting, and I had so much fun implementing it 😊. This was to create a 
single web page application (although the implemented solution is a mobile responsive one) with 
given set of basic features such as filtering and listing relevant data in the browser though I 
had to face some challenges while implementing. In below I will explain the obstacles I faced 
and how would it be solved using a JavaScript framework without even thinking.

NOTE: I have worked with Angular framework for couple of project and I am blessed with the 
features that it gives, and I will be talking about improvements that I would do if I could use 
Angular as a framework.

So let’s talk about the challenge I faced and how would overcome them with Angular.

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*  Project initialization-																		*	
*  ============================================================================================ *
*  After I read the requirements I though it’s a simple application and started working on it.  *
*  First challenge I faced is the project initialization. Although the application was is a 	*
*  single web page this didn’t come out as a huge issue for me. But with Angular CLI it is 		*	
*  just a simple command (ng n userDebt) and it will setup everything for me without a hassle.	* 
*  With that it’ll force me to follow the standard architecture and will simply allows me to 	*
*  scale up the project.									*	
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 



* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*  CSS Framework                                                                                *
*  ============================================================================================ *
*  Since there was a restriction on not to use any third-party frameworks, I had to implement   *
*  my own css framework to work on the project. First thing was to implement a grid system      *
*  that suites for the application need and with flexbox I managed to create a grid system.     *
*  Not only the grid system but all the other unique elements like cards, inputs etc. I had     *
*  to implement from the scratch. I implemented them in a way that I can be used in anywhere    *
*  else.                                                                                        *
*  Journey would have been very easy if I could use a standard css frameworks like bootstrap    *
*  where you have all the elements, styles and classes out of the box.                          *
*                                                                                               *
*  Styling                                                                                      *
*  -------------------------------------------------------------------------------------------- *                 
*  Pure CSS is very good. No complain about that. But if I can use a preprocessor like SCSS     *
*  that would be nice. With SCSS it stops the code repetition and ensure that I write clean     *
*  and maintainable code for the future. Some of the things I could improve in the current      *
*  implementation will be mentioned below.                                                      *
*                                                                                               *
*  Variable
*  -------------------------------------------------------------------------------------------- *
*  SCSS is very famous for variable where you can store in a specific scope and use when you    * 
*  need. In this project I had to repeat styles in couple of places like                        *
*  ‘background-color: #FFDF38’ which you could replace the value with a variable like           *
*  ‘background-color: $primary’ with SCSS.                                                      *
*                                                                                               *
*  Block level scope                                                                            *
*  -------------------------------------------------------------------------------------------  *
*  Another feature I could use with SCSS would be the Block level scope. Where you can style    *
*  inside blocks.                                                                               *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 



* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*  DOM manipulation
*  ============================================================================================ *
*  DOM manipulation is a complete chaos without a JavaScript framework.                         *
*  It was bit of a challenge to dynamically manipulate DOM with vanilla JavaScript. Had to      *    
*  keep element references to append child elements. Below talks about the DOM manipulation     *
*  with Angular.              																	*
*										                                                        *
*  Data bindings and Directives are there in the Angular out of the box. So, we don’t have      *
*  to keep references to elements and manually change them on user activity.                    *
*                                                                                               *
*  Data Binding                                                                                 *
*  -------------------------------------------------------------------------------------------  *
*  Data binding are useful when it comes to the communication between the view and the script.  *
*  In angular we have many options in data binding which we can take advantage of.              *
*       1.	Event Binding                                                                   	*
*               Could bind events easily with event binding and could remove all the event      *
*               listeners and functions we write to trigger events inside our JavaScript.       *
*               So it will save some memory.                                                    *
*                                                                                               *
*       2.	Interpolation Binding.                                                          	*
*               Interpolation is something we can use a lot in this project. With vanilla js    *
*               I had to query the doc and select the element and then append text to the       *
*               innerHtml. But with interpolation you just have to pass a variable into         *
*               the {{user.category}} and you done.                                             *
*                                                                                               *
*       3.	Property Binding.                                                               	*
*               Again, in here also I had to do the same as above, keeping an reference and     *
*               then change accordingly. But in angular you can just pass a variable in         *
*               the <img src="users.picture">                                                   *
*                                                                                               *
*       4.	Two-way Binding.                                                                	*
*               Same as above again I had manually call getelementById and get the input value  *
*               to search through the list. This could replace with angular ngModel and its     *
*               two way binding feature.                                                        *
*                                                                                               *
*  Directives                                                                                   *
*  -------------------------------------------------------------------------------------------  *
*  Apart from what I have mentioned in the above, another good feature which gives by angular   *
*  is directives. with directives life of a developer is simple. Why I would say that is it     *
*  saves lot of time and lines of code at the same.                                             *
*  Typically, a JavaScript file should contain only the things related to the application       *
*  logics. Not the DOM manipulation code.  But with just use of vanilla JavaScript I couldn’t   *
*  help on that. Let’s talk about directives and how we can use them in this project.	        *
*                                                                                               *
*       1.	Use of Structural Directives                                                    	*
*           If I had the chance to use angular structural directives, it would save more than   *
*           100+ lines of code in JavaScript file of the current implementation. With the       *
*           combination of data binding and correct use of directives you don’t have to write   *
*           a single JavaScript line to manipulate DOM elements. All the things related         *
*           to DOM manipulation is there out of the box in angular.                             *
*                                                                                               *
*           Eg: in our case, we had to loop thorough a list and show them in the web page.      *
*           To accomplish that I had to write separate function and call when needed.           *
*           But with structural directives, directly in the html file you can use *ngFor        *
*           and loop through the list and bind the data to the elements rather than             *
*           appending it again and again.                                                       *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 



* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*  Component based architecture
*  ============================================================================================ *
*  According to angular’s component-based architecture, our application could be divided into   *
*  independent logical and functional components and reuse. In the project there was a          *
*  requirement to create a common component and reuse it in two different formats. That could   *
*  be easily and nicely handled with angular components. Just passing the selector name         *
*  <card> and some values to manipulate the card data.                                          *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 