// Typing Effect

//const text = "Python Developer";

let index = 0;

function typingEffect(){

    if(index < text.length){

        document.getElementById("typing")
        .innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect,100);
    }
}

typingEffect();


// Contact Form

document
.getElementById("contactForm")
.addEventListener("submit",function(e){

    e.preventDefault();

    alert("Message Sent Successfully!");

    this.reset();

});


// Dark Mode

document
.getElementById("darkModeBtn")
.addEventListener("click",function(){

    document.body.classList.toggle("dark");

});