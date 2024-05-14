<?php
require_once 'conexao.php';

// Permite solicitações de qualquer origem
header("Access-Control-Allow-Origin: *");

// Permite apenas métodos POST
header("Access-Control-Allow-Methods: POST");

// Permite apenas o cabeçalho Content-Type
header("Access-Control-Allow-Headers: Content-Type");

// Verifica se a requisição é um OPTIONS (usado para preflight)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Converte o JSON para um array associativo
$data = json_decode(file_get_contents("php://input"), true);

// Verifica se todos os campos foram enviados
if(empty($data['nome_disc']) || empty($data['sigla_disc']) || empty($data['ch_disc'])) {
    // Retorna um JSON com erro e status code 400 (Bad Request)
    http_response_code(400);
    echo json_encode(['message' => 'Todos os campos são obrigatórios', 'status' => 'error']);
    exit;
}

$nome_disc = $data['nome_disc'];
$sigla_disc = $data['sigla_disc'];
$ch_disc = $data['ch_disc'];

$sql = "INSERT INTO disciplina (nome_disc, sigla_disc, ch_disc) VALUES ('$nome_disc', '$sigla_disc', '$ch_disc')";

if (mysqli_query($conexao, $sql) === TRUE) {
    // Sucesso: retorna um JSON com mensagem e status code 201 (Created)
    http_response_code(201);
    echo json_encode(['message' => 'Disciplina cadastrada com sucesso!', 'status' => 'success']);
} else {
    // Erro: retorna um JSON com erro e status code 500 (Internal Server Error)
    http_response_code(500);
    echo json_encode(['message' => 'Erro ao cadastrar disciplina: ' . $conexao->error, 'status' => 'error']);
}

mysqli_close($conexao);

?>