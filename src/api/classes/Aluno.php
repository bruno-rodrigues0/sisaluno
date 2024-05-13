<?php 

require_once realpath(__DIR__ . '/Usuario.php');
require_once realpath(dirname(__FILE__) . '\\..\\controllers\\index.php');
class Aluno extends Usuario {

    public function createAluno($nome, $github, $email, $endereco, $senha, $nascimento) {
        create($nome, $github, $email, $endereco, $senha, $nascimento);
    }
    public function deleteAluno($email) {
        deleteAluno($email);
    }
}

$aluno = new Aluno();
// $aluno->createAluno('Bruno Rodrigues', 'bruno-rodrigues0', 'brunorodriguesmtv0@gmail.com', 'Rua Oscar Alho, 666', 'brunno20', '2006-09-09');
// $aluno->deleteAluno('brunorodriguesmtv0@gmail.com');