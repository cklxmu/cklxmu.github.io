const IMGSRC = "https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/HTML_basics/finished-test-page-small.png";
const IMGSRC2 = "https://github.com/bruceshao/lockfree/raw/main/images%2F%E9%94%81.jpg";

let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("我最喜欢巧克力冰淇淋了。");
} else {
  alert("但是巧克力才是我的最爱呀……");
}

let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world! " + iceCream;

function multiply(num1, num2) {
    return num1 * num2;
}

let x = 123;
let y = 10;
let newH1 = x + " * " + y + " = " + multiply(x,y);
alert(newH1);
document.querySelector("h1").textContent = newH1;

let clickCallback = () => {
    alert("llsdlfjlsdjlfkasjdklfldsakjflkdsa");
}

// document.querySelector("html").addEventListener("click", clickCallback);

let myImage = document.querySelector("img");

myImage.onclick = () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === IMGSRC) {
    myImage.setAttribute("src", IMGSRC2);
  } else {
    myImage.setAttribute("src", IMGSRC);
  }
};

let myButton = document.querySelector("button");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (myName != null) {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
}

localStorage.setItem("name", "hahahahaha");
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = function () {
    setUserName();
};