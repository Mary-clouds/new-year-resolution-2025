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
    let carouselElement = document.querySelector('.carousel-quotes');
    carouselElement.style.transform =  `translateX(-${carouselIndex * 100}%)`; 

}

function shareYourGoal(event){
   
    let promptMessage = event.target.value;
    alert(f`Thank you for sharing your goal ${promptMessage} with me. We got this💪!`);
}

let goalSharingElement = document.querySelector("#your-goal");
goalSharingElement.addEventListener("change", shareYourGoal);