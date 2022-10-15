

var images =[
    'images (3).jpeg',
    'room1.jpg',
    'room3.jpg',
    'room2.jpg'
];


var lok = document.querySelector('.lo');
var st = document.getElementById('oyest');
var gsf = document.getElementById('gsf');


var row = document.querySelector('.slide-row');
// var slide = document.querySelector('.slide').children;
var dots = document.getElementsByClassName('dot');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var imge = document.getElementById('ff');
var gt = document.querySelector('.gt');
var sheg = document.querySelector('.sheg');
var cap = document.querySelector('.cap');
var sharebtn = document.getElementById('share-btn');
var shareop = document.querySelector('.share-op');

var copyied = document.querySelector('.copy-btn');
var links = document.querySelector('.link');
// var whas = document.getElementById('whas');
// const link = 'https://alexanderchristma.github.io/nwq/';
// const msg =  encodeURIComponent('hey alex')
// const title =  encodeURIComponent(document.querySelector('title').textContent);

// const whatsappApi = 'https://wa.me/?text=${vfga}. ${message}';
// console.log([link, msg, title]);

// var sfb = document.querySelector('.facebook');
// sfb.href = `https://www.facebook.com/share.php?u=${link}`;

// const twitter = document.querySelector('.twitter');
// twitter.href = `https://twitter.com/share?&url=${link}$text=${msg}$hashtags=javascript.programming`;

// const whre = document.querySelector('.whasapp');
// whre.href = `whatsapp://send?text=${msg} ${link}`;

// const infz = document.querySelector('.insw');
// infz.href = `https://linkedin.com/shareArticle?url=${link} $title=${link}`;

// const instagram = document.querySelector('.instagram');
// instagram.href = `https://instagram.com/shareArticle?url=${link} $title=${link}`;

copyied.addEventListener('click',()=>{
    copyied.innerHTML="copied";
    links.select();
    document.execCommand('copy');
    links.classList.add('kw');
    // links.value='';

})



// var ee = slide.length;

var i =0;
var c=0;

next.addEventListener('click', ()=>{
    c++;
    if(c >= images.length){
        c=3;
    }
    imge.src=images[c];
    cap.innerHTML=(c +1) +'/4';
})

prev.addEventListener('click', ()=>{
    c--;
    if(c <=i){
        c=0;
    }
    imge.src=images[c];
    cap.innerHTML=(c +1) +'/4';
})


sheg.addEventListener('click', ()=>{
    shareop.classList.toggle('active');
})

lok.addEventListener('click',()=>{
 st.scrollIntoView({behavior: "smooth"})
})

gsf.addEventListener('click', ()=>{
    window.location.assign("login.html");  

})


// console.log(vfg);

// whas.addEventListener('click',()=>{
//     window.open(url = whasApi, target='blank')
// })






// gt.addEventListener('click', ()=>{
//     window.location=('login.html');
// })

