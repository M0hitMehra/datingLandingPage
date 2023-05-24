
 



const images = [
   "https://media.glamour.com/photos/6092ccf448045c4e92aca466/16:9/w_1472,h_828,c_limit/Screen%20Shot%202021-05-03%20at%207.14.25%20PM.png",
   "https://assets.vogue.in/photos/641025198067da234d6f4f96/16:9/w_1280,c_limit/Screenshot%202023-03-14%20at%201.10.35%20PM.png",
   "https://play-lh.googleusercontent.com/8oGlwqmsGRx8vyZ6E8UUaBLib_CWt-rVnksaqD8JUUmh_FK2d33bKaAc82AQpWgtDA",
   "https://wallpapersmug.com/download/2560x1440/bb1155/asian-girl-model-brunette.jpg"
  ];

  const imageContainer = document.getElementById('imageContainer');

  let currentImageIndex = 0;

  function loadImage() {
    const image = new Image();
    image.src = images[currentImageIndex];
    image.classList.add('image-fade', 'active');

    image.addEventListener('transitionend', () => {
      // Remove previous image after fading out
      const previousImage = imageContainer.querySelector('.image-fade:not(.active)');
      if (previousImage) {
        imageContainer.removeChild(previousImage);
      }
    });

    imageContainer.appendChild(image);

    // Increment currentImageIndex or reset to 0 if end of array is reached
    currentImageIndex++
    if(currentImageIndex == images.length)
    currentImageIndex = 0;

    // Fade in the image
    setTimeout(() => {
      image.classList.add('active');
    }, 100);

    // Fade out the image after 2 seconds
    setTimeout(() => {
      image.classList.remove('active');
    }, 2000);

    // Load next image after 2.5 seconds (including fading time)
    setTimeout(loadImage, 2500);
  }

  // Start loading the images
  loadImage();


  function onToNextPopUp(){
    const pop1 = document.getElementsByClassName('popupStart-1') 
    for(pop of pop1){
          pop.classList.remove('popStart-1');
          pop.classList.add('popHide');
    }
  
    console.log(pop1)
    const pop2 = document.getElementsByClassName('popupStart-2')[0]
    pop2.classList.remove('popHide');
    pop2.classList.add('popupStart-1');
    console.log(pop2)

    const select1= document.getElementById('title1')
   const select2= document.getElementById('title2')
   const select3= document.getElementById('title3')

   select1.classList.add('selected');
   select1.classList.remove('notSelected');

   select2.classList.add('notSelected');
   select2.classList.remove('selected');
    
   select3.classList.add('notSelected');
   select3.classList.remove('selected');

  }

  function onToNextModal1(){

    const select1= document.getElementById('title1.1')
    const select2= document.getElementById('title2.1')
    const select3= document.getElementById('title3.1')
 
    select2.classList.add('selected');
    select2.classList.remove('notSelected');
 
    select1.classList.add('notSelected');
    select1.classList.remove('selected');
     
    select3.classList.add('notSelected');
    select3.classList.remove('selected');


    const pop1 = document.getElementsByClassName('popupStart-1') 
    for(pop of pop1){
          pop.classList.remove('popStart-1');
          pop.classList.add('popHide');
    }
  
    console.log(pop1)
    const pop2 = document.getElementsByClassName('popupStart-3')[0]
    pop2.classList.remove('popHide');
    pop2.classList.add('popupStart-1');
    console.log(pop2)
  }

  function onToNextModal2(){


    
    const select1= document.getElementById('title1.2')
    const select2= document.getElementById('title2.2')
    const select3= document.getElementById('title3.2')
 
    select3.classList.add('selected');
    select3.classList.remove('notSelected');
 
    select1.classList.add('notSelected');
    select1.classList.remove('selected');
     
    select2.classList.add('notSelected');
    select2.classList.remove('selected');


    const pop1 = document.getElementsByClassName('popupStart-1') 
    for(pop of pop1){
          pop.classList.remove('popStart-1');
          pop.classList.add('popHide');
    }
  
    console.log(pop1)
    const pop2 = document.getElementsByClassName('popupStart-4')[0]
    pop2.classList.remove('popHide');
    pop2.classList.add('popupStart-1');
    console.log(pop2)
  }

  function onToNextModal3(){
    const pop1 = document.getElementsByClassName('popupStart-1') 
    for(pop of pop1){
          pop.classList.remove('popStart-1');
          pop.classList.add('popHide');
    }
  
    console.log(pop1)
    const pop2 = document.getElementsByClassName('popupStart-5')[0]
    pop2.classList.remove('popHide');
    pop2.classList.add('popupStart-1');
    console.log(pop2)
  }