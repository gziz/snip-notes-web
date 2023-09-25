function createTutorialBlock(tutorial) {
    const block = document.createElement('div');
    block.classList.add('tutorial-block');

    const header = document.createElement('h2');
    header.classList.add('tutorial-header');
    header.textContent = tutorial.header;
    block.appendChild(header);

    const selectionBar = document.createElement('div');
    selectionBar.classList.add('selection-bar');
    const gifButton = document.createElement('button');
    gifButton.classList.add('select-option');
    gifButton.setAttribute('data-target', 'gif');
    gifButton.textContent = 'Video';
    selectionBar.appendChild(gifButton);
    const stepsButton = document.createElement('button');
    stepsButton.classList.add('select-option');
    stepsButton.setAttribute('data-target', 'steps');
    stepsButton.textContent = 'Steps';
    selectionBar.appendChild(stepsButton);
    block.appendChild(selectionBar);

    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper');

    const gif = document.createElement('img');
    gif.src = tutorial.gifSrc;
    gif.alt = tutorial.gifAlt;
    gif.classList.add('tutorial-content');
    gif.id = 'gif';
    contentWrapper.appendChild(gif);

    const stepsDiv = document.createElement('div');
    stepsDiv.classList.add('tutorial-content');
    stepsDiv.id = 'steps';
    const ul = document.createElement('ul');
    tutorial.steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        ul.appendChild(li);
    });
    stepsDiv.appendChild(ul);
    contentWrapper.appendChild(stepsDiv);

    block.appendChild(contentWrapper);

    return block;
}

document.addEventListener('DOMContentLoaded', function() {
    const tutorialSection = document.querySelector('.tutorial-section');

    tutorials.forEach(tutorial => {
        tutorialSection.appendChild(createTutorialBlock(tutorial));
    });

    const selectOptions = document.querySelectorAll('.select-option');

    selectOptions.forEach(button => {
        button.addEventListener('click', function(event) {
            // Prevent default behavior
            event.preventDefault();

            const targetId = this.getAttribute('data-target');
            const parentBlock = this.closest('.tutorial-block');
            const contents = parentBlock.querySelectorAll('.tutorial-content');
            
            contents.forEach(function(content) {
                content.style.display = 'none';
            });

            // Show the appropriate target
            console.log(targetId)
            parentBlock.querySelector('#' + targetId).style.display = 'block';
        });
    });
});