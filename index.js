const exerciseKeys = ['chest', 'shoulders', 'back', 'legs', 'biceps', 'triceps', 'abdominals', 'cardio']

const workOutSplits = {
    fullBody: {
        name: "Full body workout",
        purpose: "works every muscle group in one workout",
        musclesTrained: "chest, back, shoulders, arms and legs in one workout",
        frequency: "2-6 times per week for a total of 2-6 days of training",
        maxFrequency: 6
    }, 
    upperLower: {
        name: "Upper lower workout",
        purpose: "works the body in two workouts, one for upper body muscles and one for lower body muscles",
        musclesTrained: "chest, back, shoulders, arms on one day and legs on the other day",
        frequency: "2-3 times per week for a total of 4-6 days of training",
        maxFrequency: 3
    }, 
    pushPullLegs: {
        name: "Push pull legs workout",
        purpose: "works the body in three workouts, one for push muscles, one for pull muscles, and one for lower body muscles",
        musclesTrained: "chest, triceps, shoulders on day 1, back, shoulders, biceps on day 2, and legs on day 3",
        frequency: "2 times per week for a total of 6 days of training",
        maxFrequency: 2
    }, 
    arnoldSplit: {
        name: "Arnold split workout, named after Arnold Schwarzenegger who used this split",
        purpose: "works the body in three workouts, one for chest and back, one for shoulders and arms, and one for legs",
        musclesTrained: "chest, triceps, shoulders on day 1, back, shoulders, biceps on day 2, and legs on day 3",
        frequency: "2 times per week for a total of 6 days of training",
        maxFrequency: 2
    }, 
    broSplit: {
        name: "body part split, aka 'Bro' split popularized by gym bros around the world",
        purpose: "works the body dedicating a day for each body part: ex. chest day, back day, shoulder day, arm day and leg day",
        musclesTrained: "chest, back, shoulders, arms, legs each trained one day per week",
        frequency: "once per week for a total of 5 days of training",
        maxFrequency: 1
    },
    customSplit: {name: "a custom training split",
        purpose: "a customized split that does not fit the other training splits",
        musclesTrained: "whatever you feel like training",
        frequency: "can vary",
        maxFrequency: 7}
}

const splitKeys = Object.keys(workOutSplits)

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
            let lift = document.getElementById(piece.name)
            lift.addEventListener('click', ()=>liftDescription(piece))
            }
        })
    .catch((error)=>alert("There is an error"))
    }

function liftDescription(lift){
    let lifted = document.getElementById(lift.name)
    lifted.innerHTML = ""
    let ul = document.createElement('ul')
    ul.textContent = lift.name
    let description = document.createElement('p')
    description.textContent = `${lift.name} focuses on these muscles: ${lift.muscles}.`
    let image = document.createElement('img')
    image.src = lift.image
    ul.append(description, image)
    lifted.append(ul)
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