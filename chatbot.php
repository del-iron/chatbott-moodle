<?php
header("Content-Type: application/json");
session_start();

$userName = $_POST["user"] ?? "Usuário";
$message = strtolower(trim($_POST["message"] ?? ""));

if (!isset($_SESSION["context"])) {
    $_SESSION["context"] = null;
}

$respostas = [
    "como acessar o moodle" => "Vá até o site da sua instituição e faça login com seu usuário e senha.",
    "como enviar um trabalho" => "Entre na disciplina, clique na atividade e selecione 'Enviar arquivo'.",
    "o que é moodle" => "Moodle é uma plataforma de ensino à distância usada para cursos online."
];

$resposta = $respostas[$message] ?? "Desculpe, $userName, não entendi. Tente perguntar de outra forma.";

echo json_encode(["response" => $resposta]);
?>
