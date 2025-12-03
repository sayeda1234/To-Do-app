const input=document.querySelector('input');
const button=document.querySelector('button');
const ul=document.querySelector('ul');

button.addEventListener('click',function() {
    let item=document.createElement('li');
    item.innerText=input.value;

    let deleteButton=document.createElement('button');
    deleteButton.innerText='Delete';
    deleteButton.classList.add('delete');
    item.appendChild(deleteButton);
    ul.appendChild(item);
    input.value='';
    
});
ul.addEventListener('click',function(event) {
    if(event.target.nodeName==='BUTTON') {
        let listItem=event.target.parentElement;
        listItem.remove();
    }
});

