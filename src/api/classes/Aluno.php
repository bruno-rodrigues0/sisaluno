<?php 

require_once realpath(__DIR__ . '/Usuario.php');
require_once realpath(dirname(__FILE__) . '\\..\\controllers\\index.php');
class Aluno extends Usuario {

    public function createAluno() {
        create($this->getNome(), $this->getGithub(), $this->getEmail(), $this->getEndereco(), $this->getSenha(), $this->getNascimento());
    }
}

// $aluno = new Aluno("de", 'Bruno', 'bruno-rodrigues0', 'brunorodriguesmtv0@gmail.com', 'Rua Oscar Alho, 666', 'brunno20', "2006-09-09");
// $aluno->createAluno();