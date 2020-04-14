//jshint esversion:6

"use strict";
let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mounten = document.getElementById("mounten");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener("scroll", function () {
    var value = window.scrollY;

    bg.style.top = value * 0.5 + "px";
    moon.style.left = -value * 0.5 + "px";
    mounten.style.top = -value * 0.05 + "px";
    road.style.top = value * 0.12 + "px";
    text.style.bottom = -value * 0.6 + "px";
});
