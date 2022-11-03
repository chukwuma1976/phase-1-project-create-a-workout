const exerciseKeys = ['chest', 'shoulders', 'back', 'legs', 'biceps', 'triceps', 'abdominals', 'cardio']

const legDay = ["legs"]
const chestDay = ["chest"]
const backDay = ["back"]
const shoulderDay = ["shoulders"]
const armDay = ["biceps", "triceps"]

const upperDay = ["chest", "back", "shoulders", "biceps", "triceps"]
const fullBodyDay = ["chest", "back", "shoulders", "biceps", "triceps","legs"]
const pushDay = ["chest",  "shoulders", "triceps"]
const pullDay = ["back", "shoulders", "biceps"]
const chestAndBack = ["chest", "back"]
const shouldersAndArms = [ "shoulders", "biceps", "triceps"]

const workOutSplits = {
    fullBody: {
        name: "Full body workout",
        purpose: "works every muscle group in the body in one workout",
        musclesTrained: "chest, back, shoulders, arms and legs in one workout",
        frequency: "2-6 times per week for a total of 2-6 days of training per week",
        maxFrequency: 6,
        workOutDays: {fullbody: fullBodyDay}
    }, 
    upperLower: {
        name: "Upper lower workout",
        purpose: "works the entire body in two workouts, one for upper body muscles and one for lower body muscles",
        musclesTrained: "chest, back, shoulders, arms (upper body) on one day and legs (lower body) on the other day",
        frequency: "2-3 times per week for a total of 4-6 days of training per week",
        maxFrequency: 3,
        workOutDays: {upper: upperDay, lower: legDay}
    }, 
    pushPullLegs: {
        name: "Push pull legs workout",
        purpose: "works the entire body in three workouts, one for push muscles, one for pull muscles, and one for lower body muscles",
        musclesTrained: "chest, triceps, shoulders (push muscles) on day 1, back, shoulders, biceps (pull muscles) on day 2, and legs on day 3",
        frequency: "2 times per week for a total of 6 days of training",
        maxFrequency: 2,
        workOutDays: {push: pushDay, pull: pullDay,legs: legDay}
    }, 
    arnoldSplit: {
        name: "Arnold split workout",
        purpose: "works the entire body in three workouts, one for chest and back, one for shoulders and arms, and one for legs",
        musclesTrained: "chest, triceps, shoulders on day 1, back, shoulders, biceps on day 2, and legs on day 3",
        frequency: "2 times per week for a total of 6 days of training per week",
        maxFrequency: 2,
        workOutDays: {chest_And_Back: chestAndBack, shoulders_And_Arms: shouldersAndArms, legs: legDay}
    }, 
    broSplit: {
        name: "Body part split, aka 'Bro' split",
        purpose: "works the body dedicating a day for each body part: ex. chest day, back day, shoulder day, arm day and leg day",
        musclesTrained: "chest, back, shoulders, arms, legs each trained one day per week",
        frequency: "once per week for a total of 5 days of training per week",
        maxFrequency: 1,
        workOutDays: {chest: chestDay, back: backDay, shoulder: shoulderDay, arm: armDay, leg: legDay}
    },
    customSplit: {
        name: "Custom training split",
        purpose: "is a customized split that does not fit the other training splits",
        musclesTrained: "whatever you feel like training",
        frequency: "variable",
        maxFrequency: 6,
        workOutDays: {custom: fullBodyDay}
    }
}

const splitKeys = Object.keys(workOutSplits)

//Why work out header and inner elements

const whyWorkOutList = document.getElementById('why')
whyWorkOutList.innerHTML = ""
const whyWorkOutHeader = document.getElementById('why-workout')

function appendWhyWorkOut(){
    const p1 = document.createElement('p')
    p1.textContent ="WEIGHT LOSS: exercise with a calorie deficit (eating fewer calories than you burn)"
    const p2 = document.createElement('p')
    p2.textContent ="BODY RECOMPOSITION: you may want to gain muscle and lose fat but maintain your body weight"
    const p3 = document.createElement('p')
    p3.textContent ="IMPROVED APPEARANCE: having a lean muscular body can be more attractive"
    const p4 = document.createElement('p')
    p4.textContent ="OVERALL HEALTH: at least 150 minutes per week of moderate intensity cardio can reduce mortality  "
    const p5 = document.createElement('p')
    p5.textContent ="GET STRONGER: also at least 30 minutes per week of resistance training can reduce mortalty  "

    whyWorkOutList.append(p1,p2,p3,p4,p5)
}

//How to work out header and inner elements

const howToWorkOutList = document.getElementById('how')
howToWorkOutList.innerHTML = ""
const howToWorkOutHeader = document.getElementById('how-to-workout')

function appendHowToWorkOut(){
    const p1 = document.createElement('p')
    p1.textContent = "HOW MANY DAYS AND HOW MUCH TIME CAN YOU COMMIT?  WHAT DO YOU LIKE TO DO?"
    const p2 = document.createElement('p')
    p2.textContent = "If you are really busy 2 days a week for 45 minutes each day may be pushing it. For most people 2-4 days per week is feasible."
    const p3 = document.createElement('p')
    p3.textContent ="If you like lifting weights do it.  If you like other forms of physical activity do that. The best workout is the one you like to do that you can stick to and gives you results."
    const p4 = document.createElement('p')
    p4.textContent ="You can start by selecting a workout split or customize your own split.  Don't forget to do your cardio."

    howToWorkOutList.append(p1,p2,p3,p4)
}

//**event listeners for the top two headers**

whyWorkOutHeader.addEventListener('mouseover', ()=>{
    if (whyWorkOutList.innerHTML==='') appendWhyWorkOut() 
    else whyWorkOutList.innerHTML=''
})
howToWorkOutHeader.addEventListener('mouseover', ()=>{
    if (howToWorkOutList.innerHTML==='') appendHowToWorkOut()
    else howToWorkOutList.innerHTML=''
})
// Exercise information header and create a workout header and inner elements

const exerciseInfoHeader = document.getElementById('exercise-information')
const exerciseInfoList = document.getElementById('information')
const paragraph = document.createElement('p')
const exerciseList = document.createElement ('div')

const createWorkOutHeader = document.getElementById('create-workout')
const createWorkOutList = document.getElementById('create')
const description = document.createElement('p')
const splitList = document.createElement('div')
const workoutWeek = document.createElement('div')

const yourWorkOutList = document.getElementById('workout-list')
const yourWorkOutHeader = document.getElementById('workout-split')

let infoHeaderClicked = false
let exerciseButtonClicked = false

let createWorkOutClicked = false
let workOutButtonClicked = false

//**Event listener for exercise information**

exerciseInfoHeader.addEventListener('click', ()=>{
    exerciseInfoList.innerHTML = ""
    if (infoHeaderClicked){infoHeaderClicked=false} 
    else {
        infoHeaderClicked=true
        exerciseKeys.forEach (keys=>{
            let bodypart = document.createElement("button")
            bodypart.textContent = keys
            bodypart.id = keys
            exerciseInfoList.append(bodypart)
            renderExercise(keys)
        })
    }
})

//creates an exercise list container for a muscle
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

//renders a clickable list of exercises for a muscle
function displayListOfExercises(bodypart){
    fetch(`http://localhost:3000/${bodypart}`)
    .then(response => response.json())
    .then(data=>{
        for (let piece of data){
            let ex = document.createElement('p')
            ex.className = 'piece-name'
            ex.textContent = piece.name.toUpperCase()

            let ul = document.createElement('ul')
            
            let liftClicked = false

            ex.addEventListener('click', ()=>{
                if (liftClicked){
                    liftClicked=false
                    ul.innerHTML = ""
                }
                else {
                    liftClicked=true

                    let description = document.createElement('p')
                    description.textContent = `${piece.name} focuses on these muscles: ${piece.muscles}.`
                    let image = document.createElement('img')
                    image.src = piece.image

                    ul.append(description, image)
                    ex.append(ul)
                }
            })
            exerciseList.append(ex)
        }
    })
    .catch((error)=>alert("There is an error"))
}

//Event listener for choosing a workout split and creating a workout
createWorkOutHeader.addEventListener('click', ()=>{
    createWorkOutList.innerHTML = ""
    if (infoHeaderClicked)infoHeaderClicked=false 
    else {
        infoHeaderClicked=true
        splitKeys.forEach (keys=>{
            let workOutSplit = document.createElement("button")
            workOutSplit.textContent = workOutSplits[keys].name
            workOutSplit.id = keys
            createWorkOutList.append(workOutSplit)
            renderSplit(keys)
        })
    }
})

//creates a container for a specific split
function renderSplit(workout){
    let button = document.getElementById(workout)
    createWorkOutList.append(description)
    button.addEventListener("click", ()=>{
        if (workOutButtonClicked) {
            workOutButtonClicked=false
            splitList.innerHTML = ""
            yourWorkOutHeader.textContent = ""
            yourWorkOutList.innerHTML = ""
            }
        else {
            workOutButtonClicked=true
            description.append(splitList)
            displaySplit(workOutSplits[workout])
            makeWorkOut(workOutSplits[workout])
        }
    })
}

//displays general information describing a specific split
function displaySplit(split){
    let nameOf = document.createElement('p')
    nameOf.textContent = split.name.toUpperCase()
    nameOf.id = 'name-of'
    let purpose = document.createElement('p')
    purpose.textContent =`${split.name} ${split.purpose}.  It trains ${split.musclesTrained}.`
    let occurence = document.createElement('p')
    occurence.textContent = `The frequency is ${split.frequency}.  The maximum frequency is ${split.maxFrequency} times per week.`

    splitList.append(nameOf, purpose, occurence)
    createWorkOutList.append(splitList)
    yourWorkOutHeader.textContent = `YOUR PERSONAL ${split.name.toUpperCase()}`
}

//Generate a workout based on a chosen workout split
function makeWorkOut (mySplit){
    let frequency = document.createElement("form")

    let label = document.createElement("label")
    label.textContent = `Enter workout frequency for ${mySplit.name} less than or equal to ${mySplit.maxFrequency}.`

    let input = document.createElement("input")
    input.placeholder = `${mySplit.maxFrequency}`
    input.id = "number"
    input.type = "text"
    
    let button = document.createElement("button")
    button.type = "submit"
    button.textContent = "submit"

    frequency.append(label, input, button)
    splitList.append(frequency)

    let freq
    frequency.addEventListener('submit', (e)=>{
        e.preventDefault()
        if (e.target.number.value < mySplit.maxFrequency)freq = e.target.number.value 
            else freq = mySplit.maxFrequency
        let keysOfLifts = Object.keys(mySplit.workOutDays)
    
        workoutWeek.innerHTML = ""
        for (i=1; i<=freq; i++){keysOfLifts.forEach (key=>renderAndSelect(mySplit.workOutDays[key], key))} 
    }) 
}

//pick exercises based on a workout day and generate a workout simultaneously
function renderAndSelect(dayOfSplit, day){
    let wrkoutdy = document.createElement('ul')
    let header = document.createElement('h4')
    header.textContent = `${day.toUpperCase()} DAY ${i} EXERCISES`
    header.className = "split-header"
    wrkoutdy.append(header)
    let exerciseChoices = document.createElement('div')

    let liftDay = document.createElement('p')
    liftDay.textContent =  `${day.toUpperCase()} DAY ${i}`
    liftDay.className = "workout-day"

    dayOfSplit.forEach (lifts=>{
        let dropdown = document.createElement('button')
        dropdown.textContent = `Select ${lifts} exercises`
        let bodypartClicked = false
        
        dropdown.addEventListener('click', (e)=>{
            exerciseChoices.innerHTML = ""
            if (bodypartClicked) {bodypartClicked=false}
            else {
                bodypartClicked=true
                let pickAnExercise = document.createElement('header')
                pickAnExercise.textContent = `Please pick ${lifts.toUpperCase()} EXERCISES by clicking an exercise name below`
                pickAnExercise.id = "pick-an-exercise"
                exerciseChoices.append(pickAnExercise)

                fetch(`http://localhost:3000/${lifts}`)
                .then(response => response.json())
                .then(data=>{
                    for (let piece of data){
                        let thisLift = document.createElement('p')
                        thisLift.className = "this-lift"
                        thisLift.textContent = piece.name
                        thisLift.addEventListener('click', ()=>{
                            
                            let newLift = document.createElement('p')
                            newLift.textContent = `${piece.name}: 2-5 sets for 5-20 reps  `

                            let deleteBtn = document.createElement('button')
                            deleteBtn.textContent = "delete"

                            newLift.append(deleteBtn)
                            liftDay.append(newLift)
                            deleteBtn.addEventListener('click', ()=>newLift.remove())
                        })
                        exerciseChoices.append(thisLift)
                    }
                })
                .catch((error)=>alert("There is an error"))
            }   
        })   
        wrkoutdy.append(dropdown, exerciseChoices)
        workoutWeek.append(wrkoutdy)
        })
    splitList.append(workoutWeek)
    yourWorkOutList.append(liftDay)
}