const navigationData = [
    {   name:"Contact Us", href:"#subscribe"},
    {   name:"Locations", href:"#locations"},
    {   name:"Personal", href:"#questions"},
    {   name:"Corporate", href:"#popularCar"},
    {   name:"Offers", href:"#promotion"},    
    {   name:"About", href:"#footer"},  
]

const locations = [
    {   name: "Al Quoz"},
    {   name: "Bur Dubai"},
    {   name: "Deira"}
];

const promotionCarData = [
    {   src:"./public/images/nissanGtrG.jpg", alt:"nissan Gtr"},
    {   src:"./public/images/2018-Mitsubishi-ASX-1920x966 1.svg", alt:"2018-Mitsubishi-ASX"},
    {   src:"./public/images/nissanGtr.jpg", alt:"nissan Gtr"}
]

const carData = [
    {
        name: "Mitsubishi Eclipse",
        description: "Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology and driving confidence.",
        src: "./public/images/popularCar1.svg",
        features: {
            people: "5 People",
            transmission: "Automatic",
            doors: "5 Doors",
            ac: "AC"
        },
        price: "AED 2700/ Monthly"
    },

    {
        name: "Mitsubishi Outlander",
        description: "Outlander offers superior safety features and modern styling.",
        src: "./public/images/popularCar2.svg",
        features: {
            people: "7 People",
            transmission: "Automatic",
            doors: "5 Doors",
            ac: "AC"
        },
        price: "AED 3000/ Monthly"
    },
    {
        name: "Mitsubishi Eclipse",
        description: "Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility.",
        src: "./public/images/popularCar1.svg",
        features: {
            people: "5 People",
            transmission: "Automatic",
            doors: "5 Doors",
            ac: "AC"
        },
        price: "AED 2700/ Monthly"
    }
];

const questionData = [
    {
        question:"What is my eligibility to book a car?",
        answer:"You should be of 18 years old above and you must possess a valid driving license"
    },
    {
        question:"Can i book for any period of time?",
        answer:"You should be of 18 years old above and you must possess a valid driving license"
    },
    {
        question:"Can i opt car for a longer period?",
        answer:"You should be of 18 years old above and you must possess a valid driving license"
    },
    {
        question:"Can i book one-way trip?",
        answer:"You should be of 18 years old above and you must possess a valid driving license"
    },
    {
        question:"Is there home delivery option available?",
        answer:"You should be of 18 years old above and you must possess a valid driving license"
    },
    {
        question:"How can i make the payment?",
        answer:"You should be of 18 years old above and you must possess a valid driving license"
    },
]

const footerNavigationData = [
    {   text:"Home", href:""},
    {   text:"Office", href:""},
    {   text:"FAQ", href:""},
    {   text:"Career", href:""},
    {   text:"About Us", href:""},
    {   text:"Locations", href:""},
    {   text:"Prvacy Policy", href:""},
    {   text:"Terms & condition", href:""},
    {   text:"Services", href:""},
    {   text:"Contact Us", href:""},
    {   text:"Service Request", href:""},

]

const footerNavigationDataB = [
    {   text:"Hospitality", href:""},
    {   text:"Real Estate", href:""},
    {   text:"Education", href:""},
    {   text:"Publishing", href:""},
    {   text:"Automotive", href:""},
    {   text:"Vehicle Leasing", href:""},
]

const Areas = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Fujairah', 'Ras Al Khaimah']

document.addEventListener("DOMContentLoaded", () => {
    const carTemplate = document.getElementById("car-template");
    const questionItemTemple = document.getElementById("questionItemTemple");

    const carContainer = document.getElementById("car-container");
    const navContainer = document.querySelector('.navigation');
    const carImages = document.querySelector('.carImages');
    const carouselIndicators = document.querySelector('.carouselIndicators');
    const qestions = document.querySelector('.qestions');
    const topNavs = document.querySelector('.topNavs');
    const bottomNavs = document.querySelector('.bottomNavs');
    const locationOptions = document.querySelectorAll('.data .options')

    navigationData.forEach(nav => {
        const clone = document.createElement('a');
        clone.classList.add('navigationItem')
        clone.style.display = "flex";

        // Update the cloned template with navigation data
        clone.href = nav.href;
        clone.textContent = nav.name;

        clone.addEventListener('click',()=>{
            if(window.innerWidth<=805){
                document.querySelector('.navigation').classList.remove('active')
            }
        })
        // Append the clone to the container
        navContainer.insertBefore(clone, navContainer.firstChild);
    });

    locations.forEach(loc=>{
        const clone = document.createElement('p');
        clone.classList.add('optionItem');

        clone.style.display = "block";

        // Update the created template with location data
        clone.textContent = loc.name;

        const clone1 = clone.cloneNode(true)
        const clone2 = clone.cloneNode(true)
        const clone3 = clone.cloneNode(true)

        clone.addEventListener('click', function() {
            const selectPickUp = document.querySelector('.bookCab .selectPickUp');
            selectPickUp.classList.remove('active');
            selectPickUp.querySelector('p').textContent = this.textContent;
        });
        clone1.addEventListener('click', function() {
            const differentDropOff = document.querySelector('.bookCab .differentDropOff');
            differentDropOff.classList.remove('active');
            differentDropOff.querySelector('p').textContent = this.textContent;
        });
        clone2.addEventListener('click', function() {
            const selectPickUp = document.querySelector('.bookOnMobile .selectPickUp');
            selectPickUp.classList.remove('active');
            selectPickUp.querySelector('p').textContent = this.textContent;
        });
        clone3.addEventListener('click', function() {
            const differentDropOff = document.querySelector('.bookOnMobile .differentDropOff');
            differentDropOff.classList.remove('active');
            differentDropOff.querySelector('p').textContent = this.textContent;
        });
        
        // Append the clone to the container
        locationOptions[0].appendChild(clone);
        locationOptions[1].appendChild(clone1);
        locationOptions[2].appendChild(clone2);
        locationOptions[3].appendChild(clone3);

    })

    promotionCarData.forEach((car, index) => {

        const clone = document.createElement('div');
        const img = document.createElement('img')
        const indicator = document.createElement('span')

        clone.classList.add('carItem');
        indicator.classList.add('indicator')

        clone.style.display = "flex";
        indicator.style.display = "flex"

        // Update the created template with car data
        img.src = car.src;
        img.alt = car.alt;
        indicator.onclick = `moveToSlide${index}`;
        
        // Append the clone to the container
        clone.appendChild(img)
        carImages.appendChild(clone);
        carouselIndicators.appendChild(indicator);
    });

    carData.forEach(car => {
        const clone = carTemplate.cloneNode(true);
        clone.style.display = "flex";

        // Update the cloned template with car data
        clone.querySelector('.carName').textContent = car.name;
        clone.querySelector('.carDescription').textContent = car.description;
        clone.querySelector('.carImage img').src = car.src;
        clone.querySelector('.bookNow .car-price').textContent = car.price;

        // Update features
        clone.querySelector('.feature.people p').textContent = car.features.people;
        clone.querySelector('.feature.transmission p').textContent = car.features.transmission;
        clone.querySelector('.feature.doors p').textContent = car.features.doors;
        clone.querySelector('.feature.ac p').textContent = car.features.ac;

        // Append the clone to the container
        carContainer.appendChild(clone);
    });

    questionData.forEach(question=>{ 
        const clone = questionItemTemple.cloneNode(true);
        clone.style.display = "flex";

        // Update the cloned template with question data
        clone.querySelector('.question h3').textContent = question.question;
        clone.querySelector('.answer').textContent = question.answer;
        clone.addEventListener('click', ()=>{
            const img = clone.querySelector('img');

            clone.querySelector('.question').classList.toggle('active')
            if(clone.querySelector('.question.active')){
                img.src = "./public/icons/xmark.svg"
            }
            else{
                img.src = "./public/icons/plusMark.svg"
            }
        
        })
        // Append the clone to the container
        qestions.appendChild(clone);
    });

    footerNavigationData.forEach((nav, i) => {

        const clone = document.createElement('a');
        clone.classList.add('navItem');
        clone.style.display = "flex";
    
        // Update the cloned template with navigation data
        clone.href = nav.href;
        clone.textContent = nav.text;
    
        // Append the clone to the div container
        // div.appendChild(clone);
        topNavs.appendChild(clone)
    });
    
    footerNavigationDataB.forEach(nav=>{
        const clone = document.createElement('a');
        clone.classList.add('navItem');
        clone.style.display = "flex";

        // Update the cloned template with navigation 2 data
        clone.href = nav.href;
        clone.textContent = nav.text;
        const clone1 = clone.cloneNode(true)

        // Append the clone to the container
        bottomNavs.appendChild(clone);
        document.querySelector('footer .orgCompaniesMobile').appendChild(clone1)
    })

    // adding extra image card(secure) to second section of footer 
    const orgCompaniesMobileImage = document.createElement('img')
    const orgCompaniesMobileCard = document.createElement('div');

    orgCompaniesMobileCard.style.display = 'flex';
    orgCompaniesMobileCard.style.width = '100%';
    orgCompaniesMobileCard.style.justifyContent = 'center';
    orgCompaniesMobileImage.src = './public/icons/secureCard2.svg';
    orgCompaniesMobileImage.style.backgroundColor = 'white';
    orgCompaniesMobileImage.style.padding = '6.35px';
    orgCompaniesMobileImage.style.borderRadius = '4px';

    orgCompaniesMobileCard.appendChild(orgCompaniesMobileImage)
    document.querySelector('footer .orgCompaniesMobile').appendChild(orgCompaniesMobileCard);

    Areas.forEach(area=>{
        const clone = document.createElement('div')
        const img = document.createElement('img')
        const p = document.createElement('p')

        clone.classList.add('locationItem');

        img.src = "./public/icons/locationRed.svg";
        img.alt = 'locations'
        p.textContent = area
        
        // Append the clone to the container
        clone.appendChild(img)
        clone.appendChild(p);
        document.querySelector('main .location .locations').appendChild(clone);

    })

    document.querySelectorAll('main .bookCab .types .typeItem').forEach((item, i)=>{
        item.addEventListener('click', ()=>{
            document.querySelectorAll('.types .typeItem').forEach(itemS => {
                itemS.classList.remove('active');
            });
            if(i == 1){
                document.querySelector('.differentDropOff').style.display = 'flex'
            }
            else{
                document.querySelector('.differentDropOff').style.display = 'none'
            }
            item.classList.add('active')
        })
    })

    document.querySelectorAll('main .bookOnMobile .types .typeItem').forEach((item, i)=>{
        item.addEventListener('click', ()=>{
            document.querySelectorAll('main .bookOnMobile .types .typeItem').forEach(itemS => {
                itemS.classList.remove('active');
            });
            if(i == 1){
                document.querySelector('.forDifferentDropOff').style.display = 'flex'
            }
            else{
                document.querySelector('.forDifferentDropOff').style.display = 'none'
            }
            item.classList.add('active')
        })
    })
    document.querySelectorAll('.bookButtonsMobile button').forEach(item=>{
        item.addEventListener('click', function(){
            if(this.classList && this.classList.contains('active')){ 
                this.classList.remove('active')
                document.querySelector('main .bookOnMobile').style.display = 'none'
            }
            else{
                this.classList.add('active')
                document.querySelector('main .bookOnMobile').style.display = 'flex'
            }
        });
    })
    
    document.querySelector('.forDifferentDropOff').style.display = 'none'
    document.querySelectorAll('.types .typeItem')[0].classList.add('active');
    document.querySelectorAll('.types .typeItem')[2].classList.add('active');
    document.querySelectorAll('.promotion .indicator')[0].classList.add('active');   
    });

    document.querySelectorAll('.selectPickUp').forEach(item=>{
        item.addEventListener('click', function(){
            this.classList.toggle('active')
        })
    })
    document.querySelectorAll('.differentDropOff').forEach(item=>{
        item.addEventListener('click', function(){
            this.classList.toggle('active')
        })
    })
    document.querySelector('.menuBarIcon').addEventListener('click', function(){
        document.querySelector('.navigation').classList.toggle('active')
    })
    document.querySelector('#closeIcon').addEventListener('click',()=>{
        document.querySelector('.navigation').classList.toggle('active')
    } )
    document.querySelector('main .mobileSearchButton').addEventListener('click', function(){
        document.querySelector('.bookButtonsMobile .book').classList.remove('active')
        document.querySelector('main .bookOnMobile').style.display = 'none'
    });

     // Close the dropdown if clicked outside of it
     document.addEventListener('click', function(event) {
        const selectPickUp = document.querySelector('.selectPickUp');
        const optionsContainer = document.querySelector('.options');
    
        if (!selectPickUp.contains(event.target) && !optionsContainer.contains(event.target)) {
            selectPickUp.classList.remove('active');
        }
    }); 

 let currentIndex = 0;
function moveToSlide(index) {
    const carouselInner = document.querySelector('.carImages');
    const indicators = document.querySelectorAll('.promotion .indicator');
    currentIndex = index;

    // Update the carousel position
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update active indicator
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i == index);
    });
}

function autoSlide() {
    const slides = document.querySelectorAll('.promotion .carItem');    
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(currentIndex);
}

setInterval(autoSlide, 3000); // Auto-slide every 2 seconds