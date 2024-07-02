let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
    const loaders = document.querySelectorAll('.loader');
    const audio = new Audio();

    loaders.forEach(loader => {
        loader.addEventListener('click', () => {
            // Remove active class from all loaders
            loaders.forEach(l => l.classList.remove('active'));
            
            // Add active class to the clicked loader
            loader.classList.add('active');

            // Get the song file from the data attribute
            const songFile = loader.getAttribute('data-song');
            audio.src = songFile;
            audio.play();
        });
    });

    // Optionally, add a "currently playing" display logic
    audio.addEventListener('play', () => {
        const currentSongElement = document.querySelector('.currentplaying .heading');
        const activeLoader = document.querySelector('.loader.active .song .name');
        if (currentSongElement && activeLoader) {
            currentSongElement.textContent = `Currently Playing: ${activeLoader.textContent}`;
        }
    });
});
    //FOR SONGS
    document.addEventListener('DOMContentLoaded', function() {
        const loaders = document.querySelectorAll('.loader');

        loaders.forEach(loader => {
            loader.addEventListener('click', function() {
                // Pause all other audios
                document.querySelectorAll('audio').forEach(audio => {
                    audio.pause();
                    audio.currentTime = 0;
                });

                const audio = this.querySelector('audio');
                if (audio) {
                    audio.play();
                }
            });
        });
    });

    //SCRIPT FOR NAVBAR-LIST
    document.addEventListener("DOMContentLoaded", function() {
        const navLinks = document.querySelectorAll('.navlist a');
    
        navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
    
                const targetClass = this.getAttribute('href');
                const targetSection = document.querySelector(targetClass);
    
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
    
