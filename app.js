import { fetchVerse } from "./api.js";


function displayVerse(vere){
  const verseDisplay = document.getElementById("verseDisplay");
  verseDisplay.textContent = text;
}

async function fetchRandomVerse(){
  const books = ["Genesis", "Exodus","Levitus","Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1st Samuel", "2nd Samuel","1 Kings", "2nd Kings", "1st Chronicles", "2nd Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isiah", "Jeremiah","Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah","Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans","1st Corinthians", "2nd Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1st Thessalonians", "2nd Thessalonians", "1st Timothy", "2nd Timothy","Titus", "Philemon", "Hebrews","James", "1st Peter", "2nd Peter", "1st John", "2nd John", "3rd John", "Jude", "Revelations"];
  const book = books[Math.floor(Math.random() * books.length)];
  const chapter = Math.floor(Math.random()* 150) + 1;
  const verse = Math.floor(Math.random() * 119) + 1;
  const url = `https://bible-api.com/romans%2012:1-2,5-7,9,13:1-9&10`;

  try{
const verseData = await fetchVerse(url);
displayVerse(verseData.text);
  } catch(error){
displayVerse("Fetching error");
console.log("Error fetching  Verse")
  }

}
fetchRandomVerse();

async function getSingleVerse(){
  const single = prompt("Search any Verse");
  if(single) {
    const url = `https://bible-api.com/${reference}`;
    await displayVerseFromUrl(url);
  }else{
    console.log("Not provided")
  } 

  }
  getSingleVerse();
