'use strict'
let leftIndex;
let middleIndex;
let rightIndex;
let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');
let rightImageElement = document.getElementById('right-image');
//let ctx = document.getElementById('myChart');

// let middleImageElement = document.getElementById('midlle-image');
// let rightImageElement = document.getElementById('right-image');
let container = document.getElementById('one');
let rounds = 5;
let counter = 0;
let arrOfVotes=[];
BusMall.allBuses = [];

function BusMall(name, path) {
    this.name = name;
    this.path = path;
    this.times = 0;
    this.votes = 0;
    BusMall.allBuses.push(this);


}



new BusMall('bag.jpg', 'assests/bag.jpg');
new BusMall('banana.jpg', 'assests/banana.jpg');
new BusMall('bathroom.jpg', 'assests/bathroom.jpg');
new BusMall('boots.jpg', 'assests/boots.jpg');
new BusMall('breakfaxt.jpg', 'assests/breakfast.jpg');
new BusMall('bubblegum.jpg', 'assests/bubblegum.jpg');
new BusMall('chair.jpg', 'images/kissing-goat.jpg');
new BusMall('cthulhu.jpg', 'assests/cthulhu.jpg');
new BusMall('dragon.jpg', 'assests/dragon.jpg');
new BusMall('pen.jpg', 'assests/pen.jpg');
new BusMall('pet-sweep.jpg', 'assests/pet-sweep.jpg'); 
new BusMall('scissors.jpg', 'assests/scissors.jpg');
new BusMall('shark.jpg', 'assests/shark.jpg');
new BusMall('sweep.jpg', 'assests/sweep.png');
new BusMall('tauntaun.jpg', 'assests/tauntaun.jpg');
new BusMall('unicorn.jpg', 'assests/unicorn.jpg');
new BusMall('usb.gif', 'assests/usb.gif');
new BusMall('water-can.jpg', 'assests/water-can.jpg');
new BusMall('wine-glass.jpg', 'assests/wine-glass.jpg');
console.log(BusMall);


function displayThreeImages() {
    leftIndex = generateRandomIndex();
    middleIndex = generateRandomIndex();
    rightIndex = generateRandomIndex();
    console.log(leftIndex);
    console.log(middleIndex);
    console.log(rightIndex);
    while (leftIndex === rightIndex || leftIndex === middleIndex || middleIndex === rightIndex) {
        leftIndex = generateRandomIndex();
   
       
    
    }
    //leftImageElement.setAttribute('src',BusMall.allBuses[leftIndex].path);
leftImageElement.src=BusMall.allBuses[middleIndex].path;
middleImageElement.src=BusMall.allBuses[middleIndex].path;
rightImageElement.src=BusMall.allBuses[rightIndex].path;
console.log(leftImageElement);

    // middleImageElement.setAttribute('src',BusMall.allBuses[leftIndex].path);
    // rightImageElement.setAttribute('src',BusMall.allBuses[leftIndex.path]);

    //  middleImageElement.src = BusMall.allBuses[middleIndex].path;
     //BusMall.allBuses
    //  rightImageElement.src = BusMall.allBuses[rightIndex].path;
     //BusMall.allBuses
}
console.log( BusMall.allBuses[1].path);
// leftImageElement.addEventListener('click',handleClicking);
// middleImageElement.addEventListener('click',handleClicking);
// rightImageElement.addEventListener('click',handleClicking);

//btnEl.addEventListener('click',handleClicking);

function generateRandomIndex() {
    let randIndex = Math.floor(Math.random() * BusMall.allBuses.length);
    return randIndex;
}

container.addEventListener('click', handleClicking);
let btnEl;
function handleClicking(event) {
    counter++;
    console.log(event.target.id);
    if (rounds >= counter) {
        if (event.target.id === 'left-image') {
            BusMall.allBuses[leftIndex].votes++;
        }
        else if(event.target.id === 'middle-image'){
            BusMall.allBuses[middleIndex].votes++;
        } else if(event.target.id ==='right-image'){
            BusMall.allBuses[rightIndex].votes++;
        }else{
            counter++
            return;
        }
    }
    btnEl.addEventListener('click',handleClicking);
}
let arr = [];

function handleShowing(){
  gettingList();
 // gettingChart();
 savingToLs();
  btnEl.removeEventListener('click',handleShowing);


}
handleShowing();

// let arrOfSeen =[];

 function gettingList(){
   let ul = document.getElementById('unList');
  for(let i = 0 ; i <BusMall.allBuses.length; i++ ){
    arrOfVotes.push(BusMall.allBuses.length.votes);
                             
//     arrOfSeen.push(BusMall.allBuses.[i].);
    
     let li = document.createElement('li');
     ul.appendChild(li);
    li.textContent = `${BusMall.allBuses[i].name} has ${BusMall.allBuses[i].votes} Votes.`;
  }
}



displayThreeImages();
 //localStorage.setAttribute('name','Ahmad');
 //localStorage.setAttribute('pass','24425');


 function savingToLs(){
    let convertedArr = JSON.stringify(BusMall); 
    localStorage.setItem('votes',convertedArr);
    
  }
  function gettingOrdersFromLs(){
    let data = localStorage.getItem('votes');
    console.log(data);
    
    let parsedOrder = JSON.parse(data);
    console.log(parsedOrder);
   
    if(parsedOrder !== null){ // parsedOrder !== Null
  
      BusMall.allBuses = parsedOrder;
       


    }
  }

// function gettingChart(){


//     let ctx = document.getElementById('myChart')
//     let myChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: arrOfNames,
//             datasets: [{
//                 label: '# of Votes',
//                 data: arrOfVotes,
//                 backgroundColor: [
//                     'rgba(220, 99, 132, 0.8)',
//                 ],
//                 borderWidth: 1
//             },{
//               label: '# of Seen',
//               data: arrOfSeen,
//               backgroundColor: [
//                   'rgba(200, 120, 132, 0.7)',
//               ],
//               borderWidth: 1
//           }
//           ]
//         },
//     });
//     }