//fetching the data from a local server
fetch('http://localhost:3000/Trucks')
  .then(response => response.json())
  .then(data => {      
    //console.log(data);   
    //display the data from the local server  
    document.getElementById('root').innerHTML=data.card 
    let card=""  
    data.forEach((Trucks)=>{
     // console.log(Trucks)
    card+=`<div class="card">  
    <img src=${Trucks.image}  alt="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/200_Ton_Truck.JPG/1200px-200_Ton_Truck.JPG">
    <h3 = Livestock Truck>${Trucks.type} </h3>      
    <p>${Trucks.price}</p>
    <p>${Trucks.available}</p>     
    <button class="btn btn-hire">Hire</button>     
    <button class="btn btn-return">Return</button>  
    <button class="btn btn-remove">Remove</button>  
   </div> `})   
   //console.log(card)      
   
   document.querySelector('.grid-container').innerHTML=card   
   const deleteButtons = document.querySelectorAll(".btn-remove");   
   console.log(deleteButtons)
   deleteButtons.forEach((btn)=> {
    btn.addEventListener('click', (e)=>{
      console.log (e.target)     
      e.target.parentNode.remove()   
  
    })      
    
    })      
   // console.log(data);   
  })   

  //Catching any eerors that might be present     
    

  .catch(error => {
    console.error(error);
  });          
  
// buttons and counter text
const counter = document.querySelector('#counter')
const btns = document.querySelectorAll('.btn')


// initialize the count variable
let count = 0

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList
    const decButton = document.querySelector('.btn')

    if (styles.contains('Return')) {
      count++

      if (decButton.disabled) decButton.disabled = false

      counter.classList.add('up')

      setTimeout(() => {
        counter.classList.remove('up')
      }, 500)
    } else if (styles.contains('Hire')) {
      count--

      if (count < 50) decButton.disabled = true

      counter.classList.add('down')

      setTimeout(() => {
        counter.classList.remove('down')
      }, 500)
    }   
  })
})    

function showForm() {
  document.getElementById("myForm").style.display = "block";    
}     
  // Add an event listener to the form submission
form.addEventListener('submit', function(event) {
  // Prevent the default form submission action
  event.preventDefault();
  
  // Use FormData API to get the form data
  let formData = new FormData(form);
})    

// displaying the serach bar functionality 
const searchBar=document.getElementById('root'); 
const Trucks= Trucks.getElementById('root'); 

searchBar.addEventListener('keyup', (e)=>{
const searchValue= e.target.value.tollerCase();
const Trucks = Trucks.getElementsByClassName('card');

Array.from(Trucks).forEach((Trucks) => {
const itemText = item.innerHTML.toLowerCase();
if (itemText.indexOf(searchTrucks) > -1) {
item.style.display = 'block';
} else {
item.style.display = 'none';
}
});
});

  
  