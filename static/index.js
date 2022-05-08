const toggleBtn = document.querySelector(".menu-bar");
const navLinks = document.querySelector("ul");
const projectCards = document.querySelector(".project-container");
const skillCards = document.querySelector(".skill-content-inner");
const navbar = document.querySelector("#nav");




toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show-links");
})

window.addEventListener("DOMContentLoaded", () => {
    loadSkills();
    loadProjects();
    
})
// Scroll event

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    // console.log(scrollHeight);
})

// smooth scroll
const scrollLinks = document.querySelectorAll(".scroll-link")
scrollLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        // calculate the height
        const navHeight = navbar.getBoundingClientRect().height;
        // const containerHeight = navLinks.getBoundingClientRect().height;

        let position = element.offsetTop - navHeight;
        // scroll for smaller screens
        if (navHeight > 82){
            position = position + (navHeight - 6);
            
        }
        window.scrollTo({
            left:0,
            top: position
        })
        navLinks.classList.remove("show-links");
        
    })
})


// skill list
const skills = ["html", "css", "javascript", "bootstrap", "react", "python", "Github"];

// project json
const projects = [
    {
        "imgSrc": "static/images/tip-splitter.jpg",
        "title":"Tip-Splitter",
        "desc": "A simple Web Application that calculates the total bill including the tip amount and returning the amount each individual will have to pay.",
        "tools": "HTML, CSS, JAVASCRIPT",
        "liveUrl": "http://tip-splitter.herokuapp.com/",
        "gitUrl": "https://github.com/Gabodion/tip_calculator"
    },
    {
        "imgSrc": "static/images/ecommerce.jpg",
        "title":"E-commerce Product Page",
        "desc": "A simple and very responsive E-commerce product page with cart functionality allowing users to add items to cart, view cart items, remove items from cart.",
        "tools": "HTML, CSS, JAVASCRIPT",
        "liveUrl": "#",
        "gitUrl": "https://github.com/Gabodion/e_commerce_product_page"
    },
    {
        "imgSrc": "static/images/country-app.jpg",
        "title":"REST Countries Api App",
        "desc": "A very responsive Web Application that allows its users to get to know more of about the countries in the world.",
        "tools": "HTML, CSS, BOOTSTRAP, JAVASCRIPT,  API",
        "liveUrl": "http://know-country-app.herokuapp.com/",
        "gitUrl": "https://github.com/Gabodion/Countries_App"
    },
    {
        "imgSrc": "static/images/advice-gen.jpg",
        "title":"Advice generator",
        "desc": "A simple web app that randomly generates different advices with a click of a button ",
        "tools": "HTML, CSS, JAVASCRIPT API",
        "liveUrl": "#",
        "gitUrl": "https://github.com/Gabodion/advice-generator"
    },
    {
        "imgSrc": "static/images/blogsite.jpg",
        "title":"Blog Site",
        "desc": "A Blog website with CRUD functionality. It also allows users to create an account and comment to blog posts",
        "tools": "HTML, CSS, BOOTSTRAP, JAVASCRIPT, PYTHON",
        "liveUrl": "http://gabriel-blog.herokuapp.com/",
        "gitUrl": "https://github.com/Gabodion/Gabriel-Blog"
    }
]

// load all skills
function loadSkills(){
    let all_skills = "";
    skills.forEach(skill => {
        all_skills += `<div class="skill-card col-sm-12 col-md-4 col-lg-3">
                        <h3>${skill}</h3>
                      </div>`
    })
    skillCards.innerHTML = all_skills;
}

// load all projects
function loadProjects(){
    let all_project = "";
    projects.map(data =>{
        all_project += `
                    <div class="project-card col-sm-12 col-md-12 col-lg-4">
                        <div class="project-cards-inner">
                            <div class="front-card">
                                <img src="${data.imgSrc}" alt="" class="project-img">
                            </div>
                            <div class="project-content back-card">
                                <h1 class="project-title">${data.title}</h1>
                                <div class="project-info">
                                    <p>${data.desc}</p>
                                    <p class="project-tools">${data.tools}</p>
                                </div>
                                <div class="project-links">
                                    <a href="${data.liveUrl}" class="btn">See Live</a><a href="${data.gitUrl}" class="btn btn-transparent">Github Repo</a>       
                                </div>
                            </div>
                        </div>
                    </div>`
    })
    
    projectCards.innerHTML = all_project;
    // console.log(all_project)
}


