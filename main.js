var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');


var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

var insertY = ["the soup kitchen", "Disneyland", "the White House"];

var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

/**
 * event listeners
 */
randomize.addEventListener('click', result);

/**
 * event handlers
 */
function result() {
    var newStory = storyText;

    var zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(/:insertz:/g, zItem);


    var xItem = randomValueFromArray(insertX);
    newStory = newStory.replace(/:insertx:/g, xItem);


    var yItem = randomValueFromArray(insertY);
    newStory = newStory.replace(/:inserty:/g, yItem);


    if (document.getElementById('customname') !== "") {
        newStory = newStory.replace('Bob', customName.value);
    }

    if (document.getElementById("uk").checked) {
        var weight = (Math.round(300 * 0.0714286) + " tons");
        newStory = newStory.replace('300 pounds', weight);
        var temperature = (Math.round((94 - 32) * 5 / 9) + " Centrigrades");
        newStory = newStory.replace('94 fahrenheit', temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}

/**
 * helpers
 */
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];


}