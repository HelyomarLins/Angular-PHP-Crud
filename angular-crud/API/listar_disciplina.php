<?php
// Permite solicitações de qualquer origem
header("Access-Control-Allow-Origin: *");
// Permite solicitações com os métodos GET, POST, PUT, DELETE e OPTIONS
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Define o tipo de conteúdo permitido para a solicitação
header("Access-Control-Allow-Headers: Content-Type");

// Agora você pode lidar com sua lógica de negócios normalmente
require_once 'conexao.php';

// Consulta SQL para selecionar todas as disciplinas
$sql = "SELECT * FROM disciplina";

$result = mysqli_query($conexao, $sql);

if (mysqli_num_rows($result) > 0) {
    $disciplinas = array();

    // Itera sobre o resultado e adiciona as disciplinas ao array
    while ($row = mysqli_fetch_assoc($result)) {
        $disciplinas[] = $row;
    }

    // Retorna as disciplinas como JSON
    echo json_encode(['status' => 'success', 'disciplinas' => $disciplinas]);
} else {
    // Retorna uma mensagem de erro se não houver disciplinas
    echo json_encode(['status' => 'error', 'message' => 'Nenhuma disciplina encontrada']);
}

mysqli_close($conexao);
?>