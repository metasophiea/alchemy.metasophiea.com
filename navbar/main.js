window.addEventListener('scroll', function() {
    const navbar = document.getElementById("navbar");
    if (window.pageYOffset >= 100) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});

const content = [
    {
        address: '/news',
        printName: 'News'
    },
    {
        address: '/library',
        printName: 'Library'
    },
    {
        address: '/demos',
        printName: 'Demos'
    }
];

window.addEventListener("DOMContentLoaded", (event) => {
    const masterElement = document.getElementById('navbar');
    masterElement.innerHTML = '';

    const navbarLeft = document.createElement('div');
    navbarLeft.id = 'navbar--left';
    masterElement.append(navbarLeft);
        const homeLink = document.createElement('a');
        homeLink.href = '/';
        navbarLeft.append(homeLink);
            const icon = document.createElement('img');
            icon.id = "navbar--left--icon";
            icon.classList.add("navbar--item");
            icon.src = "/image/icon.png";
            homeLink.append(icon);

    const navbarRight = document.createElement('div');
    navbarRight.id = 'navbar--right';
    masterElement.append(navbarRight);
        content.forEach((content) => {
            const item = document.createElement('a');
            item.classList.add("navbar--item");
            item.href = content.address;
            navbarRight.append(item);

            const innerText = document.createElement('p');
            innerText.classList.add("navbar--item--inner-text");
            innerText.innerText = content.printName;
            item.append(innerText);
        });
});