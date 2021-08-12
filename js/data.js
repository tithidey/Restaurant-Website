//Dish(1)
const dish_name1 = document.getElementById('dish_name1').value;
const price1 = document.getElementById('price1').value;
const button1 = document.getElementById('b1');

//Dish(2)
const dish_name2 = document.getElementById('dish_name2').value;
const price2 = document.getElementById('price2').value;
const button2 = document.getElementById('b2');

//Dish(3)
const dish_name3 = document.getElementById('dish_name3').value;
const price3 = document.getElementById('price3').value;
const button3 = document.getElementById('b3');

//Dish(4)
const dish_name4 = document.getElementById('dish_name4').value;
const price4 = document.getElementById('price4').value;
const button4 = document.getElementById('b4');

//Dish(5)
const dish_name5 = document.getElementById('dish_name5').value;
const price5 = document.getElementById('price5').value;
const button5 = document.getElementById('b5');

//Dish(6)
const dish_name6 = document.getElementById('dish_name6').value;
const price6 = document.getElementById('price6').value;
const button6 = document.getElementById('b6');

//Dish(7)
const dish_name7 = document.getElementById('dish_name7').value;
const price7 = document.getElementById('price7').value;
const button7 = document.getElementById('b7');



//eventlistener
button1.addEventListener('click', ()=>{
    if(dish_name1 && price1){
        localStorage.setItem('Name', dish_name1);
        localStorage.setItem('Price', price1);
    }
});

button2.addEventListener('click', ()=>{
    if(dish_name2 && price2){
        localStorage.setItem('Name', dish_name2);
        localStorage.setItem('Price', price2);
    }
});

button3.addEventListener('click', ()=>{
    if(dish_name3 && price3){
        localStorage.setItem('Name', dish_name3);
        localStorage.setItem('Price', price3);
    }
});
button4.addEventListener('click', ()=>{
    if(dish_name4 && price4){
        localStorage.setItem('Name', dish_name4);
        localStorage.setItem('Price', price4);
    }
});

button5.addEventListener('click', ()=>{
    if(dish_name5 && price5){
        localStorage.setItem('Name', dish_name5);
        localStorage.setItem('Price', price5);
    }
});

button6.addEventListener('click', ()=>{
    if(dish_name6 && price6){
        localStorage.setItem('Name', dish_name6);
        localStorage.setItem('Price', price6);
    }
});

button7.addEventListener('click', ()=>{
    if(dish_name7 && price7){
        localStorage.setItem('Name', dish_name7);
        localStorage.setItem('Price', price7);
    }
});
