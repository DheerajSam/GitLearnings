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

// let titleHeader = document.getElementsByClassName('title');
// console.log(titleHeader);

// titleHeader[0].textContent='ADD ITEMS';
// titleHeader[0].style.fontWeight='bold';
// titleHeader[0].style.color='darkgreen';

// let items=document.getElementsByClassName('list-group-item');
// console.log(items);

// items[0].textContent='Apples';
// items[1].textContent='Strawberries';
// items[2].textContent='Oranges';
// items[3].textContent='Grapes';

// items[1].style.color='red';
// items[2].style.color='orange';
// items[3].style.background='lightgreen';
// items[0].style.background='red';

// for(let i=0;i <=items.length; i++){
//     items[i].style.fontWeight='bold';
// }

//GET ELEMENTS BY TAG NAME
// let li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[2]);
// li[1].style.color='red';
// li[1].textContent='Strawberries';
// li[3].style.backgroundColor='violet';

// for(let i=0;i <li.length; i++){
//     li[i].style.fontWeight = 'bold';
//     li[i].style.backgroundColor = '#f4f4f4';
// }

//QUERY SELECTOR
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 5px grey';

// let input = document.querySelector('input'); //pulls the 1st input element
// input.value = "Hello World";

// let submit = document.querySelector('input[type="submit"]'); 
// submit.value = "SEND";

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'coral';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';

// let titles = document.querySelectorAll('.title');
// console.log(titles);    //returns a nodelist where we can use arrayfunctions unlike html collections
// titles[0].innerHTML='ADD ITEMS';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// console.log(odd);

// for (let i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = '#ccc';
//     even[i].style.backgroundColor = '#f4f4f4';
// }

let li = document.querySelectorAll('.list-group-item');
console.log(li);
li[1].style.color='darkgreen';

let odd = document.querySelectorAll('li:nth-child(odd)');
console.log(odd);

for (let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'lightgreen';    
}