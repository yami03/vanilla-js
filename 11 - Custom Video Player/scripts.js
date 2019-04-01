/* Get Our Elements */
/*
* player: 전체를 감싼 div
* video: video 태그
* progress: 재생바 
* progressBar: 현재 재생영역
* toggle: 재생 일시정지
* skipButtons: 10초전, 25초후
* ranges: 볼륨, 속도조절 range
*/
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    /*if(video.paused) {
        video.play();
    } else {
        video.pause();
    }*/
}

function updateButton() {
    const icon = this.paused ? "►" : "❚❚";
    toggle.textContent = icon;
    //console.log('Update the button');
}

function skip() {
    //console.log('Skipping!');
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdte() {
    //console.log(this.value); 
    //console.log(this.name);
    video[this.name] = this.value;
}

function handleProgress() {
    
}


/* Hook up the event listeners */
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip)); 
ranges.forEach(range => range.addEventListener('change', handleRangeUpdte));
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdte));