// Adiciona evento de clique ao link de denúncia
document.querySelector('.post-item p').addEventListener('click', function(e) {
    e.preventDefault();

    // Obtém o nome do usuário denunciado
    var reportedName = this.previousElementSibling.textContent;


    // Mostra o diálogo de denúncia
    var reportModal = new bootstrap.Modal(document.querySelector('#report-modal'));
    reportModal.show();
  });

  // Adiciona evento de mudança ao campo de motivo da denúncia para habilitar o botão de punir
  document.querySelector('textarea').addEventListener('input', function() {
    // Habilita o botão de punir se o campo de motivo estiver preenchido
    var punishButton = document.querySelector('#punish-button');
    if (this.value.length > 0) {
      punishButton.disabled = false;
    } else {
      punishButton.disabled = true;
    }
  });

  // Adiciona evento de clique ao botão de punir
  document.querySelector('#punish-button').addEventListener('click', function() {
    // TODO: implementar ação de punir o usuário denunciado
    alert('Usuário punido!');
  });

  // Adiciona evento de clique ao botão de denúncia
  document.querySelector('#report-button').addEventListener('click', function() {
    // TODO: implementar ação de registrar a denúncia
    alert('Denúncia Rejeitada!');
  });
