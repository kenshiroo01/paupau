onload = () =>{
    document.body.classList.remove("container");
};
const notes = document.querySelectorAll('.note');
const noteDetails = document.querySelector('.note-details');

notes.forEach(note => {
  // Add click event listener to open note details
  note.addEventListener('click', () => {
    const content = note.dataset.content; // Get content from data-content attribute
    noteDetails.textContent = content; // Display content in noteDetails
    noteDetails.classList.remove('hidden'); // Make noteDetails visible
  });
});

// Add click event listener to close note details (optional)
noteDetails.addEventListener('click', () => {
  noteDetails.textContent = ''; // Clear content
  noteDetails.classList.add('hidden'); // Hide noteDetails
});