const greetings = ['bem vindos!', 'welcome!', '¡bienvenidos!', 'bienvenue!'];
let count = 0;
const element = document.getElementById("change");
const iteration = () => {
  element.innerHTML = greetings[parseInt(count / 2, 10) % greetings.length];
  if (count % 2 !== 0) {
    element.classList.add("out");
  } else {
    element.classList.remove("out");
  }
  count++;
  if (count === greetings.length * 2) {
      count = 0;
  }
};
let inthandle = setInterval(iteration, 1500);
iteration();