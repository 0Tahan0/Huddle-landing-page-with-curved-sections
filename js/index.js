let form = document.querySelector("footer .subs");
let subsInp = form.querySelector(".email");
let messageBox = form.querySelector(".errorMessage");
form.onsubmit = (e) => {
  e.preventDefault();
  let val = subsInp.value.trim();
  let rgx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/gi;
  if (rgx.test(val)) {
    subsInp.parentElement.classList.remove("error");
  } else {
    subsInp.parentElement.classList.add("error");
    messageBox.textContent = "Check your email please";
  }
};
