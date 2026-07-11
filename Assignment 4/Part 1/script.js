// Grab references to the DOM elements we need
const nameInput = document.getElementById("custom-name");
const generateButton = document.querySelector(".generate");
const storyOutput = document.querySelector(".story");

// Helper: returns a random element from a given array
function randomValueFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Story ingredients.
const characters = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const places = ["the soup kitchen", "Disneyland", "the White House"];
const events = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and slithered away",
];

// Builds and returns a new random story as a string
function returnRandomStoryString() {
  const chosenCharacter = randomValueFromArray(characters);
  const chosenPlace = randomValueFromArray(places);
  const chosenEvent = randomValueFromArray(events);

  let storyText = `It was 94 Fahrenheit outside, so ${chosenCharacter} went for a walk. When they got to ${chosenPlace}, they stared in horror for a few moments, then ${chosenEvent}. Bob saw the whole thing, but was not surprised — ${chosenCharacter} weighs 300 pounds, and it was a hot day.`;

  return storyText;
}

// Listen for clicks on the generate button
generateButton.addEventListener("click", generateStory);

// Generates a story, applies personalization/unit conversion, and displays it
function generateStory() {
  let newStory = returnRandomStoryString();

  // Replace "Bob" with the user's entered name, if provided
  if (nameInput.value !== "") {
    const enteredName = nameInput.value;
    newStory = newStory.replace("Bob", enteredName);
  }

  // Convert to UK units if the checkbox is checked
  if (document.getElementById("uk").checked) {
    const weightInStone = `${Math.round(300 / 14)} stone`;
    const tempInCelsius = `${Math.round((94 - 32) * (5 / 9))} Celsius`;
    newStory = newStory.replace("300 pounds", weightInStone);
    newStory = newStory.replace("94 Fahrenheit", tempInCelsius);
  }

  // Display the finished story
  storyOutput.textContent = newStory;
  storyOutput.style.visibility = "visible";
}