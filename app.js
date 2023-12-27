let menu_sec = document.getElementById("menu_sec");
let left_arrow = document.getElementById("left_arrow");
let right_arrow = document.getElementById("right_arrow");

right_arrow.addEventListener('click', () =>{
    menu_sec.scrollLeft += 115;
});

left_arrow.addEventListener('click', () =>{
    menu_sec.scrollLeft -= 115;
});



let videos = document.getElementsByTagName("video")[0];
let plays = document.getElementsByClassName("play")[0];
let pauses = document.getElementsByClassName("pause")[0];
let screens = document.getElementsByClassName("screen")[0];


plays.addEventListener('click', () =>{
    videos.play();
    plays.style.display = "none"
    screens.style.display = "none"
    pauses.style.display = "flex"
})
pauses.addEventListener('click', () =>{
    videos.pause();
    plays.style.display = "flex"
    screens.style.display = "flex"
    pauses.style.display = "none"
})
pauses.addEventListener('', () =>{
    plays.style.display = "flex"
    screens.style.display = "flex"
    pauses.style.display = "none"
})
