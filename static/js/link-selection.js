document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.game-select ul li a');
    let selectedIndex = 0;

    function updateSelectedLink() {
        navLinks.forEach((link, index) => {
            if (index === selectedIndex) {
                link.classList.add('selected');
            } else {
                link.classList.remove('selected');
            }
        });
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'n' || event.key === 'N') {
            selectedIndex = Math.max(0, selectedIndex - 1);
            updateSelectedLink();
        } else if (event.key === 'm' || event.key === 'M') {
            selectedIndex = Math.min(navLinks.length - 1, selectedIndex + 1);
            updateSelectedLink();
        } else if (event.key === 'a' || event.key === 'A') {
            navLinks[selectedIndex].click();
        }
    });

    updateSelectedLink();
});
