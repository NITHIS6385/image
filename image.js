const imageSources = ['image1.jpg','image2.jpg','image3.jpg','image6','image7.jpg','image8.jpg',
'image9.jpg','image10.jpg'];

        function changeBackgroundImage() {
            const randomIndex = Math.floor(Math.random() * imageSources.length);
            document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
        }

        // Change the background image every 5 seconds (5000 milliseconds)
        setInterval(changeBackgroundImage, 900);