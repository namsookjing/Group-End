function topNav() {
    var x = document.getElementById("top");
    if (x.className === "top-nav") {
        x.className += " responsive";
    } else {
        x.className = "top-nav";
    }
}

function menu(x) {
    x.classList.toggle("change");
}

document.addEventListener('DOMContentLoaded', function () {
    loadTestimonials();

    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('fname').value.trim();
        const lastName = document.getElementById('lname').value.trim();
        const role = document.getElementById('roles').value;
        const feedbackText = document.getElementById('feedback').value.trim();

        if (firstName && lastName && feedbackText) {
            saveFeedback(firstName, lastName, role, feedbackText);
            feedbackForm.reset();
            loadTestimonials();
        } else {
            alert('Please fill in all fields.');
        }
    });
});

function saveFeedback(firstName, lastName, role, feedbackText) {
    const newFeedback = {
        name: `${firstName} ${lastName}`,
        role: role,
        text: feedbackText
    };

    let testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];
    testimonials.push(newFeedback);
    localStorage.setItem('testimonials', JSON.stringify(testimonials));
}

function loadTestimonials() {
    const testimonialsContainer = document.getElementById('testimonials-container');
    testimonialsContainer.innerHTML = '';

    const testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];

    testimonials.forEach(testimonial => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.classList.add('testimonial-container');

        const avatarImg = document.createElement('img');
        const avatarSeed = encodeURIComponent(testimonial.name);
        avatarImg.src = `https://api.dicebear.com/7.x/initials/svg?seed=${avatarSeed}`;
        avatarImg.alt = testimonial.name;
        avatarImg.classList.add('testimonial-avatar');

        const textContainer = document.createElement('div');
        textContainer.classList.add('testimonial-text');

        const nameSpan = document.createElement('div');
        nameSpan.classList.add('testimonial-name');
        nameSpan.textContent = testimonial.name;

        const roleSpan = document.createElement('div');
        roleSpan.classList.add('testimonial-role');
        roleSpan.textContent = testimonial.role;

        const feedbackParagraph = document.createElement('p');
        feedbackParagraph.textContent = testimonial.text;

        textContainer.appendChild(nameSpan);
        textContainer.appendChild(roleSpan);
        textContainer.appendChild(feedbackParagraph);

        testimonialDiv.appendChild(avatarImg);
        testimonialDiv.appendChild(textContainer);
        testimonialsContainer.appendChild(testimonialDiv);
    });
}
