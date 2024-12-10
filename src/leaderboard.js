this.input.keyboard.on('keydown', (event) => {

    // Implement backspace
    if (event.keyCode === 8 && username.length > 0) {
        username = username.slice(0, -1);
        
    // Add any other characters you want to allow    
    } else if (event.key.length === 1 && event.key.match(/[a-zA-Z0-9\s\-_]/)) {
        username += event.key;
    }
});