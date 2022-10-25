const exercises = {
    chest: [],
    shoulders: [],
    back: [],
    legs: [],
    biceps: [],
    triceps: [],
    abdominals: [],
    cardio: []
}

function downloadExercises(object){
    const exerciseKeys = Object.keys(object)
    for (let keys of exerciseKeys){
        const downloaded = 
            fetch(`http://localhost:3000/${keys}`)
            .then(response => response.json())
            .then(data => object[keys]=data)
            .catch((error)=>alert("There is an error"))
        } 
    return object
}

const workOutSplits = {
    fullBody: {}, 
    upperLower: {}, 
    pushPullLegs: {}, 
    arnoldSplit: {}, 
    broSplit: {},
    customSplit: {}
}

const legDay = [exercises.legs]
const chestDay = [...exercises.chest]
const backDay = [...exercises.back]
const shoulderDay = [...exercises.shoulders]
const armDay = [...exercises.biceps, ...exercises.triceps]

const upperDay = [chestDay, backDay, shoulderDay, armDay]

const fullBodyDay = [chestDay, backDay, shoulderDay, armDay, legDay]

const pushDay = [chestDay, shoulderDay, exercises.triceps]
const pullDay = [backDay, shoulderDay, exercises.biceps]

const chestAndBack = [chestDay, backDay]
const shouldersAndArms = [shoulderDay, armDay]

downloadExercises(exercises)
downloadExercises(workOutSplits)

console.log(exercises)
console.log(workOutSplits)

//document.addEventListener("DOMContentLoaded", function(){
    const whyWorkOutList = document.getElementsByTagName('ul')[0]
    const whyWorkOutHTML = document.getElementsByTagName('ul')[0].innerHTML
    const whyWorkOutHeader = document.getElementById('why-workout')

    const howToWorkOutList = document.getElementsByTagName('ul')[1]
    const howToWorkOutHTML = document.getElementsByTagName('ul')[1].innerHTML
    const howToWorkOutHeader = document.getElementById('how-to-workout')

    const exerciseInfoHeader = document.getElementById('exercise-information')
    const exerciseInfoList = document.getElementsByTagName('ul')[2]

    const createWorkOutHeader = document.getElementById('create-workout')
    const createWorkOutList = document.getElementsByTagName('ul')[3]
//     }
// )