
(function () {
  const toast = (message) => {
    const node = document.createElement('div');
    node.className = 'toast';
    node.textContent = message;
    document.body.appendChild(node);
    setTimeout(() => node.remove(), 2400);
  };

  const heroBtn = document.getElementById('heroSimulate');
  if (heroBtn) {
    const percentEl = document.getElementById('heroPercent');
    const fillEl = document.getElementById('heroFill');
    const statusEl = document.getElementById('heroStatus');
    const etaEl = document.getElementById('heroEta');
    const states = [
      { percent: 72, status: 'Наблюдение', eta: 'Сегодня · 20:00' },
      { percent: 84, status: 'Машина назначена', eta: 'Сегодня · 19:10' },
      { percent: 96, status: 'Срочный вывоз', eta: 'Через 12 минут' }
    ];
    let idx = 1;
    heroBtn.addEventListener('click', () => {
      idx = (idx + 1) % states.length;
      const state = states[idx];
      percentEl.textContent = state.percent + '%';
      fillEl.style.width = state.percent + '%';
      statusEl.textContent = state.status;
      etaEl.textContent = state.eta;
      toast('Демо обновлено: бак ' + state.percent + '%, статус — ' + state.status);
    });
  }

  const scanBtn = document.getElementById('scanQrBtn');
  if (scanBtn) {
    const scanResult = document.getElementById('scanResult');
    const balanceValue = document.getElementById('balanceValue');
    scanBtn.addEventListener('click', () => {
      scanResult.textContent = 'QR-код подтверждён. Начислено +35 базовых Eco-coins и +100 бонусных за лидерство района.';
      if (balanceValue && !balanceValue.dataset.done) {
        balanceValue.textContent = '4 995';
        balanceValue.dataset.done = 'true';
      }
      toast('Баллы начислены. Новый баланс: 4 995 Eco-coins');
    });
  }

  document.querySelectorAll('[data-demo-action]').forEach((button) => {
    button.addEventListener('click', () => {
      toast(button.dataset.demoAction);
    });
  });
})();
