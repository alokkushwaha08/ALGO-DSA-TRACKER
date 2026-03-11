document.addEventListener("DOMContentLoaded", function () {
const data = {

"Array":{

"Easy Level (Very Important)":[
["Two Sum","https://leetcode.com/problems/two-sum/"],
["Remove Duplicates from Sorted Array","https://leetcode.com/problems/remove-duplicates-from-sorted-array/"],
["Remove Element","https://leetcode.com/problems/remove-element/"],
["Best Time to Buy and Sell Stock","https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"],
["Maximum Subarray","https://leetcode.com/problems/maximum-subarray/"],
["Plus One","https://leetcode.com/problems/plus-one/"],
["Merge Sorted Array","https://leetcode.com/problems/merge-sorted-array/"],
["Move Zeroes","https://leetcode.com/problems/move-zeroes/"],
["Missing Number","https://leetcode.com/problems/missing-number/"],
["Contains Duplicate","https://leetcode.com/problems/contains-duplicate/"],
["Third Maximum Number","https://leetcode.com/problems/third-maximum-number/"],
["Intersection of Two Arrays","https://leetcode.com/problems/intersection-of-two-arrays/"],
["Find Pivot Index","https://leetcode.com/problems/find-pivot-index/"],
["Richest Customer Wealth","https://leetcode.com/problems/richest-customer-wealth/"],
["Running Sum of 1D Array","https://leetcode.com/problems/running-sum-of-1d-array/"],
["Find Numbers with Even Number of Digits","https://leetcode.com/problems/find-numbers-with-even-number-of-digits/"],
["Squares of a Sorted Array","https://leetcode.com/problems/squares-of-a-sorted-array/"],
["Height Checker","https://leetcode.com/problems/height-checker/"]
],

"Medium Level (Most Asked in TCS Digital)":[
["Container With Most Water","https://leetcode.com/problems/container-with-most-water/"],
["Product of Array Except Self","https://leetcode.com/problems/product-of-array-except-self/"],
["Find the Duplicate Number","https://leetcode.com/problems/find-the-duplicate-number/"],
["Sort Colors","https://leetcode.com/problems/sort-colors/"],
["Rotate Array","https://leetcode.com/problems/rotate-array/"],
["Subarray Sum Equals K","https://leetcode.com/problems/subarray-sum-equals-k/"],
["Majority Element II","https://leetcode.com/problems/majority-element-ii/"],
["Find All Duplicates in an Array","https://leetcode.com/problems/find-all-duplicates-in-an-array/"],
["Find All Numbers Disappeared in an Array","https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/"],
["Maximum Product Subarray","https://leetcode.com/problems/maximum-product-subarray/"],
["Set Matrix Zeroes","https://leetcode.com/problems/set-matrix-zeroes/"],
["Spiral Matrix","https://leetcode.com/problems/spiral-matrix/"],
["Rotate Image","https://leetcode.com/problems/rotate-image/"],
["Search in Rotated Sorted Array","https://leetcode.com/problems/search-in-rotated-sorted-array/"],
["Find First and Last Position of Element in Sorted Array","https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"],
["Kth Largest Element in an Array","https://leetcode.com/problems/kth-largest-element-in-an-array/"],
["Top K Frequent Elements","https://leetcode.com/problems/top-k-frequent-elements/"],
["Longest Consecutive Sequence","https://leetcode.com/problems/longest-consecutive-sequence/"],
["Gas Station","https://leetcode.com/problems/gas-station/"],
["Jump Game","https://leetcode.com/problems/jump-game/"],
["Jump Game II","https://leetcode.com/problems/jump-game-ii/"],
["Merge Intervals","https://leetcode.com/problems/merge-intervals/"]
],

"Advanced / High Probability":[
["Trapping Rain Water","https://leetcode.com/problems/trapping-rain-water/"],
["Median of Two Sorted Arrays","https://leetcode.com/problems/median-of-two-sorted-arrays/"],
["Split Array Largest Sum","https://leetcode.com/problems/split-array-largest-sum/"],
["Single Element in a Sorted Array","https://leetcode.com/problems/single-element-in-a-sorted-array/"],
["Find Peak Element","https://leetcode.com/problems/find-peak-element/"],
["Maximum Points You Can Obtain from Cards","https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/"],
["Continuous Subarray Sum","https://leetcode.com/problems/continuous-subarray-sum/"],
["Minimum Size Subarray Sum","https://leetcode.com/problems/minimum-size-subarray-sum/"],
["Subarray Product Less Than K","https://leetcode.com/problems/subarray-product-less-than-k/"],
["Partition Labels","https://leetcode.com/problems/partition-labels/"]
]

}

};

const tableBody = document.getElementById("tableBody");

let serial = 1;
let total = 0;

for(let topic in data){

let topicRow=document.createElement("tr");
topicRow.className="topic-row";
topicRow.innerHTML=`<td colspan="6">${topic}</td>`;
tableBody.appendChild(topicRow);

for(let level in data[topic]){

let levelRow=document.createElement("tr");
levelRow.className="level-row";
levelRow.innerHTML=`<td colspan="6">${level}</td>`;
tableBody.appendChild(levelRow);

data[topic][level].forEach(problem=>{

let row=document.createElement("tr");

row.innerHTML=`
<td>${serial}</td>
<td class="problem">${problem[0]}</td>
<td><a href="${problem[1]}" target="_blank">Open</a></td>
<td><input type="checkbox" onclick="toggleSolved(this,${serial})"></td>
<td><input type="checkbox" onclick="toggleRevisited(this,${serial})"></td>
<td>
<button onclick="decrease(this,${serial})">-</button>
<span class="count">0</span>
<button onclick="increase(this,${serial})">+</button>
</td>
`;

tableBody.appendChild(row);

restoreState(row,serial);

serial++;
total++;

});

}

}

document.getElementById("totalCount").innerText=total;

function toggleSolved(checkbox,id){

let row=checkbox.parentElement.parentElement;

if(checkbox.checked){
row.classList.add("solved");
localStorage.setItem("solved-"+id,true);
updateStreak();
}else{
row.classList.remove("solved");
localStorage.removeItem("solved-"+id);
}

updateProgress();
}

function toggleRevisited(checkbox,id){

let row=checkbox.parentElement.parentElement;

if(checkbox.checked){
row.classList.add("revisited");
localStorage.setItem("revisited-"+id,true);
}else{
row.classList.remove("revisited");
localStorage.removeItem("revisited-"+id);
}

}

function increase(button,id){

let count=button.parentElement.querySelector(".count");

let value=parseInt(count.innerText)+1;

count.innerText=value;

localStorage.setItem("count-"+id,value);

}

function decrease(button,id){

let count=button.parentElement.querySelector(".count");

let value=parseInt(count.innerText);

if(value>0){
value--;
count.innerText=value;
localStorage.setItem("count-"+id,value);
}

}

function restoreState(row,id){

let solved=localStorage.getItem("solved-"+id);
let revisited=localStorage.getItem("revisited-"+id);
let count=localStorage.getItem("count-"+id);

let solvedBox=row.querySelector("td:nth-child(4) input");
let revisitedBox=row.querySelector("td:nth-child(5) input");
let countSpan=row.querySelector(".count");

if(solved){
solvedBox.checked=true;
row.classList.add("solved");
}

if(revisited){
revisitedBox.checked=true;
row.classList.add("revisited");
}

if(count){
countSpan.innerText=count;
}

}

function updateProgress(){

let solved=document.querySelectorAll(".problem").length -
document.querySelectorAll(".problem:not(.solved)").length;

let solvedRows=document.querySelectorAll(".solved").length;

document.getElementById("solvedCount").innerText=solvedRows;

let percent=(solvedRows/total)*100;

document.getElementById("progressBar").style.width=percent+"%";

}

function searchProblem(){

let input=document.getElementById("searchBox").value.toLowerCase();

let rows=document.querySelectorAll("tbody tr");

rows.forEach(row=>{

let problem=row.querySelector(".problem");

if(problem){

let text=problem.innerText.toLowerCase();

row.style.display=text.includes(input)?"":"none";

}

});

}

function showAll(){
document.querySelectorAll("tbody tr").forEach(r=>r.style.display="");
}

function showSolved(){
document.querySelectorAll("tbody tr").forEach(r=>{
if(r.classList.contains("solved")){
r.style.display="";
}else{
r.style.display="none";
}
});
}

function showUnsolved(){
document.querySelectorAll("tbody tr").forEach(r=>{
if(!r.classList.contains("solved") && r.querySelector(".problem")){
r.style.display="";
}else{
r.style.display="none";
}
});
}

function toggleDarkMode(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("darkMode","on");
}else{
localStorage.setItem("darkMode","off");
}

}

if(localStorage.getItem("darkMode")==="on"){
document.body.classList.add("dark");
}

function exportCSV(){

let rows=document.querySelectorAll("tbody tr");

let csv="S.No,Problem,Solved,Solve Count\n";

rows.forEach(row=>{

let problem=row.querySelector(".problem");

if(problem){

let serial=row.children[0].innerText;
let name=problem.innerText;
let solved=row.classList.contains("solved")?"Yes":"No";
let count=row.querySelector(".count").innerText;

csv+=serial+","+name+","+solved+","+count+"\n";

}

});

let blob=new Blob([csv],{type:"text/csv"});

let url=URL.createObjectURL(blob);

let a=document.createElement("a");

a.href=url;
a.download="dsa_progress.csv";

a.click();

}

function updateStreak(){

let today=new Date().toDateString();

let last=localStorage.getItem("lastSolvedDate");

let streak=parseInt(localStorage.getItem("streak")||0);

if(last!==today){

streak++;

localStorage.setItem("streak",streak);
localStorage.setItem("lastSolvedDate",today);

}

document.getElementById("streakCount").innerText=streak;

}

document.getElementById("streakCount").innerText=localStorage.getItem("streak")||0;

updateProgress();
});