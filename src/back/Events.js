import alumniData from "./alumni.json"

export function getOngoingEvent(userID){

    var returnVal = {
        "type": "noOngoingEvent"
    }
    alumniData.forEach((alumni) => {
        if(alumni.userID === userID){
            console.log("mat");
            var event = alumni.event_history[0]
            if (event.type === "pending"){
                returnVal = event
            }
        }
    })

    return returnVal
}