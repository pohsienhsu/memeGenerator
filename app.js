const imageURL = document.querySelector('input[name="url"]');
const textTOP = document.querySelector('input[name="tTop"]');
const textBOTTOM = document.querySelector('input[name="tBottom"]');
const generateBtn = document.querySelector('#generateBtn button');
const lower = document.querySelector('#lower');
const memeDiv = document.querySelector('#meme-div');

function deleteMeme(tag){
    tag.addEventListener('click', function(e){
        if (e.target.tagName = 'I'){
            tag.remove();
        }
    })
}


function createDivForImage(url, top, bottom){
    let imageDiv = document.createElement('div');
    imageDiv.classList.add('image-div');
    let image = document.createElement('img');
    image.setAttribute('src', `${url}`);
    imageDiv.append(image);
    let toptext = document.createElement('div');
    toptext.innerText = `${top}`;
    imageDiv.append(toptext);
    toptext.classList.add('meme-top');
    let bottomtext = document.createElement('div');
    bottomtext.innerText = `${bottom}`;
    imageDiv.append(bottomtext);
    bottomtext.classList.add('meme-bottom');
    let deleteBtn = document.createElement('div');
    let trashcan = document.createElement('i');
    trashcan.className = 'fas fa-trash-alt';
    deleteBtn.append(trashcan);
    deleteBtn.classList.add('delete');
    deleteMeme(imageDiv);
    imageDiv.append(deleteBtn);
    memeDiv.append(imageDiv);
}

generateBtn.addEventListener('click', function(e){
    if (imageURL.value === '') {
        alert('Oops! Forget Something?   Hint: URL')
    } else {
        const url = imageURL.value;
        const top = textTOP.value;
        const bottom = textBOTTOM.value;
        createDivForImage(url, top, bottom);
        imageURL.value = '';
        textTOP.value = '';
        textBOTTOM.value = '';
    }
})

const forms = document.querySelectorAll('.form-div form');
for (let form of forms) {
    form.addEventListener('submit', function(e){
        e.preventDefault();
        if (imageURL.value === '') {
            alert('Oops! Forget Something?   Hint: URL')
        } else {
            const url = imageURL.value;
            const top = textTOP.value;
            const bottom = textBOTTOM.value;
            createDivForImage(url, top, bottom);
            imageURL.value = '';
            textTOP.value = '';
            textBOTTOM.value = '';
        }
    })
}


















































