const SongOne = document.getElementById("song1");
const SongTwo = document.getElementById("song2");
const SongThree = document.getElementById("song3");
const TrackShowCase = document.getElementById("track");

            



SongOne.addEventListener("click", () => {
    const audio = new Audio("/assets/music/kuchizuke.mp3");

    audio.play();

    audio.volume = 1;

    TrackShowCase.innerHTML = "Track: kuchizuke.mp3";
});





SongTwo.addEventListener("click", () => {
    const audio2 = new Audio("/assets/music/Duran_Duran_INVISIBLE.mp3");

    audio2.play();
    audio2.volume = 1;

    TrackShowCase.innerHTML = "Track: Duran_Duran_INVISIBLE.mp3";
});





SongThree.addEventListener("click", () => {
    const audio3 = new Audio("/assets/music/Lilith.mp3");

    audio3.play();
    audio3.volume = 1;

    TrackShowCase.innerHTML = "Track: Lilith.mp3";
});





