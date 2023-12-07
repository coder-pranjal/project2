document.addEventListener('DOMContentLoaded', function () {

    const headerLinks = document.querySelectorAll('.nav .links a');

    headerLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            link.style.color = '#e0501b';
        });

        link.addEventListener('mouseout', function () {
            link.style.color = '#000'; 
        });
    });

    const footerLinks = document.querySelectorAll('.footer .footerlinks a');

    footerLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            link.style.color = '#e0501b';
        });

        link.addEventListener('mouseout', function () {
            link.style.color = '#000'; 
        });
    });

    const signUpButton = document.querySelector('.landingText .btn a');

    signUpButton.addEventListener('mouseover', function () {
        signUpButton.style.color = '#e0501b';
    });

    signUpButton.addEventListener('mouseout', function () {
        signUpButton.style.color = '#fff'; 
    });
});



