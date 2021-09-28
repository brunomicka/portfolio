const inputs = document.querySelectorAll('.timeline .input')
const paras = document.querySelectorAll('.timeline .description-flex-container ul')

inputs.forEach((input, idx) => input.addEventListener('click', () => {
    var t = input,
        matchedPara = paras[idx];

    inputs.forEach(element => {
        element.classList.remove('active')
    });

    paras.forEach(p => {
        p.classList.remove('active')
    });

    matchedPara.classList.add('active')
    t.classList.add('active')
}))