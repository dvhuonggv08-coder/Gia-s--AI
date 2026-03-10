const API_KEY = "AIzaSyAGhGwybCBmpZnx0XXbMwCiOYssg5_5ApY";

async function sendMessage(){

const input = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

const userText = input.value;

if(userText.trim()=="") return;

chatBox.innerHTML += "<p><b>Bạn:</b> "+userText+"</p>";

const response = await fetch(
"https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=AIzaSyAGhGwybCBmpZnx0XXbMwCiOYssg5_5ApY",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({
contents:[
{
parts:[
{ text:userText }
]
}
]
})
}
);

const data = await response.json();

console.log(data);

const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "AI chưa trả lời";

chatBox.innerHTML += "<p><b>AI:</b> "+aiReply+"</p>";

input.value="";

}
