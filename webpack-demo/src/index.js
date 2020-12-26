import _ from "lodash";

const component = () => {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], "");

  return element;
};

// Lodash, now imported by this script
document.body.appendChild(component());
