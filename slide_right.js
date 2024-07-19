document.addEventListener('DOMContentLoaded', function() {
    const projectButton = document.querySelector('.project-button');
    projectButton.addEventListener('click', function(e) {
        e.preventDefault();
        const body = document.body;
        body.classList.add('swipe-right');
        const targetUrl = this.href;
        setTimeout(function() {
            window.location.href = targetUrl;
        }, 500);
    });
});