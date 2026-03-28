let imageList = [
    "pictures/lio1.jpeg", "pictures/lio2.jpeg", "pictures/lio3.jpeg",
    "pictures/lio4.jpeg", "pictures/lio5.jpeg", "pictures/lio6.jpeg",
    "pictures/lio7.jpeg", "pictures/lio8.jpeg", "pictures/lio9.jpeg",
    "pictures/lio10.JPG", "pictures/lio11.JPG", "pictures/lio12.JPG",
];

let pictures = document.getElementById('album_pictures');
const dialogRef = document.getElementById("myDialog");
let currentIndex = 0;


for (let i = 0; i < imageList.length; i++) {
    pictures.innerHTML += `
    <button class="album-btn" onclick="openModal(${i})">
        <img src="${imageList[i]}" onclick="openModal(${i})" class="album-img">
    </button> `;
}

function openModal(index) {
    currentIndex = index;
    updateDialogContent();
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
}


function updateDialogContent() {
    const dialogImg = dialogRef.querySelector('section img');
    const dialogText = dialogRef.querySelector('header h2');
    const dialogCounter = dialogRef.querySelector('.footer_container2 p');

    dialogImg.src = imageList[currentIndex];
    dialogText.innerText = `Lio ${currentIndex + 1}`;
    dialogCounter.innerText = `${currentIndex + 1} / ${imageList.length}`;
}

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex >= imageList.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = imageList.length - 1;
    }

    updateDialogContent();
}

document.addEventListener('keydown', function (event){
    if(dialogRef.open){
        if(event.key === 'ArrowRight'){
        changeImage(1);
    } else if (event.key === 'ArrowLeft') {
        changeImage(-1);
    } else if (event.key === 'Escape'){
        closeDialog();
    }
}   
});
 