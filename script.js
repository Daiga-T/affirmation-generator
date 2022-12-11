const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let today = new Date ();
let date = weekday[today.getDay()] + " | " + today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
document.getElementById("date").innerHTML = date;

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  
  let h = addZero(today.getHours());
  let m = addZero(today.getMinutes());
  let s = addZero(today.getSeconds());
  let time = h + ":" + m + ":" + s;
// let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("time").innerHTML = time;


let affirmations = [
  'Faith is my saving grace. I trust the process. I trust that what I am experiencing is bringing out my best. I let life make me better, not bitter. So may it be, and so it is.',
  'I celebrate my growth and how far I have come on my spiritual journey.',
  'Today is an incredible day & I am so blessed to be alive.',
  'I am grateful for every experience in my life because it helped shape me into who I am today, and today, I am where I am meant to be.',
  'I honor what challenges me because it is helping me to get better & grow.',
  'When the journey gets tough I don’t give up, I don’t complain. Instead, I choose to see positive and I transmute that which seems to be dark into light.',
  'I am learning as I go, and I welcome this new month and all that is about to unfold.',
  'I am moving with more elegance, softness, and grace. I am experiencing more loving relationships, more abundant ventures, & a more fulfilling journey.',
  'I listen to the infinite wisdom within me. I let it guide me, and show me the way. I let it lead me through the unknown. I allow it to lead me through the ups and downs. Through all of the necessary experiences that I have to grow through. My intuition is a sacred gift.',
  'I inhale limitless possibilities and exhale self-imposed limitations.',
  'I am in competition with no one. I am on my own unique divine path that’s only for me and no one else. No one has walked in my shoes, no one is further or behind me. I’m in my own lane.',
  'Today marks the beginning of the rest of my life. I treasure today and its significant role in my personal evolution.',
  'I surrender and trust my journey. I believe that everything is always working out for my highest good. I am calm. I know that all is well.',
  'Every lesson I learn shapes me into a better person. Every challenge that I face strengthens, humbles, and prepares me for something special.',
  'Inner peace is my inner compass. I know the way because I choose what feels right. I choose what feels like home. Inner peace is my way. Inner peace is my priority.',
  'As the stars align exactly how they are meant to, the people that need to be in my life right now are here.'
]


function newQuote() {
  let randomNumber = Math.floor(Math.random() * (affirmations.length));
  document.getElementById('text').innerHTML = affirmations[randomNumber];
}

newQuote();



