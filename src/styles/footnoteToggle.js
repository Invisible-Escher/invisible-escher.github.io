function toggleFootnotes() {
    const notes = document.querySelectorAll(".footnotes > ol > li");
    const footnotesContainer = document.querySelector(".footnotes");

    // Toggle visibility
    notes.forEach(note => {
        note.style.display = note.style.display === 'none' ? '' : 'none';
    });

    // Optionally adjust the footnotes container's visibility
    footnotesContainer.classList.toggle('hidden');
}

// Attach the toggle function to the button click
document.getElementById("toggle-footnotes").addEventListener("click", toggleFootnotes);

// Recalculate sidenotes on window click
window.addEventListener("click", () => calculateSidenotes());