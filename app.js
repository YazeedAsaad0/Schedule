const addBtn = document.querySelector('.add-btn')  // the add task button
const updateBtn = document.querySelector('.update-btn'); //  the heading update button
const headline = document.getElementById('headline')// The H1 id
const input = document.querySelector('.theInput');  // the input class
const hide = document.querySelector('.hide-list');  // the hide list button class
const liDiv = document.querySelector('.li-div');    // the div above the UL
const removeBtn = document.querySelector('.remove-btn');  // the task remove button
const liDivUl = document.querySelector('.li-div ul');
const list = liDivUl.children ;


// function for a remove button

function removeSelectedButton(li) {
  const remove = document.createElement('button');
  remove.textContent = '\xa0\xa0\xa0';
  remove.className = 'remove';
  li.appendChild(remove);
}
// loop remove button

for (let i=0; i<list.length; i++) {
  removeSelectedButton(list[i]);
}

// active the remove button and the complete task ✔️ code

liDivUl.addEventListener('click', (event)=> {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    li.remove();
  }else if(event.target.tagName === 'LI') {
      event.target.textContent = event.target.textContent +'✔️' ;
      alert('Great job, it\'s time to complete other tasks')
  }
})

//add task button code

addBtn.addEventListener('click', () => {
const ul = document.getElementsByTagName('ul')[0];
const li = document.createElement('li');
if (input.value === '') {
  alert('You have to add a task')
}else {
  li.textContent = input.value;
  ul.appendChild(li)
  input.value = '';
  removeSelectedButton(li)
}
});

// update/reset heading button code

updateBtn.addEventListener('click', () => {
  if (input.value === '') {
    headline.textContent = 'Schedule';
    updateBtn.textContent = "Update Heading";
  } else if (headline.textContent === 'Schedule') {
    headline.textContent = input.value ;
    input.value = '';
    updateBtn.textContent = "Reset Heading";
  } else {
    headline.textContent = 'Schedule';
    updateBtn.textContent = "Update Heading";
    input.value = '';
  }
});

// the show/hide button code

hide.addEventListener('click', () => {
    if (liDiv.style.display === 'none') {
      liDiv.removeAttribute('style') ;
      hide.textContent= 'Hide list';
  } else {
      liDiv.style.display = 'none';
      hide.textContent = 'Show list';
  }
});
