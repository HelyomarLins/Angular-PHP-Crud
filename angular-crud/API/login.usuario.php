<?php
//conexao com banco de dados
require_once 'conexao.php';

// Verifica se foi uma solicitação POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Recebe os dados de login do corpo da requisição
    $data = json_decode(file_get_contents('php://input'), true);

    // Verifica se os dados de login foram recebidos
    if (isset($data['email']) && isset($data['senha'])) {

        // Verifica as credenciais no banco de dados (substitua com a sua lógica de verificação)
        $email = $data['email'];
        $senha = $data['senha'];
        if ($email === 'usuario@example.com' && $senha === 'senha123') {

            // Credenciais corretas, retorna uma resposta de sucesso
            http_response_code(200);
            echo json_encode(array('message' => 'Login successful'));

        } else {

            // Credenciais incorretas, retorna uma resposta de erro
            http_response_code(401);
            echo json_encode(array('message' => 'Invalid credentials'));
        }
    } else {

        // Dados de login não fornecidos, retorna uma resposta de erro
        http_response_code(400);
        echo json_encode(array('message' => 'Missing credentials'));
    }
} else {
  
    // Método de requisição não suportado, retorna uma resposta de erro
    http_response_code(405);
    echo json_encode(array('message' => 'Method Not Allowed'));
}
?>