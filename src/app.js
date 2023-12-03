const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = '';

    // Instead of forloop use Map method
    // Code here
    detailedPlayers=players.map((element,i) => {
        return{
            name: element,
            strength: getRandomStrength(),
            img: `images/super-${i+1}.png`,
            type: i%2==0 ? "hero" : "villain"
        }
    })


    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    fragment=players.filter((element,i) => {
         return element.type == type;
    })
    fragment=fragment.map((element,i) => {
        return `<div class="player">
            <img src="${element.img}">
            <div class="name">${element.name}</div>
            <div class="strength">${element.strength}</div>
        </div>`
    })
    

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}