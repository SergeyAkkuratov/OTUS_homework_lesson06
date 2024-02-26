import { runApp } from "./runApp";

describe("runApp", () => {
  let el;
  let button;
  beforeEach(() => {
    el = document.createElement("div");
    runApp(el);
    button = el.querySelector("button");
  });

  function isButtonVisible() {
    console.log(button.classList);
    return !button.classList.contains("hidden");
  }

  function typeText(text) {
    let input = el.querySelector("input");
    input.value = text;
    input.dispatchEvent(new Event("input"));
  }

  function clearText() {
    typeText("");
  }

  function pressButton() {
    button.click();
  }

  function getParagraphs() {
    return [...el.querySelectorAll("p")].map((el) => el.innerHTML);
  }

  function getInputText() {
    return el.querySelector("input").value;
  }

  it("makes initial markup", () => {
    expect(el.querySelector("input")).not.toBe(null);
    expect(el.querySelector("button")).not.toBe(null);
    expect(el.querySelectorAll("p").length).toBe(3);
    expect(getParagraphs()).toEqual(["111", "222", "333"]);
  });

  it("shows button only if text presets", () => {
    expect(isButtonVisible()).toBe(false);
    typeText("123");
    expect(isButtonVisible()).toBe(true);
    clearText();
    expect(isButtonVisible()).toBe(false);
  });

  it("adds paragraph on button click", () => {
    typeText("456");
    pressButton();
    expect(getParagraphs().at(-1)).toBe("456");
    expect(getInputText()).toBe("");
    expect(isButtonVisible()).toBe(false);
  });

  it("adds paragraph on second button click", () => {
    typeText("456");
    pressButton();
    typeText("678");
    pressButton();
    expect(getParagraphs().at(-1)).toBe("678");
    expect(getInputText()).toBe("");
    expect(isButtonVisible()).toBe(false);
  });

  it("remove paragraph if they more then 5", () => {
    for(let i=4;i<7;i++){
      typeText(`${i}${i}${i}`);
      pressButton();
    }
    let paragraphs = getParagraphs();
    expect(paragraphs.length).toBe(5);
    expect(paragraphs[0]).toBe("222");
  })
});
