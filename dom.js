//EXAMINE THE DOCUMENT OBJECT//

// console.dir(document);
//console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// document.title = 'Dheeraj Item Lister';
// console.log(document.title);

//GET ELEMENT BY ID
//console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
//console.log(headerTitle);
// headerTitle.innerText = "Hello World";
// headerTitle.textContent='Hello Dheeraj!!';

// console.log(headerTitle.innerText); //pays attention to styling in html as well as content
// console.log(headerTitle.textContent); //returns just the text available 

// headerTitle.innerHTML = '<h3>Hello</h3>';   //adds <h3> tag inside the <h1> but it doesn't override that.

//header.style.borderBottom = 'solid 3px #000';

//GET ELEMENTS BY CLASSNAME//

let titleHeader = document.getElementsByClassName('title');
console.log(titleHeader);

titleHeader[0].textContent='ADD ITEMS';
titleHeader[0].style.fontWeight='bold';
titleHeader[0].style.color='darkgreen';

let items=document.getElementsByClassName('list-group-item');
console.log(items);

items[0].textContent='Apples';
items[1].textContent='Strawberries';
items[2].textContent='Oranges';
items[3].textContent='Grapes';

items[1].style.color='red';
items[2].style.color='orange';
items[3].style.background='lightgreen';
items[0].style.background='red';

for(let i=0;i <=items.length; i++){
    items[i].style.fontWeight='bold';
}