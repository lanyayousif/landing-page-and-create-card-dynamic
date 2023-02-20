const navlinksPart = document.getElementById("navlinksPart");
const navbarToggle_button = document.getElementById("navbarToggle_button");


    navbarToggle_button.onclick = function () {
        navlinksPart.classList.toggle("hide");
    };



const sec2 = document.querySelector('.sec2 .row');

 const obj=[
    {
        title: "movies1",
        years:"2014",
        sumary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a"
    },
    {
        title: "movies2",
        years:"2011",
        sumary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a"
    },
    {
        title: "movies3",
        years:"2003",
        sumary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a"
    },
    {
        title: "movies4",
        years:"2019",
        sumary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a"
    }
 ]   


// ********************  regai yakam 1

//  for(let i=0;i<obj.length;i++){

// sec2.innerHTML+=`                
// <article>
// <figure>
//     <div class="img">
//         <img src="./src/article-1.jpg" alt="">
//     </div>
//     <figcaption>
//         <h5 class="title uppercase" id="title">${obj[i].title}</h5>
//         <p class="yaers" id="yaers" >${obj[i].years} <span class="time">1:45 H</span></p>
//         <p class="sumary" id="sumary">${obj[i].sumary}</p>
//     </figcaption>
// </figure>
// </article>` ; 
// }


// ******************** regai dwam  2

obj.forEach(function(value,index) {

const article=document.createElement('article')
sec2.appendChild(article)

const figure=document.createElement('figure')
article.appendChild(figure)


const divImag=document.createElement('div')
divImag.classList.add('img')
figure.appendChild(divImag)


const img=document.createElement('img')
img.src="./src/article-1.jpg"
divImag.appendChild(img)

const figcaption=document.createElement('figcaption')
figure.appendChild(figcaption)

const h5figureCaption=document.createElement('h5')
h5figureCaption.className="title uppercase"
h5figureCaption.textContent=value.title
figcaption.appendChild(h5figureCaption)

const yaersfigureCaption=document.createElement('p')
yaersfigureCaption.className="yaers"
yaersfigureCaption.textContent=value.years
figcaption.appendChild(yaersfigureCaption)


const timefigureCaption=document.createElement('span')
timefigureCaption.className="time"
timefigureCaption.textContent="11:4 H"
yaersfigureCaption.appendChild(timefigureCaption)

const sumaryfigureCaption=document.createElement('p')
sumaryfigureCaption.className="sumary"
sumaryfigureCaption.textContent=value.sumary
figcaption.appendChild(sumaryfigureCaption)

console.log("hi "+value.title)

})
