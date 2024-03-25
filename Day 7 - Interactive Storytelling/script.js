function choice1() {
    document.getElementById('story-text').textContent = "You chose to go left. You encounter a mysterious cave entrance.";
    document.getElementById('choices').innerHTML = "<button onclick='continueStory1()'>Enter the cave</button>";
    document.getElementById('images').innerHTML = "<img src='https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg?cs=srgb&dl=pexels-pixabay-163872.jpg&fm=jpg' alt='Cave Entrance'>";
}

function choice2() {
    document.getElementById('story-text').textContent = "You chose to go right. You stumble upon a hidden garden.";
    document.getElementById('choices').innerHTML = "<button onclick='continueStory2()'>Explore the garden</button>";
    document.getElementById('images').innerHTML = "<img src='https://images.pexels.com/photos/60628/flower-garden-blue-sky-hokkaido-japan-60628.jpeg?cs=srgb&dl=pexels-pixabay-60628.jpg&fm=jpg' alt='Hidden Garden'>";
}


function continueStory1() {
    document.getElementById('story-text').textContent = "As you enter the cave, you see a faint light in the distance.";
    document.getElementById('choices').innerHTML = "<button onclick='continueStory3()'>Follow the light</button>";
    document.getElementById('images').innerHTML = "<img src='https://images.pexels.com/photos/255464/pexels-photo-255464.jpeg?cs=srgb&dl=pexels-pixabay-255464.jpg&fm=jpg' alt='Faint Light in Cave'>";
}

function continueStory2() {
    document.getElementById('story-text').textContent = "You wander through the garden, marveling at the beauty of nature.";
    document.getElementById('choices').innerHTML = "<button onclick='continueStory4()'>Continue exploring</button>";
    document.getElementById('images').innerHTML = "<img src='https://media.istockphoto.com/id/627585412/photo/beautiful-panorama-of-green-city-park-at-dawn.jpg?s=612x612&w=0&k=20&c=n8eDEZGEsv2_-E61W0ySyUwxyZ9rDyAP202xmB1dzQI=' alt='View of the Garden'>";
}

function continueStory3() {
    document.getElementById('story-text').textContent = "You follow the light and find a hidden treasure chest!";
    document.getElementById('choices').innerHTML = "<button onclick='continueStory5()'>Open the chest</button>";
    document.getElementById('images').innerHTML = "<img src='https://static.vecteezy.com/system/resources/thumbnails/039/578/606/small_2x/ai-generated-treasure-chest-on-the-beach-photo.jpg' alt='Treasure Chest'>";
}

function continueStory4() {
    document.getElementById('story-text').textContent = "You come across a quaint little cottage nestled among the trees.";
    document.getElementById('choices').innerHTML = "<button onclick='continueStory6()'>Knock on the door</button>";
    document.getElementById('images').innerHTML = "<img src='https://images.pexels.com/photos/3586621/pexels-photo-3586621.jpeg?cs=srgb&dl=pexels-diana-agafonova-3586621.jpg&fm=jpg' alt='Quaint Cottage'>";
}

function continueStory5() {
    document.getElementById('story-text').textContent = "Inside the chest, you find a map leading to a hidden island!";
    document.getElementById('choices').innerHTML = "<button onclick='endStory()'>End Story</button>";
    document.getElementById('images').innerHTML = "<img src='https://w0.peakpx.com/wallpaper/742/358/HD-wallpaper-the-hidden-beach-marieta-island-mexico-beach-hidden-mexico-nature.jpg' alt='Treasure Map'>";
}

function continueStory6() {
    document.getElementById('story-text').textContent = "A friendly old wizard answers the door and invites you in for tea.";
    document.getElementById('choices').innerHTML = "<button onclick='endStory()'>End Story</button>";
    document.getElementById('images').innerHTML = "<img src='https://w.forfun.com/fetch/27/277a2d51c7398dc8953f36dba891ee7d.jpeg' alt='Friendly Wizard'>";
}
function endStory() {
    document.getElementById('story-text').textContent = "The end. Have a Good Day. Thanks for playing....!";
    document.getElementById('choices').innerHTML = "";
    document.getElementById('images').innerHTML = "<img src='https://media.istockphoto.com/id/1391352876/vector/thank-you-colorful-typography-banner.jpg?s=612x612&w=0&k=20&c=jzm-E-RXHtLDQNxs_8RNe_388gbl7t7dEsYuyC0xtF8=' alt='THANK YOU'>";
}
