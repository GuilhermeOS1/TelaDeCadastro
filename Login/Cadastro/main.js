function verificar() {
	var senha = document.getElementById('senha').value;
	var confirmacaosenha = document.getElementById('confirmacaosenha').value;
	var erro = document.getElementById('erro');

	if (confirmacaosenha != senha) {
		erro.innerHTML = "Senhas direrentes";
		return false;
	}else {
		return true;
	}
}
