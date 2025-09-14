let previousEntry = document.getElementById("previous-entry");
let countEl = document.getElementById("count-el");
let incrementBtn = document.getElementById("increment-btn");
let saveBtn = document.getElementById("save-btn");
let totalEntries = document.getElementById("total-entry"); 
let resetBtn = document.getElementById("reset-btn");

let count = 0;
let total = 0;

incrementBtn.addEventListener("click",function(){
  count++;
  countEl.textContent=count;
})

saveBtn.addEventListener("click",function(){
  if(count>0){
    let countStr=count+" - ";
    previousEntry.textContent+=countStr
    total+=count;
    totalEntries.textContent=`Total Entries: ${total}`
    countEl.textContent=0;
    count=0;
  }
})

resetBtn.addEventListener("click",function(){
  previousEntry.textContent=`Previous Entries:`
  totalEntries.textContent=`Total Entries:0`
  countEl.textContent=0
  count=total=0;
})