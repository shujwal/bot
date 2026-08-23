var chatBox = document.getElementById("chat");
var messageInput = document.getElementById("message");
var sendButton = document.getElementById("send-btn");

function addMessage(text, who) {
    var newMessage = document.createElement("div");
    newMessage.className = "message " + who;
    newMessage.innerText = text;
    chatBox.appendChild(newMessage);
}

function sendMessage() {
    var text = messageInput.value.trim();

    if (text === "") {
        return;
    }

    // show user message
    addMessage(text, "user");
    // clear input field
    messageInput.value = "";


    fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: text })
    })
    .then(response => response.json())
    .then(data => {
        addMessage(data.reply, "bot");
    });
}

sendButton.addEventListener("click", sendMessage);

messageInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});