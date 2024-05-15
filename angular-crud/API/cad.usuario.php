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

// Depuração: exibe os dados recebidos do frontend
var_dump($data);

// Verifica se todos os campos foram enviados
if(empty($data['nome']) || empty($data['email']) || empty($data['senha'])) {
    // Retorna um JSON com erro e status code 400 (Bad Request)
    http_response_code(400);
    echo json_encode(['message' => 'Todos os campos são obrigatórios', 'status' => 'error']);
    exit;
}

$nome_usu = $data['nome'];
$email_usu = $data['email'];
$pass_usu = $data['senha'];
$nivel_usu = 1; // Definido como 1 por padrão
$ativo_usu = 'SIM'; // Definido como 'SIM' por padrão

// Depuração: exibe os dados após a verificação dos campos
echo "Nome: $nome_usu, Email: $email_usu, Senha: $pass_usu";

$sql = "INSERT INTO usuario (nome_usu, email_usu, pass_usu, nivel_usu, ativo_usu)
        VALUES ('$nome_usu', '$email_usu', '$pass_usu', $nivel_usu, '$ativo_usu')";

if (mysqli_query($conexao, $sql) === TRUE) {

    // Sucesso: retorna um JSON com mensagem e status code 201 (Created)
    http_response_code(201);
    echo json_encode(['message' => 'Usuário cadastrado com sucesso!', 'status' => 'success']);
} else {
    // Erro: retorna um JSON com erro e status code 500 (Internal Server Error)
    http_response_code(500);
    echo json_encode(['message' => 'Erro ao cadastrar usuário: ' . $conexao->error, 'status' => 'error']);
}

mysqli_close($conexao);
?>
