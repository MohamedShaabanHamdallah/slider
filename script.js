let sliderImages = Array.from(document.querySelectorAll('.container img')),
slidesCount = sliderImages.length,
currentSlide = 1,
sliderNumber = document.getElementById('image-number'),
nextBtn = document.getElementById('next'),
prevBtn = document.getElementById('prev')



nextBtn.addEventListener('click',nextSlide);
prevBtn.addEventListener('click',prevSlide)


const indicatorsElement = document.createElement("ul")
indicatorsElement.setAttribute('id', 'indicators-ul')
for(let i=1; i<=slidesCount ;i++){
    var indicatorsItems = document.createElement('li')
    indicatorsItems.setAttribute('data-id',i)
    indicatorsElement.appendChild(indicatorsItems)
    document.getElementById('indicators').appendChild(indicatorsElement)
}

const indicatorsCreatedUl = document.getElementById('indicators-ul')
var Bullets = Array.from(document.querySelectorAll('#indicators li'))


theChecker();

function nextSlide(){
    if(nextBtn.classList.contains('disabled')){
        return false;
    }else{
        currentSlide++;
        theChecker()
    }
}

function prevSlide(){
    if(prevBtn.classList.contains('disabled')){
        return false;
    }else{
        currentSlide--;
        theChecker()
    }
}

function theChecker() {
    sliderNumber.textContent = 'slide # ' + (currentSlide) + ' of ' + (slidesCount)

    removeAllActive()

    sliderImages[currentSlide - 1].classList.add('active')

    indicatorsCreatedUl.children[currentSlide - 1].classList.add('active')


    if (currentSlide == 1) {
        prevBtn.classList.add('disabled')
    }else{
        prevBtn.classList.remove('disabled')
    }

    if (currentSlide == slidesCount) {
        nextBtn.classList.add('disabled')
    }else{
        nextBtn.classList.remove('disabled')
    }
}

function removeAllActive () {
    sliderImages.forEach (function(img) {
        img.classList.remove('active')
    })
    Bullets.forEach(function(bullts) {
        bullts.classList.remove('active')
    })
}