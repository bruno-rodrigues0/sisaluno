<?php

function create($nome, $github, $email, $endereco, $senha, $nascimento)
{
    require_once realpath(dirname(__FILE__) . "\\..\\..\\database\\index.php");

    try {
        $conn->query("INSERT INTO teste (nome, github, email, endereco, senha, nascimento) VALUES ('$nome', '$github', '$email', '$endereco', '$senha', '$nascimento')");
    } catch (Exception $e) {
        echo "" . $e->getMessage() . "";
    }
}
