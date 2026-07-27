// FAQ accordion — toggles answers open/closed like netflix.com

document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const wasActive = item.classList.contains('active');

        // Close all other open items — remove this loop if you want
        // multiple answers open at the same time.
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

        if (!wasActive) {
            item.classList.add('active');
        }
    });
});
