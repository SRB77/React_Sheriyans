# WHAT IS CONTEXT AND WHY WE SHOULD USE It ? 
> [!NOTE]
> we know about props and we also know that we pass data from parent to their child using props . but guess a case there is a parent component and inside that **(Parent>ChildA>ChildB>ChildC)** and a data is only required to ChildC which is present in parent we have to pass in this order (Parent>ChildA>ChildB>ChildC) which we call **props Drilling** and unncessary space and data flow will happen and the app will be less optimized ofcourse  . 

> [!IMPORTANT]
 > Here comes the Context to directly pass data from Parent to Childc **(Parent > ChildC)** .Simply a context is global storage which contains the data and any of child component no matter how much deep it is can simply grab the data using Context .

## STEPS TO ACHIEVE IT :- 
#### STEP1:- 
**we have to create our Context on the root Component which is App.js in my case**
#### STEP2:-
**Then we have to create an provider which will hold values and the list of components / a route of components who can access the context**
#### STEP3:-
**Then  we will use (useContext) React hook for grabing the context and then extracting the data**

> [!TIP]
>React Context is made up of:
    React.createContext() – creates the context
    Context.Provider – makes the data available to child components
    useContext(Context) – allows any component to read the data
## Example of What Context Stores:
    User login info (username, token)
    Theme (light/dark)
    Selected language (English, Hindi, etc.)
    Cart items in shopping app