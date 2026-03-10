function sendMessage() {

let input = document.getElementById("userInput");
let message = input.value;

let chatBox = document.getElementById("chatBox");

chatBox.innerHTML += "<p><b>Bạn:</b> " + message + "</p>";

let reply = "";

if(message.toLowerCase().includes("c++")){
reply = "C++ là một ngôn ngữ lập trình mạnh mẽ, thường dùng để viết phần mềm, game và hệ điều hành.";
}
else if(message.toLowerCase().includes("python")){
reply = "Python là ngôn ngữ lập trình dễ học, được dùng nhiều trong AI và khoa học dữ liệu.";
}
else{
reply = "AI Gia Sư đang học thêm kiến thức. Thầy hãy bổ sung dữ liệu cho tôi nhé.";
}

chatBox.innerHTML += "<p><b>AI:</b> " + reply + "</p>";

input.value = "";

}
