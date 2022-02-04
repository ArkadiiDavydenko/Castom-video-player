const sliderVolume = document.querySelector('.player__slider-volume');

sliderVolume.addEventListener('input', function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, var(--main-gold) 0%, var(--main-gold) ${value}%, #fff ${value}%, white 100%)`
})