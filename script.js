// if (location.hash === '' || location.hash === '#') {
//     location.hash = 'content-1';
// }

const observer = new IntersectionObserver((entries) => { 
    console.log(entries);
    entries.forEach((entry) => { 
        if (entry.isIntersecting) { 
            document.querySelectorAll('.menu__link').forEach((link) => { 
                let id = link.getAttribute('href').replace('#', '');
                if (id === entry.target.id) {
                    link.classList.add('menu__link_active')
                } else { 
                    link.classList.remove('menu__link_active')
                }
            })
        }
    })
}, {
    threshold: 0.2
})
document.querySelectorAll('.page').forEach(page => { 
    observer.observe(page)
})