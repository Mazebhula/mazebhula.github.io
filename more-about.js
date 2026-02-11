// more-about.js
document.addEventListener('DOMContentLoaded', () => {
    const videos = [
        {
            src: "https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/who+is.mov",
            description: "Who is Denzhe?",
            thumbnail: "https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/who+is.mov"
        },
        {
            src: "https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/the+why.mov",
            description: "The Why",
            thumbnail: "https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/the+why.mov"
        },
        {
            src: "https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/experience.mov",
            description: "Experience",
            thumbnail: "https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/experience.mov"
        },
        {
            src: "https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/what+did+i+learn.mov",
            description: "What did I learn?",
            thumbnail: "https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/what+did+i+learn.mov"
        },
        {
            src: "https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/SpringBoot.mp4",
            description: "How Fast can i Code",
            thumbnail: "https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/SpringBoot.mp4"
        }
    ];

    const videoPlayerContainer = document.querySelector('.video-player-container');
    const videoListContainer = document.querySelector('.video-list-container');
    
    let selectedVideo = videos[0];

    function renderVideoPlayer() {
        if (!videoPlayerContainer) return;

        videoPlayerContainer.innerHTML = `
            <video controls autoplay key="${selectedVideo.src}">
                <source src="${selectedVideo.src}" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h3>${selectedVideo.description}</h3>
        `;
    }

    function renderVideoList() {
        if (!videoListContainer) return;

        videoListContainer.innerHTML = ''; // Clear previous list
        videos.forEach((video, index) => {
            const thumbnailItem = document.createElement('div');
            thumbnailItem.classList.add('video-thumbnail-item');
            if (video === selectedVideo) {
                thumbnailItem.classList.add('active');
            }
            thumbnailItem.dataset.index = index;
            thumbnailItem.innerHTML = `
                <video muted>
                    <source src="${video.thumbnail}" type="video/mp4" />
                </video>
                <p>${video.description}</p>
            `;
            thumbnailItem.addEventListener('click', () => {
                selectedVideo = video;
                renderVideoPlayer();
                renderVideoList(); // Re-render list to update active state
            });
            videoListContainer.appendChild(thumbnailItem);
        });
    }

    renderVideoPlayer();
    renderVideoList();
});
