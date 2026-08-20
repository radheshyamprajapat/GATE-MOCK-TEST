
const params=new URLSearchParams(location.search);
const testId=params.get("test");
let catalog=window.TEST_CATALOG;
let selectedTest=null, subjectName="";
for(const s of catalog.subjects){
  const t=s.tests.find(x=>x.id===testId);
  if(t){selectedTest=t; subjectName=s.name; break;}
}
if(!selectedTest){document.body.innerHTML="<main style='padding:40px;font-family:Arial'><h2>Test not found</h2><a href='index.html'>Back</a></main>";throw new Error("Test not found");}

const script=document.createElement("script");
script.src="../"+selectedTest.file;
script.onload=()=>startExam(window.MOCK);
document.head.appendChild(script);

let questions=[], current=0, answers=[], timeLeft=60*30, timer;
function startExam(data){
  questions=data.questions; answers=Array(questions.length).fill(null);
  document.getElementById("testTitle").textContent=selectedTest.name;
  document.getElementById("subjectName").textContent=subjectName;
  renderPalette(); renderQuestion(); timer=setInterval(tick,1000);
}
function tick(){
  timeLeft--; const m=Math.floor(timeLeft/60),s=timeLeft%60;
  document.getElementById("timer").textContent=`${m}:${String(s).padStart(2,"0")}`;
  if(timeLeft<=0){clearInterval(timer);finish();}
}
function renderPalette(){
  const p=document.getElementById("palette");
  p.innerHTML=questions.map((q,i)=>`<button class="num ${i===current?'active ':''}${answers[i]!==null?'answered':''}" onclick="go(${i})">${i+1}</button>`).join("");
}
function renderQuestion(){
 const q=questions[current];
 document.getElementById("qno").textContent=`Question ${current+1} of ${questions.length}`;
 document.getElementById("qtext").innerHTML=q.q;
 document.getElementById("options").innerHTML=q.o.map((o,i)=>`<label class="option"><input type="radio" name="ans" value="${i}" ${answers[current]===i?'checked':''} onchange="choose(${i})"> ${o}</label>`).join("");
 renderPalette();
 if(window.MathJax) MathJax.typesetPromise();
}
function choose(i){answers[current]=i;renderPalette();}
function go(i){current=i;renderQuestion();}
function next(){if(current<questions.length-1){current++;renderQuestion();}}
function prev(){if(current>0){current--;renderQuestion();}}
function finish(){
 clearInterval(timer);
 let correct=0,wrong=0,skip=0,score=0;
 questions.forEach((q,i)=>{
   if(answers[i]===null)skip++;
   else if(answers[i]===q.a){correct++;score+=q.m||1;}
   else {wrong++;score-=q.negative??0.25;}
 });
 localStorage.setItem("gateLastResult",JSON.stringify({score,correct,wrong,skip,total:questions.length,title:selectedTest.name}));
 location.href="result.html";
}
