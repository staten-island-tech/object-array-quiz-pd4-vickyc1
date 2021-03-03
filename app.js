const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
const democratic = presidents.filter((presidents) => presidents.party === "D");
console.table(democratic);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
const oneTermRep = presidents.filter(
  (presidents) => presidents.party === "R" && presidents.terms === 1
);
console.table(oneTermRep);

//3) return only the last three presidents
const lastThreePres = [...presidents.slice(9)];
console.log(lastThreePres);

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
const twoTermDems = presidents.filter(
  (presidents) => presidents.party === "D" && presidents.terms === 2
);
console.log(twoTermDems);

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
const lbjCheck = presidents.filter(function (presidents) {
  if (presidents.terms === 2 && presidents.name === "Lyndon Johnson") {
    return true;
  } else {
    return false;
  }
});
console.table(lbjCheck);

if (lbjCheck.length > 0) {
  alert("LBJ served two terms");
} else {
  alert("LBJ was one and done");
}
