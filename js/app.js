// ====================
  //? Imports
  //!to add more items to the menu go to MenuItems.js
  import {menu} from './MenuItems.js'
  // ====================

//*Pointers
const menuList  =document.querySelector('#menu__list');
const button    =document.querySelector('#main-button')
const inputBox  =document.querySelector('.input__box')
const result    =document.querySelector('#result')
// ------------------------------------------
// ?Menu generator
// ------------------------------------------
const menuItems =()=>menu.map((item)=>{
  const itemLink=document.createElement('a');
  itemLink.href=item.url //this will add href attribute to your <a>
  itemLink.classList.add('menu__list--link')
  const newItem =document.createElement('li');
      newItem.innerText= item.name
      newItem.classList.add('menu__list--item')
    itemLink.appendChild(newItem)
  menuList.appendChild(itemLink)
})

const calculate=()=>{
  // result.classList.add('result')
  result.innerText=(inputBox.value/16).toFixed(2)}

window.onload=menuItems()
button.addEventListener('click',calculate)
inputBox.addEventListener('keyup',(e)=>{
  e.keyCode===13?calculate():false
})


