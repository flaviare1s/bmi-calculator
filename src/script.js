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



// SISTEMA METRIC:
// Validação dos inputs no sitema metric:
const heightMetricInput = document.querySelector('#height')
const weightMetricInput = document.querySelector('#weight')

function validateMetricInputs() {
    const heightValue = Number(heightMetricInput.value)
    const weightValue = Number(weightMetricInput.value)

    if (isNaN(heightValue) || heightValue < 0) {
        errorBox.classList.add('active')
        resultBox.classList.add('hidden')
        welcomeBox.classList.add('hidden')
        heightMetricInput.value = ''
        return false
    }

    if (isNaN(weightValue) || weightValue < 0) {
        errorBox.classList.add('active')
        resultBox.classList.add('hidden')
        welcomeBox.classList.add('hidden')
        weightMetricInput.value = ''
        return false
    } else {
        errorBox.classList.remove('active')
        return true
    } 
}
heightMetricInput.addEventListener('input', validateMetricInputs)
weightMetricInput.addEventListener('input', validateMetricInputs)

// Cálculo do IMC no sistema metric:
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
    classificationMetric(bmi)
    rangeMetric(height)
}
heightMetricInput.addEventListener('input', bmiCalculationMetric)
weightMetricInput.addEventListener('input', bmiCalculationMetric)

// Classificações no sistema metric:
const classificationSpan = document.querySelector('#classification')

function classificationMetric(bmi) {
    if(bmi <= 16) {
        classificationSpan.innerText = 'severe thinnes'
    } else if(bmi > 16 && bmi <= 17 ) {
        classificationSpan.innerText = 'moderate thinnes'
    } else if(bmi > 17 && bmi <= 18.5 ) {
        classificationSpan.innerText = 'mild thinnes'
    }  else if(bmi > 18.5 && bmi <= 25 ) {
        classificationSpan.innerText = 'healthy weight'
    }  else if(bmi > 25 && bmi <= 30 ) {
        classificationSpan.innerText = 'overweight'
    }  else if(bmi > 30 && bmi <= 35 ) {
        classificationSpan.innerText = 'obese class I'
    }  else if(bmi > 35 && bmi <= 40 ) {
        classificationSpan.innerText = 'obese class II'
    }  else {
        classificationSpan.innerText = 'obese class III'
    }     
}

// Range no sitema metric:
const rangeSpan = document.querySelector('#range')


function rangeMetric(height) {
    const heightCm = height * 100
    if(heightCm > 150 && heightCm <= 155) {
        rangeSpan.innerText = '41.6kg - 56kg'
    } else if(heightCm > 155 && heightCm <= 160 ) {
        rangeSpan.innerText = '44.4kg - 59.8kg'
    } else if(heightCm > 160 && heightCm <= 165 ) {
        rangeSpan.innerText = '47.4kg - 63.7kg'
    }  else if(heightCm > 165 && heightCm <= 170 ) {
        rangeSpan.innerText = '50.4kg - 67.8kg'
    }  else if(heightCm > 170 && heightCm <= 175 ) {
        rangeSpan.innerText = '53.5.6kg - 72kg'
    }  else if(heightCm > 175 && heightCm <= 180 ) {
        rangeSpan.innerText = '56.7kg - 76.3kg'
    }  else if(heightCm > 180 && heightCm <= 185 ) {
        rangeSpan.innerText = '59.9kg - 80.7kg'
    }  else if(heightCm > 185) {
        rangeSpan.innerText = '63.3kg - 85.2kg'
    }     
}









// SISTEMA IMPERIAL:
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

    if (isNaN(heightValueFs) || heightValueFs < 0) {
        errorBox.classList.add('active')
        resultBox.classList.add('hidden')
        welcomeBox.classList.add('hidden')
        heightValueFs.value = ''
        return false
    }

    if (isNaN(heightValueIn) || heightValueIn < 0) {
        errorBox.classList.add('active')
        resultBox.classList.add('hidden')
        welcomeBox.classList.add('hidden')
        heightValueIn.value = ''
        return false
    }

    if (isNaN(weightValueSt) || weightValueSt < 0) {
        errorBox.classList.add('active')
        resultBox.classList.add('hidden')
        welcomeBox.classList.add('hidden')
        stoneInput.value = ''
        poundsInput.value = ''
        return false
    }

    if (isNaN(weightValueLbs) || weightValueLbs < 0) {
        errorBox.classList.add('active')
        resultBox.classList.add('hidden')
        welcomeBox.classList.add('hidden')
        stoneInput.value = ''
        stoneInput.value = ''
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
    const totalWeightLbs = weightSt * 14 + weighLbs
    const bmiImperial = (totalWeightLbs * 703) / (totalHeightIn * totalHeightIn)
    
    resultBox.classList.add('active')
    welcomeBox.classList.add('hidden')
    errorBox.classList.add('hidden')

    result.innerText = bmiImperial.toFixed(1)
    classificationImperial(bmiImperial)
}
feetInput.addEventListener('input', bmiCalculationImperial)
inchesInput.addEventListener('input', bmiCalculationImperial)
stoneInput.addEventListener('input', bmiCalculationImperial)
poundsInput.addEventListener('input', bmiCalculationImperial)

// Classificações no sistema imperial:
function classificationImperial(bmiImperial) {
    if(bmiImperial <= 16) {
        classificationSpan.innerText = 'severe thinnes'
    } else if(bmiImperial > 16 && bmiImperial <= 17 ) {
        classificationSpan.innerText = 'moderate thinnes'
    } else if(bmiImperial > 17 && bmiImperial <= 18.5 ) {
        classificationSpan.innerText = 'mild thinnes'
    }  else if(bmiImperial > 18.5 && bmiImperial <= 25 ) {
        classificationSpan.innerText = 'healthy weight'
    }  else if(bmiImperial > 25 && bmiImperial <= 30 ) {
        classificationSpan.innerText = 'overweight'
    }  else if(bmiImperial > 30 && bmiImperial <= 35 ) {
        classificationSpan.innerText = 'obese class I'
    }  else if(bmiImperial > 35 && bmiImperial <= 40 ) {
        classificationSpan.innerText = 'obese class II'
    }  else {
        classificationSpan.innerText = 'obese class III'
    }     
}


