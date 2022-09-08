const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question 1:
const cat = {
    complain: function catComplain() {
        console.log("Meow");
    }
};

//Question 2:
let heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//Question 3:
heading.style.fontSize = "2em";

//Question 4:
heading.classList.add("subheading");

//Question 5:
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(paragraph => {
    paragraph.style.color="red";
});

// Alternative solution with a for loop:
// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].style.color = "red";
// };

//Question 6:
let resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.cssText = "background-color:yellow;";

//Question 7:
function questionSeven(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
    
};
questionSeven(cats);

//Question 8:
let catContainer = document.querySelector(".cat-container");
let catsName = "";
let catsAge = "";
function createCats(cats) {
    for (let i = 0; i < cats.length; i++) {
        catsName = `<h5>${cats[i].name}</h5>`;
        catsAge = `<p>${cats[i].age}</p>`;
        if (!cats[i].age) {
            catsAge = "<p>Age unknown</p>";
        }
        const finalHTML = `<div>${catsName}${catsAge}</div>`;
        catContainer.innerHTML += finalHTML;
    }
};

createCats(cats);
