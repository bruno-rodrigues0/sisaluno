<?php 

class Disciplinas{

    private string $nome;
    private string $cargaHoraria;
    private string $id;
    private string $id_professor;

    /**
     * Set the value of id_professor
     *
     * @return  self
     */ 
    public function setId_professor($id_professor)
    {
        $this->id_professor = $id_professor;

        return $this;
    }

    /**
     * Get the value of id_professor
     */ 
    public function getId_professor()
    {
        return $this->id_professor;
    }

    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of cargaHoraria
     */ 
    public function getCargaHoraria()
    {
        return $this->cargaHoraria;
    }

    /**
     * Set the value of cargaHoraria
     *
     * @return  self
     */ 
    public function setCargaHoraria($cargaHoraria)
    {
        $this->cargaHoraria = $cargaHoraria;

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