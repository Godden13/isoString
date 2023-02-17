const firstInputItem = document.getElementById("word1");
const secondInputItem = document.getElementById("word2");
const display = document.getElementById("display");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (firstInputItem.value === "" || secondInputItem.value === "") {
    display.innerHTML = "please input a string";
  } else {
    return (display.innerHTML = isoString());
  }
});

function isoString() {
  const map = new Map();
  const set = new Set();
  let string1 = firstInputItem.value;
  let string2 = secondInputItem.value;
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();
  if (string1.length !== string2.length) {
    return (display.innerHTML =
      "please input strings of the same length.\n" + "can never be isomorphic");
  }

  for (let i = 0; i < string1.length; i++) {
    const char1 = string1.charAt(i);
    const char2 = string2.charAt(i);
    if (map.has(char1)) {
      if (map.get(char1) !== char2) {
        return "false!! the strings are not isomorphic";
      }
    } else {
      if (set.has(char2)) {
        return false;
      }
      map.set(char1, char2);
      set.add(char2);
    }
  }
  return "true!! yes the strings are isomorphic";
}
