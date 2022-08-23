let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let el = document.getElementsByTagName('#li');

//we will create a function that will allow to add elements on button 

btn.addEventListener('click',() => {
    let txt = input.value;
    if(txt===""){
        alert('you have to wite something');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li,list.childNodes[0]);
        input.value = '';

    }
}
)

//we have to write the function that will allow to mark the done subject

list.addEventListener('click', e =>{
    if(e.target.tagName=='LI'){
        e.target.classList.toggle('checked');
    }
}
)
