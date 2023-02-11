const navlinksPart = document.getElementById("navlinksPart");
const navbarToggle_button = document.getElementById("navbarToggle_button");


    navbarToggle_button.onclick = function () {
        navlinksPart.classList.toggle("hide");
    };



const sec2 = document.querySelector('.sec2 .row');

 const obj=[
    {
        "title": "movies1",
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
    },
 ]   

 let element;

 for(let i=0;i<=obj.length;i++){

 element +=`                
<article>
<figure>
    <div class="img">
        <img src="./src/article-1.jpg" alt="">
    </div>
    <figcaption>
        <h5 class="title uppercase" id="title">${obj[i].title}</h5>
        <p class="yaers" id="yaers" >${obj[i].years} <span class="time">1:45 H</span></p>
        <p class="sumary" id="sumary">${obj[i].sumary}</p>
    </figcaption>
</figure>
</article>`

sec2.innerHTML=element ; 
}

