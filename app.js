const heart = document.getElementsByClassName("fa-heart")[0];
const likes = document.getElementById("likes-amount");
const signin = document.getElementById("sign-in");
const user = document.getElementById("sign-up");
let liked = false;
let msg = "Currently no database linked, please use our old imaginary site";
heart.addEventListener("click", function() {
    let current = parseInt(likes.innerText);
    !liked ? change(1, true) : change(-1, false);
    function change(inc, bool){
        liked ? heart.style.color = "#6b0000": heart.style.color = "#e50000";
        liked = bool;
        current += inc;
    }
    likes.innerText = current;
});
user.addEventListener("click", function(){
    alert(msg)});
signin.addEventListener("click", function(){
    alert(msg)});