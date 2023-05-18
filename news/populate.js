fetch('posts.json').then((response) => response.json()).then(populate);

const main_section = document.getElementById('cards');

function populate(posts) {
    posts.forEach(post => {
        //create card section
            const card = document.createElement('section');
            card.classList.add('card');
            main_section.append(card);
        
        //add title and date
            const title = document.createElement('h2');
            title.innerText = post.title;
            card.append(title);
            if(post.date) {
                const date = document.createElement('p');
                date.innerText = `${post.date.year}-${post.date.month}-${post.date.day}`;
                card.append(date);
            }

        //body
            post.body.forEach(item => {
                if(item.type === "h2") {
                    const element = document.createElement('h2');
                    element.innerText = item.text;
                    card.append(element);
                } else if(item.type === "h3") {
                    const element = document.createElement('h3');
                    element.innerText = item.text;
                    card.append(element);
                } else if(item.type === "h4") {
                    const element = document.createElement('h4');
                    element.innerText = item.text;
                    card.append(element);
                } else if(item.type === "p") {
                    const element = document.createElement('p');
                    element.innerText = item.text;
                    element.classList.add(item.class);
                    card.append(element);
                } else if(item.type === "a") {
                    const a = document.createElement('a');
                    a.href = item.href;
                    a.innerText = item.text;
                    a.style = item.style;
                    const p = document.createElement('p');
                    p.append(a);
                    card.append(p);
                } else if (item.type === "img") {
                    const element = document.createElement('img');
                    element.src = item.src;
                    element.style = item.style;
                    element.classList.add("card-image");
                    if(item.class) {
                        element.classList.add(item.class);
                    }
                    card.append(element);
                } else if (item.type === "ul") {
                    const ul = document.createElement('ul');
                    ul.style = item.style;
                    card.append(ul);

                    item.items.forEach(listItem => {
                        const li = document.createElement('li');
                        li.innerText = listItem;
                        ul.append(li);
                    });
                } else {
                    console.error("unhandled type:", item.type);
                }
            });
    });
}