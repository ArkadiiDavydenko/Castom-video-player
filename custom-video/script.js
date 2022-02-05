const player = document.querySelector('.player');

const sliderVolume = player.querySelector('.volume-slider');
const video = player.querySelector('.viewer');
const toggleVideo = player.querySelector('.toggle-video');
const toggleVolume = player.querySelector('.toggle-volume')
const playVideo  = player.querySelector('.main-button')
const progressVideo = player.querySelector('.progress__line');
const progress = player.querySelector('.progress')
const volume = sliderVolume.value/100;
video.volume = volume;
let progression;

function switchPlay() {
    if (video.paused) {
        video.play();
        playVideo.style.display = 'none';
        toggleVideo.style.backgroundImage = 'url("./assets/svg/pause.svg")';
        progression = window.setInterval(handleProgress, 10);
    } else {
        video.pause();
        playVideo.style.display = 'block';
        toggleVideo.style.backgroundImage = 'url("./assets/svg/play.svg")';
    }
}

function switchVolume() {
    if (sliderVolume.value == 0) {
        video.volume = 0.4;
        sliderVolume.value = video.volume*100;
        toggleVolume.style.backgroundImage = 'url("./assets/svg/volume.svg")';
        changeInput ();
    }
    else if (video.volume) {
        video.volume = 0;
        toggleVolume.style.backgroundImage = 'url("./assets/svg/mute.svg")';
        sliderVolume.value = 0;
        changeInput ();
    } else {
        video.volume = sliderVolume.value/100;
        toggleVolume.style.backgroundImage = 'url("./assets/svg/volume.svg")';
    }
}

function changeInput () {
    video.volume = (sliderVolume.value/100)
    const value = sliderVolume.value;
    if (sliderVolume.value == 0) {
        console.log(sliderVolume.value )
        toggleVolume.style.backgroundImage = 'url("./assets/svg/mute.svg")';
        sliderVolume.style.background = `linear-gradient(to right, var(--main-gold) 0%, var(--main-gold) ${value}%, #fff ${value}%, white 100%)`
    }
    else {
        toggleVolume.style.backgroundImage = 'url("./assets/svg/volume.svg")';
        sliderVolume.style.background = `linear-gradient(to right, var(--main-gold) 0%, var(--main-gold) ${value}%, #fff ${value}%, white 100%)`
    }

}

function handleProgress() {
    const percent = (video.currentTime/video.duration)*100;
    progressVideo.style.flexBasis = `${percent}%`;

}
function scrub (event) {
    const scrubTime = (event.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime = scrubTime;
    handleProgress();

}

video.addEventListener('click', e => !video.paused && switchPlay(e));
video.addEventListener('ended', handleProgress);
video.addEventListener('change', handleProgress);
toggleVideo.addEventListener('click', switchPlay);
playVideo.addEventListener('click', switchPlay);
toggleVolume.addEventListener('click', switchVolume);
sliderVolume.addEventListener('input',changeInput );
progress.addEventListener('click', scrub)

