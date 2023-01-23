package com.portfolio.lmp.Repository;

import com.portfolio.lmp.Entity.Persona;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IPersonaRepository extends JpaRepository<Persona,Long> {
   
}