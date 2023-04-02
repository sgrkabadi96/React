
const child = React.createElement(
    "div" , 
    {id : "child"} , 
    [
        React.createElement("h1" , {} , "This is H1 Tag") , 
        React.createElement("h2" , {} , "This is h2 Tag")
    ]
);

const parent = React.createElement(
    "div" , 
    {id : "parent"} , 
    child
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);