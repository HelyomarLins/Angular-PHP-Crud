<?php
// Permite solicitações de qualquer origem
header("Access-Control-Allow-Origin: *");
// Permite solicitações com os métodos GET, POST, PUT, DELETE e OPTIONS
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Define o tipo de conteúdo permitido para a solicitação
header("Access-Control-Allow-Headers: Content-Type");

// conexao com banco de dados
require_once 'conexao.php';

// Tratamento da requisição OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

// Verifica se foi uma solicitação POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Recebe os dados de login do corpo da requisição
    $data = json_decode(file_get_contents('php://input'), true);

    // Valida os dados recebidos
    if (!isset($data['email']) || !isset($data['senha'])) {
        http_response_code(400);
        echo json_encode(array('message' => 'Missing credentials'));
        exit();
    }

    $email = trim($data['email']);
    $senha = trim($data['senha']);

    // Valida o formato do email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(array('message' => 'Invalid email format'));
        exit();
    }

    // Consulta SQL para verificar as credenciais (usando consultas preparadas!)
    $stmt = mysqli_prepare($conexao, "SELECT id_usu, nome_usu, nivel_usu FROM usuario WHERE email_usu = ?");
    mysqli_stmt_bind_param($stmt, "s", $email);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);

        // Verifica se a senha está correta (usando a função password_verify() para comparar senhas criptografadas!)
        if (password_verify($senha, $row['pass_usu'])) {

            // Credenciais corretas
            http_response_code(200);
            echo json_encode(array(
                'message' => 'Login successful',
                'id_usu' => $row['id_usu'],
                'nome_usu' => $row['nome_usu'],
                'nivel_usu' => $row['nivel_usu']
            ));

        } else {
            // Senha incorreta
            http_response_code(401);
            echo json_encode(array('message' => 'Invalid credentials'));
        }
    } else {
        // Usuário não encontrado
        http_response_code(401);
        echo json_encode(array('message' => 'Invalid credentials'));
    }

} else {
    // Método de requisição não suportado
    http_response_code(405);
    echo json_encode(array('message' => 'Method Not Allowed'));
}
?>