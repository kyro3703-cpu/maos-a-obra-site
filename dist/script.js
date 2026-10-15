const menuButton = document.querySelector('.menu');
const navigation = document.querySelector('header nav');
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  const select = document.querySelector('[name="servico"]');
  const service = link.dataset.service;
  if (![...select.options].some(option => option.value === service)) select.add(new Option(service, service));
  select.value = service;
}));
document.getElementById('year').textContent = new Date().getFullYear();

const WHATSAPP_NUMBER = '5522988020606'; // Troque pelo WhatsApp real antes de publicar.
document.getElementById('budget-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    'Olá! Gostaria de solicitar um orçamento com a Mãos à Obra.',
    '',
    `Nome: ${data.get('nome')}`,
    `Telefone: ${data.get('telefone')}`,
    `Serviço: ${data.get('servico')}`,
    `Local: ${data.get('endereco') || 'Não informado'}`,
    `Descrição: ${data.get('mensagem')}`
  ].join('\n');
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
