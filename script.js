let btns = document.querySelector(".btn");
let btns1 = document.querySelector(".btn1");
let open = document.querySelector(".container");
let next = document.querySelector(".container1");

btns.onclick = () => {
    if (btns.textContent === "White") {
        open.textContent = "btns";
    }
    else {
        next.style.display = "flex";
        next.textContent = "btns1";
    }
}
console.log(btns);
