/* eslint-disable no-param-reassign */
export default function runApp(el) {
  el.innerHTML = `<input></input>
    <button class="button-17 hidden" role="button" type="submit">Button</button>
    <p>111</p>
    <p>222</p>
    <p>333</p>`;

  const input = el.querySelector("input");
  const button = el.querySelector("button");
  button.hidden = true;

  function onInputChange() {
    if (input.value.length === 0) {
      button.classList.add("hidden");
    } else {
      button.classList.remove("hidden");
    }
  }

  function onButtonClick() {
    const p = document.createElement("p");
    p.innerHTML = input.value;
    el.appendChild(p);
    const pList = el.querySelectorAll("p");
    if (pList.length > 5) {
      el.removeChild(pList[0]);
    }
    input.value = "";
    button.classList.add("hidden");
  }

  input.addEventListener("input", onInputChange);
  button.addEventListener("click", onButtonClick);
}
