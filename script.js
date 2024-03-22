// Mad Lib with JavaScript

// Event Listener
document.getElementById("mad-lib-btn").addEventListener("click", buildMadLib);

// Event Function
function buildMadLib() {
  // Input
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let presentTenseVerb = document.getElementById("present-tense-verb").value;
  let noun = document.getElementById("noun").value;
  let secondNoun = document.getElementById("second-noun").value;
  let activeVerb = document.getElementById("active-verb").value;

  // Process
  let result = `"There are too many ${pluralNoun} on this ${adjective} airplane!",
  I screamed. "Somebody has to ${presentTenseVerb} on the ${noun} to solve this problem."
  Then suddenly, a ${secondNoun} came ${activeVerb} out of the plane's window!`;

  // Background
  document.getElementById("the-html").style.background =
    "url(images/plane.jpg)";
  document.getElementById("the-html").style.backgroundSize = "cover";
  document.getElementById("the-html").style.backgroundRepeat = "no-repeat";

  // Text
  document.getElementById("end-result").style.fontFamily =
    "Arial, Helvetica, sans-serif";
  document.getElementById("mad-lib-h2").style.color = "midnightblue";
  document.getElementById("colorh1").style.color = "midnightblue";
  document.getElementById("colorh2").style.color = "midnightblue";
  document.getElementById("colorp").style.color = "midnightblue";
  document.querySelector(".inputcolor").style.color = "midnightblue";

  /// Input colors
  let allInputs = document.querySelectorAll(".inputcolor");
  for (let i = 0; i < 6; i++) {
    allInputs[i].style.color = "midnightblue";
  }

  // Border
  document.getElementById("end-result").style.borderColor = "orange";
  document.getElementById("end-result").style.borderRadius = "0px";

  // Output
  document.getElementById("end-result").innerHTML = result;
}

// My Mad Lib

// Event Listener
document
  .getElementById("mad-lib-2-btn")
  .addEventListener("click", buildMadLibTwo);

// Event Function
function buildMadLibTwo() {
  // Input
  pluralNoun = document.getElementById("plural-noun").value;
  adjective = document.getElementById("adjective").value;
  presentTenseVerb = document.getElementById("present-tense-verb").value;
  noun = document.getElementById("noun").value;
  secondNoun = document.getElementById("second-noun").value;
  activeVerb = document.getElementById("active-verb").value;

  // Process
  let result2 = `After the ${pluralNoun} started ${activeVerb} NASA, it didn't take long
  at all for the ${noun} industry to take action and start creating "${adjective.toUpperCase()} ${secondNoun.toUpperCase()}"
  to ${presentTenseVerb} to Jupiter.`;

  // Background
  document.getElementById("the-html").style.background =
    "url(images/jupiter.jpg)";
  document.getElementById("the-html").style.backgroundSize = "cover";
  document.getElementById("the-html").style.backgroundRepeat = "no-repeat";
  document.getElementById("the-html").style.backgroundPositionY = "-300px";

  // Text
  document.getElementById("end-result").style.fontFamily =
    "Verdana, Geneva, Tahoma, sans-serif";
  document.getElementById("mad-lib-h2").style.color = "orangered";
  document.getElementById("colorh1").style.color = "orangered";
  document.getElementById("colorh2").style.color = "orangered";
  document.getElementById("colorp").style.color = "orangered";

  /// Input colors
  allInputs = document.querySelectorAll(".inputcolor");
  for (let i = 0; i < 6; i++) {
    allInputs[i].style.color = "orangered";
  }

  // Border
  document.getElementById("end-result").style.borderColor = "cornflowerblue";
  document.getElementById("end-result").style.borderRadius = "10px";

  // Output
  document.getElementById("end-result").innerHTML = result2;
}
