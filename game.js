const storyText = document.getElementById("story-text");
const choices = document.getElementById("choices");

function chooseOption(option) {
     // Clear existing animations
     storyText.style.opacity = '0';
    
     // Small delay for transition
     setTimeout(() => {
    switch(option) {
        // (Insert existing cases here)
            // Example for smooth content change:
        case 'explore':
            storyText.innerHTML = "You decide to explore the museum. The hallway splits into three paths.";
            choices.innerHTML = `
                <button onclick="chooseOption('library')">Enter the Library</button>
                <button onclick="chooseOption('gallery')">Go to the Gallery</button>
                <button onclick="chooseOption('basement')">Descend into the Basement</button>`;
            break;
        case 'leave':
            storyText.innerHTML = "You attempt to leave, but the door is locked. You're trapped inside the museum...";
            choices.innerHTML = `<button onclick="chooseOption('explore')">Explore the Museum</button>`;
            break;
        case 'library':
            storyText.innerHTML = "You enter the library, filled with ancient books. The ghost of the curator appears...";
            choices.innerHTML = `
                <button onclick="chooseOption('trustGhost')">Trust the Ghost</button>
                <button onclick="chooseOption('fleeLibrary')">Flee the Library</button>`;
            break;
        case 'gallery':
            storyText.innerHTML = "The gallery is filled with eerie paintings. You hear footsteps behind you...";
            choices.innerHTML = `
                <button onclick="chooseOption('hide')">Hide behind a statue</button>
                <button onclick="chooseOption('confront')">Confront the intruder</button>`;
            break;
        case 'basement':
            storyText.innerHTML = "The basement is dark and damp. You see a locked door with strange markings...";
            choices.innerHTML = `
                <button onclick="chooseOption('decipher')">Try to Decipher the Markings</button>
                <button onclick="chooseOption('searchKey')">Search for a Key</button>`;
            break;
        case 'trustGhost':
            storyText.innerHTML = "The ghost leads you to a hidden passage behind a bookshelf. Will you follow?";
            choices.innerHTML = `
                <button onclick="chooseOption('followGhost')">Follow the Ghost</button>
                <button onclick="chooseOption('stay')">Stay and Search the Library</button>`;
            break;
        case 'fleeLibrary':
            storyText.innerHTML = "You flee the library, but the ghost's voice echoes in your mind, warning you of a trap...";
            choices.innerHTML = `<button onclick="chooseOption('explore')">Continue Exploring</button>`;
            break;
        case 'hide':
            storyText.innerHTML = "You hide behind a statue as the footsteps grow louder. It's the rival explorer!";
            choices.innerHTML = `
                <button onclick="chooseOption('spy')">Spy on the Explorer</button>
                <button onclick="chooseOption('confront')">Confront the Explorer</button>`;
            break;
        case 'confront':
            storyText.innerHTML = "You confront the intruder—it’s the rival explorer, who challenges you to a race to the artifact!";
            choices.innerHTML = `
                <button onclick="chooseOption('acceptChallenge')">Accept the Challenge</button>
                <button onclick="chooseOption('declineChallenge')">Decline and Set a Trap</button>`;
            break;
        case 'decipher':
            storyText.innerHTML = "You decipher the markings and reveal a secret about the artifact's location. But it’s not what it seems...";
            choices.innerHTML = `
                <button onclick="chooseOption('continue')">Continue the Search</button>
                <button onclick="chooseOption('reconsider')">Reconsider Your Next Move</button>`;
            break;
        case 'searchKey':
            storyText.innerHTML = "You find a key hidden in a dusty corner, but as you pick it up, the room begins to shake...";
            choices.innerHTML = `
                <button onclick="chooseOption('useKey')">Use the Key on the Door</button>
                <button onclick="chooseOption('run')">Run Back Upstairs</button>`;
            break;
        case 'followGhost':
            storyText.innerHTML = "You follow the ghost down the hidden passage. It leads you to a secret vault...";
            choices.innerHTML = `
                <button onclick="chooseOption('enterVault')">Enter the Vault</button>
                <button onclick="chooseOption('turnBack')">Turn Back to the Library</button>`;
            break;
        case 'stay':
            storyText.innerHTML = "You decide to stay in the library and search for more clues, but the atmosphere grows increasingly oppressive...";
            choices.innerHTML = `<button onclick="chooseOption('searchLibrary')">Search the Library</button>`;
            break;
        case 'spy':
            storyText.innerHTML = "You spy on the rival explorer and overhear a conversation about a hidden trap...";
            choices.innerHTML = `
                <button onclick="chooseOption('springTrap')">Set Off the Trap</button>
                <button onclick="chooseOption('followExplorer')">Follow the Explorer</button>`;
            break;
        case 'acceptChallenge':
            storyText.innerHTML = "You accept the explorer's challenge. The race to the artifact begins!";
            choices.innerHTML = `<button onclick="chooseOption('race')">Start the Race</button>`;
            break;
        case 'declineChallenge':
            storyText.innerHTML = "You decline the challenge and set a trap instead. The explorer might fall right into it...";
            choices.innerHTML = `<button onclick="chooseOption('setTrap')">Set the Trap</button>`;
            break;
        case 'useKey':
            storyText.innerHTML = "You use the key to unlock the door. Inside, you find the artifact, but the room begins to collapse!";
            choices.innerHTML = `
                <button onclick="chooseOption('grabArtifact')">Grab the Artifact and Run</button>
                <button onclick="chooseOption('leaveArtifact')">Leave the Artifact and Escape</button>`;
            break;
        case 'run':
            storyText.innerHTML = "You run back upstairs, leaving the key behind. The shaking stops, but something feels off...";
            choices.innerHTML = `<button onclick="chooseOption('explore')">Continue Exploring</button>`;
            break;
        case 'enterVault':
            storyText.innerHTML = "You enter the vault, where the artifact is displayed on a pedestal. But as you approach, the guardian awakens...";
            choices.innerHTML = `
                <button onclick="chooseOption('faceGuardian')">Face the Guardian</button>
                <button onclick="chooseOption('fleeVault')">Flee the Vault</button>`;
            break;
        case 'turnBack':
            storyText.innerHTML = "You turn back, deciding it’s too dangerous to follow the ghost. But as you leave, the door to the vault slams shut...";
            choices.innerHTML = `<button onclick="chooseOption('explore')">Continue Exploring</button>`;
            break;
        case 'faceGuardian':
            storyText.innerHTML = "You decide to face the guardian. It asks you a riddle—solve it, and the artifact is yours.";
            choices.innerHTML = `
                <button onclick="chooseOption('solveRiddle')">Attempt to Solve the Riddle</button>
                <button onclick="chooseOption('flee')">Flee the Vault</button>`;
            break;
        case 'solveRiddle':
            storyText.innerHTML = "You solve the riddle and the guardian deems you worthy. The artifact is yours! You successfully escape the museum.";
            choices.innerHTML = `<button onclick="chooseOption('startOver')">Start Over</button>`;
            break;
        case 'startOver':
            storyText.innerHTML = "You arrive at the museum, the storm howling behind you as the door slams shut...";
            choices.innerHTML = `
                <button onclick="chooseOption('explore')">Explore the Museum</button>
                <button onclick="chooseOption('leave')">Try to Leave</button>`;
            break;
        // Add more cases for other scenarios and endings
        default:
            storyText.innerHTML = "The story continues...";
            choices.innerHTML = `<button onclick="chooseOption('explore')">Start Over</button>`;
            
            // (Continue with other options)
        }
        
        // Fade-in effect after content change
        storyText.style.opacity = '1';
    }, 300);
}

// Optionally, you can add a simple inventory system or scoring:
let inventory = [];
let score = 0;

function addItemToInventory(item) {
    inventory.push(item);
    alert(`You have acquired: ${item}`);
}

function updateScore(points) {
    score += points;
    alert(`Your score is now: ${score}`);
}
