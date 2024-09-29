function calculateSidenotes(
    isLayoutDesktop = window.matchMedia("(min-width: 1000px)").matches
) {
    if (isLayoutDesktop) {
        const mainRect = document
            .querySelectorAll("main > article")[0]
            .getBoundingClientRect();
        const notes = document.querySelectorAll(".footnotes > ol > li");
        const numbers = Array.from(
            document.querySelectorAll("a[href*='user-content-fn']")
        );
        let previousNoteBottom = 0;
        for (const note of notes) {
            const number = numbers.find((n) => n.href.endsWith(note.id));
            if (number) {
                const numberRect = number.getBoundingClientRect();
                const top = Math.max(
                    numberRect.top - mainRect.top,
                    previousNoteBottom
                );
                note.setAttribute("style", `position: absolute; top: ${top}px`);

                const nodeRect = note.getBoundingClientRect();
                previousNoteBottom = nodeRect.bottom - mainRect.top;
            }
        }
    } else {
        const notes = document.querySelectorAll(".footnotes > ol > li");
        for (const note of notes) {
            note.setAttribute("style", ``);
        }
    }
}

function toggleFootnotes() {
    const notes = document.querySelectorAll(".footnotes > ol > li");
    const footnoteToggle = document.querySelector(".toggle-footnotes");

    // Toggle visibility
    // notes.forEach(note => {
    //     note.style.display = note.style.display === 'none' ? '' : 'none';
        
    // });

    // Toggle visibility of each footnote and its number
    notes.forEach(note => {
        // Toggle display style
        if (note.style.display === 'none') {
            note.style.display = '';
            note.classList.remove('hidden'); // Show footnote
        } else {
            note.style.display = 'none';
            note.classList.add('hidden'); // Hide footnote
        }
    });

    // Optionally adjust the footnotes container's visibility
    footnoteToggle.classList.toggle-footnotes("dark");

}

// Attach the toggle function to the button click
document.getElementById("toggle-footnotes").addEventListener("click", toggleFootnotes);

document.addEventListener("DOMContentLoaded", () => calculateSidenotes());
window.addEventListener("resize", () => calculateSidenotes());
window.addEventListener("beforeprint", () => calculateSidenotes(false));
window.addEventListener("afterprint", () => calculateSidenotes());

