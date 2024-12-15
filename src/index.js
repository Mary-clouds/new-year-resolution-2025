document.addEventListener("DOMContentLoaded", () =>{

let carouselIndex = 0;

//function to change the slide
function changeQuote(direction){
    let quotesSlides = document.querySelectorAll(".quote");
    let totalQuotes = quotesSlides.length;

    carouselIndex += direction;

    if(carouselIndex >= totalQuotes){
        //loop to the first quote
        carouselIndex = 0;
    }else if(carouselIndex < 0){
        //loop to the last quote
        carouselIndex = totalQuotes - 1;
    }


    //move the caroussel to the correct slide
    let carouselElement = document.querySelector(".carousel.quotes");
    if(carouselElement){ 
    carouselElement.style.transform =  `translateX(-${carouselIndex * 100}%)`; 
    }
}
//attach event to buttons 
document.querySelector(".prev").addEventListener("click", ()=> changeQuote(-1));
document.querySelector(".next").addEventListener("click", ()=> changeQuote(1));


function shareYourGoal(event){
   
    let promptMessage = event.target.value;
    if(promptMessage){
    alert(`Thank you for sharing your goal: "${promptMessage}" with me. You got this💪💪💪💪💪!`);
    }else{
    alert("please choose a proper goal!");
    }
}

let goalSharingElement = document.querySelector("#your-goal");
if(goalSharingElement){
goalSharingElement.addEventListener("change", shareYourGoal);
}
});