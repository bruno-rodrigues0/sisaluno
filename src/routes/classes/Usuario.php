<?php 

abstract class Usuario {

    private string $nome;
    private string $github;
    private string $email;
    private string $endereco;
    private string $senha;
    private DateTime $nascimento;

    public function __construct($nome, $github, $email, $endereço, $senha, $nascimento){
        $this->setNome($nome);
        $this->setGithub($github);
        $this->setEmail($email);
        $this->setEndereco($endereço);
        $this->setSenha($senha);
        $this->setNascimento($nascimento);
    }

    /**
     * Get the value of nascimento
     */ 
    public function getNascimento()
    {
        return $this->nascimento;
    }

    /**
     * Set the value of nascimento
     *
     * @return  self
     */ 
    public function setNascimento($nascimento)
    {
        $this->nascimento = $nascimento;

        return $this;
    }

    /**
     * Get the value of senha
     */ 
    public function getSenha()
    {
        return $this->senha;
    }

    /**
     * Set the value of senha
     *
     * @return  self
     */ 
    public function setSenha($senha)
    {
        $this->senha = $senha;

        return $this;
    }

    /**
     * Get the value of endereco
     */ 
    public function getEndereco()
    {
        return $this->endereco;
    }

    /**
     * Set the value of endereco
     *
     * @return  self
     */ 
    public function setEndereco($endereco)
    {
        $this->endereco = $endereco;

        return $this;
    }

    /**
     * Get the value of email
     */ 
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set the value of email
     *
     * @return  self
     */ 
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get the value of github
     */ 
    public function getGithub()
    {
        return $this->github;
    }

    /**
     * Set the value of github
     *
     * @return  self
     */ 
    public function setGithub($github)
    {
        $this->github = $github;

        return $this;
    }

    /**
     * Get the value of nome
     */ 
    public function getNome()
    {
        return $this->nome;
    }

    /**
     * Set the value of nome
     *
     * @return  self
     */ 
    public function setNome($nome)
    {
        $this->nome = $nome;

        return $this;
    }
}