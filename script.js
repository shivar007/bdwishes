function changeGreeting() {
    const nameElement = document.getElementById("name");
    const wishNote = document.querySelector(".wish-note");
    
    nameElement.textContent = "Adee"; // Change "John Doe" to the actual birthday person's name.
    wishNote.textContent = "May all your dreams come true, and may this year be the best one yet!";
}
