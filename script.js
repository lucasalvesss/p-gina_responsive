 const items = document.querySelector(".flex-container");

  for (let i = 1; i <= 7; i++) {
    const square = document.createElement("div");
    square.appendChild(document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores error, nulla tempora quam quae repellat iure, quia tenetur animi pariatur quas? Sit odit voluptas ullam minima, earum aut corrupti quod?"));
    square.classList.add("square");
    items.appendChild(square);
  }