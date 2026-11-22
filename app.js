/**
 * Project Name: ArterOps DEMO
 * Frontend JavaScript для Telegram WebApp (Static Demo Version).
 */

const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
}

// ---------------------------------------------------------
// ВШИТЫЕ ДЕМО-ДАННЫЕ ЗА ОКТЯБРЬ 2026
// ---------------------------------------------------------
const DEMO_FEATURES = {
  enable_team_module: true,
  enable_knowledge_base: true,
  enable_fintech_and_taxes: true,
  enable_ai_morning_planner: true,
  enable_time_tracker: true,
  enable_task_bonus_system: true
};

const DEMO_PLATFORMS = [
  { id: 1, name: "Kwork", fee_formula: "x * 0.80", tax_status: "ФЛ/ЮЛ" },
  { id: 2, name: "FL.ru", fee_formula: "(x * 0.80) * 0.97", tax_status: "ФЛ/ЮЛ" },
  { id: 3, name: "Freelance.ru", fee_formula: "min(x * 0.90, x - 500) * 0.97", tax_status: "ФЛ/ЮЛ" },
  { id: 4, name: "Напрямую", fee_formula: "x * 1.0", tax_status: "ФЛ/ЮЛ" }
];

const DEMO_TEAM = [
  { id: 1, name: "София Миронова", role: "Арт-директор / Lead Designer", avatar_url: "avatars/sofia.jpg", skills: "Figma, Дизайн-системы, UX-исследования", description: "Курирует концепции, проводит UX-аудиты.", tg_username: "sofia_mironova" },
  { id: 2, name: "Алёна Ветрова", role: "Senior UI/UX Дизайнер", avatar_url: "avatars/alina.jpg", skills: "Figma Variables, Mobile Apps (iOS/Android)", description: "Специализируется на мобильных приложениях.", tg_username: "vetrova_ui" },
  { id: 3, name: "Марк Левин", role: "3D & Graphic Designer", avatar_url: "avatars/mark.jpg", skills: "Blender, Cinema 4D, Иллюстрации, Айдентика", description: "3D-модели продуктов и айдентика.", tg_username: "mark_3d_art" },
  { id: 4, name: "Полина Смирнова", role: "Motion Designer", avatar_url: "avatars/polina.jpg", skills: "After Effects, Rive, Lottie", description: "Микроанимации интерфейсов.", tg_username: "polina_motion" },
  { id: 5, name: "Денис Карпов", role: "Frontend / Webflow", avatar_url: "avatars/denis.jpg", skills: "HTML/CSS/JS, Webflow, React", description: "Верстка макетов и no-code решения.", tg_username: "karpov_dev" }
];

const DEMO_KNOWLEDGE = [
  { id: 1, title: "Регламент работы: Порядок внесения правок", keywords: "регламент, правки, ТЗ, согласование", description: "Базовые правила студии для защиты от бесконечных правок и срыва сроков.", content: "1. Работа ведется спринтами через Безопасную сделку.\n2. В каждый этап заложено до 2 раундов правок по ТЗ.\n3. Смена концепта считается отдельным спринтом." },
  { id: 2, title: "Готовая дизайн-система CoreUI для E-commerce (Figma)", keywords: "дизайн система, ui-kit, готовое решение, магазин, компоненты", description: "Модульная библиотека автолейаутов, типографики и 120+ компонентов магазинов.", content: "Включает карточки товаров, фильтры, корзину, чекаут. Экономит от 15 до 25 часов на старте проекта." },
  { id: 3, title: "Кейс: Редизайн мобильного приложения FinTech Neobank", keywords: "финтех, приложение, ios, android, кейс, криптовалюта", description: "Проектирование необанка с балансами, переводами и темной темой.", content: "Спроектировано 48 экранов в Figma по iOS HIG. Конверсия в регистрацию выросла на 27%." },
  { id: 4, title: "Кейс: Брендинг линейки органической косметики Lumière", keywords: "косметика, брендинг, логотип, 3d, упаковка", description: "Айдентика, гайдлайн и 12 сочных 3D-рендеров косметических флаконов.", content: "Разработано в Blender и Figma. Бренд вышел на маркетплейсы с ROI 310%." }
];

const DEMO_JOBS = [
  {
    id: 101,
    status: "в процессе",
    title: "Редизайн интернет-магазина органической косметики под ключ",
    platform: "Kwork",
    budget: 46000,
    currency: "RUB",
    estimated_hours: 19,
    hours_done: 7,
    days_left: 2,
    deadline_date: "09.11.2026",
    original_url: "https://kwork.ru",
    assigned_members: [1, 2],
    contact: "@brand_owner_artem",
    notes: "",
    description: `Комплексный UI/UX аудит и проектирование e-commerce витрины (6 ключевых экранов) в Figma.
Требования: чистая дизайн-система на переменных (Figma Variables), десктоп + адаптив под мобильные устройства (390px) и планшеты, подготовка интерактивного кликабельного прототипа для тестирования CJM и передача UI-кита разработчикам.`,
    ai_tasks: `Шаг 1: Аналитика CJM, аудит референсов и проектирование дизайн-токенов/цветов (150 мин)
Шаг 2: Модульная сетка и Desktop-концепт первого экрана + Hero-баннеры (180 мин)
Шаг 3: Каталог товаров: компонентные карточки, состояния hover/active, блок смарт-фильтрации (210 мин)
Шаг 4: Карточка товара: фотогалерея, селекторы объемов, табы состава и блок отзывов (180 мин)
Шаг 5: Проектирование корзины и 2-шагового чекаута без перегруза данными (150 мин)
Шаг 6: Информационные страницы: «О бренде» и интерактивная карта доставки (120 мин)
Шаг 7: Полная адаптация всех экранов под мобильные девайсы (iOS/Android 390px) (210 мин)
Шаг 8: Сборка кликабельного прототипа микроанимаций и финальный UI-kit для верстки (120 мин)`
  },
  {
    id: 102,
    status: "в процессе",
    title: "Пакет изометрических 3D-иллюстраций для SaaS-платформы",
    platform: "FL.ru",
    budget: 32000,
    currency: "RUB",
    estimated_hours: 12,
    hours_done: 3,
    days_left: 4,
    deadline_date: "11.11.2026",
    original_url: "https://fl.ru",
    assigned_members: [3, 4],
    contact: "@saas_founder_igor",
    notes: "Стилистика: матовое стекло (glassmorphism), неоновые градиенты. Все ассеты оптимизируются в WebP и Lottie для быстрой загрузки сайта.",
    description: `Разработка 5 кастомных 3D-композиций для главной страницы IT-сервиса автоматизации аналитики.
Сцены: 1) Дашборд с летающими графиками (Hero); 2) Интеграция с API (Шлюзы); 3) Безопасность и шифрование данных; 4) Коллаборация команды; 5) Мобильный контроль. Форматы сдачи: рендеры 4K PNG без фона + легкие анимации.`,
    ai_tasks: `Шаг 1: Сбор мудборда, согласование формы метафорических объектов и блокинг сцен (120 мин)
Шаг 2: Hi-poly моделирование модулей дашборда и серверных стоек в Blender (210 мин)
Шаг 3: Настройка процедурных материалов стекла, неоновых эмиттеров и схемы света (180 мин)
Шаг 4: Чистовой рендер 5 ракурсов Cycles + постобработка в Photoshop (150 мин)
Шаг 5: Экспорт микроанимаций вращения элементов в Lottie/WebP сжатием до 150 КБ (120 мин)`
  }
];

const DEMO_CHATS = {
  101: [
    { role: 'client', text: 'София, привет! Давай еще переделаем концепт в золотых тонах и нарисуем 3 новых экрана бесплатно?', date: '10:45' },
    { role: 'dev', text: 'Добрый день! Это кардинальная смена концепта. Предлагаю сдать текущий этап по согласованному ТЗ, а новые идеи вынести в платный спринт.', date: '10:52' },
    { role: 'client', text: 'Договорились, тогда закрываем текущий этап, а второй спринт запускаем со следующей недели.', date: '11:15' }
  ],
  102: [
    { role: 'client', text: 'Игорь на связи. Стеклянные стойки дашборда смотрятся отлично, но можно неон в зоне графиков сделать чуть поярче?', date: '14:20' },
    { role: 'dev', text: 'Привет! Да, скорректирую силу свечения эмиссионных шейдеров в Blender и пришлю обновленный рендер через пару часов.', date: '14:35' },
    { role: 'client', text: 'Супер, ждем финальный вариант!', date: '14:40' }
  ]
};

const DEMO_PLAN = {
  is_day_off: false,
  total_planned_minutes: 870,
  tasks_schedule: [
    {
      job_id: 101,
      project_title: "Редизайн интернет-магазина органической косметики под ключ",
      task_name: "Шаг 3: Каталог косметики — сетка карточек, hover-состояния и логика фильтрации",
      assigned_to: "София, Алёна",
      estimated_minutes: 210,
      is_urgent: true,
      deadline_str: "09.11"
    },
    {
      job_id: 102,
      project_title: "Пакет изометрических 3D-иллюстраций для SaaS-платформы",
      task_name: "Шаг 2: Hi-poly моделирование серверных стоек и кубов данных в Blender",
      assigned_to: "Марк",
      estimated_minutes: 190,
      is_urgent: false,
      deadline_str: "11.11"
    },
    {
      job_id: 101,
      project_title: "Редизайн интернет-магазина органической косметики под ключ",
      task_name: "Шаг 4: Карточка товара — селекторы объемов, табы состава и блок отзывов",
      assigned_to: "Алёна",
      estimated_minutes: 180,
      is_urgent: true,
      deadline_str: "09.11"
    },
    {
      job_id: 102,
      project_title: "Пакет изометрических 3D-иллюстраций для SaaS-платформы",
      task_name: "Шаг 5: Настройка шейдеров стекла и подготовка микроанимаций вращения",
      assigned_to: "Полина, Марк",
      estimated_minutes: 150,
      is_urgent: false,
      deadline_str: "11.11"
    },
    {
      job_id: 101,
      project_title: "Редизайн интернет-магазина органической косметики под ключ",
      task_name: "Шаг 5: Проектирование корзины и двухшагового чекаута",
      assigned_to: "София",
      estimated_minutes: 140,
      is_urgent: false,
      deadline_str: "09.11"
    }
  ],
  bonus_tasks: [
    {
      job_id: 101,
      project_title: "Редизайн интернет-магазина органической косметики под ключ",
      task_name: "Подготовка интерактивного кликабельного UI-kit (кнопки, формы, дропдауны)",
      assigned_to: "Алёна, Денис",
      estimated_minutes: 90,
      benefit_badge: "[Сдача этапа: +18 000 ₽]",
      reasoning: "Позволит досрочно закрыть Этап 1 в Безопасной сделке и передать макеты на верстку Денису без задержки."
    }
  ],
  financial_and_status_summary: {
    cheering_quote: "«Команда загружена на 14.5 ч из 20 ч доступных (запас буфера 28%). Фокус дня — закрыть каталог и карточку товара в E-commerce, параллельно завершив геометрию 3D-сцен.»"
  }
};

const DEMO_TRANSACTIONS = [
  { id: 1, platform_id: 3, platform_name: "Freelance.ru", amount_raw: 58000, amount_net: 50634, fee: 7366, tax: 3480, type: "active" },
  { id: 2, platform_id: 4, platform_name: "Напрямую", amount_raw: 75000, amount_net: 75000, fee: 0, tax: 4500, type: "active" },
  { id: 3, platform_id: 1, platform_name: "Kwork", amount_raw: 24000, amount_net: 19200, fee: 4800, tax: 1440, type: "active" },
  { id: 4, platform_id: 4, platform_name: "Напрямую", amount_raw: 15000, amount_net: 15000, fee: 0, tax: 900, type: "passive" }
];

const DEMO_TAXES = [
  {
    id: 1,
    project_title: "Анимация интерфейса и Lottie-иконки для EdTech",
    platform: "Kwork",
    amount_raw: 24000,
    currency: "RUB",
    tax_percent: 6,
    tax_amount: 1440,
    created_at: "20.10.2026"
  },
  {
    id: 2,
    project_title: "Лицензия CoreUI: Дизайн-система E-commerce",
    platform: "Напрямую",
    amount_raw: 15000,
    currency: "RUB",
    tax_percent: 6,
    tax_amount: 900,
    created_at: "22.10.2026"
  }
];

const DEMO_RESUME = `=== ПРОФИЛЬ ДИЗАЙН-СТУДИИ / АРТЕЛИ «MIRONOVA & CO» ===
Лид / Арт-директор: София Миронова
Состав команды: 5 специалистов (Product UI/UX, 3D/Графика, Motion/Lottie, Frontend/Webflow).
Специализация: Комплексный digital-дизайн под ключ (E-commerce, мобильные приложения, FinTech, брендинг, интерактивные веб-сервисы).
Базовые производственные метрики:
- Совокупная мощность команды: до 20 часов чистой работы в сутки (по 4 ч/день на специалиста).
- Средняя проектная ставка: 2 000 – 2 500 RUB / час в зависимости от грейда задачи.

=== РЕГЛАМЕНТЫ И ПРАВИЛА РАБОТЫ АРТЕЛИ ===
1. Поэтапная сдача проектов (Milestones / Безопасная сделка):
   - Этап 1: Мудборд, CJM, логика дизайн-системы (Variables/Tokens) и ключевой концепт.
   - Этап 2: Проектирование всех рабочих экранов/модулей в десктопе.
   - Этап 3: Адаптив (Mobile 390px, Tablet) + интерактивный кликабельный прототип.
   - Этап 4: Подготовка финального UI-kit / экспорт 3D/Lottie ассетов и сдача в разработку.
2. Контроль правок и защита границ проекта:
   - В каждый этап входит до 2 раундов правок строго в рамках утвержденного ТЗ.
   - Смена цветовой гаммы, переделка согласованной концепции или добавление новых сущностей считаются расширением скоупа и оформляются отдельным оплачиваемым спринтом.
3. Формат коммуникации:
   - Асинхронное текстовое взаимодействие без стихийных созвонов (комментарии в Figma, задачи в Telegram). Все договоренности фиксируются в письменном виде.
4. Технические стандарты качества:
   - Pixel-perfect верстка и дизайн, чистая иерархия слоев с Auto Layout, адаптивные сетки, оптимизация графики (WebP, SVG, легковесный Lottie JSON до 150 КБ).`;


// ---------------------------------------------------------
// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
// ---------------------------------------------------------
let allJobs = [];
let currentSort = 'deadline';
let currentJobId = null;
let timerInterval = null;
let timerSeconds = 0;
let timerState = 'stopped';
let dailyNormHours = 4;
let platformsList = [];
let currentJobObj = null;
let activeFeatures = {};
let allTeamMembers = [];
let allKnowledgeItems = [];


// ---------------------------------------------------------
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ---------------------------------------------------------
function setSort(type) {
  currentSort = type;
  document.getElementById('sort-deadline').classList.toggle('active', type === 'deadline');
  document.getElementById('sort-hours').classList.toggle('active', type === 'hours');
  renderCards();
}

function showToast(text) {
  const t = document.getElementById('toast-notify');
  if (!t) return;
  t.innerText = text;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2200);
}

function demoRestricted() {
  showToast("В демо-режиме эта функция работает только на просмотр.");
}

function formatMoney(amount, currency = 'RUB') {
  return `${new Intl.NumberFormat('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount)} ${currency}`;
}

function formatBudget(amount, currency = 'RUB') {
  return `${new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 }).format(amount)} ${currency}`;
}


// ---------------------------------------------------------
// ИНИЦИАЛИЗАЦИЯ
// ---------------------------------------------------------
async function initAppFeatures() {
  activeFeatures = DEMO_FEATURES;
  document.querySelectorAll('[data-feature]').forEach(el => {
    const featureKey = el.getAttribute('data-feature');
    if (activeFeatures[featureKey] === false) el.style.display = 'none';
  });
}

async function loadActiveJobs() {
  allJobs = DEMO_JOBS;
  dailyNormHours = 4;
  const countEl = document.getElementById('job-count');
  if (countEl) countEl.innerText = `${allJobs.length}`;
  renderCards();
  updateWorkloadBadge();
}

async function ensureTeamMembersLoaded() {
  allTeamMembers = DEMO_TEAM;
}

async function loadPlatforms() {
  platformsList = DEMO_PLATFORMS;
}


// ---------------------------------------------------------
// КАРТОЧКИ ЗАКАЗОВ
// ---------------------------------------------------------
function getAssignedMembersAvatarsByIds(memberIds) {
  if (!Array.isArray(memberIds) || memberIds.length === 0) return '';
  const avatarsHtml = memberIds.map(id => {
    const member = (allTeamMembers || []).find(m => m.id === id);
    if (!member) return '';
    return getMemberMiniAvatar(member);
  }).join('');
  return avatarsHtml ? `<div class="mini-avatars-group" style="margin-right: 6px;">${avatarsHtml}</div>` : '';
}

function sortJobsList(jobs) {
  return [...jobs].sort((a, b) => {
    if (currentSort === 'deadline') return a.days_left - b.days_left;
    return (a.estimated_hours - a.hours_done) - (b.estimated_hours - b.hours_done);
  });
}

function renderCards() {
  const container = document.getElementById('cards-container');
  const emptyState = document.getElementById('empty-state');
  container.innerHTML = '';

  if (allJobs.length === 0) {
    emptyState.style.display = 'flex';
    return;
  }
  emptyState.style.display = 'none';

  sortJobsList(allJobs).forEach(job => {
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => openModal(job);

    const isUrgent = job.days_left <= 2;
    const urgentClass = isUrgent ? 'urgent' : '';
    const daysText = ` (${job.days_left} дн.)`;
    const deadlineHtml = `<span class="deadline ${urgentClass}">
      ${isUrgent ? '🔥 ' : ''}${job.deadline_date}${daysText}
    </span>`;

    card.innerHTML = `
      <div class="card-top"><span class="platform">${job.platform}</span>${deadlineHtml}</div>
      <div class="card-title">${job.title}</div>
      <div class="card-details">
        <span class="budget">${formatBudget(job.budget, job.currency)}</span>
        <div class="hours" style="display: flex; align-items: center;">
          ${getAssignedMembersAvatarsByIds(job.assigned_members)}
          <span class="hours-badge">~ ${job.hours_done}ч / ${job.estimated_hours}ч</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function updateWorkloadBadge() {
  let remHours = allJobs.reduce((acc, j) => acc + Math.max(0, j.estimated_hours - j.hours_done), 0);
  const teamCount = allTeamMembers.length > 0 ? allTeamMembers.length : 1;
  const days = Math.ceil(remHours / (dailyNormHours * teamCount)) || 0;
  const badge = document.getElementById('job-days-load');
  if (badge) badge.innerText = `~${days} дн.`;
}


// ---------------------------------------------------------
// МОДАЛЬНОЕ ОКНО ЗАКАЗА
// ---------------------------------------------------------
async function openModal(job) {
  currentJobId = job.id;
  currentJobObj = job;
  resetTimer();
  document.getElementById('m-today-time').innerText = "02:30";
  renderJobAssignedMembers(job);
  populateTimelogMemberSelect(job);

  document.getElementById('view-details').style.display = 'block';
  document.getElementById('view-complete').style.display = 'none';

  document.getElementById('m-title').innerText = job.title;
  document.getElementById('m-budget').innerText = formatBudget(job.budget, job.currency);
  document.getElementById('m-hours').innerText = `Затрачено: ${job.hours_done}ч из ~${job.estimated_hours}ч`;
  document.getElementById('m-tasks').innerText = job.ai_tasks;
  document.getElementById('m-desc').innerText = job.description;
  document.getElementById('m-contact-input').value = job.contact || '';
  document.getElementById('m-notes-input').value = job.notes || '';

  loadJobChat(job.id);

  const linkEl = document.getElementById('m-link');
  if (linkEl && job.original_url) {
    linkEl.href = job.original_url;
    linkEl.style.display = 'inline-flex';
  }

  const modal = document.getElementById('job-modal');
  modal.classList.add('open');
  modal.style.display = 'flex';
}

function closeModal(event) {
  if (event && event.target !== document.getElementById('job-modal') && !event.target.classList.contains('close-btn')) return;
  document.getElementById('job-modal').style.display = 'none';
}

function saveJobContact() { demoRestricted(); }
function saveJobNotes() { demoRestricted(); }
function toggleAssignMemberToJob() { demoRestricted(); }

function loadJobChat(jobId) {
  const chatSection = document.getElementById('m-chat-section');
  const container = document.getElementById('m-chat-history');
  container.innerHTML = '';

  const messages = DEMO_CHATS[jobId] || [];

  if (messages.length === 0) {
    chatSection.style.display = 'none';
    return;
  }

  chatSection.style.display = 'block';

  messages.forEach(m => {
    const bubble = document.createElement('div');
    const isClient = m.role === 'client';
    bubble.className = `chat-bubble ${isClient ? 'client' : 'dev'}`;
    bubble.innerHTML = `<div>${m.text}</div><div class="chat-time">${m.date}</div>`;
    container.appendChild(bubble);
  });

  container.scrollTop = container.scrollHeight;
}


// ---------------------------------------------------------
// ТАЙМ-ТРЕКЕР
// ---------------------------------------------------------
function updateTimerDisplay() {
  const m = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
  const s = (timerSeconds % 60).toString().padStart(2, '0');
  document.getElementById('timer-val').innerText = `${m}:${s}`;
}

function startTimer() {
  if (timerState === 'running') return;
  timerState = 'running';
  document.getElementById('btn-start').style.display = 'none';
  document.getElementById('btn-pause').style.display = 'inline-flex';
  document.getElementById('btn-save').style.display = 'inline-flex';
  timerInterval = setInterval(() => { timerSeconds++; updateTimerDisplay(); }, 1000);
}

function pauseTimer() {
  timerState = 'paused';
  clearInterval(timerInterval);
  document.getElementById('btn-start').innerHTML = 'Продолжить';
  document.getElementById('btn-start').style.display = 'inline-flex';
  document.getElementById('btn-pause').style.display = 'none';
}

function resetTimer() {
  clearInterval(timerInterval);
  timerSeconds = 0;
  timerState = 'stopped';
  updateTimerDisplay();
  document.getElementById('btn-start').innerHTML = 'Старт';
  document.getElementById('btn-start').style.display = 'inline-flex';
  document.getElementById('btn-pause').style.display = 'none';
  document.getElementById('btn-save').style.display = 'none';
}

function saveTimer() { demoRestricted(); resetTimer(); }
function quickAddTime(m) { demoRestricted(); }
function submitManualTime() { demoRestricted(); }
function saveDetailsOnly() { demoRestricted(); }


// ---------------------------------------------------------
// ЗАКРЫТИЕ СДЕЛКИ: ДИНАМИЧЕСКИЙ РАСЧЕТ ПО ФОРМУЛАМ ПЛАТФОРМ
// ---------------------------------------------------------
function evaluateFeeFormula(amount, formula) {
  if (!formula) return amount;
  try {
    let expr = formula.replace(/x/g, amount);
    expr = expr.replace(/min\(([^,]+),([^)]+)\)/g, 'Math.min($1, $2)');
    return eval(expr);
  } catch (e) {
    return amount;
  }
}

function openCompleteDealView() {
  document.getElementById('view-details').style.display = 'none';
  document.getElementById('view-complete').style.display = 'block';
  document.getElementById('deal-sub-title').innerText = currentJobObj.title;
  document.getElementById('deal-currency').value = currentJobObj.currency || 'RUB';
  document.getElementById('deal-amount').value = currentJobObj.budget;
  
  const platSelect = document.getElementById('deal-platform');
  platSelect.innerHTML = '';
  
  let selectedId = 1;
  const currentPlat = (currentJobObj.platform || '').toLowerCase();

  platformsList.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.innerText = p.name;
    platSelect.appendChild(opt);

    const pLower = p.name.toLowerCase();
    if (currentPlat.includes('kwork') && pLower.includes('kwork')) selectedId = p.id;
    else if (currentPlat.includes('fl.ru') && pLower.includes('fl.ru')) selectedId = p.id;
    else if (currentPlat.includes('freelance') && pLower.includes('freelance')) selectedId = p.id;
    else if (currentPlat.includes('напрямую') && pLower.includes('напрямую')) selectedId = p.id;
  });

  platSelect.value = selectedId;
  onPlatformChange();
}

function backToDetailsView() {
  document.getElementById('view-complete').style.display = 'none';
  document.getElementById('view-details').style.display = 'block';
}

function onPlatformChange() {
  const platId = parseInt(document.getElementById('deal-platform').value);
  const plat = platformsList.find(p => p.id === platId);
  const taxSelect = document.getElementById('deal-tax-status');

  if (plat) {
    if (plat.tax_status === 'ЮЛ') {
      taxSelect.innerHTML = '<option value="6">ЮЛ (6%)</option>';
      taxSelect.value = "6";
    } else if (plat.tax_status === 'ФЛ') {
      taxSelect.innerHTML = '<option value="4">ФЛ (4%)</option>';
      taxSelect.value = "4";
    } else {
      taxSelect.innerHTML = `
        <option value="4">ФЛ (Физлицо — 4%)</option>
        <option value="6">ЮЛ (Юрлицо — 6%)</option>
      `;
      taxSelect.value = "4";
    }
  }

  recalcDeal();
}

function onTaxStatusChange() { 
  recalcDeal(); 
}

function recalcDeal() {
  const amount = parseFloat(document.getElementById('deal-amount').value) || 0;
  const currency = document.getElementById('deal-currency').value || 'RUB';
  const platId = parseInt(document.getElementById('deal-platform').value);
  const taxPercent = parseInt(document.getElementById('deal-tax-status').value) || 4;
  const plat = platformsList.find(p => p.id === platId);

  // Считаем остаток после комиссии площадки
  const amountNet = evaluateFeeFormula(amount, plat ? plat.fee_formula : null);
  const fee = Math.max(0, amount - amountNet);
  const tax = amount * (taxPercent / 100);
  const pureProfit = amountNet - tax;

  document.querySelectorAll('.calc-curr').forEach(el => el.innerText = currency);
  document.getElementById('calc-fee').innerText = fee.toFixed(2);
  document.getElementById('calc-tax-percent').innerText = taxPercent;
  document.getElementById('calc-tax').innerText = tax.toFixed(2);
  document.getElementById('calc-pure-profit').innerText = `${pureProfit.toFixed(2)} ${currency}`;
}

function submitCompleteDeal() { 
  demoRestricted(); 
}


// ---------------------------------------------------------
// МЕНЮ И ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ
// ---------------------------------------------------------
function toggleMenu(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById('dropdown-menu');
  menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
}

document.addEventListener('click', (e) => {
  const menu = document.getElementById('dropdown-menu');
  const btn = document.querySelector('.burger-btn');
  if (menu && menu.style.display === 'flex' && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.style.display = 'none';
  }
});

function switchPage(pageId) {
  ['page-jobs', 'page-stats', 'page-knowledge', 'page-team', 'page-resume'].forEach(p => {
    const el = document.getElementById(p);
    if (el) el.style.display = 'none';
  });
  document.getElementById(pageId).style.display = 'flex';
  document.getElementById('dropdown-menu').style.display = 'none';

  if (pageId === 'page-stats') {
    populateStatsPlatforms();
    loadStatsData();
  } else if (pageId === 'page-knowledge') {
    loadKnowledgeItems();
  } else if (pageId === 'page-team') {
    loadTeamMembers();
  } else if (pageId === 'page-resume') {
    loadResumeText();
  }
}


// ---------------------------------------------------------
// ФИНАНСЫ: ФИЛЬТРАЦИЯ ПО ИСТОЧНИКУ ЛИДОВ (ПЛАТФОРМАМ)
// ---------------------------------------------------------
function populateStatsPlatforms() {
  const select = document.getElementById('stat-platform');
  const cur = select.value;
  select.innerHTML = '<option value="all">Все источники</option>';
  platformsList.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.innerText = p.name;
    select.appendChild(opt);
  });
  if (cur) select.value = cur;
}

function loadStatsData() {
  const platId = document.getElementById('stat-platform').value;

  // Фильтруем транзакции по выбранной платформе
  let txs = DEMO_TRANSACTIONS;
  if (platId !== 'all') {
    txs = DEMO_TRANSACTIONS.filter(t => t.platform_id === parseInt(platId));
  }

  const raw = txs.reduce((acc, t) => acc + t.amount_raw, 0);
  const fee = txs.reduce((acc, t) => acc + t.fee, 0);
  const tax = txs.reduce((acc, t) => acc + t.tax, 0);
  const pure = raw - fee - tax;

  const activeRaw = txs.filter(t => t.type === 'active').reduce((acc, t) => acc + t.amount_raw, 0);
  const passiveRaw = txs.filter(t => t.type === 'passive').reduce((acc, t) => acc + t.amount_raw, 0);

  document.getElementById('stat-pure-profit').innerText = formatMoney(pure);
  document.getElementById('stat-raw').innerText = `${raw.toFixed(2)} RUB`;
  document.getElementById('stat-fee').innerText = `-${fee.toFixed(2)} RUB`;
  document.getElementById('stat-tax').innerText = `${tax.toFixed(2)} RUB`;

  const donutSec = document.getElementById('donut-section');
  if (raw > 0) {
    donutSec.style.display = 'block';
    document.getElementById('stat-active-val').innerText = formatMoney(activeRaw);
    document.getElementById('stat-passive-val').innerText = formatMoney(passiveRaw);

    const circumference = 113.1;
    const actFrac = raw > 0 ? (activeRaw / raw) : 1;
    const actLen = (actFrac * circumference).toFixed(1);
    const actGap = (circumference - actLen).toFixed(1);

    const passLen = ((1 - actFrac) * circumference).toFixed(1);
    const passGap = (circumference - passLen).toFixed(1);

    document.getElementById('donut-active').setAttribute('stroke-dasharray', `${actLen} ${actGap}`);
    document.getElementById('donut-active').setAttribute('stroke-dashoffset', '0');

    document.getElementById('donut-passive').setAttribute('stroke-dasharray', `${passLen} ${passGap}`);
    document.getElementById('donut-passive').setAttribute('stroke-dashoffset', `-${actLen}`);
  } else {
    donutSec.style.display = 'none';
  }
}

function openTaxModal() {
  const container = document.getElementById('unpaid-taxes-list');
  container.innerHTML = '';
  document.getElementById('tax-modal').style.display = 'flex';

  DEMO_TAXES.forEach(item => {
    const row = document.createElement('div');
    row.className = 'tax-item';
    row.innerHTML = `
      <div style="flex: 1; padding-right: 8px;">
        <div style="font-weight: 700; font-size: 13px; color: var(--text-main); line-height: 1.3;">
          ${item.project_title}
        </div>
        <div style="font-size: 11px; color: var(--accent-primary); margin-top: 2px;">
          ${item.platform} • ${formatMoney(item.amount_raw, item.currency)}
        </div>
        <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">
          Акт от ${item.created_at} • Налог ${item.tax_percent}% (НПД): <b style="color: #ff3366;">${formatMoney(item.tax_amount, 'RUB')}</b>
        </div>
      </div>
      <button class="btn-pay-tax" onclick="demoRestricted()">Оплачено</button>
    `;
    container.appendChild(row);
  });
}

function closeTaxModal() { 
  document.getElementById('tax-modal').style.display = 'none'; 
}


// ---------------------------------------------------------
// БАЗА ЗНАНИЙ: РАБОЧИЙ ПОИСК
// ---------------------------------------------------------
function loadKnowledgeItems() {
  allKnowledgeItems = DEMO_KNOWLEDGE;
  renderKnowledgeCards(allKnowledgeItems);
}

function renderKnowledgeCards(items) {
  const container = document.getElementById('knowledge-cards-container');
  const emptyState = document.getElementById('knowledge-empty-state');
  container.innerHTML = '';

  if (!items || items.length === 0) {
    emptyState.style.display = 'flex';
    return;
  }
  emptyState.style.display = 'none';

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => openKnowledgeModal(item);
    
    const tagsHtml = item.keywords.split(',')
      .map(t => t.trim())
      .filter(Boolean)
      .map(t => `<span class="hours-badge" style="background:rgba(0,255,204,0.1); border:1px solid var(--accent-primary); color:var(--accent-primary); padding:2px 6px; border-radius:6px; font-size:10px;">#${t}</span>`)
      .join(' ');

    card.innerHTML = `
      <div class="card-top"><span class="platform">ИДЕНТИФИКАТОР #${item.id}</span></div>
      <div class="card-title" style="margin-bottom: 4px; font-size: 14px;">${item.title}</div>
      <div style="font-size: 12px; color: var(--text-muted);">${item.description}</div>
      <div class="knowledge-tags-row">${tagsHtml}</div>
    `;
    container.appendChild(card);
  });
}

function filterKnowledgeCards() {
  const query = (document.getElementById('knowledge-search-input').value || '').toLowerCase().trim();
  if (!query) {
    renderKnowledgeCards(allKnowledgeItems);
    return;
  }
  const filtered = allKnowledgeItems.filter(item => {
    return (item.title || '').toLowerCase().includes(query) ||
           (item.keywords || '').toLowerCase().includes(query) ||
           (item.description || '').toLowerCase().includes(query) ||
           (item.content || '').toLowerCase().includes(query);
  });
  renderKnowledgeCards(filtered);
}

function openKnowledgeModal(item = null) {
  document.getElementById('km-title-input').value = item ? item.title : '';
  document.getElementById('km-keywords-input').value = item ? item.keywords : '';
  document.getElementById('km-desc-input').value = item ? item.description : '';
  document.getElementById('km-content-input').value = item ? item.content : '';
  document.getElementById('knowledge-modal').style.display = 'flex';
}

function closeKnowledgeModal() { 
  document.getElementById('knowledge-modal').style.display = 'none'; 
}

function submitKnowledgeForm() { 
  demoRestricted(); 
}


// ---------------------------------------------------------
// КОМАНДА
// ---------------------------------------------------------
function loadTeamMembers() {
  document.getElementById('team-counter-badge').innerText = `${allTeamMembers.length} / 5 чел.`;
  const container = document.getElementById('team-cards-container');
  container.innerHTML = '';

  allTeamMembers.forEach(m => {
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => openTeamModal(m);
    const initial = m.name.charAt(0);
    card.innerHTML = `
      <div class="team-card-row">
        <img class="team-avatar" src="${m.avatar_url}" onerror="this.outerHTML='<div class=\\'team-avatar\\'>${initial}</div>'">
        <div class="team-info-box">
          <div class="team-name-row">
            <div><div class="team-member-name">${m.name}</div><div class="team-member-role">${m.role}</div></div>
          </div>
          <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">${m.description}</div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function openTeamModal(member = null) {
  document.getElementById('tm-name-input').value = member ? member.name : '';
  document.getElementById('tm-role-input').value = member ? member.role : '';
  document.getElementById('tm-skills-input').value = member ? member.skills : '';
  document.getElementById('tm-desc-input').value = member ? member.description : '';
  document.getElementById('team-modal').style.display = 'flex';
}

function closeTeamModal() { 
  document.getElementById('team-modal').style.display = 'none'; 
}

function submitTeamForm() { 
  demoRestricted(); 
}


// ---------------------------------------------------------
// ПЛАНИРОВЩИК
// ---------------------------------------------------------
function loadDailyPlan() { 
  renderDailyPlan(DEMO_PLAN); 
}

function refreshDailyPlan() { 
  demoRestricted(); 
}

function togglePlanNoteBox() {
  const box = document.getElementById('plan-note-box');
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

function savePlanNote() { 
  demoRestricted(); 
}

function clearPlanNote() { 
  document.getElementById('plan-note-input').value = ''; 
  demoRestricted(); 
}

function getMemberMiniAvatar(member) {
  return `<img class="mini-chip-avatar" src="${member.avatar_url}" onerror="this.outerHTML='<span class=\\'mini-chip-avatar\\'>${member.name.charAt(0)}</span>'">`;
}

function getMemberMiniAvatarByName(nameStr) {
  if (!nameStr) return '';

  const names = nameStr.split(/[,/]| и /i).map(n => n.trim()).filter(Boolean);
  if (names.length === 0) return '';

  const avatarsHtml = names.map(name => {
    const clean = name.toLowerCase();
    const member = (allTeamMembers || []).find(m => {
      if (!m || !m.name) return false;
      const mName = m.name.toLowerCase();
      return mName.includes(clean) || clean.includes(mName);
    });

    if (member && member.avatar_url) {
      const initial = member.name.charAt(0).toUpperCase();
      return `<img class="mini-chip-avatar" src="${member.avatar_url}" alt="${member.name}" title="${member.name}" onerror="this.outerHTML='<span class=\\'mini-chip-avatar\\'>${initial}</span>'">`;
    }

    const initial = member?.name ? member.name.charAt(0).toUpperCase() : name.charAt(0).toUpperCase();
    return `<span class="mini-chip-avatar" title="${name}">${initial}</span>`;
  }).join('');

  return `<div class="mini-avatars-group" style="display:inline-flex; align-items:center; margin-right:4px;">${avatarsHtml}</div>`;
}

function renderDailyPlan(plan) {
  const box = document.getElementById('daily-plan-box');
  if (!plan || Object.keys(plan).length === 0) {
    if (box) box.style.display = 'none';
    return;
  }
  if (box) box.style.display = 'block';

  // Расчет суммарного времени студии в часах
  const hours = ((plan.total_planned_minutes || 0) / 60).toFixed(1);
  const timeBadge = document.getElementById('plan-time-badge');
  if (timeBadge) timeBadge.innerText = `~${hours}ч`;

  const container = document.getElementById('daily-plan-tasks');
  if (container) {
    container.innerHTML = '';
    const mainTasks = plan.tasks_schedule || [];

    mainTasks.forEach(t => {
      // Ищем заказ: сначала по точному job_id, затем по названию
      const matchedJob = allJobs.find(j => j.id === t.job_id) || allJobs.find(j => {
        const jTitle = (j.title || '').toLowerCase();
        const pTitle = (t.project_title || '').toLowerCase();
        return jTitle.includes(pTitle) || pTitle.includes(jTitle);
      });

      const row = document.createElement('div');
      row.className = `daily-task-item ${t.is_urgent ? 'urgent' : ''}`;
      
      // Полноценный кликабельный переход в модалку проекта
      if (matchedJob) {
        row.style.cursor = 'pointer';
        row.title = 'Нажмите, чтобы открыть карточку проекта';
        row.onclick = () => openModal(matchedJob);
      }

      const assignedBadge = t.assigned_to 
        ? `<span class="plan-member-badge" style="display:inline-flex; align-items:center;">${getMemberMiniAvatarByName(t.assigned_to)}<span>${t.assigned_to}</span></span>` 
        : '';

      const deadlineHtml = t.deadline_str 
        ? `<span class="plan-deadline-tag">до ${t.deadline_str}</span>` 
        : '';

      // Вставляем ПОЛНОЕ название проекта t.project_title без сокращений и регэкспов
      row.innerHTML = `
        <div style="flex: 1; min-width: 0; padding-right: 8px;">
          <div class="daily-task-name">
            ${t.is_urgent ? '🔥 ' : ''}${t.task_name}
          </div>
          <div class="daily-task-proj-row" style="margin-top: 4px; display: flex; flex-wrap: wrap; align-items: center; gap: 6px;">
            <span class="proj-title-text" style="font-weight: 600; color: var(--accent-primary);">${t.project_title}</span>
            ${assignedBadge}
            ${deadlineHtml}
          </div>
        </div>
        <div class="daily-task-mins" style="white-space: nowrap;">~${t.estimated_minutes}м</div>
      `;
      container.appendChild(row);
    });
  }

  // Бонусные задачи
  const bonusBox = document.getElementById('daily-bonus-box');
  const bonusContainer = document.getElementById('daily-bonus-tasks');
  if (bonusContainer) bonusContainer.innerHTML = '';

  const bonusTasks = plan.bonus_tasks || [];
  if (bonusTasks.length > 0 && bonusBox && bonusContainer) {
    bonusBox.style.display = 'block';

    bonusTasks.forEach(b => {
      const matchedJob = allJobs.find(j => j.id === b.job_id) || allJobs.find(j => {
        const jTitle = (j.title || '').toLowerCase();
        const pTitle = (b.project_title || '').toLowerCase();
        return jTitle.includes(pTitle) || pTitle.includes(jTitle);
      });

      const row = document.createElement('div');
      row.className = 'daily-task-item bonus-item';

      if (matchedJob) {
        row.style.cursor = 'pointer';
        row.title = 'Нажмите, чтобы открыть карточку проекта';
        row.onclick = () => openModal(matchedJob);
      }

      const bonusAssignedBadge = b.assigned_to 
        ? `<span class="plan-member-badge" style="display:inline-flex; align-items:center;">${getMemberMiniAvatarByName(b.assigned_to)}<span>${b.assigned_to}</span></span>` 
        : '';

      row.innerHTML = `
        <div style="flex: 1; min-width: 0; padding-right: 8px;">
          <div class="daily-task-name">
            <span class="bonus-badge">${b.benefit_badge}</span>
            ${b.task_name}
          </div>
          <div class="daily-task-proj-row" style="margin-top: 4px; display: flex; flex-wrap: wrap; align-items: center; gap: 6px;">
            <span class="proj-title-text" style="font-weight: 600; color: var(--accent-secondary);">${b.project_title}</span>
            ${bonusAssignedBadge}
          </div>
          ${b.reasoning ? `<div class="bonus-reasoning" style="font-size: 11px; color: var(--text-muted); margin-top: 3px;">${b.reasoning}</div>` : ''}
        </div>
        <div class="daily-task-mins" style="color: var(--accent-secondary); white-space: nowrap;">+${b.estimated_minutes}м</div>
      `;
      bonusContainer.appendChild(row);
    });
  } else if (bonusBox) {
    bonusBox.style.display = 'none';
  }

  const quoteEl = document.getElementById('daily-plan-quote');
  if (quoteEl) {
    quoteEl.innerText = plan.financial_and_status_summary?.cheering_quote || "";
  }
}

function renderJobAssignedMembers(job) {
  const chipsBox = document.getElementById('m-assigned-team-chips');
  chipsBox.innerHTML = '';
  job.assigned_members.forEach(id => {
    const member = allTeamMembers.find(m => m.id === id);
    if (member) {
      const chip = document.createElement('span');
      chip.className = 'assigned-chip';
      chip.innerHTML = `${getMemberMiniAvatar(member)} <span>${member.name} (${member.role})</span>`;
      chipsBox.appendChild(chip);
    }
  });
}

function populateTimelogMemberSelect(job) {
  const select = document.getElementById('timelog-member-select');
  select.innerHTML = '<option value="">Не привязано / Общий пул</option>';
  job.assigned_members.forEach(id => {
    const m = allTeamMembers.find(x => x.id === id);
    if (m) select.innerHTML += `<option value="${m.id}">${m.name}</option>`;
  });
}

// ---------------------------------------------------------
// ПРОФИЛЬ
// ---------------------------------------------------------
function loadResumeText() {
  const textarea = document.getElementById('resume-text-input');
  if (textarea) {
    textarea.value = DEMO_RESUME;
  }
}

function saveResumeText() { 
  demoRestricted(); 
}

// ---------------------------------------------------------
// СТАРТ
// ---------------------------------------------------------
async function initWebApp() {
  await initAppFeatures();
  await ensureTeamMembersLoaded();
  await loadActiveJobs();
  await loadPlatforms();
  loadDailyPlan();
}

initWebApp();