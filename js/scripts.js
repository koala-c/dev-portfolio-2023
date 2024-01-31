/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.addEventListener('DOMContentLoaded', function () {
    const webBtn = document.getElementById('web');
    const photographyBtn = document.getElementById('photography');
    const webProjects = document.getElementById('webProjects');
    const photographyProjects = document.getElementById('photographyProjects');

    // Set "Web Projects" button as active by default
    webBtn.classList.add('active');

    webBtn.addEventListener('click', function () {
        if (photographyProjects.classList.contains('slide-left')) {
            photographyProjects.classList.remove('slide-left');
            photographyProjects.classList.add('slide-right');
        }

        webProjects.style.display = 'block';
        photographyProjects.style.display = 'none';
        webBtn.classList.add('active');
        photographyBtn.classList.remove('active');
        
        // Add sliding animation classes
        setTimeout(() => {
            photographyProjects.classList.add('slide-left');
            webProjects.classList.remove('slide-right');
            webProjects.classList.remove('slide-left');
        }, 100);
    });

    photographyBtn.addEventListener('click', function () {
        if (webProjects.classList.contains('slide-right')) {
            webProjects.classList.remove('slide-right');
            webProjects.classList.add('slide-left');
        }

        webProjects.style.display = 'none';
        photographyProjects.style.display = 'block';
        photographyBtn.classList.add('active');
        webBtn.classList.remove('active');
        
        // Add sliding animation classes
        setTimeout(() => {
            webProjects.classList.add('slide-right');
            photographyProjects.classList.remove('slide-left');
            photographyProjects.classList.remove('slide-right');
        }, 100);
    });
});


