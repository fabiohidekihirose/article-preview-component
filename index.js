let shareButton = document.getElementById('share-button')
let shareBox = document.getElementById('share-box')
let imgShare = document.getElementById('img-share')

shareButton.addEventListener('click', () => {
    if(shareBox.style.display === 'flex') {
        shareBox.style.display = 'none'
        shareButton.style.backgroundColor = 'hsl(210, 46%, 95%)'
        imgShare.style.filter = ''
    } else {
        shareBox.style.display = 'flex'
        shareButton.style.backgroundColor = 'hsl(214, 17%, 51%)'
        imgShare.style.filter = 'brightness(300%)'
    }
})



