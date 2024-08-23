let left = document.querySelector(".left");
let right = document.querySelector(".right");

let basket1 = document.getElementsByClassName("basket1");
let basket2 = document.getElementsByClassName("basket2");

let message = document.querySelector(".message"); 
message.style.textAlign = "center";
let count1 = 100;
let count2 = 0;
basket1[0].innerText = count1;
basket2[0].innerText = count2;
left.onclick = () => {
    if(count2 > 0){
        count1++;
        basket1[0].innerText = count1;
        count2--;
        basket2[0].innerText = count2;
    }
    else{
        message.innerText = "basket 2 is empty";
    }
   
}

right.onclick = () => {
    if(message.innerText !== ""){
        message.innerText = "";
    }
    count1--;
    basket1[0].innerText = count1;
    count2++;
    basket2[0].innerText = count2;
};