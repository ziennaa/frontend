                                                STATE
                              
Allows you to change data
object is used to track data
built in state object
state change re renders the componenet

      there are 2 types of states : local and shared
  local:
    - present only in single component that needs it such as hiding and showing information
  shared:
    - can be accessed and changed by more than 1 component

-----

A class component state is a plain JavaScript object used by React 
   to represent information about the component's current situation. 
  The heart of every react component is its state. States determine how a component renders and behaves. A state allows you to create dynamic and interactive components.   
  In class components, the state is an instance of the component class with a set of observable properties. These properties control the behavior of the component.
  You manage and preserve the state in the React component. In other words, you control the state of a component with an object that contains information that may change 
  over the component's lifecycle. If your component changes or needs to change during user interaction, you use its state. A state allows you to track the change in the component. 
  This includes updates to forms, buttons, and timers. For example, consider a simple application with a button and a counter. When the user presses the button, the counter   
  variable increases by one. As the count changes, you hold that value in the state. This code example shows how you can create a test component that contains the state   
  with attributes such as ID, name, and age. The component's render function returns the state attributes name and age.  

---

   Props is short for properties. You use props to pass data between components. React's data between components flows from parent to child only.
   Props are read-only components. Prop objects store the value of attributes of a tag and work like the HTML attributes. They behave like arguments to functions  
  that you can pass from one component to another. Props are immutable and cannot be modified from inside the component. If a variable gets modified during a process,   
  it should belong to the component's state. You can also use props to allow child components to access methods defined in the parent component. You should manage   
  the state in the parent component. The child component does not have a state of its own.   

---
  <img width="598" alt="image" src="https://github.com/user-attachments/assets/466491bc-e889-4df7-b1b2-a66b5e4e77ef" />

---
