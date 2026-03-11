async function askAI(){

const apiKey = document.getElementById("apiKey").value.trim();
const question = document.getElementById("question").value.trim();
const chatBox = document.getElementById("chatBox");

if(!question){
alert("Hãy nhập câu hỏi");
return;
}

chatBox.innerHTML += `<p style="color:blue"><b>Bạn:</b> ${question}</p>`;

try{

const response = await fetch(
"https://api.openai.com/v1/chat/completions",
{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":"Bearer "+apiKey
},
body:JSON.stringify({
model:"gpt-4o-mini",
messages:[
{
role:"system",
content:"Bạn là gia sư lập trình cho học sinh. Hãy giải thích dễ hiểu."
},
{
role:"user",
content:question
}
]
})
}
);

const data = await response.json();

console.log(data);

const reply = data.choices[0].message.content;

chatBox.innerHTML += `<p style="color:green"><b>AI:</b> ${reply}</p>`;

}catch(err){

chatBox.innerHTML += `<p style="color:red">Không kết nối được ChatGPT</p>`;

}

}
