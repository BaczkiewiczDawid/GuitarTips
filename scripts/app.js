const api = 'https://guitartips-api.herokuapp.com/articles'

let jsondata;

fetch(api).then(
    function(u) { return u.json(); }
).then(
    function(json) {
        jsondata = json;
        loadSection();
    }
)


function loadSection() {
    for (i = 0; i <= jsondata.length; i++) {
        const section = document.querySelector('.section');
        const box = document.createElement('div');
        const contentBox = document.createElement('div');
        const sectionContentBox = document.createElement('div');
        const sectionTitle = document.createElement('h1');
        const sectionParagraph = document.createElement('p');
        const sectionImageBox = document.createElement('div');
        const sectionImage = document.createElement('img');
        const authorBox = document.createElement('div');
        const sectionPhoto = document.createElement('div');
        const sectionData = document.createElement('div');
        const sectionName = document.createElement('h2');
        const sectionReadTime = document.createElement('span');

        box.classList.add('section__box');
        contentBox.classList.add('section__content');
        sectionImageBox.classList.add('section__image-box');
        sectionImage.classList.add('section__image')
        sectionTitle.classList.add('section__title');
        sectionParagraph.classList.add('section__paragraph');
        sectionContentBox.classList.add('section__content-box');
        authorBox.classList.add('section__author');
        sectionPhoto.classList.add('section__photo');
        sectionData.classList.add('section__data');
        sectionName.classList.add('section__name');
        sectionReadTime.classList.add('section__read-time');

        section.appendChild(box);
        box.appendChild(contentBox);
        contentBox.appendChild(sectionImageBox);
        contentBox.append(sectionContentBox);
        sectionImageBox.appendChild(sectionImage);
        sectionContentBox.appendChild(sectionTitle);
        sectionContentBox.appendChild(sectionParagraph);
        sectionContentBox.appendChild(authorBox);
        authorBox.appendChild(sectionPhoto);
        authorBox.appendChild(sectionData);
        sectionData.appendChild(sectionName);
        sectionData.appendChild(sectionReadTime);

        sectionTitle.textContent = jsondata[0].title;
        sectionParagraph.textContent = jsondata[0].short;
        sectionImage.src = './images/image.png';

        const text = document.createElement('h1');
        box.appendChild(text)
    }
    console.log(jsondata);
}


