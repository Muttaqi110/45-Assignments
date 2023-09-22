let fav_model_and_mode_of_transportation:Array<[transport:string,model:string]>=[]

fav_model_and_mode_of_transportation.push(["Bike", "Honda"])
fav_model_and_mode_of_transportation.push(["Car", "Suzuki"])
fav_model_and_mode_of_transportation.push(["Cycle", "Sohrab"])

fav_model_and_mode_of_transportation.forEach(([transport,model]) => {
console.log(`I would like to own a ${model} ${transport}`)
}
)
