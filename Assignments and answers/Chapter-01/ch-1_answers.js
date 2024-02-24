const heading = document.createElement('h4');
heading.innerHTML = "This heading is created using JavaScript";

const root = document.getElementById('root_js');
root.appendChild(heading);

const react_heading = React.createElement("div",{id: "react_container"},React.createElement("h4",{id: "react_h4"},"This heading is created using React"));
const react_root=ReactDOM.createRoot(document.getElementById('root_react'));
react_root.render(react_heading);
