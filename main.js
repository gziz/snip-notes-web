document.addEventListener('DOMContentLoaded', function() {
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