function calculate() {
// Guardar nome da aluna
	var nome = document.getElementById("aluna").value;
// Puxar valores dos inputs
	var primeiraNota = document.getElementById("nota1").value;
	var segundaNota = document.getElementById("nota2").value;
	var terceiraNota = document.getElementById("nota3").value;
// Criar campo para mensagens
	var mensStatus = document.getElementById("mensagem");
// Exibir alertas sobre campos vazios, preenchimento apenas com números e números positivos
	if (primeiraNota == "" || segundaNota == "" || terceiraNota == "") {
		mensagem.textContent = "Por favor, preencha todos os campos.";

	} else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota)) {
		mensagem.textContent = "Por favor, preencha apenas com números.";
	} else if (primeiraNota < 0 || segundaNota < 0 || terceiraNota < 0) {
		mensagem.textContent = "Por favor, preencha apenas com números positivos.";
// Exibir resultado final e status de aprovação
	} else {
		var resultado = (parseFloat(primeiraNota) + parseFloat(segundaNota) + parseFloat(terceiraNota)) / 3;
		resultado = resultado.toFixed(2);
		if (resultado >= 6) {
			mensagem.textContent = "MÉDIA FINAL: " + resultado + ". Parabéns, " + nome + ", você foi aprovada!";
		} else {
			mensagem.textContent = "MÉDIA FINAL: " + resultado + ". Você foi reprovada, " + nome + ", continue a estudar e não desanime!";
		}
	}
}