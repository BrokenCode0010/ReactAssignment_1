//Using HTMLDOM for creating an element
/* const heading = document.createElement("h1");
heading.innerHTML = "Creating React Elements!";
document.body.appendChild(heading); */

//Using ReactDOM for creating and element

//Nested Elements
const list1 = React.createElement("li", null, "Item 1");
const list2 = React.createElement("li", null, "Item 2");
const list3 = React.createElement("li", null, "Item 3");
const list4 = React.createElement("li", null, "Item 4");
const list5 = React.createElement("li", null, "Item 5");

const unorderedList = React.createElement(
  "ul",
  null,
  list1,
  list2,
  list3,
  list4,
  list5
);

const heading = React.createElement(
  "h1",
  { className: "heading1" },
  "Creating React Elements!",
  unorderedList
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
