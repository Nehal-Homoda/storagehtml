let btn = document.querySelector("#btn");
let result = document.querySelectorAll("h3");
btn.onclick = () => {
  localStorage.setItem("userName", document.querySelector("#txt1").value)
  localStorage.setItem("userAddress", document.querySelector("#txt2").value);
  localStorage.setItem("Age", document.querySelector("#txt3").value);
  result.forEach((item) => { item.classList.remove("hidden"); });
  result[0].innerText = `your userName is : ${localStorage.getItem("userName")}`;
  result[1].innerText = `your age is : ${localStorage.getItem("Age")}`
  result[2].innerText = `your address is : ${localStorage.getItem("userAddress")}`
}