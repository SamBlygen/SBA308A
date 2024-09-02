import { searchVerse, saveVerse, updateVerse } from './api.js';

window.onload = function() {
  alert("Welcome to Verse Bible Finder!");
  alert(" Try some of our favorites Isaiah 40:28-31, Roman 15:13, Proverbs 3:5-6")
};


function displayVerse(data) {
  const verseDisplay = document.getElementById('verseDisplay');
  verseDisplay.textContent = `${data.reference} - ${data.text}`;
}

function displayError(message) {
  const verseDisplay = document.getElementById('verseDisplay');
  verseDisplay.textContent = message;
}

function updatePaginationControls(currentPage, totalPages, onPageChange) {
  const paginationControls = document.getElementById('pagination-controls');
  paginationControls.innerHTML = '';

  for (let page = 1; page <= totalPages; page++) {
    const button = document.createElement('button');
    button.textContent = page;
    button.className = 'pagination-button';
    button.disabled = page === currentPage;
    button.addEventListener('click', () => onPageChange(page));
    paginationControls.appendChild(button);
  }
}


function displaySavedVerses(savedVerses) {
  const savedVersesDisplay = document.getElementById('savedVersesDisplay');
  savedVersesDisplay.innerHTML = savedVerses.length ?
    savedVerses.map(v => `<p>${v}</p>`).join('') : '<p>No saved verses.</p>';
}


function saveVerseLocally(verse) {
  const savedVerses = JSON.parse(localStorage.getItem('savedVerses')) || [];
  savedVerses.push(verse);
  localStorage.setItem('savedVerses', JSON.stringify(savedVerses));
  alert('Verse saved successfully!');
}

function getSavedVerses() {
  return JSON.parse(localStorage.getItem('savedVerses')) || [];
}


document.getElementById('search-button').addEventListener('click', async () => {
  const query = document.getElementById('search-input').value.trim();
  if (query) {
    try {
      const verseData = await searchVerse(query);
      displayVerse(verseData);
      updatePaginationControls(1, 1, async (page) => {
        const paginatedData = await searchVerse(query, page);
        displayVerse(paginatedData);
      });
    } catch (error) {
      alert('No verse to save.')
    }
  }
});

document.getElementById('save-verse-button').addEventListener('click', () => {
  const verseDisplay = document.getElementById('verseDisplay').textContent;
  if (verseDisplay) {
    saveVerseLocally(verseDisplay);
    alert('Verse saved successfully!');
  } else {
    alert('No verse to save.');
  }
});

document.getElementById('view-saved-button').addEventListener('click', () => {
  const savedVerses = getSavedVerses();
  displaySavedVerses(savedVerses);
 
  savedVersesDisplay.style.visibility = 'visible';
});


displaySavedVerses(getSavedVerses());
