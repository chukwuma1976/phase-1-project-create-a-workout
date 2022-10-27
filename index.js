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
const workOutSplits = {
    fullBody: {}, 
    upperLower: {}, 
    pushPullLegs: {}, 
    arnoldSplit: {}, 
    broSplit: {},
    customSplit: {}
}

const exerciseKeys = Object.keys(exercises)
for (let keys of exerciseKeys){
    fetch(`http://localhost:3000/${keys}`)
    .then(response => response.json())
    .then(data=>{
        let i=0
        for (let piece of data){
            exercises[keys][i]=renderObject(piece)
            i++
        }
        return exercises[keys]
        })
    .catch((error)=>alert("There is an error"))
    }   

const splitKeys = Object.keys(workOutSplits)
for (let keys of splitKeys){
    fetch(`http://localhost:3000/${keys}`)
    .then(response => response.json())
    .then(data=>{
            workOutSplits[keys]=renderObject(data)
            return workOutSplits[keys]
        })
    .catch((error)=>alert("There is an error"))
    }

function renderObject(type){
    let newObject = {}
    let keys = Object.keys(type)
    for (let key of keys){newObject[key]=type[key]}
    return newObject
}

const legDay = {legs: []}
const chestDay = {chest: []}
const backDay = {back: []}
const shoulderDay = {shoulders: []}
const armDay = {biceps: [], triceps: []}

const upperDay = {
    chest: [], 
    back: [], 
    shoulders: [], 
    biceps: [], 
    triceps: []
}
const fullBodyDay = {
    chest: [], 
    back: [], 
    shoulders: [], 
    biceps: [], 
    triceps: [], 
    legs: []}

const pushDay = {
    chest: [], 
    shoulders: [], 
    triceps: []
}
const pullDay = {
    back: [], 
    shoulders: [], 
    biceps: [], 
}

const chestAndBack = {chest: [], back: []}
const shouldersAndArms = { 
    shoulders: [], 
    biceps: [], 
    triceps: []
}
const arrayOfExerciseDays = [
    legDay, 
    chestDay, 
    backDay, 
    shoulderDay, 
    armDay, 
    upperDay, 
    fullBodyDay, 
    pushDay, 
    pullDay, 
    chestAndBack, 
    shouldersAndArms]

// for (const day of arrayOfExerciseDays){
//     for (let workout in day) {downloadExercises(workout)}
//     console.log(day)
// }

//Why work out header and inner elements
const whyWorkOutList = document.getElementsByTagName('ul')[0]
whyWorkOutList.innerHTML = ""
const whyWorkOutHeader = document.getElementById('why-workout')

function appendWhyWorkOut(){
    let p1 = document.createElement('p')
    p1.textContent ="Weight Loss: exercise with a calorie deficit (eating fewer calories than you burn)"

    let p2 = document.createElement('p')
    p2.textContent ="Recomposition: you may want to gain muscle and lose fat but maintain your body weight"

    let p3 = document.createElement('p')
    p3.textContent ="Improved appearance: having a lean muscular body can be more attractive"

    let p4 = document.createElement('p')
    p4.textContent ="Overall Health: at least 150 minutes per week of moderate intensity cardio can reduce mortality  "
    let span = document.createElement('span')
    let webpage = document.createElement ('a')
        webpage.target = "_blank"
        webpage.href = "https://www.heart.org/en/healthy-living/fitness/fitness-basics/aha-recs-for-physical-activity-in-adults"
        webpage.text ="AHA guidelines"
    span.append(webpage)
    p4.append(span)

    let p5 = document.createElement('p')
    p5.textContent ="Get Stronger: also at least 30 minutes per week of resistance training can reduce mortalty  "
    let span1 = document.createElement('span')
    let webpage1 = document.createElement ('a')
        webpage1.target = "blank"
        webpage1.href = "https://bjsm.bmj.com/content/56/13/755"
        webpage1.text ="BMJ study"
    span1.append(webpage1)
    p5.append(span1)

    whyWorkOutList.append(p1,p2,p3,p4,p5)
    return whyWorkOutList
}

//How to work out header and inner elements

const howToWorkOutList = document.getElementsByTagName('ul')[1]
howToWorkOutList.innerHTML = ""
const howToWorkOutHeader = document.getElementById('how-to-workout')

function appendHowToWorkOut(){
    let p1 = document.createElement('p')
    p1.textContent = "HOW MANY DAYS AND HOW MUCH TIME CAN YOU COMMIT?  WHAT DO YOU LIKE TO DO?"

    let p2 = document.createElement('p')
    p2.textContent = "If you are really busy 2 days a week for 45 minutes each day may be pushing it. For most people 2-4 days per week is feasible."

    let p3 = document.createElement('p')
    p3.textContent ="If you like lifting weights do it.  If you like other forms of physical activity do that. The best workout is the one you like to do that you can stick to and gives you results."

    let p4 = document.createElement('p')
    p4.textContent ="You can start by selecting a workout split or customize your own split.  Don't forget to do your cardio."

    howToWorkOutList.append(p1,p2,p3,p4)
    return howToWorkOutList
}

//event listeners for the first two headers
whyWorkOutHeader.addEventListener('mouseover', ()=>{
    if (whyWorkOutList.innerHTML==='') appendWhyWorkOut() 
    else whyWorkOutList.innerHTML=''
    return whyWorkOutList
})
howToWorkOutHeader.addEventListener('mouseover', ()=>{
    if (howToWorkOutList.innerHTML==='') appendHowToWorkOut()
    else howToWorkOutList.innerHTML=''
    return whyWorkOutList
})
const exerciseInfoHeader = document.getElementById('exercise-information')
const exerciseInfoList = document.getElementsByTagName('ul')[2]
const paragraph = document.createElement('p')
const exerciseList = document.createElement ('div')

const createWorkOutHeader = document.getElementById('create-workout')
const createWorkOutList = document.getElementsByTagName('ul')[3]
const description = document.createElement('p')

let infoHeaderClicked = false
let exerciseButtonClicked = false

let createWorkOutClicked = false
let workOutButtonClicked = false

//Event listener for exercise information
exerciseInfoHeader.addEventListener('click', ()=>{
    exerciseInfoList.innerHTML = ""
    if (infoHeaderClicked){infoHeaderClicked=false} 
    else {
        infoHeaderClicked=true
        for (const keys of exerciseKeys){
            let bodypart = document.createElement("button")
            bodypart.textContent = keys
            bodypart.id = keys
            exerciseInfoList.append(bodypart)
            renderExercise(keys)
        }
    }
})
function renderExercise(muscle){
    let button = document.getElementById(muscle)
    exerciseInfoList.append(paragraph)
    button.addEventListener("click", ()=>{
        if (exerciseButtonClicked) {
            exerciseButtonClicked=false
            paragraph.textContent = ""
            exerciseList.innerHTML = ""
            }
        else {
            exerciseButtonClicked=true
            paragraph.textContent = `Here are some ${muscle} exercises.  Click an exercise below to learn more`
            paragraph.append(exerciseList)
            displayListOfExercises(muscle)
        }
    })
}

function displayListOfExercises(bodypart){
    fetch(`http://localhost:3000/${bodypart}`)
    .then(response => response.json())
    .then(data=>{
        for (let piece of data){
            let ex = document.createElement('p')
            ex.id = piece.name
            ex.style.color = "blue"
            ex.textContent = piece.name
            exerciseList.append(ex)
            describeLift(piece)
            }
        })
    .catch((error)=>alert("There is an error"))
}
function describeLift(lift){
    thisLift = document.getElementById("lift")
    thisLift.addEventListener('click', ()=> console.log(lift.muscles))
}

//Event listener for creating a workout
createWorkOutHeader.addEventListener('click', ()=>{
    createWorkOutList.innerHTML = ""
    if (infoHeaderClicked){infoHeaderClicked=false} 
    else {
        infoHeaderClicked=true
        for (const keys of splitKeys){
            let workOutSplit = document.createElement("button")
            workOutSplit.textContent = keys
            workOutSplit.id = keys
            createWorkOutList.append(workOutSplit)
            renderSplit(keys)
        }
    }
})
function renderSplit(workout){
    let button = document.getElementById(workout)
    createWorkOutList.append(description)
    button.addEventListener("click", ()=>{
        if (workOutButtonClicked) {
            workOutButtonClicked=false
            description.textContent = ""
            }
        else {
            workOutButtonClicked=true
            description.textContent = `I'm still trying to load these ${workout} splits`
        }
    })
}