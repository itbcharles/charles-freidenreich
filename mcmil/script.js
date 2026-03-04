const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const orderForm = document.getElementById('order-form');
const emailOrderButton = document.getElementById('email-order');
const formStatus = document.getElementById('form-status');
const root = document.body;

const CONTACT = {
  // Replace with production details before launch.
  whatsapp: root?.dataset.whatsapp || '',
  email: root?.dataset.orderEmail || '',
};

function setStatus(message, isWarning = false) {
  if (!formStatus) {
    return;
  }

  formStatus.textContent = message;
  formStatus.classList.remove('ok', 'warn');
  formStatus.classList.add(isWarning ? 'warn' : 'ok');
}

function buildOrderMessage(data) {
  const lines = [
    'Hello McMillions Clothing,',
    'I want to place a made-to-order custom fit request.',
    '',
    `Name: ${data.name}`,
    `Phone/WhatsApp: ${data.phone}`,
    `Email: ${data.email}`,
    `Location: ${data.location}`,
    `Outfit Type: ${data.outfit}`,
    `Event Date: ${data.event_date}`,
    `Chest/Bust: ${data.chest}`,
    `Waist: ${data.waist}`,
    `Hip: ${data.hip}`,
    `Height: ${data.height}`,
    '',
    'Style Notes:',
    data.notes,
  ];

  return lines.join('\n');
}

function getFormPayload(form) {
  const values = new FormData(form);
  return Object.fromEntries(values.entries());
}

function getDigits(value) {
  return String(value || '').replace(/\D+/g, '');
}

function canUseWhatsApp(number) {
  const digits = getDigits(number);
  return digits.length >= 8 && digits !== '2340000000000';
}

function canUseEmail(address) {
  return Boolean(address) && address !== 'orders@mcmillionsclothing.com';
}

function sendWhatsApp(payload) {
  if (!canUseWhatsApp(CONTACT.whatsapp)) {
    setStatus('Update data-whatsapp in index.html with the real business number first.', true);
    return;
  }

  const message = buildOrderMessage(payload);
  const url = `https://wa.me/${getDigits(CONTACT.whatsapp)}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
  setStatus('WhatsApp opened with your pre-filled order request.');
}

function sendEmail(payload) {
  if (!canUseEmail(CONTACT.email)) {
    setStatus('Update data-order-email in index.html with the real business email first.', true);
    return;
  }

  const subject = `Custom Order Request - ${payload.name}`;
  const body = buildOrderMessage(payload);
  window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  setStatus('Email draft opened with your pre-filled order request.');
}

if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!orderForm.checkValidity()) {
      orderForm.reportValidity();
      setStatus('Please complete all required fields before sending.', true);
      return;
    }

    const payload = getFormPayload(orderForm);
    sendWhatsApp(payload);
  });
}

if (emailOrderButton && orderForm) {
  emailOrderButton.addEventListener('click', () => {
    if (!orderForm.checkValidity()) {
      orderForm.reportValidity();
      setStatus('Please complete all required fields before sending.', true);
      return;
    }

    const payload = getFormPayload(orderForm);
    sendEmail(payload);
  });
}
