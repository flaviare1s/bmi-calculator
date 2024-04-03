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
        errorBox.classList.remove('hidden')
        resultBox.classList.add('hidden')
        welcomeBox.classList.add('hidden')
        return false
    }

    if (heightValue === '' || weightValue === ''|| heightValue === null || weightValue === null) {
        errorBox.classList.add('hidden')
        resultBox.classList.add('hidden')
        welcomeBox.classList.add('active')
        return false
    }

    if (isNaN(weightValue) || weightValue < 0) {
        errorBox.classList.add('active')
        errorBox.classList.remove('hidden')
        resultBox.classList.add('hidden')
        welcomeBox.classList.add('hidden')
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
        rangeSpan.innerText = '42.6kg - 56kg'
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
    return heightCm
}


// SISTEMA IMPERIAL:
// Validação dos inputs no sitema imperial:
const feetInput = document.querySelector('#ft')
const inchesInput = document.querySelector('#in')
const stoneInput = document.querySelector('#st')
const poundsInput = document.querySelector('#lbs')

function validateImperialInputs() {
    const heightValueFs = Number(feetInput.value)
    const heightValueIn = Number(inchesInput.value)
    const weightValueSt = Number(stoneInput.value)
    const weightValueLbs = Number(poundsInput.value)

    if (isNaN(heightValueFs) || heightValueFs < 0) {
        errorBox.classList.remove('hidden')
        errorBox.classList.add('active')
        resultBox.classList.add('hidden')
        welcomeBox.classList.add('hidden')
        return false
    }

    if (isNaN(heightValueIn) || heightValueIn < 0) {
        errorBox.classList.remove('hidden')
        errorBox.classList.add('active')
        resultBox.classList.add('hidden')
        welcomeBox.classList.add('hidden')
        return false
    }

    if (isNaN(weightValueSt) || weightValueSt < 0) {
        errorBox.classList.remove('hidden')
        errorBox.classList.add('active')
        resultBox.classList.add('hidden')
        welcomeBox.classList.add('hidden')
        return false
    }

    if (isNaN(weightValueLbs) || weightValueLbs < 0) {
        errorBox.classList.remove('hidden')
        errorBox.classList.add('active')
        resultBox.classList.add('hidden')
        welcomeBox.classList.add('hidden')
        return false
    } 
    
    if (heightValueFs === '' || heightValueIn === '' || weightValueSt === '' || weightValueLbs === '' || heightValueFs === null || heightValueIn === null || weightValueSt === null || weightValueLbs === null) {
        errorBox.classList.add('hidden')
        resultBox.classList.add('hidden')
        welcomeBox.classList.add('active')
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
    const heightFt = Number(feetInput.value)
    const heightIn = Number(inchesInput.value)
    const weightSt = Number(stoneInput.value)
    const weighLbs = Number(poundsInput.value)

    const totalHeightIn = heightFt * 12 + heightIn
    const totalWeightLbs = weightSt * 14 + weighLbs
    const bmiImperial = (totalWeightLbs * 703) / (totalHeightIn * totalHeightIn)
    
    resultBox.classList.add('active')
    welcomeBox.classList.add('hidden')
    errorBox.classList.add('hidden')

    result.innerText = bmiImperial.toFixed(1)
    classificationImperial(bmiImperial)
    rangeImperial(heightFt, heightIn)
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

// Range no sistema imperial:
function rangeImperial(heightFt, heightIn) {
    const heightImperial = heightFt * 12 + heightIn;

    if (heightImperial > 58 && heightImperial <= 62) {
        rangeSpan.innerText = "6st 10lbs - 8st 10lbs"
    } else if (heightImperial > 62 && heightImperial <= 64) {
        rangeSpan.innerText = "7st 0lbs - 9st 2lbs"
    } else if (heightImperial > 64 && heightImperial <= 66) {
        rangeSpan.innerText = "7st 6lbs - 10st 0lbs"
    } else if (heightImperial > 66 && heightImperial <= 68) {
        rangeSpan.innerText = "8st 0lbs - 10st 10lbs"
    } else if (heightImperial > 68 && heightImperial <= 70) {
        rangeSpan.innerText = "8st 8lbs - 11st 6lbs"
    } else if (heightImperial > 70 && heightImperial <= 72) {
        rangeSpan.innerText = "9st 0lbs - 12st 0lbs"
    } else if (heightImperial > 72 && heightImperial <= 74) {
        rangeSpan.innerText = "9st 6lbs - 12st 6lbs"
    } else if (heightImperial > 74) {
        rangeSpan.innerText = "10st 0lbs - 13st 4lbs"
    }

    return heightImperial
}


