const carouselImg = document.getElementById('imgs')
const carousel = document.querySelector('.carousel')
const imgs = document.querySelectorAll('#imgs img')
const arrows = document.querySelectorAll('.arrow')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const dotsUl = document.querySelector(".carousel-dots ul")

let idx = 0

imgs.forEach((img, idx) => {
    const dotEl = document.createElement("li")
    const dotBtn = document.createElement("button")

    if (idx === 0) {
        dotBtn.classList.add('active')
    }

    dotBtn.addEventListener('click', () => {
        changeImage(idx);
    })
    dotEl.appendChild(dotBtn)
    dotsUl.appendChild(dotEl)
})

carousel.addEventListener('mouseover', () => {
    arrows.forEach((arrow) => {
        arrow.classList.add('show')
    })
});

carousel.addEventListener('mouseout', () => {
    arrows.forEach((arrow) => {
        arrow.classList.remove('show')
    })
});

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

    clearActiveDots()

    const nextLi = document.querySelectorAll(".carousel-dots ul li")[idx]

    nextLi.firstElementChild.classList.add('active')

    carouselImg.style.transform = `translateX(-${idx * 700}px)`
}

function clearActiveDots() {
    const dots = document.querySelectorAll(".carousel-dots ul li button")
    dots.forEach((dot) => {
        dot.classList.remove('active')
    })
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000);
}
