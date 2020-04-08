<h1>Pokemon Trivia</h1>

<h4>Link</h4>
<p>https://cdvincent.github.io/TriviaGame/</p>

<h4>Technologies used</h4>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>Jquery</li>
</ul>

<h2>Description</h2>
<p>Pokemon Trivia is a trivia game that asks 5 questions to test your basic Pokemon knowledge. The landing page has a start button for when the user is ready to play. Once started, the game will ask the user a question, and they are given 10 seconds to answer. If the user answers correctly, they will be notified as such, and a happy Pikachu gif will play. If the user answers incorrectly, or does not answer the question, a confused Pikachu gif will play. Once all 5 questions are completed, the user will see their score.</p>

<h2>Development</h2>
<p>This application uses Jquery in order to hide/show divs that display the proper questions. Each question has a variable with the answer stored in it, and matches the user-clicked button's text to the current answer variable. The timers are set using the setTimeout and clearInterval methods. There are functions created for each question to set the answer and restart the counter/timer.