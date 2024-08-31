document.addEventListener('DOMContentLoaded', function() {
    // Sorting functionality
    const sortByBoxSize = document.querySelector('ul li:nth-child(1)');
    sortByBoxSize.addEventListener('click', function() {
        let container = document.querySelector('.container');
        let boxes = Array.from(container.getElementsByClassName('box'));

        boxes.sort((a, b) => {
            let titleA = a.querySelector('p').innerText.toUpperCase();
            let titleB = b.querySelector('p').innerText.toUpperCase();
            return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
        });

        // Remove all existing boxes and re-append them in sorted order
        container.innerHTML = '';
        boxes.forEach(box => container.appendChild(box));
    });

    // Filtering functionality
    const filterItems = document.querySelectorAll('ul li:not(:first-child)');
    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            let category = this.innerText.toLowerCase();
            let boxes = document.querySelectorAll('.container .box');
            
            boxes.forEach(box => {
                let title = box.querySelector('p').innerText.toLowerCase();
                if (category === 'all' || title.includes(category)) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    });
});


