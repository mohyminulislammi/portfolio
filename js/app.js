let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.header-nav');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};


// ===========  education and skills Togole section========
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ===========  Typing animation section========
var typed = new Typed (".multiple-type", {
  strings: ['Programmer', 'Web Developer', 'App Developer', 'Entrepreneur', 'Freelancer', 'Self-learner', 'Motivator', 'Leader', 'Trainer', 'Blogger', 'YouTuber', 'Volunteer' ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
  });

 var typed = new Typed (".multiple-skills", {
    strings: ['Web Designing', 'Web Developing', 'Freelancing', 'WordPress Customize', 'Coding', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'jquery', 'Python', 'Django', 'Flask FastAPI', 'MySql', 'Git / GitHub'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    });

// =================== ScrollReveal animation ======
ScrollReveal({
  reset: true ,
  distance: '80px',
  duration: 2000,
  delay: 500
  });
  
  ScrollReveal().reveal('.title, .hero-content, .creative-skills, .contact-left' , { origin: 'top' });
  ScrollReveal().reveal('.home-content, .skills-right, .services-row, .portfolio-row, .Carousel-effect, .contact-right, .mi-map, .gallery-row, .certificate-row', { origin: 'bottom' });
  
  ScrollReveal().reveal('.skills-left, .home-content h3, .btn, .about-img, .creative-skills h3, .process-box-right', { origin: 'left' });
  
  ScrollReveal().reveal('.home-img, .home-content h1, .home-content p, .about-content, .skills-right h5, .process-box-left, .footer-right', { origin: 'right' });