document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Thank you for your message!');
            form.reset();
        } else {
            alert('Oops! There was a problem submitting your form');
        }
    }).catch(error => {
        alert('Oops! There was a problem submitting your form');
    });
});
document.addEventListener('scroll', function() {
    const container = document.querySelector('.video-container');
    const video = document.querySelector('.video-container video');
    
    const scrollTop = window.scrollY;  // Updated to use scrollY
    const containerTop = container.offsetTop;  // Distance of container top from the page top
    const containerHeight = container.offsetHeight;

    // Check if the video container is in the viewport
    if (scrollTop > containerTop - window.innerHeight && scrollTop < containerTop + containerHeight) {
        // Calculate video offset
        const offset = (scrollTop - containerTop) * 0.5;
        video.style.transform = `translateY(${offset}px)`;
    }
});

