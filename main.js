let digits = [4, 5, 6, 7, 8]

function sum(j) {
   numberSum = 0
    for (let x = 0; x < j.length; x++) {
        numberSum = numberSum + j[x];
    }
 return(numberSum)
}

sum(digits)

function average(l) {
    numberSum = 0
    let numAve = 0
    for (let x = 0; x < l.length; x++) {
        numberSum = numberSum + l[x];
        numAve = numberSum /l.length;
    }
 return(numAve)
}

average(digits)

let strArr = ['ae', 'orange', 'guava', 'passionfruit']

function returnLong(p) {
 p.sort((a,b)=>b.length-a.length)
 return p[0]
}

console.log(returnLong(strArr))

function StringsLongerThan(r,s) {
const longWords = r.filter(fruit=>fruit.length > s)
return longWords
}
console.log(StringsLongerThan(strArr,3 ))

function printNums(n)
{
    console.log(n)

    if(1 < n)
    {
        count = n-1
        printNums(count)
    }

}

printNums(100)

const arr = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

    let equation = arr.sort((a,b) => a.age - b.age);
    console.log(equation)

    let fil = arr.filter(obj => obj.age < 50);
    console.log(fil)

    let dataMap = fil.map(({ id, name, occupation, age }) => ({
        id,
        name,
        job: occupation,
        age: Number(age) + 1,
      }));

      console.log(dataMap)

      function upToN(n) {
          if (n != 1) {
            console.log(n);
            return upToN(n - 1);
          } else {
            console.log(n);
         }
        }

let reMeth = arr.reduce((accumulator,value)=>accumulator+Number(value.age), 0)

    console.log(reMeth)

let eli = {
  shirt: "black",
  jean: "blue",
  hat: "none",
};

function HNIC(personObj) {
    if (personObj.age == undefined) {
  
        personObj.age = -1
    }
  personObj.age++;
  console.log(personObj.age);


  const ndate = new Date()
  personObj.updated_at = ndate

  console.log(personObj)
}

HNIC(eli);


function HNIC2(personObj) {
    let copy = {...personObj}
    
     if (copy.age == undefined) {
        copy.age = -1
    }
    copy.age++;
    console.log(`Here is the age of the copy ${copy.age}`)

}
HNIC2(eli)

console.log(eli)



