function createInstuctor (firstName, lastName){
    return {
        firstName,
        lastName,
    }
}

let favoriteNumber = 7;
const instuctor = {
    firstName: "Josue",
    [favoriteNumber]: "THis is my favorite number"
}

const c = createAnimals("Cat", "Meoww" , "mmmm")
c.meoww()

const h = createAnimals("Hores", "OOOO", "Btt")
h.ooo()

function createAnimals(Lizard , poisons, hissing) {
    return {
        Lizard,
        [poisons](){
            return hissing;
        }
    }
}