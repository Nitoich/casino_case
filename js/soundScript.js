el('#table').addEventListener('click', (event) => {
    console.log('table');
});

el('#person').addEventListener('click', (event) => {
    console.log('person');
    var sound = new Audio('sound/casino1.wav');
    sound.play();
});