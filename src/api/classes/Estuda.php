<?php 

class Estuda {
    private string $idAluno;
    private string $idDisciplina;
    private float $nota;


    /**
     * Get the value of nota
     */ 
    public function getNota()
    {
        return $this->nota;
    }

    /**
     * Set the value of nota
     *
     * @return  self
     */ 
    public function setNota($nota)
    {
        $this->nota = $nota;

        return $this;
    }

    /**
     * Get the value of idDisciplina
     */ 
    public function getIdDisciplina()
    {
        return $this->idDisciplina;
    }

    /**
     * Set the value of idDisciplina
     *
     * @return  self
     */ 
    public function setIdDisciplina($idDisciplina)
    {
        $this->idDisciplina = $idDisciplina;

        return $this;
    }

    /**
     * Get the value of idAluno
     */ 
    public function getIdAluno()
    {
        return $this->idAluno;
    }

    /**
     * Set the value of idAluno
     *
     * @return  self
     */ 
    public function setIdAluno($idAluno)
    {
        $this->idAluno = $idAluno;

        return $this;
    }
}