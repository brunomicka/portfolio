const carouselImg = document.getElementById('imgs')
const imgs = document.querySelectorAll('#imgs img')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const dotsUl = document.querySelector(".carousel-dots ul")

let idx = 0

imgs.forEach((img, idx) => {
    const dotEl = document.createElement("li")
    const dotBtn = document.createElement("button")

    dotBtn.addEventListener('click', (idx) => {
        changeImage(idx);
    })

    dotEl.appendChild(dotBtn)

    dotsUl.appendChild(dotEl)
})

let interval = setInterval(() => {
    run()
}, (2000));

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

function run() {
    idx++
    changeImage()
}

function changeImage(i) {
    idx = i === undefined ? idx : i;
    if (idx > imgs.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = imgs.length - 1
    }

    console.log(idx)
    
    carouselImg.style.transform = `translateX(-${idx * 700}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000);
}
