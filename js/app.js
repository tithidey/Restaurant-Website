const orderName = document.getElementById('order_name');
const total = document.getElementById('_price');
const image = document.getElementById('images');
const orderInfo = document.querySelector('.order-info');
const person = document.getElementById('person');
const increaseDecValue = document.getElementById('increase_value');
const confirm_button = document.getElementById('confirm_button');

const customerName = document.getElementById('name');
const customerAddress = document.getElementById('address');

let plus = '';
let minus = '';
let dishName = '';
let dishPrice = 0;
let total_price = 0;

const buttonAction = (btn1, btn2)=>{
    plus = btn1;
    minus = btn2;
}

function getInfo(){
    const name = localStorage.getItem('Name');
    const price = localStorage.getItem('Price');
    dishName = name;
    dishPrice = price;

    if(name === 'Chicken Biriyani'){
        image.innerHTML = '<img src="/image/biriyani.jpg" alt="chicken biriyani"/>';
       
    }else if(name === 'Butter Chicken'){
        image.innerHTML = '<img src="/image/butter chicken.jpg" alt="butter chicken"/>';
    }
    
    else if(name === 'Chicken Curry'){
        image.innerHTML = '<img src="/image/chicken curry.jpg" alt="curry">';
    }
    else if(name === 'Special Burger'){
        image.innerHTML = '<img src="/image/burger.jpg" alt="burger">';
    }
    else if(name === 'Vegetable Shawrma'){
        image.innerHTML = '<img src="/image/shawrma.jpg" alt="shawrma">';
    }
    else if(name === 'Mango Milkshake'){
        image.innerHTML = '<img src="/image/mango.jpg" alt="mango shake" />';
    }
    else if(name === 'Strawberry Milkshake'){
        image.innerHTML = '<img src="/image/strawberry.jpg" alt="milkshake" />';
    }
    
    orderName.innerHTML = name;

    perPersonPrice = price;
    total.innerHTML = price;
    

    const plus = document.createElement('button');
    plus.innerHTML = '<i class="fas fa-plus"></i>';
    plus.className = 'plus_btn';
    increaseDecValue.appendChild(plus);


    const minus = document.createElement('button');
    minus.innerHTML = '<i class="fas fa-minus"></i>';
    minus.className = 'minus_btn';
    increaseDecValue.appendChild(minus);

    buttonAction(plus, minus);

}
getInfo();

plus.addEventListener('click', ()=>{

    let total_person = ++person.value;
    let totalPrice = total_person * dishPrice;
    total_price = totalPrice;
    total.innerHTML = totalPrice;
})

function decrease(){
    if(person.value >0){
        let currentValue = person.value--;
        if(currentValue >= 0){
            console.log(currentValue);
            total_price = total_price - dishPrice;
            total.innerHTML = total_price;
            console.log(total_price);
        }
    }    
}
minus.addEventListener('click', decrease);

confirm_button.addEventListener('click', ()=>{
    let name = customerName.value;
    let address = customerAddress.value;

    if(person.value > 0 && name.length != 0 && address.length != 0){
        alert("Your order confirmed!");
    }else if(name.length == 0 && address.length == 0){

        alert('Please fill up the name & address field');
    }else if(name.length == 0){
        alert('Please fill up the name field');
    }else if(address.length == 0){
        alert('Please fill up the address field');
    }
    else{
        alert("Please set the number of order");
    }
})