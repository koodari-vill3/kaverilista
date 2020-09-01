let list = [];

function addItem(item){
    list.push(item);
    printlist();

}

function printlist(){
    let liElems = '';
    for(let i=0; i<list.length; i++){
       liElems = liElems + `<li>${list[i]}</li>`;
    }
    document.getElementById('Kaverilista').innerHTML = liElems;
}

function removeItem(){
    list.pop();
    printlist();
}
