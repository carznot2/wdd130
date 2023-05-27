/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const ourDate=new Date();
// Step 2: Declare another variable to hold the day of the week
today=ourDate.getDay();
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
let info;
// Step 4: Declare a variable to hold a message that will be displayed

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (today >=1 && today <=5)
{
    info = "Hang in there!"  
}
else 
{   
    info = "Woohoo! It is the weekend!"
}

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let other;
switch (today)
{
    case 0:
        other = "Sunday"
        break
    
    case 1:
        other = "Monday"
        break
    
    case 2:
        other = "Tuesday"
        break

    case 3:
        other = "Wednesday"
        break
    
    case 4:
        other = "Thursday"
        break
    
    case 5:
        other = "Friday"
        break
    
    case 6:
        other = "Saturday"
        break
}
document.querySelector("#message1").innerHTML=info
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector("#message2").innerHTML=other
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let temples=[]
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
function output (temples)
{
    temples.forEach((element) => {
        let article=document.createElement ("article")    
        let nameTemple=document.createElement ("h3")
            nameTemple.textContent=element.templeName

        let locTemple=document.createElement ("h4")
            locTemple.textContent=element.location
        
        let dateTemple=document.createElement ("h4")
            dateTemple.textContent=element.dedicated

        let imgTemple=document.createElement ("img")
            imgTemple.setAttribute("src",element.imageUrl) 
            imgTemple.setAttribute("alt",element.templeName)

        article.appendChild(nameTemple)
        article.appendChild(locTemple)
        article.appendChild(dateTemple)
        article.appendChild(imgTemple)

        document.querySelector("#temples").appendChild(article)
    }); 
}
    async function getTemples()
{
    const response = await fetch("https://byui-cse.github.io/cse121b-course/week05/temples.json")
    temples=await response.json()
    output(temples)
}
getTemples()

function reset()
{
    document.querySelector("#temples").innerHTML=""; 
}
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples

// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function sortBy()
{
    reset();
    let filter=document.querySelector("#sortBy").value;
    switch(filter)
    {
        case "templeNameAscending":
            output(
                temples.sort((temple1, temple2)=>{
                    if (temple1.templeName<temple2.templeName)return-1
                    else if (temple1.templeName>temple2.templeName)return 1
                    else return 0;
                })
            )
            break;
            case "templeNameDescending":
                output(
                    temples.sort((temple1, temple2)=>{
                        if (temple1.templeName<temple2.templeName)return 1
                        else if (temple1.templeName>temple2.templeName)return -1
                        else return 0;
                })
            )
            break;
  

    }
}
// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
    document.querySelector('#sortBy').addEventListener("change", sortBy);
        
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
