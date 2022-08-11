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
logr.addEventListener('click', onSubmit);

function onSubmit(){

    if (nae.value === '') {
        alert('please enter name');
    }
    else if (pass.value === ""){
        alert('enter password');
    }
    else{
        alert('success');
    }

const para = 

    document.free.inner

    
    
    //console.log();
};

canclebtn.addEventListener('click', addMsg);

function addMsg(e){
    const first_div = document.createElement('div');

    const txtt = document.createTextNode(`Welcome ${nae.value} to this platform`);

    const final = first_div.appendChild(txtt);

    //const nave = document.getElementsByClassName('new_div');

    document.free.appendChild(final);
};

  









