package br.inatel.labs.labjpa.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.inatel.labs.labjpa.entity.Fornecedor;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Service
@Transactional
public class FornecedorService {
	
	@PersistenceContext
	private EntityManager em;
	
	public Fornecedor salvar(Fornecedor f) {
		return em.merge(f);
	}
	
	public Fornecedor buscarPeloId(Long id) {
		return em.find(Fornecedor.class, id);
	}
	
	public List<Fornecedor> listar(){
		String jpql = "select f from Fornecedor f";
		return em.createQuery(jpql, Fornecedor.class)
				.getResultList();
	}
	
	public void remover(Fornecedor f) {
		em.merge(f);
		em.remove(f);
	}

}
