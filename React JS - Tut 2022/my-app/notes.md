=====================
KEY NOTES - REACT JS
=====================
TIMESTAMP - 
- React is declarative -> tell me what to do and I will worry about how it will get done

================
SETTING STATE
================
const [element, setElement] = React.useState(<SET IT TO ANYTHING WE WANT>);

Now we map over that element to return a array of elements 
const mappedElements = element.map(element => {
    return <div> {element.id} </div>
});