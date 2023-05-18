const main_section = document.getElementById('main_list_section');
const document_size = 250;
const document_padding = 25;
const root_directory = '/library/document/';






//populate
    const collections = [];

    library.forEach(collection => {
        //create collection section
            const collection_section = document.createElement('section');
            collections.push(collection_section);
            collection_section.classList.add('collection');
            main_section.append(collection_section);

        //add collection name
            const collection_heading = document.createElement('h2');
            collection_heading.classList.add('collection-title');
            collection_heading.innerHTML = collection.print_name;
            collection_section.append(collection_heading);

        //add collection descriptions
            collection.description.forEach(description => {
                const collection_description = document.createElement('p');
                collection_description.classList.add('collection-description');
                collection_description.innerHTML = description;
                collection_section.append(collection_description);
            });


        //add units
            const units_section = document.createElement('section');
            units_section.style.display = 'grid';
            collection_section.append(units_section);

            collection.html = {};
            collection.html.section = units_section;
            collection.html.units = [];

            collection.documents.forEach(unit => {
                //create unit section
                    const collection_unit_section = document.createElement('section');
                    collection_unit_section.classList.add('collection-documents');
                    units_section.append(collection_unit_section);
                    collection.html.units.push( collection_unit_section );

                //add document image link
                    const link = document.createElement('a');
                    link.href = root_directory + collection.name + '/' + unit.name + '/document.pdf';
                
                    const image = document.createElement('img');
                    if(window.devicePixelRatio <= 1){
                        image.src = root_directory + collection.name + '/' + unit.name + '/cover_250.png';
                    } else if(window.devicePixelRatio <= 2){
                        image.src = root_directory + collection.name + '/' + unit.name + '/cover_250@2.png';
                    } else {
                        image.src = root_directory + collection.name + '/' + unit.name + '/cover.png';
                    }
                    image.classList.add('collection-documents-document-cover-image');
                    image.width = document_size;
                    image.height = document_size * unit.document_aspect_ratio;
                    link.append(image);

                    collection_unit_section.append(link);

                //add caption
                    const caption = document.createElement('p');
                    caption.classList.add('collection-documents-document-caption');
                    caption.innerHTML = unit.print_name;
                    collection_unit_section.append(caption);
            });
    });

//resizing
    let previous_mux = 0;
    window.onresize = function(){
        const mux = Math.trunc( window.innerWidth / (document_size + document_padding) );

        if(mux != previous_mux) {
            library.forEach(collection => {
                collection.html.section.innerHTML = '';

                collection.html.units.forEach(unit => {
                    unit.style.width = (1/mux)*100 + '%';
                });

                for(let a = 0; a < collection.html.units.length; a+=mux){
                    const units_sub_section = document.createElement('section');
                    units_sub_section.id = 'units_sub_section';
                    collection.html.section.append(units_sub_section);

                    for(let index = 0; index < mux; index++){
                        if(collection.html.units[a+index] != undefined){ units_sub_section.append(collection.html.units[a+index]); }
                    }
                }
            });
        }

    };
    setTimeout(window.onresize,1);