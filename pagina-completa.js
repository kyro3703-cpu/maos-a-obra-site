(() => {
  const q = (selector, root = document) => root.querySelector(selector);
  const sets = {
    eletrica: ['Elétrica residencial', 'SERVIÇOS ELÉTRICOS', ['Tomadas', 'Interruptores', 'Luminárias', 'Chuveiro elétrico', 'Quadro elétrico', 'Correção de falhas', 'Ventilador de teto', 'Iluminação externa']],
    hidraulica: ['Hidráulica residencial', 'SERVIÇOS HIDRÁULICOS', ['Vazamentos', 'Torneiras', 'Registros', 'Descargas', 'Tubulações', 'Pias e cubas', 'Filtros', 'Manutenção preventiva']],
    pintura: ['Pintura residencial', 'PINTURA E ACABAMENTO', ['Pintura interna', 'Pintura externa', 'Tetos', 'Fachadas', 'Massa corrida', 'Texturas', 'Portas e janelas', 'Retoques']],
    revestimentos: ['Pisos e revestimentos', 'REVESTIMENTOS', ['Piso cerâmico', 'Porcelanato', 'Azulejos', 'Piso sobre piso', 'Rodapés', 'Rejuntamento', 'Troca de peças', 'Preparação da base']],
    montagens: ['Montagens e reparos', 'SERVIÇOS RESIDENCIAIS', ['Móveis', 'Suportes', 'Prateleiras', 'Varais', 'Cortinas', 'Fechaduras', 'Portas', 'Pequenos reparos']],
    reforma: ['Reformas residenciais', 'REFORMAS E MELHORIAS', ['Cozinha', 'Banheiro', 'Quarto', 'Sala', 'Área externa', 'Alvenaria', 'Drywall e gesso', 'Acabamentos']],
    'jardinagem-piscina': ['Jardinagem e piscina', 'CUIDADO COM ÁREAS EXTERNAS', ['Corte de grama', 'Poda e acabamento', 'Limpeza de jardins', 'Plantio e manutenção', 'Limpeza de piscina', 'Aspiração e escovação', 'Tratamento da água', 'Manutenção preventiva']],
    'limpeza-pos-obra': ['Limpeza pós-obra', 'LIMPEZA PARA ENTREGA', ['Remoção de poeira fina', 'Limpeza de pisos', 'Limpeza de revestimentos', 'Limpeza de vidros', 'Limpeza de portas e esquadrias', 'Remoção de respingos', 'Organização dos ambientes', 'Limpeza final para entrega']]
  };
  const photos = ['1621905252507-b35492cc74b4', '1581578731548-c64695cc6952', '1562259949-e8e7689d7828', '1581783898377-1c85bf937427', '1504148455328-c376907d081c', '1503387762-592deb58ef4e', '1544724569-5f546fd6f2b5', '1513506003901-1e6a229e2d15'];
  const electricalGroups = [
    { title: 'Iluminação e ambientes', image: 'assets/eletrica/eletrica-iluminacao.png', items: [
      ['Instalação de luminárias', 'Instalamos pendentes, lustres, plafons e arandelas com fixação segura, acabamento cuidadoso e teste completo de funcionamento.'],
      ['Troca de lâmpadas e plafons', 'Substituição de peças antigas ou danificadas para recuperar a iluminação e renovar o ambiente.', 'assets/eletrica/troca-lampadas-plafons.png'],
      ['Spots e trilhos', 'Distribuição e instalação de spots e trilhos para criar pontos de luz funcionais e decorativos.', 'assets/eletrica/spots-trilhos.png'],
      ['Fitas e perfis de LED', 'Aplicação de iluminação em LED para sancas, móveis, bancadas e detalhes de acabamento.', 'assets/eletrica/fita-led.png'],
      ['Iluminação externa', 'Soluções para fachadas, jardins, corredores e áreas de lazer com materiais adequados ao local.', 'assets/eletrica/iluminacao-externa.png'],
      ['Sensor de presença', 'Instalação e regulagem de sensores para mais praticidade, segurança e economia de energia.', 'assets/eletrica/sensor-presenca.png']
    ]},
    { title: 'Tomadas e comandos', image: 'assets/eletrica/eletrica-tomadas.png', items: [
      ['Instalação de tomadas', 'Criação de novos pontos conforme a necessidade do ambiente e a capacidade do circuito existente.'],
      ['Troca de tomadas danificadas', 'Substituição de tomadas frouxas, aquecidas ou quebradas, com revisão das conexões.'],
      ['Adequação 127 V ou 220 V', 'Avaliação técnica da rede e adequação do ponto quando houver disponibilidade e segurança para a mudança.'],
      ['Interruptores simples', 'Instalação ou troca de interruptores com acabamento alinhado e funcionamento testado.'],
      ['Interruptores paralelos', 'Comando da mesma iluminação em dois ou mais locais para trazer conforto ao dia a dia.'],
      ['Tomadas USB e inteligentes', 'Modernização de pontos com recursos USB ou automação compatível com a instalação do imóvel.']
    ]},
    { title: 'Chuveiros e circuitos de potência', image: 'assets/eletrica/eletrica-chuveiros.png', items: [
      ['Instalação de chuveiro elétrico', 'Instalação com verificação da tensão, potência, cabos, disjuntor e aterramento disponíveis.'],
      ['Troca de resistência', 'Diagnóstico e substituição da resistência correta para o modelo e a tensão do chuveiro.'],
      ['Conector para chuveiro', 'Troca de emendas inadequadas por conexão compatível, firme e protegida contra aquecimento.'],
      ['Circuito dedicado para chuveiro', 'Execução ou adequação de circuito exclusivo, dimensionado após avaliação técnica no local.'],
      ['Ponto para ar-condicionado', 'Preparação elétrica dedicada de acordo com a potência e as exigências do equipamento.'],
      ['Circuito para forno ou cooktop', 'Criação de alimentação própria para equipamentos de maior potência, com proteção adequada.']
    ]},
    { title: 'Quadro e proteção', image: 'assets/eletrica/eletrica-quadro.png', items: [
      ['Troca de disjuntor', 'Identificação da causa do desarme e substituição por componente compatível com o circuito.'],
      ['Organização do quadro', 'Revisão de conexões, identificação dos circuitos e organização interna do quadro elétrico.'],
      ['Instalação de DR', 'Proteção adicional contra choques elétricos, aplicada conforme as condições da instalação.'],
      ['Instalação de DPS', 'Proteção da rede e dos equipamentos contra surtos elétricos, com dimensionamento correto.'],
      ['Balanceamento de circuitos', 'Análise da distribuição das cargas para reduzir sobrecargas e melhorar o funcionamento da rede.'],
      ['Diagnóstico de quedas e curtos', 'Investigação de desarmes, falta de energia, aquecimento e curtos para localizar a origem da falha.']
    ]},
    { title: 'Infraestrutura e projetos', image: 'assets/eletrica/eletrica-infraestrutura.png', items: [
      ['Passagem de nova fiação', 'Instalação de cabos dimensionados para novos pontos, ampliações ou circuitos independentes.'],
      ['Substituição de fiação antiga', 'Renovação de trechos deteriorados após inspeção da infraestrutura e das cargas do imóvel.'],
      ['Canaletas e eletrodutos', 'Infraestrutura aparente ou embutida organizada para proteger cabos e manter um bom acabamento.'],
      ['Cabeamento para TV e internet', 'Passagem e organização de cabos para melhorar a distribuição dos pontos de comunicação.'],
      ['Novo ponto elétrico', 'Planejamento e execução de ponto adicional para atender móveis, equipamentos ou mudanças no ambiente.'],
      ['Projeto e adequação elétrica', 'Levantamento das necessidades e organização da instalação para reformas, ampliações e melhorias.']
    ]}
  ];
  const hydraulicGroups = [
    { title: 'Vazamentos e diagnóstico', image: 'assets/servicos/hidraulica.png', items: [
      ['Localização de vazamentos', 'Investigação da origem do vazamento e orientação da solução mais adequada para o imóvel.'],
      ['Reparo de vazamentos', 'Correção de vazamentos em pontos aparentes, conexões, registros e tubulações acessíveis.'],
      ['Infiltrações hidráulicas', 'Avaliação de sinais de umidade relacionados a tubulações, conexões e pontos de água.'],
      ['Teste de estanqueidade', 'Verificação das condições da instalação para identificar perda de pressão e possíveis falhas.'],
      ['Manutenção preventiva', 'Revisão de pontos hidráulicos para reduzir problemas e prolongar a vida útil da instalação.'],
      ['Avaliação hidráulica', 'Análise técnica do local antes da execução e apresentação de orçamento claro.']
    ]},
    { title: 'Torneiras e registros', image: 'assets/servicos/hidraulica.png', items: [
      ['Instalação de torneiras', 'Instalação e substituição de torneiras de cozinha, banheiro, área de serviço e áreas externas.'],
      ['Troca de registros', 'Substituição de registros com desgaste, vazamento ou dificuldade de fechamento.'],
      ['Misturadores', 'Instalação e manutenção de misturadores conforme o modelo e as condições do ponto existente.'],
      ['Engates e flexíveis', 'Troca de engates, flexíveis e conexões com revisão das vedações.'],
      ['Filtros de água', 'Instalação de filtros e purificadores com adequação do ponto hidráulico.'],
      ['Sifões e válvulas', 'Substituição e ajuste de sifões, válvulas e conexões de pias e lavatórios.']
    ]},
    { title: 'Descargas e caixas', image: 'assets/servicos/hidraulica.png', items: [
      ['Reparo de descarga', 'Correção de falhas em descargas de parede, caixas acopladas e mecanismos internos.'],
      ['Caixa acoplada', 'Regulagem, troca de mecanismo, boia, vedação e botão da caixa acoplada.'],
      ['Válvula de descarga', 'Avaliação e manutenção de válvulas com vazamento, baixo fluxo ou acionamento irregular.'],
      ['Boias e mecanismos', 'Troca de boias e mecanismos para evitar desperdício e melhorar o funcionamento.'],
      ['Caixa de gordura', 'Limpeza, manutenção e adequação de conexões da caixa de gordura.'],
      ['Ralos e grelhas', 'Instalação e substituição de ralos, grelhas e componentes de escoamento.']
    ]},
    { title: 'Tubulações, pias e ralos', image: 'assets/servicos/hidraulica.png', items: [
      ['Desentupimento simples', 'Desobstrução de pias, ralos e pontos acessíveis com avaliação da causa do problema.'],
      ['Instalação de pias e cubas', 'Instalação de pias e cubas com conexão, vedação e teste de escoamento.'],
      ['Troca de tubulações', 'Substituição de trechos de tubulação comprometidos após avaliação no local.'],
      ['Conexões hidráulicas', 'Adequação de conexões, joelhos, tês e prolongadores para corrigir ou criar pontos.'],
      ['Pontos de água', 'Criação ou deslocamento de pontos de água para cozinhas, banheiros e áreas de serviço.'],
      ['Pontos de esgoto', 'Adequação de pontos de esgoto respeitando o caimento e as condições da instalação.']
    ]},
    { title: 'Caixas d’água e manutenção', image: 'assets/servicos/hidraulica.png', items: [
      ['Instalação de caixa d’água', 'Instalação e adequação de caixa d’água conforme o espaço e a estrutura disponíveis.'],
      ['Limpeza de caixa d’água', 'Limpeza e higienização para ajudar a manter a qualidade da água armazenada.'],
      ['Boia de caixa d’água', 'Troca e regulagem da boia para controlar corretamente o abastecimento.'],
      ['Extravasor e ladrão', 'Adequação de tubulações de segurança para evitar transbordamentos.'],
      ['Pressurização', 'Avaliação de baixa pressão e instalação de solução compatível com a necessidade do imóvel.'],
      ['Revisão hidráulica geral', 'Conferência dos principais pontos hidráulicos e recomendações para manutenção.']
    ]}
  ];
  const pathKey = location.pathname.split('/').filter(Boolean).pop();
  const key = new URLSearchParams(location.search).get('tipo') || (pathKey && sets[pathKey] ? pathKey : 'eletrica');
  const service = sets[key] || sets.eletrica;
  const whatsapp = (name) => 'https://wa.me/5522988020606?text=' + encodeURIComponent('Olá! Gostaria de solicitar um orçamento para ' + name + '.');

  q('#title').textContent = service[0];
  q('#tag').textContent = service[1];
  q('#lead').textContent = 'Atendimento profissional para cuidar do seu imóvel com segurança e organização.';
  q('#f-service').value = service[0];
  q('.hero').style.backgroundImage = "url('assets/hero-equipe-maos-a-obra.png')";
  document.querySelectorAll('.wa').forEach((link) => { link.href = whatsapp(service[0]); });

  function makeCarousel(track, dots, prev, next, initialDelay = 5000) {
    const cards = [...track.children];
    let position = 0;
    let timer;
    let kickoff;
    const go = (index) => {
      position = index >= cards.length ? 0 : index < 0 ? cards.length - 1 : index;
      track.scrollTo({ left: cards[position].offsetLeft - track.offsetLeft, behavior: 'smooth' });
      [...dots.children].forEach((dot, i) => dot.classList.toggle('on', i === position));
    };
    const stop = () => {
      clearInterval(timer);
      clearTimeout(kickoff);
    };
    const start = () => {
      stop();
      timer = setInterval(() => go(position + 1), 5000);
    };
    const choose = (index) => {
      go(index);
      start();
    };
    prev.addEventListener('click', () => choose(position - 1));
    next.addEventListener('click', () => choose(position + 1));
    [...dots.children].forEach((dot, i) => dot.addEventListener('click', () => choose(i)));
    track.addEventListener('mouseenter', stop);
    track.addEventListener('mouseleave', start);
    track.addEventListener('touchstart', stop, { passive: true });
    track.addEventListener('touchend', start, { passive: true });
    kickoff = setTimeout(() => {
      go(position + 1);
      start();
    }, initialDelay);
  }

  function renderElectricalCatalog() {
    const section = q('.lateral');
    section.classList.add('electrical-catalog');
    section.innerHTML = '<div class="wrap"><div class="electrical-intro"><small>SOLUÇÕES ELÉTRICAS</small><h2>Encontre o serviço elétrico que você precisa.</h2><p>Escolha uma opção e fale diretamente com a Mãos à Obra. Antes da execução, avaliamos as condições da instalação e apresentamos o orçamento.</p></div><div id="electrical-groups"></div></div>';
    const container = q('#electrical-groups');
    electricalGroups.forEach((group, groupIndex) => {
      const block = document.createElement('section');
      block.className = 'electrical-group';
      block.innerHTML = '<div class="electrical-group-head"><div><span class="electrical-group-label">GRUPO ' + String(groupIndex + 1).padStart(2, '0') + '</span><h3>' + group.title + '</h3></div><div class="electrical-controls"><button class="group-prev" aria-label="Serviço anterior">←</button><button class="group-next" aria-label="Próximo serviço">→</button></div></div><div class="electrical-viewport"><div class="electrical-track">' + group.items.map((item, itemIndex) => '<article class="electrical-slide"><div class="electrical-copy"><span class="electrical-count">' + String(itemIndex + 1).padStart(2, '0') + ' / 06</span><h4>' + item[0] + '</h4><p>' + item[1] + '</p><a class="btn" target="_blank" rel="noopener" href="' + whatsapp(item[0]) + '">Pedir orçamento</a></div><div class="electrical-photo"><img src="' + (item[2] || group.image) + '" alt="' + item[0] + '" loading="lazy"></div></article>').join('') + '</div></div><div class="electrical-dots">' + group.items.map((_, i) => '<button class="' + (i === 0 ? 'on' : '') + '" aria-label="Ver serviço ' + (i + 1) + '"></button>').join('') + '</div>';
      container.appendChild(block);
      makeCarousel(q('.electrical-track', block), q('.electrical-dots', block), q('.group-prev', block), q('.group-next', block), 5000 + (groupIndex * 1100));
    });
  }

  function renderHydraulicCatalog() {
    const section = q('.lateral');
    section.classList.add('electrical-catalog');
    section.innerHTML = '<div class="wrap"><div class="electrical-intro"><small>SOLUÇÕES HIDRÁULICAS</small><h2>Encontre o serviço hidráulico que você precisa.</h2><p>Escolha uma opção e fale diretamente com a Mãos à Obra. Antes da execução, avaliamos as condições da instalação e apresentamos o orçamento.</p></div><div id="electrical-groups"></div></div>';
    const container = q('#electrical-groups');
    hydraulicGroups.forEach((group, groupIndex) => {
      const block = document.createElement('section');
      block.className = 'electrical-group';
      block.innerHTML = '<div class="electrical-group-head"><div><span class="electrical-group-label">GRUPO ' + String(groupIndex + 1).padStart(2, '0') + '</span><h3>' + group.title + '</h3></div><div class="electrical-controls"><button class="group-prev" aria-label="Serviço anterior">←</button><button class="group-next" aria-label="Próximo serviço">→</button></div></div><div class="electrical-viewport"><div class="electrical-track">' + group.items.map((item, itemIndex) => '<article class="electrical-slide"><div class="electrical-copy"><span class="electrical-count">' + String(itemIndex + 1).padStart(2, '0') + ' / 06</span><h4>' + item[0] + '</h4><p>' + item[1] + '</p><a class="btn" target="_blank" rel="noopener" href="' + whatsapp(item[0]) + '">Pedir orçamento</a></div><div class="electrical-photo"><img src="' + (item[2] || group.image) + '" alt="' + item[0] + '" loading="lazy"></div></article>').join('') + '</div></div><div class="electrical-dots">' + group.items.map((_, i) => '<button class="' + (i === 0 ? 'on' : '') + '" aria-label="Ver serviço ' + (i + 1) + '"></button>').join('') + '</div>';
      container.appendChild(block);
      makeCarousel(q('.electrical-track', block), q('.electrical-dots', block), q('.group-prev', block), q('.group-next', block), 5000 + (groupIndex * 1100));
    });
  }

  function renderStandardCarousel() {
    const track = q('#track');
    const dots = q('#dots');
    track.innerHTML = service[2].map((name, i) => '<article class="card"><div class="copy"><h3>' + name + '</h3><p>Avaliamos a necessidade, explicamos a solução e executamos conforme o orçamento aprovado.</p></div><img src="https://images.unsplash.com/photo-' + photos[i] + '?auto=format&fit=crop&w=1200&q=86" alt="' + name + '"></article>').join('');
    dots.innerHTML = service[2].map((_, i) => '<button class="' + (i ? '' : 'on') + '"></button>').join('');
    makeCarousel(track, dots, q('#prev'), q('#next'));
  }

  if (key === 'eletrica') renderElectricalCatalog(); else if (key === 'hidraulica') renderHydraulicCatalog(); else renderStandardCarousel();

  q('#lead-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const text = ['Olá! Gostaria de solicitar uma avaliação.', 'Nome: ' + q('#f-name').value, 'Telefone: ' + q('#f-phone').value, 'E-mail: ' + q('#f-email').value, 'Cidade: ' + q('#f-city').value + ' / ' + q('#f-state').value, 'Serviço: ' + service[0], 'Detalhes: ' + (q('#f-message').value || 'Não informado')].join('\n');
    window.open('https://wa.me/5522988020606?text=' + encodeURIComponent(text), '_blank');
  });
})();
