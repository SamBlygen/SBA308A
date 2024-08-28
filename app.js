import { fetchVerse } from "./api.js";

function displayVerse(text){
  const verseDisplay = docement.getElementById("verseDisplay");
  verseDisplay.textContent = text;
}