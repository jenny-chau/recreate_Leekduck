Recreate Leek Duck website

Leek Duck is a website all about Pokemon Go. It has information about the pokemon you could collect (including shiny pokemon), and information about the most recent news, events, research objectives, rewards, etc.

This project recreates a few of the pages of Leek Duck including the Home, Shiny, Research, and Egg pages using HTML, CSS, Bootstrap, and javascript (some functions not integrated into the website yet).

Bootstrap components used:
- Cards (Home page)
    - Used for featured sections of the website, currently not clickable since pages have not been created yet.
- Carousel (Home page)
    - Used to scroll through the news section
    - News pages not created, so currently not clickable
- Accordion (Research page)
    - Used to show the possible research rewards for completing specific research task
    - When user clicks on the research task, the possible rewards will display.
- Form (Shiny page)
    - Name and email input
- Table (Egg page)
    - Table of all the possible pokemon you could get when you hatch an egg, includs an image, name, and combat power range for each pokemon.

Javascript functions:
- `btnClicked(...)`
    - Uses `updateRegisteredCounter(...)` and `updateOwnedCounter(...)`
    - On the Shiny page, when the shiny pokemon are clicked, the border color changes. There are three different border colors before it resets to grey.
        - First click, the border turns green and the registered pokemon counter increases by 1.
        - Second click, the border turns blue and the owned counter increases by 1
        - Third click. the border turns red. None of the counters change.
        - Fourth click, the border returns to grey as it initially was, and the registered and owned counters decrease by 1 each (basically reseting for that specific shiny pokemon).
        - Border colors and counts cycle between these 4 states.
- `emailValidation(...)`
    - Validates whether the email entered is valid
    - Checks for presence of "@" and "." and the correct order
    - Splits the entered email based on "@" and "." and uses `hasEmptyString(...)` to further validate that the email has at least one character between the symbols
    - If the email is valid, the name and email entered from the form gets pushed to the name and email array database using `addToDatabase(...)`

Summary of the pages:
- Each page as the same navigation bar and footer. Title of the page on the top left loads the Home page. Navigation bar uses Bootstrap nav-toggler to improve responsiveness.
- Home page
    - Featured card section of popular topics
    - News section using Bootstrap carousel to scroll through the news.
- Shiny page
    - Header section with page title, name and email form for emailing the user the link to their saved shiny list (not functional yet), counter section for counting the number of shiny pokemon registered and owned by the user
    - Shiny pokemon that can be clicked to increase (and decrease) the counter.
- Research page
    - Header section describing the page
    - List of resarch tasks in the game
    - Uses Bootstrap accordion to display the possible rewards for completing the tasks
- Eggs page
    - Header section describing the page
    - Table of possible rewards for the different egg you could hatch in the game
    - Uses media queries for responsiveness