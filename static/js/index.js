// function backgroundImage(){
//     let header = document.getElementsByTagName('header')[0];
//     let image = header.getElementsByTagName('img')[0];
//     image.src = '../static/images/carusel.jpg';
// }

// backgroundImage()

let divRight = document.getElementsByClassName('right-border')[0];

let borderRigth = setInterval(()=>{
    if(divRight.style.height == '100%'){
        divRight.style.transition = '0s'
        divRight.style.height = '0%'
    }
    else{
        divRight.style.transition = '2.5s'
        divRight.style.height = '100%';
    }
}, 2500)


function myImages(){
    // api gelen image
    let left = document.getElementsByClassName('left')[0];

    let img1 = left.getElementsByClassName('img1')[0];
    let img2 = left.getElementsByClassName('img2')[0];
    let images = ['left.jpg', 'left2.jpg','carusel.jpg'];

    img1.style.left = '0';
    img2.style.left = '100%';
    let index = 0;

    let changeImage = setInterval(()=>{
        if(index >= images.length){
            index = 0;
        }
        else{
            index++;
        }

        if(img1.style.left == '0px'){  
            img2.style.left = '0';
            img1.style.left = '-50%'
            setTimeout(()=>{
                img1.style.left = '100%'
                setTimeout(()=>{
                    img1.style.zIndex = '1';
                    img2.style.zIndex = '-1';
                }, 2000)
               
            }, 2000)
            
        }
        else{
            img1.style.left = '0';
            img2.style.left = '-50%'
            setTimeout(()=>{
                img2.style.left = '100%'
                setTimeout(()=>{
                    img2.style.zIndex = '1';
                    img1.style.zIndex = '-1';
                }, 2000)
               
            }, 2000)
        }
    }, 5000)
}

myImages()