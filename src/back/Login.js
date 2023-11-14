import alumniData from "./alumni.json"

// "email": "test@sdiet",
// "password": "Aa@1234567890"

export function login(email, password){

    var returnVal = {
        response: false,
        userID: "",
    }
    
    alumniData.forEach((alumni, index) => {
        if (alumni.email == email && alumni.password == password){
            returnVal.response = true
            returnVal.userID = alumni.userID
        }
    });

    return returnVal
}

