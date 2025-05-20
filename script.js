document.addEventListener('DOMContentLoaded',() => {
    const menuicon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    menuicon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.nav-link')
    navLinks.forEach(link => {
        link.addEventListener('click', () =>{
            navbar.classList.remove('active');
        });
    });
});

// for typing management
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer','Web Designer','Fullstack Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

// for Skills Section
const defaultSkill = 'html';

function showDescription(skill){
    const descriptions = document.querySelectorAll('.skill-description');
    descriptions.forEach(description => {
        description.classList.remove('active');
    });
    const selectedDescription = document.getElementById(skill);
    selectedDescription.classList.add('active');
}

window.onload = function(){
    showDescription(defaultSkill);
}

// for Contact Section
function sendmail(){

    var Name = $('#name').val();
    var Email = $('#email').val();
    var phone = $('#number').val();
}

Email.send({
    Host : "smtp.gmail.com",
    Username : "anujmaurya9977@gmail.com",
    Password : "********",
    To : 'anujmaurya4598@gmail.com',
    From : "anujmaurya9977@gmail.com",
    Subject : "New mail on contact form from :"+name,
    Body : Body
}).then(
  message => {
    if(message == 'ok'){
        alert('Youe mail has been send. Thankyou for connecting.');
    }
    else{
        console.error(message);
        alert('There is error at sending message.')
    }
  }
);




