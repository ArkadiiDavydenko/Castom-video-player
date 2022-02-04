const player = document.querySelector('.player');

const sliderVolume = player.querySelector('.volume-slider');
const video = player.querySelector('.viewer');
const toggleVideo = player.querySelector('.toggle-video');
const toggleVolume = player.querySelector('.toggle-volume')

console.log(sliderVolume.value)
video.volume = (sliderVolume.value/100);


function switchPlay() {
    if (video.paused) {
        video.play()
        toggleVideo.style.backgroundImage = 'url("./assets/svg/pause.svg")';
    } else {
        video.pause()
        toggleVideo.style.backgroundImage = 'url("./assets/svg/play.svg")';
    }
}

function switchVolume() {
    console.log('push')
    if (video.volume) {
        // console.log(video.volume)
        video.volume = 0;
        toggleVolume.style.backgroundImage = 'url("./assets/svg/mute.svg")';
    } else {
        // console.log(video.volume)
        video.volume = (sliderVolume.value/100);
        toggleVolume.style.backgroundImage = 'url("./assets/svg/volume.svg")';
    }
}


function changeIcon(event) {

}

video.addEventListener('click', switchPlay)
toggleVideo.addEventListener('click', switchPlay)
toggleVolume.addEventListener('click', switchVolume)

sliderVolume.addEventListener('input', function () {
    video.volume = (this.value/100)
    const value = this.value;
    this.style.background = `linear-gradient(to right, var(--main-gold) 0%, var(--main-gold) ${value}%, #fff ${value}%, white 100%)`
})

