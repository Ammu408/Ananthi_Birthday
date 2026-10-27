const chapters = {
 "foodie": {
  "number": "CHAPTER 01",
  "title": "Foodie Queen 🍕",
  "description": "Warning: food lover inside. 🍕",
  "intro": "Biryani is her boyfriend. Juice is her bestie.",
  "message": "Saapadu first, everything else next! 😄\nMay your plate always be full,\nand your heart even fuller. 💛",
  "photos": [
   [
    "assets/photos/foodie-drink.jpg",
    "Sip sip, hooray! 🥤",
    "Un glow-ku reason juice-a? Illa un happiness-aa? ✨"
   ]
  ]
 },
 "sleepy": {
  "number": "CHAPTER 02",
  "title": "Sleeping Beauty 😴",
  "description": "Shhh… the queen is recharging. 🌙",
  "intro": "Alarm adikkum. Aana thookkam thaan first love.",
  "message": "Five more minutes = one full movie. 🎬\nSleep well, dream big, little queen,\nand wake up when food arrives. 🍛",
  "photos": [
   [
    "assets/photos/sleep-photo-1.jpg",
    "Nap mode: activated 🌙",
    "Idhu thookkam illa. Idhu oru art form. 😴"
   ]
  ]
 },
 "cutie": {
  "number": "CHAPTER 03",
  "title": "Cutie Pie 🧸",
  "description": "Warning: too much cuteness ahead. 😎",
  "intro": "Cute face. Queen attitude. Main-character energy.",
  "message": "Attitude mattum queen level! 👑\nUn smile oru ordinary naal-ayum special aakidum.\nStay silly, stay shining. ✨",
  "photos": [
   [
    "assets/photos/cutie-photo-1.jpg",
    "Queen vandhaachu 👑",
    "Filter-ku kooda theriyum, yaaru main character-nu! 💅"
   ]
  ]
 },
 "dress": {
  "number": "CHAPTER 04",
  "title": "Dress-Up Queen 👗",
  "description": "Runway illa. Aana attitude Paris level! ✨",
  "intro": "Every outfit is a new episode.",
  "message": "Whatever you wear, you wear it like a queen. 👗\nYes, I know where my clothes went. 😌\nKeep them. They look better on you. 💛",
  "photos": [
   [
    "assets/photos/dress-1.jpg",
    "Style = Anandhi ✨",
    "En dress-ah thirudinaalum azhagu thaan! 😌"
   ]
  ]
 },
 "family": {
  "number": "CHAPTER 05",
  "title": "Our Family 🏡",
  "description": "Our people. Our noise. Our forever home.",
  "intro": "Loud fights, louder laughter, loudest love.",
  "message": "Family = drama, food and endless love. 🏡\nThank you for being our little spark.\nWe are lucky to have you. 💛",
  "photos": [
   [
    "assets/photos/family-1.jpg",
    "Our people 💛",
    "Ellarum irundha, oru chinna veedu-kooda swargam!"
   ]
  ]
 },
 "sisters": {
  "number": "CHAPTER 06",
  "title": "Me & You 🫶",
  "description": "Akka and thangachi. Partners in chaos.",
  "intro": "We fight daily. We still choose each other.",
  "message": "Sanda temporary. Love permanent. 💛\nNaan un pakkathula iruppen. Always.\nUn Akka, forever. ♡",
  "photos": [
   [
    "assets/photos/sisters-1.jpg",
    "Akka & Thangachi 🫶",
    "Best enemy. Best friend. Forever."
   ]
  ]
 },
 "surprise": {
  "number": "BONUS CHAPTER",
  "title": "Your Secret Surprise 🎁",
  "description": "Only the birthday girl can open this. 🎁",
  "intro": "This little corner belongs only to you.",
  "message": "No matter how much we fight,\nyou will always have me. 💛\nHappy Birthday, thangachi! 🎂✨",
  "photos": [
   [
    "assets/photos/surprise-1.jpg",
    "Just for you 🎁",
    "Birthday girl-ku oru chinna universe. Happy Birthday, Anandhi!"
   ]
  ]
 }
};
const passcodes = {foodie:"FOODIE28",sleepy:"NAPQUEEN",cutie:"CUTIE28",dress:"STYLE28",family:"FAMILY28",sisters:"AKKA28",surprise:"LOVEANANDHI"};
let activeKey=null;
const $=id=>document.getElementById(id);
function show(el){el.hidden=false} function hide(el){el.hidden=true}
function openLock(key){activeKey=key;const c=chapters[key];$("lockNumber").textContent=c.number;$("lockTitle").textContent=c.title;$("lockDescription").textContent=c.description;$("passcode").value="";$("lockError").textContent="";hide($("chapterContent"));show($("lockPanel"));$("lockPanel").scrollIntoView({behavior:"smooth",block:"start"});setTimeout(()=>$("passcode").focus(),250)}
function unlock(){const c=chapters[activeKey];if($("passcode").value.trim().toUpperCase()!==passcodes[activeKey]){$("lockError").textContent="Not quite! Try the chapter's passcode again. ♡";$("passcode").select();return}
hide($("lockPanel"));show($("chapterContent"));$("contentEyebrow").textContent=c.number;$("contentTitle").innerHTML=c.title.replace(/&/g,"&amp;");$("contentIntro").textContent=c.intro;$("chapterMessage").textContent=c.message;
$("photoGrid").innerHTML=c.photos.length ? c.photos.map((p,i)=>`<article class="photo-card"><button class="photo-open" type="button" data-photo-index="${i}" aria-label="Open ${p[1]}"><img src="${p[0]}" alt="${p[1]}" loading="lazy"></button><div class="photo-caption"><strong>${p[1]}</strong><span>${p[2]}</span></div></article>`).join("") : `<p class="empty-gallery">No photos added to this chapter yet — send your photos and I’ll add only those. ♡</p>`;
document.querySelectorAll(".photo-open").forEach((btn,i)=>btn.addEventListener("click",()=>{const p=c.photos[i];$("lightboxImage").src=p[0];$("lightboxImage").alt=p[1];$("lightboxCaption").textContent=p[1]+" — "+p[2];$("photoLightbox").hidden=false;}));
$("chapterContent").scrollIntoView({behavior:"smooth",block:"start"});
}
document.querySelectorAll("[data-chapter]").forEach(btn=>btn.addEventListener("click",()=>openLock(btn.dataset.chapter)));
$("passForm").addEventListener("submit",e=>{e.preventDefault();unlock()});
function backToChapters(){hide($("lockPanel"));hide($("chapterContent"));$("chapters").scrollIntoView({behavior:"smooth",block:"start"})}
$("backBtn").addEventListener("click",backToChapters);$("contentBackBtn").addEventListener("click",backToChapters);$("closeChapter").addEventListener("click",backToChapters);
$("enterBtn").addEventListener("click",()=>{$("chapters").scrollIntoView({behavior:"smooth"});const a=$("birthdayAudio");if(a.paused){a.volume=.7;a.play().then(()=>{$("musicToggle").textContent="♫ Music: on"}).catch(()=>{})}});
const target=new Date("2026-10-28T00:00:00+05:30").getTime();
function tick(){let diff=Math.max(0,target-Date.now());const d=Math.floor(diff/86400000),h=Math.floor(diff%86400000/3600000),m=Math.floor(diff%3600000/60000),s=Math.floor(diff%60000/1000);$("days").textContent=d;$("hours").textContent=h;$("minutes").textContent=m;$("seconds").textContent=s}tick();setInterval(tick,1000);
function celebrate(){const symbols=["✦","✧","🎉","✨","♡"];for(let i=0;i<75;i++){const bit=document.createElement("span");bit.className="celebration-bit";bit.textContent=symbols[Math.floor(Math.random()*symbols.length)];bit.style.left=Math.random()*100+"vw";bit.style.animationDelay=(Math.random()*0.8)+"s";bit.style.fontSize=(12+Math.random()*18)+"px";document.body.appendChild(bit);setTimeout(()=>bit.remove(),3200)}}
$("wishBtn").addEventListener("click",()=>{$("wishMessage").textContent="✨ Wish sent to the universe! May this year be kinder, brighter, and full of love. ✨";celebrate()});
$("lightboxClose").addEventListener("click",()=>$("photoLightbox").hidden=true);
$("photoLightbox").addEventListener("click",e=>{if(e.target===$("photoLightbox"))$("photoLightbox").hidden=true});
document.addEventListener("keydown",e=>{if(e.key==="Escape")$("photoLightbox").hidden=true});
$("musicToggle").addEventListener("click",async()=>{const audio=$("birthdayAudio");if(!audio.paused){audio.pause();$("musicToggle").textContent="♫ Music: off";return}try{await audio.play();$("musicToggle").textContent="♫ Music: on"}catch(e){$("musicToggle").textContent="♫ Add music file first"}});

/* Gallery: drop any photo that isn't uploaded yet, so nothing ever shows broken */
function cleanGallery(){const g=$("photoGrid");g.querySelectorAll("img").forEach(im=>{im.addEventListener("error",()=>{const card=im.closest(".photo-card");if(card)card.remove();if(!g.querySelector(".photo-card"))g.innerHTML='<p class="empty-gallery">Photos for this chapter are coming soon — Akka is adding them. \u2661</p>'})})}
new MutationObserver(cleanGallery).observe($("photoGrid"),{childList:true});
