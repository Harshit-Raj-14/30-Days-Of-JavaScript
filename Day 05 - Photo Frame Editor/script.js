//We will need this javascript file to update those variables in CSS
const inputs = document.querySelectorAll('.controls input');    //we are selecting all inputs and queryselector returns them as a nodelist


function Update(){
    const suffix = this.dataset.sizing || ''; //puts every data- attribute related value in an object
    //dataset-sizing is for spacing, blur
    //'' nothing is for base color hex code
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);   //this.name = spacing, base, blur
    console.log(this.value + suffix);
    //suffix is appended to add the value px in spacing and blur and '' in base color hex code
}

inputs.forEach(input => input.addEventListener('change', Update));  //in this the value updates after a small change in time or stop
inputs.forEach(input => input.addEventListener('mousemove', Update));   //in this the value updates as mouse scrolls

