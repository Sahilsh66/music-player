document.addEventListener("DOMContentLoaded",function(){
console.log("Welcome to spotify");
let songindex=0;
let audioelement= new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let GIF=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songlistitem'));
let songtext=document.getElementById('songtext')
let songitm=document.getElementsByClassName('fas fa-circle-play fa-2x')
let songs =[
    {songname:"Warriyo mortals",filepath:"1.mp3",coverpath:"artworks-000198582455-ueqgjg-t500x500.jpg"},
    {songname:"cielo HUMA HUMA",filepath:"2.mp3",coverpath:"artworks-RdEkiQD7rl2QCukp-zyXDOg-t500x500.jpg"},
    {songname:"DEAF KEV-invinciple",filepath:"3.mp3",coverpath:"artworks-000217484394-c2umuw-t500x500.jpg"},
    {songname:"Different Heaven-My HEART",filepath:"4.mp3",coverpath:"hqdefault.jpg"},
    {songname:"Heroes Tonight",filepath:"5.mp3",coverpath:"artworks-000194270310-g81gnh-t500x500.jpg"},
    {songname:"Janji-Heroes Tonight",filepath:"6.mp3",coverpath:"artworks-000119783441-ycwh33-t500x500.jpg"},
    {songname:"DEAF KEV-invinciple",filepath:"7.mp3",coverpath:"artworks-000217484394-c2umuw-t500x500.jpg"},
    {songname:"Warriyo mortals",filepath:"8.mp3",coverpath:"artworks-000198582455-ueqgjg-t500x500.jpg"},
    {songname:"Janji Heroes Tonight",filepath:"9.mp3",coverpath:"artworks-000194270310-g81gnh-t500x500.jpg"},
    {songname:"My Heart",filepath:"10.mp3",coverpath:"hqdefault.jpg"},

];

/*songitems.forEach((element,i)=>{
    console.log(element,i)
    element.getElementsByTagName('img')[0].src=songs[i].coverpath;
 
})*/
masterplay.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currentTime<=0){
        audioelement.play();
        masterplay.className = 'fas fa-pause-circle fa-2x';
        GIF.play();
    }
    else{
        audioelement.pause();
        masterplay.className="fas fa-circle-play fa-2x";
        
        GIF.pause();
    }
})
audioelement.addEventListener('timeupdate',()=>{
    console.log("timeupdate")
    progress=parseFloat((audioelement.currentTime)/(audioelement.duration))*100;
    myprogressbar.value=progress;
    myprogressbar.style.backgroundSize = `${progress}% 100%`;
    console.log(audioelement);
});
myprogressbar.addEventListener('input',()=>{
    audioelement.currentTime=myprogressbar.value*((audioelement.duration)/100);
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        
        element.classList.remove("fas", "fa-pause-circle", "fa-2x");
        element.classList.add("fas", "fa-circle-play", "fa-2x");       
    })
    
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
            makeAllPlays()
            songindex=parseInt(e.target.id)
            e.target.classList.remove("fas", "fa-circle-play", "fa-2x")
            e.target.classList.add("fas", "fa-pause-circle", "fa-2x")
            audioelement.src=songs[songindex].filepath
            songtext.innerText=songs[songindex].songname
        
            
           
            if (audioelement.src.includes(songs[songindex].filepath)) {
                if (audioelement.paused || audioelement.currentTime <= 0) {
                    audioelement.play();
                    
                    masterplay.classList.remove("fas", "fa-circle-play", "fa-2x");
                    masterplay.classList.add("fas", "fa-pause-circle", "fa-2x");
                    
                } else {
                    audioelement.pause();
                    e.target.classList.remove("fas", "fa-pause-circle", "fa-2x");
                    e.target.classList.add("fas", "fa-circle-play", "fa-2x");
                    masterplay.classList.remove("fas", "fa-pause-circle", "fa-2x");
                    masterplay.classList.add("fas", "fa-circle-play", "fa-2x");
                    
                    
                }
            } else {
                audioelement.src = songs[songindex].filepath;
                songtext.innerText = songs[songindex].songname;
                audioelement.currentTime = 0;
                audioelement.play();
                masterplay.classList.remove("fas", "fa-circle-play", "fa-2x");
                masterplay.classList.add("fas", "fa-pause-circle", "fa-2x");
            }
        });
    })
    
    
    
    Array.from(document.getElementsByClassName('songlistitem')).forEach((element, index) => {
        const durationElement = element.querySelector('.timestamp ');
        const audio = new Audio(songs[index].filepath);
      
        
          audio.addEventListener('timeupdate', () => {
            const currentMinutes = Math.floor(audio.currentTime / 60);
            const currentSeconds = Math.floor(audio.currentTime % 60);
            durationElement.innerText = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
          })
        })
    })
          
            
         
    
    
    
    
    
                    