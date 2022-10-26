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

const exerciseInfoHeader = document.getElementById('exercise-information')
const exerciseInfoList = document.getElementsByTagName('ul')[2]

const createWorkOutHeader = document.getElementById('create-workout')
const createWorkOutList = document.getElementsByTagName('ul')[3]

// appendWhyWorkOut()
// appendHowToWorkOut()

whyWorkOutHeader.addEventListener('click', ()=>{
    if (whyWorkOutList.innerHTML===''){
        appendWhyWorkOut()
        console.log('I was opened')
    } else {whyWorkOutList.innerHTML=''}
    return whyWorkOutList
})
howToWorkOutHeader.addEventListener('click', ()=>{
    if (howToWorkOutList.innerHTML===''){
        appendHowToWorkOut()
        console.log('I was opened')
    } else {howToWorkOutList.innerHTML=''}
    return whyWorkOutList
})

// function expandHeader(header, list, callback){
//     header.addEventListener('click', ()=>{
//         if (list.innerHtML !== ""){
//             console.log(list.innerHTML)
//             list.innerHTML = ""
//             console.log("I have collapsed")
//         }
//         else {
//             console.log(list.innerHTML)
//             callback
//             console.log("I have opened", callback)
//         }
//         //return list
//     })
// }
// expandHeader(whyWorkOutHeader, whyWorkOutList, appendWhyWorkOut)
// expandHeader(howToWorkOutHeader, howToWorkOutList, appendHowToWorkOut)