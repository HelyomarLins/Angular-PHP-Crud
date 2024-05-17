<?php
// Permite solicitações de qualquer origem
header("Access-Control-Allow-Origin: *");
// Permite solicitações com os métodos GET, POST, PUT, DELETE e OPTIONS
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Define o tipo de conteúdo permitido para a solicitação
header("Access-Control-Allow-Headers: Content-Type");

// Agora você pode lidar com sua lógica de negócios normalmente
require_once 'conexao.php';

// Consulta SQL para selecionar todos os alunos
$sql = "SELECT * FROM alunos";

$result = mysqli_query($conexao, $sql);

if (mysqli_num_rows($result) > 0) {
    $alunos = array();

    // Itera sobre o resultado e adiciona os alunoss ao array
    while ($row = mysqli_fetch_assoc($result)) {
        $alunos[] = $row;
    }

    // Retorna as disciplinas como JSON
    echo json_encode(['status' => 'success', 'alunos' => $alunos]);
} else {
    // Retorna uma mensagem de erro se não houver disciplinas
    echo json_encode(['status' => 'error', 'message' => 'Nenhum aluno encontrado']);
}

mysqli_close($conexao);
?>