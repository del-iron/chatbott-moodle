document.addEventListener("DOMContentLoaded", () => {
    const chatButton = document.getElementById("chat-button");
    const chatContainer = document.getElementById("chat-container");
    const closeChat = document.getElementById("close-chat");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const chatMessages = document.getElementById("chat-messages");

    chatButton.addEventListener("click", () => {
        chatContainer.style.display = "flex";
        addMessage("Olá! Como posso ajudar?", "bot");
    });

    closeChat.addEventListener("click", () => {
        chatContainer.style.display = "none";
    });

    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage();
    });

    function sendMessage() {
        let message = userInput.value.trim();
        if (message === "") return;
        addMessage(message, "user");
        userInput.value = "";

        const url = "chatbot.php";
        console.log("Tentando acessar:", url);

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `message=${encodeURIComponent(message)}`
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(reply => addMessage(reply, "bot"))
        .catch(error => {
            console.error("Erro ao se comunicar com o servidor:", error);
            addMessage("Erro ao se comunicar com o chatbot.", "bot");
        });
    }

    function addMessage(text, type) {
        let msg = document.createElement("div");
        msg.classList.add("message", type);

        if (type === "bot") {
            let img = document.createElement("img");
            img.src = "https://i.imgur.com/6RK7NQp.png";
            msg.appendChild(img);
        }

        let span = document.createElement("span");
        span.textContent = text;
        msg.appendChild(span);
        chatMessages.appendChild(msg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
