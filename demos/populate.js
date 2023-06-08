fetch('list.json').then((response) => response.json()).then(populate);

const main_section = document.getElementById('cards');

function populate(posts) {
    posts.forEach(post => {

        //create card section
            const card = document.createElement('a');
            card.classList.add('card');
            card.href = post.link;
            main_section.append(card);
        
        //add title and link
            const titleLink = document.createElement('h2');
            titleLink.classList.add('card-title');
            titleLink.innerText = post.name;
            card.append(titleLink);
    });
}