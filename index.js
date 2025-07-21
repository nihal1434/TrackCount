let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let incrementBtn = document.getElementById("increment-btn");
let saveBtn = document.getElementById("save-btn");
let totalEntries= document.getElementById("Total-entry");
let count = 0;
let total=0;
incrementBtn.addEventListener("click", function () {
  count += 1;
  countEl.textContent = count;
});

saveBtn.addEventListener("click", function () {
  if (count > 0) {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    total+=count;
    totalEntries.textContent =`Total Entries: ${total}`
    countEl.textContent = 0;
    count = 0;
  }
});
