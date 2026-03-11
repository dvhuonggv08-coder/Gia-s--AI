async function askAI(){

const apiKey = document.getElementById("apiKey").value;
const question = document.getElementById("question").value;

const chatBox = document.getElementById("chatBox");

chatBox.innerHTML += "<p style='color:blue'><b>Bạn:</b> "+question+"</p>";

const response = await fetch(
"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key="+apiKey,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
contents:[
{
parts:[
{
text:"Bạn là gia sư lập trình. Hãy giải thích dễ hiểu và viết code nếu cần: "+question
}
]
}
]
})
}
);

const data = await response.json();

const reply = data.candidates[0].content.parts[0].text;

chatBox.innerHTML += "<p style='color:green'><b>AI:</b> "+reply+"</p>";

}
