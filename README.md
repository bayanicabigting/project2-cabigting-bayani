# Bungo Stray Dogs: BEAST

## Project Overview:
This project is an interactive text-based visual novel written entirely in Javascript, based on the light novel *Bungo Stray Dogs: BEAST* by mangaka Kafka Asagiri. This was originally a project I had started using the Ink narrative engine, but I retrofit it to work in Javascript.

Players play the role of Oda Sakunosuke, a detective who finds himself responsible for guiding a troubled young orphan through dangerous encounters involving the Port Mafia.

The game reacts to player decisions through branching dialogue and action choices. Each choice leads to different outcomes, including two Good Endings and one Bad Ending.

Player decisions influence story progression, character encounters, and final outcomes. Some dialogue and name tags also change dynamically based on previous actions using conditional flags.

## Game Structure:
The game is built using a node-based story structure, where each scene is represented as an object containing:
- Story text
- Optional speaker names
- Background images
- Character sprites
- Sound effects
- Player choices
- Conditional dialogue

Each player decision moves the game to a new node, creating branching paths that lead to different endings.

The program uses these Javascript components:
- Objects: to store story nodes and game state
- Arrays: to store sprites, choices, and conditional text
- Functions: to control rendering, logic, and transitions
- DOM Manipulation: to dynamically update story text, backgrounds, sprites, and buttons

## Psuedocode/Logic Structure:
Here is the simplified game logic structure:

    Start Game

    Initialize game state
        Set current node to "intro"

    Display current node

    IF node has background
        Change background

    IF node has sprites
        Display sprites

    IF node has speaker
        Display speaker name

    IF node has conditional speaker
        Check flag
        Display correct speaker name

    Combine base text + conditional text

    Display text using typing animation

    Wait until text finishes

    Display player choices
    
    When player clicks a choice:
        IF next node is END
            Show end screen
        ELSE
            Update game state
            Set current node
            Render next node

    REPEAT until ending is reached

## Final Notes
Completing this project was very challenging but rewarding. I loved being able to transform my work-in-progress game from a simple scrolling narrative text to a more polished, visual novel-style interface. I had to pull an all-nighter in order to finish it in time, but I hope the final product is enjoyable.

P.S. I recommend watching or reading *Bungo Stray Dogs* if you enjoy supernatural or mystery anime. The series is very close to my heart, and watching it indirectly led to me marrying my wife.