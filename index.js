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
        let downloaded = 
            fetch(`http://localhost:3000/${keys}`)
            .then(response => response.json())
            .then(data => object[keys]=data)
            .catch((error)=>alert("There is an error"))
        } 
    return object
}
downloadExercises(exercises)