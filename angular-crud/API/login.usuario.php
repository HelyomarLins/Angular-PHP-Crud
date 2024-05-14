<?php
// Permite solicitações de qualquer origem
header("Access-Control-Allow-Origin: *");
// Permite solicitações com os métodos GET, POST, PUT, DELETE e OPTIONS
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Define o tipo de conteúdo permitido para a solicitação
header("Access-Control-Allow-Headers: Content-Type");
//conexao com banco de dados
require_once 'conexao.php';

//$email = $data['email'];
//$senha = $data['senha'];
$email = 'teste@teste';
$senha = 12345;

// Consulta SQL para verificar as credenciais
$sql = "SELECT * FROM usuario WHERE email_usu = '$email'";
$result = mysqli_query($conexao, $sql);

// Verifica se a consulta retornou algum resultado
if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);

    // Verifica se a senha está correta
    if ($row['pass_usu'] == $senha) {

        // Credenciais corretas
        http_response_code(200);
        echo json_encode(array('message' => 'Login successful'));
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
?>