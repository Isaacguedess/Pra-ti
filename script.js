const carta = document.getElementById('carta');
const coracoes = document.getElementById('coracoes');

carta.addEventListener('click', function() {
  carta.textContent = "Eu to morrendo de saudades de vc... sexta n chega logo n?";
  
  // Remove qualquer ícone de coração existente
  coracoes.innerHTML = '';

  // Criar e adicionar o primeiro ícone de coração
  const coracao1 = document.createElement('span');
  coracao1.classList.add('coracao');
  coracao1.innerHTML = '&hearts;';
  coracoes.appendChild(coracao1);

  // Criar e adicionar o segundo ícone de coração
  const coracao2 = document.createElement('span');
  coracao2.classList.add('coracao');
  coracao2.innerHTML = '&hearts;';
  coracoes.appendChild(coracao2);

  // Opcionalmente, você pode adicionar estilos para posicionar os ícones de coração
  coracao1.style.left = '30px'; // Ajuste conforme necessário
  coracao2.style.right = '30px'; // Ajuste conforme necessário
});
