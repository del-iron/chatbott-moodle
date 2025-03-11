<?php include 'includes/header.php'; ?>

<button id="chat-button">💬</button>
<div id="chat-container">
    <div id="chat-header">
        <div id="chat-header-left">
            <img src="https://i.imgur.com/6RK7NQp.png" alt="Bot">
            <div id="chat-title">
                <div>Toinha Moodle</div>
                <span id="chat-status">Online agora</span>
            </div>
        </div>
        <button id="close-chat">✖</button>
    </div>
    <div id="chat-messages"></div>
    <div id="chat-input">
        <input type="text" id="user-input" placeholder="Digite sua resposta...">
        <button id="send-button">➤</button>
    </div>
</div>

<?php include 'includes/footer.php'; ?>
