// Botões para escolher o tipo de sistema a ser utilizado:
const metricButton = document.querySelector('#metricButton')
const imperialButton = document.querySelector('#imperialButton')
const metricForm = document.querySelector('#metricForm')
const imperialForm = document.querySelector('#imperialForm')

const result = document.querySelector('#result')
const resultBox = document.querySelector('#resultBox')
const welcomeBox = document.querySelector('#welcomeBox')
const errorBox = document.querySelector('#errorBox')

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


// Validação dos inputs no sitema métrico:
const heightMetricInput = document.querySelector('#height')
const weightMetricInput = document.querySelector('#weight')

function validateMetricInputs() {
    const heightValue = Number(heightMetricInput.value)
    const weightValue = Number(weightMetricInput.value)

    if (isNaN(heightValue) || heightValue <= 0) {
        errorBox.classList.add('active')
        resultBox.classList.add('hidden')
        welcomeBox.classList.add('hidden')
        heightMetricInput.value = ""
        return false
    }

    if (isNaN(weightValue) || weightValue <= 0) {
        errorBox.classList.add('active')
        resultBox.classList.add('hidden')
        welcomeBox.classList.add('hidden')
        weightMetricInput.value = ""
        return false
    } else {
        errorBox.classList.remove('active')
        return true
    } 
}
heightMetricInput.addEventListener('input', validateMetricInputs)
weightMetricInput.addEventListener('input', validateMetricInputs)

// Cálculo do IMC no sistema métrico:
function bmiCalculationMetric() {
    if (!validateMetricInputs()) {
        return
    }
    const height = Number(heightMetricInput.value) / 100
    const weight = Number(weightMetricInput.value)
    const bmi = weight / (height * height)

    resultBox.classList.add('active')
    welcomeBox.classList.add('hidden')
    errorBox.classList.add('hidden')

    result.innerText = bmi.toFixed(1)
}
heightMetricInput.addEventListener('input', bmiCalculationMetric)
weightMetricInput.addEventListener('input', bmiCalculationMetric)



// Validação dos inputs no sitema imperial:
const feetInput = document.querySelector('#ft')
const inchesInput = document.querySelector('#in')
const stoneInput = document.querySelector('#st')
const poundsInput = document.querySelector('#lbs')

function validateImperialInputs() {
    const heightValueFs = Number(heightMetricInput.value)
    const heightValueIn = Number(heightMetricInput.value)
    const weightValueSt = Number(weightMetricInput.value)
    const weightValueLbs = Number(weightMetricInput.value)

    if (isNaN(heightValueFs) || heightValueFs <= 0) {
        errorBox.classList.add('active')
        resultBox.classList.add('hidden')
        welcomeBox.classList.add('hidden')
        heightMetricInput.value = ""
        return false
    }

    if (isNaN(heightValueIn) || heightValueIn <= 0) {
        errorBox.classList.add('active')
        resultBox.classList.add('hidden')
        welcomeBox.classList.add('hidden')
        heightMetricInput.value = ""
        return false
    }

    if (isNaN(weightValueSt) || weightValueSt <= 0) {
        errorBox.classList.add('active')
        resultBox.classList.add('hidden')
        welcomeBox.classList.add('hidden')
        weightMetricInput.value = ""
        return false
    }

    if (isNaN(weightValueLbs) || weightValueLbs <= 0) {
        errorBox.classList.add('active')
        resultBox.classList.add('hidden')
        welcomeBox.classList.add('hidden')
        weightMetricInput.value = ""
        return false
    } else {
        errorBox.classList.remove('active')
        return true
    } 
}
feetInput.addEventListener('input', validateImperialInputs)
inchesInput.addEventListener('input', validateImperialInputs)
stoneInput.addEventListener('input', validateImperialInputs)
poundsInput.addEventListener('input', validateImperialInputs)

// Cálculo do IMC no sistema imperial:
function bmiCalculationImperial() {
    if (!validateImperialInputs()) {
        return
    }
    const heighFt = Number(feetInput.value)
    const heighIn = Number(inchesInput.value)
    const weightSt = Number(stoneInput.value)
    const weighLbs = Number(poundsInput.value)

    const totalHeightIn = heighFt * 12 + heighIn
    const heightCm = totalHeightIn * 0.0254
    const totalWeightLbs = weightSt * 14 + weighLbs
    const weightKg = totalWeightLbs * 0.453592
    const bmiImperial = (weightKg * 703) / (heightCm * heightCm)
    
    resultBox.classList.add('active')
    welcomeBox.classList.add('hidden')
    errorBox.classList.add('hidden')

    result.innerText = bmiImperial.toFixed(1)
}
feetInput.addEventListener('input', bmiCalculationImperial)
inchesInput.addEventListener('input', bmiCalculationImperial)
stoneInput.addEventListener('input', bmiCalculationImperial)
poundsInput.addEventListener('input', bmiCalculationImperial)





