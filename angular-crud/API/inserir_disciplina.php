<?php
require_once 'conexao.php';

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Converte o JSON para um array associativo
$data = json_decode(file_get_contents("php://input"), true);
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