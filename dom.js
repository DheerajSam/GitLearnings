// //EXAMINE THE DOCUMENT OBJECT//

// // console.dir(document);
// //console.log(document.domain);
// // console.log(document.URL);
// // console.log(document.title);

// // document.title = 'Dheeraj Item Lister';
// // console.log(document.title);

// //GET ELEMENT BY ID
// //console.log(document.getElementById('header-title'));
// // let headerTitle = document.getElementById('header-title');
// // let header = document.getElementById('main-header');
// //console.log(headerTitle);
// // headerTitle.innerText = "Hello World";
// // headerTitle.textContent='Hello Dheeraj!!';

// // console.log(headerTitle.innerText); //pays attention to styling in html as well as content
// // console.log(headerTitle.textContent); //returns just the text available 

// // headerTitle.innerHTML = '<h3>Hello</h3>';   //adds <h3> tag inside the <h1> but it doesn't override that.

// //header.style.borderBottom = 'solid 3px #000';

// //GET ELEMENTS BY CLASSNAME//

// // let titleHeader = document.getElementsByClassName('title');
// // console.log(titleHeader);

// // titleHeader[0].textContent='ADD ITEMS';
// // titleHeader[0].style.fontWeight='bold';
// // titleHeader[0].style.color='darkgreen';

// // let items=document.getElementsByClassName('list-group-item');
// // console.log(items);

// // items[0].textContent='Apples';
// // items[1].textContent='Strawberries';
// // items[2].textContent='Oranges';
// // items[3].textContent='Grapes';

// // items[1].style.color='red';
// // items[2].style.color='orange';
// // items[3].style.background='lightgreen';
// // items[0].style.background='red';

// // for(let i=0;i <=items.length; i++){
// //     items[i].style.fontWeight='bold';
// // }

// //GET ELEMENTS BY TAG NAME
// // let li=document.getElementsByTagName('li');
// // console.log(li);
// // console.log(li[2]);
// // li[1].style.color='red';
// // li[1].textContent='Strawberries';
// // li[3].style.backgroundColor='violet';

// // for(let i=0;i <li.length; i++){
// //     li[i].style.fontWeight = 'bold';
// //     li[i].style.backgroundColor = '#f4f4f4';
// // }

// //QUERY SELECTOR
// // let header = document.querySelector('#main-header');
// // header.style.borderBottom = 'solid 5px grey';

// // let input = document.querySelector('input'); //pulls the 1st input element
// // input.value = "Hello World";

// // let submit = document.querySelector('input[type="submit"]'); 
// // submit.value = "SEND";

// // let item = document.querySelector('.list-group-item');
// // item.style.color = 'red';

// // let lastItem = document.querySelector('.list-group-item:last-child');
// // lastItem.style.color = 'coral';

// // let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// // secondItem.style.backgroundColor = 'green';

// // let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// // thirdItem.style.display = 'none';

// // let titles = document.querySelectorAll('.title');
// // console.log(titles);    //returns a nodelist where we can use arrayfunctions unlike html collections
// // titles[0].innerHTML='ADD ITEMS';

// // let odd = document.querySelectorAll('li:nth-child(odd)');
// // let even = document.querySelectorAll('li:nth-child(even)');

// // console.log(odd);

// // for (let i=0; i<odd.length; i++){
// //     odd[i].style.backgroundColor = '#ccc';
// //     even[i].style.backgroundColor = '#f4f4f4';
// // }

// // let li = document.querySelectorAll('.list-group-item');
// // console.log(li);
// // li[1].style.color='darkgreen';

// // let odd = document.querySelectorAll('li:nth-child(odd)');
// // console.log(odd);

// // for (let i=0; i<odd.length; i++){
// //     odd[i].style.backgroundColor = 'lightgreen';    
// // }

// //TRAVERSING THE DOM

// let itemList = document.querySelector('#items');

// //parentNode
// // console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor = '#f4f4f4';
// // console.log(itemList.parentNode.parentNode);

// //parentElement
// // console.log(itemList.parentElement);
// // itemList.parentElement.style.backgroundColor = '#f4f4f4';
// // console.log(itemList.parentElement.parentElement);

// //childNodes
// // console.log(itemList.childNodes);
// // console.log(itemList.children);
// // console.log(itemList.children[2].style.color='red');


// //firstElementChild
// // console.log(itemList.firstElementChild);
// // itemList.firstElementChild.style.backgroundColor = 'lightgreen';
// // itemList.firstElementChild.textContent = 'lightgreen';

// //lastElementChild
// // console.log(itemList.lastElementChild);
// // itemList.lastElementChild.style.color = 'green';
// // itemList.lastElementChild.textContent = 'hello';

// //nextSibling
// // console.log(itemList.nextSibling);
// //nextElementSibling
// // console.log(itemList.nextElementSibling); //add <span></span> after ul in html

// // //previousSibling
// // console.log(itemList.previousSibling);
// // //previousElementSibling
// // console.log(itemList.previousElementSibling);
// // itemList.previousElementSibling.style.color='coral';

// //create a new div
// let newDiv = document.createElement('div');

// //add a class
// newDiv.className= 'hello';

// //Add id
// newDiv.id= 'hello1';

// //Add attr 
//  newDiv.setAttribute('title','hello div');

//  //Add text node
//  let newDivText = document.createTextNode('Hello World');

//  //Add text to Div
//  newDiv.appendChild(newDivText);

//  //Add this newDiv to DOM
//  let addDiv = document.querySelector('header .container');
//  let h1 = document.querySelector('header h1');

//  console.log(newDiv);

//  newDiv.style.fontSize = '30px';

//  addDiv.insertBefore(newDiv,h1);

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click',removeItem);

//Filter event
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e){
    e.preventDefault();
    
    //Get input value
    let newItem = document.getElementById('item').value;
    let itemDes = document.getElementById('description').value;

    //create new li element 
    let li = document.createElement('li');    

    //Add class
    li.className='list-group-item';    

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));    
    li.appendChild(document.createTextNode(" "+itemDes));  
    
    //Create edit button element
    let editBtn = document.createElement('button');
    editBtn.className='btn btn-sm float-right editBtn';

    //create del button element
    let deleteBtn = document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';

        //Append text node
        deleteBtn.appendChild(document.createTextNode('X'));

        //Append Delete button to li
        li.appendChild(deleteBtn);

    //Append text node for EDIT
    editBtn.appendChild(document.createTextNode('EDIT'));

    //Append Edit Button to li
    li.appendChild(editBtn);



    //Append li to list
    itemList.appendChild(li);  
}

//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }

    }
}

//Filter Items

function filterItems(e){
    //convert text to lowercase
    let text = e.target.value.toLowerCase();
    
    //Get li's
    let items = document.getElementsByTagName('li');
    
    //Convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        let itemDescription = item.childNodes[1].textContent;
        
        
        if(itemName.toLowerCase().indexOf(text)!=-1||itemDescription.toLowerCase().indexOf(text)!=-1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
    
}