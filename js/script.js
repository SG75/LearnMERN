const greetSpan = document.getElementById("userName");

function greet() {
  const name = document.getElementById("nameInput").value;
  greetSpan.innerText = name;
}

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.style.backgroundColor = box.textContent.toLowerCase();
    if (box.textContent.toLowerCase() === "yellow") {
      box.style.color = "black";
    } else {
      box.style.color = "white";
    }
  });
});
