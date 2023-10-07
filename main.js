function createTutorialBlock(tutorial) {
    const block = document.createElement('div');
    block.classList.add('tutorial-block');

    const header = document.createElement('h2');
    header.classList.add('tutorial-header');
    header.textContent = tutorial.header;
    block.appendChild(header);

    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper');

    const gif = document.createElement('img');
    gif.src = tutorial.gifSrc;
    gif.alt = tutorial.gifAlt;
    gif.id = 'gif';
    // gif.loading = 'lazy';

    contentWrapper.appendChild(gif);

    block.appendChild(contentWrapper);
    return block;
}

document.addEventListener('DOMContentLoaded', function() {
    const tutorialSection = document.querySelector('.tutorial-section');

    tutorials.forEach(tutorial => {
        tutorialSection.appendChild(createTutorialBlock(tutorial));
    });

});