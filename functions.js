document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.custom-button');

    button.addEventListener('click', function() {
        button.classList.add('animate__animated', 'animate__fadeOut');
        setTimeout(function() {
            button.classList.remove('animate__fadeOut');
            button.classList.add('animate__fadeIn');
        }, 1000); // Adjust the delay to match the animation duration
    });
});
