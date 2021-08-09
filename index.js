// Items to animate
const cardOutside = document.querySelector('.cardOutide');
const cardInside = document.querySelector('.cardInside');


// Track card on mousemove ib container
cardOutside.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 7;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 7;
    cardInside.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
    // Test if mouse enters cardOutside
    cardOutside.addEventListener('mouseenter', e => {
        // Add the transition for a smooth transition
        cardInside.style.transition = 'all 0.09s ease';
        // Jump to the wait funktion
        waitBeforeContinue();
    });
    // Wait funtion
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const waitBeforeContinue = async () => {
        // Wait before executing netxt command
        await delay(90);
        // Remove the transition style after transition in
        cardInside.style.transition = 'none';
    };

// Animate Out
cardOutside.addEventListener('mouseleave', e => {
    cardInside.style.transition = 'all 0.5s ease';
    cardInside.style.transform = `rotateY(0deg) rotateX(0deg)`
})