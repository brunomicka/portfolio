const carousels = document.querySelectorAll('.carousel')
let carouselsObj = [];

carousels.forEach((carousel, i) => {
    const arrows = carousel.querySelectorAll('.arrow')
    const imgs = carousel.querySelectorAll('.imgs img')
    const dotsUl = carousel.querySelector(".carousel-dots ul")
    const leftBtn = carousel.querySelector('.previous button')
    const rightBtn = carousel.querySelector('.next button')

    carouselsObj.push({
        carousel,
        idx: 0
    })

    carousel.addEventListener('mouseover', () => {
        arrows.forEach((arrow) => {
            arrow.classList.add('show')
        })
    })

    carousel.addEventListener('mouseout', () => {
        arrows.forEach((arrow) => {
            arrow.classList.remove('show')
        })
    })

    imgs.forEach((img, idx) => {
        const dotEl = document.createElement("li")
        const dotBtn = document.createElement("button")

        if (idx === 0) {
            dotBtn.classList.add('active')
        }

        dotBtn.addEventListener('click', () => {
            changeImage(carouselsObj[i], idx);
        })

        dotEl.appendChild(dotBtn)
        dotsUl.appendChild(dotEl)
    })

    carouselsObj.interval = setInterval(() => {
        run(carouselsObj[i])
    }, (2000));

    leftBtn.addEventListener('click', () => {
        carouselsObj[i].idx--
        changeImage(carouselsObj[i])
        resetInterval(carouselsObj[i])
    })

    rightBtn.addEventListener('click', () => {
        carouselsObj[i].idx++
        changeImage(carouselsObj[i])
        resetInterval(carouselsObj[i])
    })
})

const run = (carouselObj) => {
    carouselObj.idx++
    changeImage(carouselObj)
}

const clearActiveDots = (carousel) => {
    const dots = carousel.querySelectorAll(".carousel-dots ul li button")

    dots.forEach((dot) => {
        dot.classList.remove('active')
    })
}

const changeImage = (carouselObj, i) => {
    const imgs = carouselObj.carousel.querySelectorAll('.imgs img')
    const imgContainer = carouselObj.carousel.querySelector('.image-container')

    carouselObj.idx = i === undefined ? carouselObj.idx : i;

    if (carouselObj.idx > imgs.length - 1) {
        carouselObj.idx = 0
    } else if (carouselObj.idx < 0) {
        carouselObj.idx = imgs.length - 1
    }

    clearActiveDots(carouselObj.carousel)

    const nextLi = carouselObj.carousel.querySelectorAll(".carousel-dots ul li")[carouselObj.idx]

    nextLi.firstElementChild.classList.add('active')

    imgContainer.style.transform = `translateX(-${carouselObj.idx * carouselObj.carousel.offsetWidth}px)`
}

const resetInterval = (carouselObj) => {
    clearInterval(carouselObj.interval)
    carouselObj.interval = setInterval(run(carouselObj), 2000);
}

window.addEventListener("resize", () => {
    carousels.forEach((carousel)=> {
        const imgs = carousel.querySelectorAll('.imgs img')
        imgs.forEach((img) => {
            img.width = carousel.offsetWidth;
        })
    })
}, false);
