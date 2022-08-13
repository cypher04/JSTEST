//single element. querySelector is used to select other elements other than getElementById


//in HTML Collectiosn, you can't use an array method on it only a nodelist
/*
console.log (document.querySelector('label'));


// Multiple Element
console.log (document.getElementsByClassName('container'));
console.log (document.querySelectorAll('label'));


//looping through the Classes/Id

const noo = document.querySelectorAll('label');

noo.forEach(label => {
    console.log(noo);
});
*/

/*changing elements in a list in HTML with Javascript

const ele = document.querySelector('.list');

ele.firstElementChild.textContent='hello';
ele.children[1].textContent='world';
ele.lastElementChild.innerHTML='<h1>My</h1>';

*/



const logr = document.querySelector('.logss');
const nae = document.querySelector('.name');
const pass = document.querySelector('.pass');
const free = document.querySelector('.free');
const canclebtn = document.querySelector('.canclebtn');
let first_div = document.querySelector(".new_div");
let second_div = document.querySelector(".new_div2");
//const ndiv = document.querySelector('.new_div');




logr.addEventListener('click', onSubmit);

function onSubmit(e){
e.preventDefault();

    if (nae.value === '') {
        
        first_div.innerHTML = 'Please Enter Your Name';
        
        setTimeout(() => first_div.remove(), 1000);
    }
    else if (pass.value === ""){

        first_div.innerHTML = 'Please Enter Your Password';

        setTimeout(() => first_div.remove(), 1000); // this sets the timeout for the error message
    }
    else{
        second_div.innerHTML = `Welcome on board ${nae.value} Please proceed to the next step `;
    }
};



/*
function play(){
    canclebtn.innerHTML = 'Selected';
    canclebtn.style.background = 'blue';
};

function sayHello(){
    const abi = document.write('hello world');
    console.log(abi);
};

// Events in Javascript
*/






    

   /* let final = first_div.appendChild("shoo");
    document.first_div.innerHTML = final; 

//const para = document.free.inner

    //console.log();*/


/*canclebtn.addEventListener('click', addMsg); 

function addMsg(){

    
};*/

/*function addMsg(e){
    const first_div = document.createElement('div');

    const txtt = document.createTextNode(`Welcome ${nae.value} to this platform`);

    const final = first_div.appendChild(txtt);

    //const nave = document.getElementsByClassName('new_div');

    document.free.appendChild(final);
};*/

  









