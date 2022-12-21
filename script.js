raceResults(['Miller' , 'Kane' , 'Messi', 'Ronaldo' , 'Carmen'])
//{first: "Miller", second: "Kane" , third: "Messi" , rest: ["Ronaldo" , "Carmen"]}
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})