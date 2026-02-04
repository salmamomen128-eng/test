//valid pass
let passError =document.getElementById("passError");
let passValid = document.getElementById("passValid");
function checkPassword() {
    let form = document.forms[0]; 
    let pass = form.pass.value;
    let rpass = form.rpass.value;

    if (pass !== rpass   ) {
        // alert("Passwords do not match");
        passError.style.display= "inline";
         passValid.style.display="none";
        return false; 
    }
    else if( pass === rpass){
    passError.style.display= "none";
    passValid.style.display="inline";
    return true;
    }

}
checkPassword();
// let fullNameBorder = document.getElementById("fn");
// fullNameBorder.addEventListener("focus", function(){
//     fullNameBorder.style.border = "solid 1px blue";
    
// });
// fullNameBorder.addEventListener("blur", function(){
//     fullNameBorder.style.border = "";

// });
// Blue Border for full name 
let fullNameBorder = document.getElementById("fn");
let nameError = document.getElementById("nameError");
let nameValid =document.getElementById("nameValid");

fullNameBorder.addEventListener("focus", function () {
  fullNameBorder.style.border = "solid 3px blue";
});

fullNameBorder.addEventListener("blur", function () {
  fullNameBorder.style.border = "";
  let name =fullNameBorder.value.trim();
  if (name==="" || name.length <= 3){
    nameError.style.display = "inline";
    nameValid.style.display ="none";
    fullNameBorder.focus();
    fullNameBorder.select();
  }
  else{
    nameError.style.display = "none";
    nameValid.style.display ="inline";

  }
});
console.log(fullNameBorder);
//5--------------------------
const images =[
  "pic/images1.jfif",
  "pic/images2.jfif",
  "pic/download3.jfif"
];


let index = 0;
let interval;
let img = document.getElementById("photo");

// show image
function showImage() {
  img.src = images[index];
}

// next image
function next() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  showImage();
}

// previous image
function prev() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  showImage();
}

// play slideshow
function play() {
  if (!interval) {
    interval = setInterval(next, 500);
  }
}

// stop slideshow
function stop() {
  clearInterval(interval);
  interval = null;
}
//6-------------------------------------
const gallery = document.querySelectorAll(".gallery img");
gallery.forEach(img => {
  img.addEventListener("mouseenter", () => fadeTo(img, 0.3, 10));
  img.addEventListener("mouseleave", () => fadeTo(img, 1, 10));
});

// fade function
function fadeTo(element, targetOpacity, step) {
  clearInterval(element.fadeInterval); // clear any previous interval

  element.fadeInterval = setInterval(() => {
    let currentOpacity = parseFloat(getComputedStyle(element).opacity);

    if (Math.abs(currentOpacity - targetOpacity) < 0.01) {
      element.style.opacity = targetOpacity;
      clearInterval(element.fadeInterval);
    } else {
      // increase or decrease opacity gradually
      let direction = currentOpacity < targetOpacity ? 1 : -1;
      element.style.opacity = currentOpacity + direction * 0.05;
    }
  }, step);
}
//7----------------------------------------------------------
let div =document.getElementById("myDiv");
let pic = document.createElement("img");
pic.setAttribute("src", "pic/images1.jfif");
pic.style.width="150px";
div.appendChild(pic); //appendChild 
let pic2 = document.createElement("img");
pic2.setAttribute("src", "pic/images2.jfif");
pic2.style.width="150px";
div.insertBefore(pic2,pic);
alert("The Numbers of of child nodes to the div"+ div.childNodes.length);
div.removeChild(pic);
// alert("The Numbers of of child nodes to the div"+ div.childNodes.length);


