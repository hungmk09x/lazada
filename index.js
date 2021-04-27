//pr6
function changeImage(id){
    let imgPath = document.getElementById(id).getAttribute('src');
    document.getElementById('change-image-one').setAttribute('src',imgPath);
    console.log(imgPath)
}
