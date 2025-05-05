import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

let quien = ["El vagabundo", "Un champiñon","El tren","El elfo"];
let accion = ["ha robado","ha atropellado","ha saltado","ha disparado"];
let que = ["una vieja","mis deberes","a mi gato","mi ramen"];
let cuando = ["al crepúsculo","en la final de parchís","cuando veia Naruto","mientras hacia el pino"];

let aleatorioquien = Math.floor(Math.random() * quien.length);
let aleatorioaccion = Math.floor(Math.random() * accion.length);
let aleatorioquque = Math.floor(Math.random() * que.length);
let aleatoriocuando = Math.floor(Math.random() * cuando.length);

let excuse = `${quien[aleatorioquien]} ${accion[aleatorioaccion]} ${que[aleatorioquque]} ${cuando[aleatoriocuando]}`;

let parrafo = document.getElementById("excuse");
parrafo.innerText = excuse;
}
