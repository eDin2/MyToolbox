// jshint esversion:6

"use strict";

function toggle() {
    var sec = document.getElementById("sec");
    var nav = document.getElementById("navigation");

    sec.classList.toggle('active');
    nav.classList.toggle('active');
}