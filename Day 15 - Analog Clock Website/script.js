/*#TODO
Make the clock update to tiem whenever starts becuase it starts from a random position
*/

const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

const deg = 6;
setInterval(()=>{
    let day = new Date();
    let ms = day.getMilliseconds() * deg;
    let hour = day.getHours() * 30;
    let minute = day.getMinutes() * deg;
    let second = day.getSeconds() * deg+ms/1000;

    hr.style.transform = `rotateZ(${hour}deg)`;
    mn.style.transform = `rotateZ(${minute}deg)`;
    sc.style.transform = `rotateZ(${second}deg)`;
});