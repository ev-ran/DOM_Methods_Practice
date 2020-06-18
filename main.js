let bodyElement = document.querySelector('body');
let headElement = document.querySelector('head');

// let metaElement_01 = document.createElement('meta');
// headElement.appent(metaElement_01);

// let metaElement_02 = document.createElement('meta');
// headElement.appent(metaElement_02);

// let titleElement = document.createElement('title');
// headElement.appent(titleElement);



let buttonElement = document.createElement('button');
buttonElement.id = 'remove_main';
buttonElement.className = 'button_class';
buttonElement.append("Remove MAIN element")
bodyElement.append(buttonElement);

//---------------------------------

let mainElement = document.createElement('main');
bodyElement.append(mainElement);

//---------------------------------
let imgElement = document.createElement('img');
imgElement.className = 'img';
imgElement.src = 'https://crazyrichpets.com/wp-content/uploads/2019/10/animal-cat-face-close-up-416160.jpg';

mainElement.append(imgElement);

//---------------------------------
let anchorElement = document.createElement('a');
anchorElement.className = 'link';
anchorElement.append("link to Google")
anchorElement.href = 'https://google.com'

mainElement.append(anchorElement);
//---------------------------------
let input_remove_Element = document.createElement('input');
input_remove_Element.id = 'input_remove';
input_remove_Element.className = 'input';
bodyElement.append(input_remove_Element);

//---------------------------------
let button_remove_Element = document.createElement('button');
button_remove_Element.id = 'remove_button';
button_remove_Element.className = 'button_class';
button_remove_Element.append("Remove any Element")
bodyElement.append(button_remove_Element);

//---------------------------------
let input_create_Element = document.createElement('input');
input_create_Element.className = 'input';
input_create_Element.id = 'input_create';
bodyElement.append(input_create_Element);

//---------------------------------
let button_create_Element = document.createElement('button');
button_create_Element.className = 'button_class';
button_create_Element.id = 'create_button';
button_create_Element.append("Create DIV Element")
bodyElement.append(button_create_Element);


//============================

buttonElement.addEventListener('click', function () {

    mainElement.remove();
});

button_remove_Element.addEventListener('click', function () {

    let text = input_remove_Element.value;
    console.log(text);

    let element_to_remove = document.querySelector(text);

    element_to_remove.remove();

});

let number = 0;
button_create_Element.addEventListener('click', function () {

    let text = input_create_Element.value;

    let name = "div_"+ number+"_Element";
    number++;
    name = document.createElement('div');
    name.append(text);
    bodyElement.append(name);

})