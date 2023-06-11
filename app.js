document.addEventListener('DOMContentLoaded', function() {
 // Create an array to store the elements
 var elements = [];

 // Get the required elements from the DOM
 var elementList = document.getElementById('elementList');
 var newElementInput = document.getElementById('newElementInput');
 var addElementBtn = document.getElementById('addElementBtn');
 var appendedElements = document.getElementById('appendedElements');
 var dropdown = document.getElementById('dropdown');
 var removeElementDropdown = document.getElementById('removeElementDropdown');
 var removeElementBtn = document.getElementById('removeElementBtn');

 // Function to append elements to the webpage
 function appendElement(element) {
   var li = document.createElement('li');
   li.textContent = element;
   elementList.appendChild(li);

   var div = document.createElement('div');
   div.textContent = element;
   appendedElements.appendChild(div);

   var option = document.createElement('option');
   option.value = element;
   option.textContent = element;
   dropdown.appendChild(option);

   var removeOption = document.createElement('option');
   removeOption.value = element;
   removeOption.textContent = element;
   removeElementDropdown.appendChild(removeOption);
 }

 // Function to remove elements from the webpage
 function removeElement() {
   var selectedElement = removeElementDropdown.value;
   var index = elements.indexOf(selectedElement);
   if (index !== -1) {
     elements.splice(index, 1);
     removeElementDropdown.remove(index + 1);
     dropdown.remove(index + 1);
     appendedElements.removeChild(appendedElements.childNodes[index]);
     elementList.removeChild(elementList.childNodes[index]);
   }
 }

 // Function to handle the button click event for adding elements
 function addElement() {
   var newElement = newElementInput.value;
   if (newElement !== '') {
     elements.push(newElement);
     appendElement(newElement);
     newElementInput.value = '';
   }
 }

 // Attach event listeners to the buttons
 addElementBtn.addEventListener('click', addElement);
 removeElementBtn.addEventListener('click', removeElement);
});
