const addBtn = document.querySelector('.add-btn')
const updateBtn = document.querySelector('.update-btn');
const headline = document.getElementById('headline'); /* this is used for updateBtn and resteBtn */
const input = document.querySelector('.theInput');
const hide = document.querySelector('.hide-list');
const liDiv = document.querySelector('.li-div');
const removeBtn = document.querySelector('.remove-btn');

addBtn.addEventListener('click', () => {
  const list = document.querySelector('ul');

  if (input.value === '') {
    alert('You have to add a task');
  } else {
    list.insertAdjacentHTML(
      'beforeend',
      `<li>${input.value}</li>`
    );
      input.value = '';    
  }
});

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
})

hide.addEventListener('click', () => {

    if (liDiv.style.display === 'none') {
      liDiv.removeAttribute('style') ;
      hide.textContent= 'Hide list';
  } else {
      liDiv.style.display = 'none';
      hide.textContent = 'Show list';
  }
});
removeBtn.addEventListener('click', () => {
  const listItem = document.querySelector('li:last-child');
  listItem.remove();
})
