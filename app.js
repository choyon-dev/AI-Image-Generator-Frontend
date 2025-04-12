// JavaScript functionality for the AI Image Generator

// Select DOM elements
const themeToggle = document.querySelector('.theme-toggle');
const promptForm = document.querySelector('.prompt-form');
const promptInput = document.querySelector('.prompt-input');
const modelSelect = document.querySelector('.prompt-actions select:nth-child(1)');
const imageCountSelect = document.querySelector('.prompt-actions select:nth-child(2)');
const aspectRatioSelect = document.querySelector('.prompt-actions select:nth-child(3)');
const galleryGrid = document.querySelector('.gallery-grid');

// Toggle dark mode
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Handle form submission
promptForm.addEventListener('submit', async () => {
    const prompt = promptInput.value;
    const model = modelSelect.value;
    const imageCount = parseInt(imageCountSelect.value);
    const aspectRatio = aspectRatioSelect.value;

    if (!prompt || !model || !imageCount || !aspectRatio) {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate API call to generate images
    galleryGrid.innerHTML = '<p>Generating images...</p>';
    try {
        const images = await generateImages(prompt, model, imageCount, aspectRatio);
        displayImages(images);
    } catch (error) {
        galleryGrid.innerHTML = '<p>Error generating images. Please try again.</p>';
    }
});

// Simulated API call function
async function generateImages(prompt, model, count, aspectRatio) {
    // Simulate a delay for API response
    return new Promise((resolve) => {
        setTimeout(() => {
            const images = Array.from({ length: count }, (_, i) => `https://via.placeholder.com/300?text=Image+${i + 1}`);
            resolve(images);
        }, 2000);
    });
}

// Display generated images in the gallery
default function displayImages(images) {
    galleryGrid.innerHTML = '';
    images.forEach((src) => {
        const imageCard = document.createElement('div');
        imageCard.classList.add('image-card');

        const img = document.createElement('img');
        img.src = src;
        img.classList.add('result-image');

        const overlay = document.createElement('div');
        overlay.classList.add('img-overlay');

        const downloadBtn = document.createElement('button');
        downloadBtn.classList.add('img-download-btn');
        downloadBtn.innerHTML = '<i class="fa-solid fa-download"></i>';
        downloadBtn.addEventListener('click', () => downloadImage(src));

        overlay.appendChild(downloadBtn);
        imageCard.appendChild(img);
        imageCard.appendChild(overlay);
        galleryGrid.appendChild(imageCard);
    });
}

// Download image function
function downloadImage(src) {
    const link = document.createElement('a');
    link.href = src;
    link.download = 'generated-image';
    link.click();
}