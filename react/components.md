we create react applications using modular code called components
components break up the user interface into seperate parts that can be reused and handeled independently
components :
- handles and manages events
-  renders initial ui
- updates ui acc to its states
     
----
3 types of react components
1. functional
2. class
3. higher order

   
---
   You can compose components together by taking a component as an argument to another component.
    It renders the parameter component along with additional features.
   
   You can use JavaScript ES6 classes to create class-based components in React. You can pass data from one class component to another class component.
   They use the main React functions such as state, props, and lifecycle methods.
---
---

    After the introduction of hooks in version 16.8, developers tend to prefer functional over class components
    because class components are more complex.
   A higher-order component, HOC, allows you to reuse component logic. You can compose components together by taking a
    component as an argument to another component.
   It renders the parameter component along with additional features.
---
------------
### A component is composed of three aspects: properties, events, and states. 
  You use a component's properties to store and pass data from a parent to a child component.   
  Events manage the document object model, DOM, as a result of the user's interaction with the system. You use a component state to update the UI.   
  --------
---
Components are the building blocks of React applications and make building complex user interfaces easier by breaking down the UI into individual pieces. 
---
---
  Then you merge them into a parent component that forms what the user sees and interacts with. React components enable you to break up the user interface into separate elements.  
  These can then be reused and handled independently.  
  A React component takes on optional input and returns a React object, which is rendered on the screen.    
     The React component renders pieces of the web page.  
   You develop the components code so it knows how to behave and update when the user interacts with it.  
     This modification of the component is called a state change.  
  You also manage events such as selecting a button with a component state  
  ---
