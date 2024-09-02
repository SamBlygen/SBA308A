
export function displayVerse(data) {
  const verseDisplay = document.getElementById('verseDisplay');
  verseDisplay.textContent = `${data.reference} - ${data.text}`;
}


export function displayError(message) {
  const verseDisplay = document.getElementById('verseDisplay');
  verseDisplay.textContent = message;
}


export function updatePaginationControls(currentPage, totalPages, onPageChange) {
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


export function displaySavedVerses(savedVerses) {
  const savedVersesDisplay = document.getElementById('savedVersesDisplay');
  savedVersesDisplay.innerHTML = savedVerses.length ?
    savedVerses.map(v => `<p>${v}</p>`).join('') : '<p>No saved verses.</p>';
}
