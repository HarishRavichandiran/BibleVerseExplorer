// Function to fetch Bible Verse
function fetchBibleVerse() {
    const verseInput = document.getElementById('verseInput').value;
    
    if (verseInput) {
        fetch(`https://bible-api.com/${verseInput}`)
            .then(response => response.json())
            .then(data => {
                // Display Bible Verse
                const bibleVerseContainer = document.getElementById('bibleVerseContainer');
                bibleVerseContainer.innerHTML = `<h2>${data.reference}</h2><p>${data.text}</p>`;
            })
            .catch(error => {
                console.error('Error fetching Bible Verse:', error);
                // Display error message
                const bibleVerseContainer = document.getElementById('bibleVerseContainer');
                bibleVerseContainer.innerHTML = '<p class="text-danger">Error fetching Bible Verse. Please check your input.</p>';
            });
    }
}

// Prevent form submission on Enter key press
document.getElementById('bibleVerseForm').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        fetchBibleVerse();
    }
});
