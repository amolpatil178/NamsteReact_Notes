import React from "react";
import  ReactDOM  from "react-dom/client";

// React Element using JSX
const jsxHeading = <h1 id="heading" className="heading">Namaste React!</h1>;

// React functional component
const HeadingComponent = () => {
   return <h1 className="heading">This is functional component</h1>;
}

const InnerContainer = () => (
   <div>
        <HeadingComponent />
        <p>Namsate React</p>
   </div> 
)

const react_root = ReactDOM.createRoot(document.getElementById("root_react"));

react_root.render(<InnerContainer />);