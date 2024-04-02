const metricButton = document.querySelector('#metricButton')
const imperialButton = document.querySelector('#imperialButton')
const metricForm = document.querySelector('#metricForm')
const imperialForm = document.querySelector('#imperialForm')

function showMetricForm() {
    metricForm.classList.add('active')
    imperialForm.classList.add('hidden')
    imperialForm.classList.remove('active')
}

function showImperialForm() {
    metricForm.classList.add('hidden')
    imperialForm.classList.add('active')
    metricForm.classList.remove('active')

}

metricButton.addEventListener('click', showMetricForm)
imperialButton.addEventListener('click', showImperialForm)


const heightMetricInput = document.querySelector('#height')
const weightMetricInput = document.querySelector('#weight')
const result = document.querySelector('#result')
const resultBox = document.querySelector('#resultBox')
const welcomeBox = document.querySelector('#welcomeBox')


heightMetricInput.addEventListener('input', bmiCalculation)
weightMetricInput.addEventListener('input', bmiCalculation)

function bmiCalculation() {
    const height = Number(heightMetricInput.value) / 100
    const weight = Number(weightMetricInput.value)
    const bmi = weight / (height * height)
    resultBox.classList.add('active')
    welcomeBox.classList.add('hidden')

    result.innerText = bmi.toFixed()
}



