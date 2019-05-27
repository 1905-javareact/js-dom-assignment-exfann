// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA() {
    let elem = document.querySelector('span[data-customAttr="USA"').innerText
    console.log(elem)
}
getUSA()
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales(){
    let rows = document.getElementsByTagName('tr')
    for(let row of rows){
        if(row.innerText.match(/Sales/)){
            console.log(row.childNodes[1].innerText)
        }
    }
}
getPeopleInSales()

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren(){
 let kids = document.querySelectorAll('a > span')
 for (let kid of kids){
     console.log(kid.innerText)
 }
}
getAnchorChildren()

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
function getHobbies(){
let skills = document.getElementsByName('skills')[0]
let select = skills.querySelectorAll('[selected="selected"]')
let hobbies = document.getElementsByName('hobbies')[0]
let select2 = hobbies.querySelectorAll('[selected="selected"]')
for(let skill of select){
    console.log(`${skill.value} : ${skill.innerText}`)
}
for(let hobby of select2){
    console.log(`${hobby.value} : ${hobby.innerText}`)
}
}

getHobbies()
// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute. 
function getCustomAttribute(){
    let attr = document.querySelectorAll('[data-customAttr]')
    for (let i of attr){
        let z = i.getAttribute('data-customAttr')
        console.log(`${z} : ${i}`)
    }
}
getCustomAttribute()
// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>  

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element

function uSum(){
    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')
    let sum = document.getElementById('sum')

    sum.innerText = 0
    num1.value = ''
    num2.value = ''

    num1.onchange = () => {
        if(isNaN(parseInt(num1.value))){
            if(num1.value === ''){
                num1.value = 0
            }
            else{
                sum.innerText = 'Cannot add'
            }
        }
        else if (isNaN(parseInt(num2.value))){
            if(num2.value === ''){
                num2.value = 0
            }
            else{
                sum.innerText = 'Cannot add'
            }
        }
        else{
            sum.innerText = parseInt(num1.value) + parseInt(num2.value)
        }
    }

    num2.onchange = () =>{
        if(isNaN(parseInt(num1.value))){
            if(num2.value === ''){
                num2.value = 0
            }
            else{
                sum.innerText = 'Cannot add'
            }
        }
        else if (isNaN(parseInt(num1.value))){
            if(num1.value === ''){
                num1.value = 0
            }
            else{
                sum.innerText = 'Cannot add'
            }
        }
        else{
            sum.innerText = parseInt(num1.value) + parseInt(num2.value)
        }
    }
}

uSum()

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
function uSkills(){
    let skills = document.getElementsByName('skills')
    for (let skill of skills){
        skill.onchange = () => {
            alert(`Are you sure ${skill.value} is one of your skills?`)
        }
    }
}
uSkills()

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
function favColor(){
    let val = null
    let colors = document.getElementsByName('favoriteColor')
    for (let color of colors){
        color.onchange = () => {
            colors.bgColor = color.value
            if(val === null){
                console.log('color selected')
            }
            else{
                alert(`So you like ${color.value} more than ${val} now?`)
            }
            val = color.value
        }
    }
}
favColor()

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
function empHide(){
    let emp = document.getElementsByClassName('empName')

    for (let thude of emp) {
        thude.onmouseover = () => {
            thude.style.visibility = 'hidden'
        }
        thude.onmouseout = () => {
            thude.style.visibility = 'visible'
        }
    }
}
empHide()

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

function witnessTheSandsOfTime(){
    let sands = document.getElementById('currentTime')
    setInterval(() => {
        let grain = new Date().toLocaleTimeString()
        sands.innerText = grain
    },0)
}

witnessTheSandsOfTime()

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
function delayRando(){
    let elem = document.getElementById('helloWorld')
    elem.onclick = () => {
        let r = Math.random()*255
        let g = Math.random()*255
        let b = Math.random()*255
        setTimeout(() => {
            elem.style.color = `rgb(${r}, ${g}, ${b})`
        },3000)
    }
}

delayRando()
// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).

function walkTheDOM(node, func){
    for(let child of node.childNodes){
        func(child)
        walkTheDOM(child)
    }
}
walkTheDOM(document, test())

function test(node){
    console.log(node)
}