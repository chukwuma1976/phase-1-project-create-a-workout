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
const exerciseKeys = Object.keys(exercises)

function downloadExercises(object){
    for (let keys of exerciseKeys){
        const downloaded = 
            fetch(`http://localhost:3000/${keys}`)
            .then(response => response.json())
            .then(data => object[keys]=data)
            .catch((error)=>alert("There is an error"))
        } 
    return object
}
downloadExercises(exercises)

const fullBody = {
    name: "Full body workout",
    purpose: "works every muscle group in one workout",
    musclesTrained: "chest, back, shoulders, arms, legs, and maybe abs too",
    frequency: "2-6 times per week for a total of 2-6 days of training",
    keys: ["chest", "back", "shoulders", "biceps", "triceps", "legs", "customize"],
    workouts: ["fullbody1", "fullbody2", "fullbody3", "fullbody4", "fullbody5", "fullbody6",]
}
const upperLower = {
    name: "Upper lower workout",
    purpose: "works the body in two workouts, one for upper body muscles and one for lower body muscles",
    musclesTrained: "chest, back, shoulders, arms on one day and legs on the other day",
    frequency: "2-3 times per week for a total of 4-6 days of training",
    keys: ["chest", "back", "shoulders", "biceps", "triceps", "legs", "customize"],
    workouts: ["upper1", "lower1", "upper2", "lower2"]
}
const pushPullLegs = {
    name: "Push pull legs workout",
    purpose: "works the body in three workouts, one for push muscles, one for pull muscles, and one for lower body muscles",
    musclesTrained: "chest, triceps, shoulders on day 1, back, shoulders, biceps on day 2, and legs on day 3",
    frequency: "2 times per week for a total of 6 days of training",
    keys: ["chest", "back", "shoulders", "biceps", "triceps", "legs", "customize"],
    workouts: ["push1", "pull1", "legs1", "push2", "pull2", "legs2"]
}
const arnoldSplit = {
    name: "Arnold split workout, named after Arnold Schwarzenegger who used this split",
    purpose: "works the body in three workouts, one for chest and back, one for shoulders and arms, and one for legs",
    musclesTrained: "chest, triceps, shoulders on day 1, back, shoulders, biceps on day 2, and legs on day 3",
    frequency: "2 times per week for a total of 6 days of training",
    keys: ["chest", "back", "shoulders", "biceps", "triceps", "legs", "customize"],
    workouts: ["chest and back 1", "shoulders and arms 1", "legs 1", "chest and back 2", "shoulders and arms 2", "legs 2"]
}
const broSplit = {
    name: "body part split, aka Bro split popularized by gym bros around the world",
    purpose: "works the body dedicating a day for each body part: ex. chest day, back day, shoulder day, arm day and leg day",
    musclesTrained: "chest, triceps, shoulders on day 1, back, shoulders, biceps on day 2, and legs on day 3",
    frequency: "2 times per week for a total of 6 days of training",
    keys: ["chest", "back", "shoulders", "biceps", "triceps", "legs", "customize"],
    workouts: ["chest day", "back day", "shoulder day", "arm day", "leg day"]   
}

const workOutSplits = [fullBody, upperLower, pushPullLegs, arnoldSplit, broSplit]

const legDay = [...exercises.legs]
const chestDay = [...exercises.chest]
const backDay = [...exercises.back]
const shoulderDay = [...exercises.shoulders]
const armDay = [...exercises.biceps, ...exercises.triceps]

const upperDay = [chestDay, backDay, armDay]

const fullBodyDay = [chestDay, backDay, shoulderDay, armDay, legDay]

const pushDay = [chestDay, shoulderDay, exercises.triceps]
const pullDay = [backDay, shoulderDay, exercises.biceps]

const chestAndBack = [chestDay, backDay]
const shouldersAndArms = [shoulderDay, armDay]