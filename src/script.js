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



