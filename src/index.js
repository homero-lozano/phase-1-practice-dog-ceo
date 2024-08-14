console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById('dog-image-container');
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                imageContainer.appendChild(img);
            });
        });
});
document.addEventListener('DOMContentLoaded', () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedList = document.getElementById('dog-breeds');
            Object.keys(data.message).forEach(breed => {
                const li = document.createElement('li');
                li.textContent = breed;
                breedList.appendChild(li);
            });
        });
});
document.addEventListener('DOMContentLoaded', () => {
    const breedList = document.getElementById('dog-breeds');
    breedList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'pink';  
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const breedDropdown = document.getElementById('breed-dropdown');
    const breedList = document.getElementById('dog-breeds');

    breedDropdown.addEventListener('change', (event) => {
        const selectedLetter = event.target.value;
        const allBreeds = breedList.getElementsByTagName('li');
        Array.from(allBreeds).forEach(li => {
            if (li.textContent.startsWith(selectedLetter)) {
                li.style.display = 'list-item';
            } else {
                li.style.display = 'none';
            }
        });
    });
});

