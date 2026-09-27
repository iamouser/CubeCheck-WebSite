(function(){
  const EN = {
  "Ознакомление": "Overview",
  "Скачать / GitHub": "Download / GitHub",
  "Возможности": "Features",
  "Интерфейс": "Interface",
  "Безопасность и FAQ": "Safety & FAQ",
  "Проверка быстрее.": "Faster checks.",
  "Инструмент для администраторов Minecraft‑проектов, который помогает быстрее проверить компьютер игрока на известные признаки стороннего ПО — без десятка разрозненных действий вручную.": "A tool for Minecraft project administrators that helps inspect a player’s computer faster for known signs of third-party software — without a dozen scattered manual steps.",
  "Скачать CubeCheck": "Download CubeCheck",
  "Исходный код ↗": "Source code ↗",
  "Discord поддержки": "Support Discord",
  "3 ОС": "3 OS",
  "Открытый исходный код": "Open source",
  "1 отчёт": "1 report",
  "Результаты проверки в YAML": "Check results in YAML",
  "Автопроверка": "Auto-check",
  "процессы · файлы · логи": "processes · files · logs",
  "Скачать без путаницы.": "Download without the confusion.",
  "Выберите свою систему. Онлайн‑установщик загружает payload с GitHub, офлайн‑вариант рассчитан на установку без загрузки payload во время запуска.": "Choose your system. The online installer downloads the payload from GitHub; the offline build is designed to install without downloading the payload during setup.",
  "Исходный код проекта открыт. Сторонние утилиты имеют собственные лицензии и не становятся частью MIT‑лицензии CubeCheck.": "The project’s source code is public. Third-party utilities have their own licenses and are not covered by CubeCheck’s MIT license.",
  "Выберите версию CubeCheck": "Choose a CubeCheck version",
  "Сначала выберите свою операционную систему, затем вариант установки:": "First choose your operating system, then the installation type:",
  "или": "or",
  ".run installer · Online / Offline · README при необходимости": ".run installer · Online / Offline · README if needed",
  "Перед скачиванием:": "Before downloading:",
  "вступите в Discord AuraStudio и AnProject. Сайт попросит подтвердить это перед загрузкой.": "join the AuraStudio and AnProject Discord servers. The site will ask you to confirm this before downloading.",
  "Скачивайте только с официального GitHub.": "Download only from the official GitHub.",
  "Не принимайте «CubeCheck» в личных сообщениях от неизвестных людей. Для проверки лучше использовать ссылку на официальный Releases.": "Do not accept “CubeCheck” files sent by unknown people in direct messages. For verification, use the official Releases page.",
  "Всё для одной проверки.": "Everything for one check.",
  "CubeCheck объединяет типичные действия администратора в одном интерфейсе и оставляет понятный результат проверки.": "CubeCheck brings the administrator’s typical checking steps into one interface and produces a clear check result.",
  "Проверка процессов, файлов на рабочем столе и в загрузках, каталога": "Checks processes, files on the desktop and in Downloads, the",
  ", автозагрузки и логов Minecraft.": ", startup items, and Minecraft logs.",
  "Файлы и названия": "Files and names",
  "Запущенные процессы": "Running processes",
  "Автозагрузка": "Startup items",
  "Логи Minecraft": "Minecraft logs",
  "Нужные утилиты": "Essential utilities",
  "Everything, Shellbag Analyzer, System Informer, Process Monitor, Autoruns и Process Explorer на Windows; системные аналоги — на Linux и macOS.": "Everything, Shellbag Analyzer, System Informer, Process Monitor, Autoruns, and Process Explorer on Windows; system alternatives on Linux and macOS.",
  "Отчёт": "Report",
  "Результаты проверки можно сохранить в YAML, чтобы не переписывать найденные пути вручную.": "Check results can be saved to YAML so you do not have to copy found paths manually.",
  "Настройки": "Settings",
  "Темы, подсветка, интенсивность, масштаб и автосохранение настроек.": "Themes, highlighting, intensity, scaling, and automatic settings saving.",
  "Установщик": "Installer",
  "Отдельный мастер установки с выбором ярлыков, папки, online/offline‑вариантом и удалением.": "A dedicated setup wizard with shortcut and folder options, online/offline variants, and uninstall support.",
  "Интерфейс CubeCheck.": "CubeCheck interface.",
  "Тёмный интерфейс, отдельные разделы проверки и компонентов, понятный установщик и минимум лишних действий.": "A dark interface, separate check and component sections, a straightforward installer, and minimal unnecessary actions.",
  "Прокрутите горизонтально · Нажмите на скриншот, чтобы открыть крупнее": "Scroll horizontally · Click a screenshot to enlarge it",
  "Проверка — по согласию.": "Checks require consent.",
  "CubeCheck — инструмент, а не повод передавать кому‑либо полный контроль над компьютером. Проверяющий должен объяснить, что запускается и зачем.": "CubeCheck is a tool, not a reason to hand someone full control of your computer. The person performing the check should explain what is being launched and why.",
  "● Безопасная практика": "● Safe practice",
  "Что важно перед проверкой": "What to know before a check",
  "Скачивайте CubeCheck только из официального репозитория и Releases.": "Download CubeCheck only from the official repository and Releases.",
  "Перед запуском проверки пользователь должен понимать, какие каталоги и системные сведения будут просматриваться.": "Before starting a check, the user should understand which folders and system information will be inspected.",
  "Не отправляйте пароли, токены, приватные ключи или другие секреты в отчётах и поддержку.": "Do not send passwords, tokens, private keys, or other secrets in reports or support messages.",
  "После проверки программу можно удалить стандартным способом, предусмотренным проектом.": "After the check, the program can be removed using the project’s standard uninstall method.",
  "Код CubeCheck опубликован под MIT; лицензии сторонних утилит действуют отдельно.": "CubeCheck’s code is published under MIT; third-party utility licenses apply separately.",
  "Коротко:": "In short:",
  "CubeCheck создан, чтобы ускорить проверку, а не давать кому-либо скрытый доступ к вашему ПК. Если что-то непонятно — сначала спросите проверяющего, что именно будет открываться и зачем.": "CubeCheck is designed to speed up checks, not to give anyone hidden access to your PC. If something is unclear, first ask the person performing the check what will be opened and why.",
  "CubeCheck сам удаляет или изменяет файлы?": "Does CubeCheck delete or modify files by itself?",
  "Основная задача программы — проверка и запуск утилит. В интерфейсе есть отдельная функция очистки логов Minecraft, поэтому используйте её только осознанно. Остальные действия лучше выполнять вручную после проверки найденного.": "The program’s main purpose is checking and launching utilities. The interface includes a separate Minecraft log cleanup feature, so use it deliberately. Other actions are better performed manually after reviewing what was found.",
  "Почему CubeCheck безопасен?": "Why is CubeCheck safe?",
  "Исходный код CubeCheck открыт и доступен на GitHub: можно посмотреть, какие действия выполняет программа. Для безопасности скачивайте сборки только из официального репозитория и Releases, а перед запуском проверяйте источник файла.": "CubeCheck’s source code is open and available on GitHub, so you can inspect what the program does. For safety, download builds only from the official repository and Releases, and verify the file source before running it.",
  "Нужна ли установка?": "Is installation required?",
  "Для Windows предусмотрен WPF‑setup. В проекте также есть universal/portable сценарии; конкретный набор зависит от релиза и ОС.": "Windows includes a WPF setup. The project also has universal/portable options; the exact set depends on the release and operating system.",
  "Где получить помощь?": "Where can I get help?",
  "Поддержка доступна в Discord AuraStudio и Telegram AuraStudio. По проблемам с релизом или исходным кодом также можно использовать GitHub.": "Support is available through AuraStudio Discord and Telegram. For release or source-code issues, you can also use GitHub.",
  "Сайт собирает мои данные?": "Does the site collect my data?",
  "Эта версия сайта не содержит форм, собственного трекинга или аналитики и не сохраняет персональные данные. Внешние сервисы GitHub, Discord и Telegram работают по своим правилам.": "This version of the site has no forms, first-party tracking, or analytics and does not store personal data. External services such as GitHub, Discord, and Telegram operate under their own policies.",
  "Discord поддержки ↗": "Support Discord ↗",
  "Авторы:": "Authors:",
  "Перед скачиванием откройте оба Discord‑сервера проекта. На этой статичной версии сайта проверяется открытие обеих ссылок и ваше подтверждение.": "Before downloading, open both project Discord servers. On this static version of the site, the opening of both links and your confirmation are checked.",
  "Основной Discord сервера студии": "Main Discord server of the studio",
  "Открыть Discord ↗": "Open Discord ↗",
  "Discord соавтора проекта": "Project co-author’s Discord",
  "AuraStudio: не открыто": "AuraStudio: not opened",
  "AnProject: не открыто": "AnProject: not opened",
  "AuraStudio: открыто": "AuraStudio: opened",
  "AnProject: открыто": "AnProject: opened",
  "Я открыл(а) оба Discord‑сервера и хочу перейти к официальной загрузке CubeCheck.": "I opened both Discord servers and want to continue to the official CubeCheck download.",
  "Скачать с сайта": "Download from the site",
  "Прямая ссылка на файл релиза без перехода на список релизов.": "A direct link to the release file without opening the releases list.",
  "Прямая загрузка ↗": "Direct download ↗",
  "Скачать с GitHub": "Download from GitHub",
  "Открывает официальный GitHub Releases с выбранной версией.": "Opens the official GitHub Releases page for the selected version.",
  "Открыть Releases ↗": "Open Releases ↗",
  "Отмена": "Cancel",
  "← На главную": "← Back to home",
  "Политика конфиденциальности": "Privacy Policy",
  "Редакция от 26 сентября 2026 года.": "Revision dated September 26, 2026.",
  "текущая версия сайта CubeCheck не содержит регистрации, форм, собственной аналитики или рекламных трекеров. Сайт не сохраняет ваши персональные данные в собственной базе.": "the current CubeCheck website has no registration, forms, first-party analytics, or advertising trackers. The site does not store your personal data in its own database.",
  "1. Внешние сервисы": "1. External services",
  "Сайт содержит ссылки на GitHub, Discord и Telegram. После перехода на эти ресурсы обработка данных регулируется правилами соответствующих сервисов.": "The site contains links to GitHub, Discord, and Telegram. After you follow those links, data processing is governed by the policies of the respective services.",
  "2. Cookies и аналитика": "2. Cookies and analytics",
  "В текущей версии сайта собственные cookies и аналитические системы не используются. Если они появятся позже, политика должна быть обновлена до начала такого сбора.": "The current version of the site does not use first-party cookies or analytics systems. If they are added later, this policy should be updated before such collection begins.",
  "3. Программа CubeCheck": "3. CubeCheck application",
  "CubeCheck работает с локальными файлами и системной информацией в рамках функций проверки. Проверка должна проводиться только с согласия владельца устройства.": "CubeCheck works with local files and system information as part of its checking features. A check should only be performed with the device owner’s consent.",
  "4. Обращения": "4. Contact",
  "По вопросам проекта используйте официальные каналы AuraStudio и AnProject, указанные на главной странице сайта.": "For project questions, use the official AuraStudio and AnProject channels listed on the home page.",
  "Условия использования и лицензии": "Terms of Use and Licenses",
  "CubeCheck — open‑source инструмент для помощи при проверке Minecraft‑клиентов. Используя сайт или программу, пользователь сам отвечает за законность и корректность проверки конкретного устройства.": "CubeCheck is an open-source tool designed to assist with checking Minecraft clients. By using the site or program, the user is responsible for ensuring that the check of a specific device is lawful and appropriate.",
  "1. Согласие владельца устройства": "1. Device owner consent",
  "Проверку следует проводить только с явного разрешения владельца компьютера. Не используйте CubeCheck для доступа к чужому устройству, аккаунтам и секретам вне цели согласованной проверки.": "A check should only be performed with the computer owner’s explicit permission. Do not use CubeCheck to access another person’s device, accounts, or secrets beyond the scope of the agreed check.",
  "2. Официальные файлы": "2. Official files",
  "Загружайте программу только из официального GitHub‑репозитория CubeCheck и страницы Releases. Файлы из сторонних источников проект не подтверждает.": "Download the program only from the official CubeCheck GitHub repository and Releases page. The project does not verify files from third-party sources.",
  "Исходный код CubeCheck распространяется по лицензии MIT. Полный текст лицензии опубликован в файле": "CubeCheck source code is distributed under the MIT License. The full license text is published in the",
  "официального репозитория.": "file in the official repository.",
  "4. Сторонние утилиты": "4. Third-party utilities",
  "Everything, Sysinternals, System Informer, Shellbag Analyzer и другие сторонние программы принадлежат своим разработчикам и регулируются собственными лицензиями. MIT‑лицензия CubeCheck на них не распространяется.": "Everything, Sysinternals, System Informer, Shellbag Analyzer, and other third-party programs belong to their respective developers and are governed by their own licenses. CubeCheck’s MIT License does not apply to them.",
  "5. Ограничение гарантий": "5. Disclaimer of warranties",
  "Автоматическая проверка не является безошибочным доказательством наличия или отсутствия читов. Найденные элементы должны оцениваться человеком в контексте проверки.": "An automated check is not infallible proof that cheats are present or absent. Any findings should be reviewed by a person in the context of the check.",
  "Русский": "Russian",
  "Английский": "English",
  "Язык": "Language"
};
  const RU = {
  "Minecraft check utility": "Утилита проверки Minecraft",
  "Open source · MIT License": "Открытый код · MIT-лицензия",
  "Open source": "Открытый код",
  "Download": "Скачать",
  "Public repository · MIT": "Публичный репозиторий · MIT",
  "Repository/\n├── src/         — Core & API\n├── crates/      — Universal launcher\n├── assets/      — Resources & configuration\n├── scripts/     — Build scripts\n├── ui/          — Rust / egui interface\n├── build.bat    — Windows build\n├── build.sh     — Linux / macOS build\n├── README.md    — Documentation\n└── LICENSE.md   — MIT License": "Репозиторий/\n├── src/         — Ядро и API\n├── crates/      — Универсальный launcher\n├── assets/      — Ресурсы и конфигурация\n├── scripts/     — Скрипты сборки\n├── ui/          — Интерфейс Rust / egui\n├── build.bat    — Сборка Windows\n├── build.sh     — Сборка Linux / macOS\n├── README.md    — Документация\n└── LICENSE.md   — MIT-лицензия",
  "Repository ↗": "Репозиторий ↗",
  "Online": "Онлайн",
  "Offline": "Офлайн",
  "Windows 10/11 x64 · setup.exe · Online / Offline": "Windows 10/11 x64 · setup.exe · Онлайн / Офлайн",
  ".run installer · Online / Offline": ".run установщик · Онлайн / Офлайн",
  ".run installer · Online / Offline · README при необходимости": ".run установщик · Онлайн / Офлайн · README при необходимости",
  "Capabilities": "Возможности",
  "Interface": "Интерфейс",
  "Safety & Support": "Безопасность и поддержка",
  "Privacy": "Конфиденциальность",
  "Terms & Licenses": "Условия и лицензии",
  "3. MIT License": "3. MIT-лицензия",
  "CubeCheck — Minecraft Check Utility": "CubeCheck — утилита проверки Minecraft",
  "CubeCheck — Privacy": "CubeCheck — Конфиденциальность",
  "CubeCheck — Terms & Licenses": "CubeCheck — Условия и лицензии"
};
  const ATTR_EN = {
  "Открыть навигацию": "Open navigation",
  "Скачать": "Download",
  "Навигация": "Navigation",
  "Ознакомление": "Overview",
  "Возможности": "Features",
  "Интерфейс": "Interface",
  "Безопасность": "Safety",
  "Интерфейс CubeCheck — список утилит": "CubeCheck interface — utility list",
  "Лицензия в установщике CubeCheck": "CubeCheck installer license",
  "Завершение установки CubeCheck": "CubeCheck installation completion",
  "Раздел утилит CubeCheck": "CubeCheck utilities section",
  "Автопроверка CubeCheck": "CubeCheck auto-check",
  "Сохранение отчёта CubeCheck": "Saving a CubeCheck report",
  "Компоненты CubeCheck": "CubeCheck components",
  "Настройки CubeCheck": "CubeCheck settings",
  "Информация о CubeCheck": "CubeCheck information",
  "Закрыть": "Close",
  "Скриншот CubeCheck крупным планом": "Enlarged CubeCheck screenshot",
  "CubeCheck — open-source проверка компьютера на известные признаки читов Minecraft для Windows, Linux и macOS.": "CubeCheck — an open-source utility for checking a computer for known signs of Minecraft cheats on Windows, Linux, and macOS.",
  "Выбрать язык": "Choose language"
};
  const STORAGE_KEY = 'cubecheck-language';
  let current = 'ru';
  try { current = localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'ru'; } catch (_) {}
  const documentTitleKey = document.title;
  const textNodes = [];
  const attrNodes = [];

  function rememberNodes() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!node.parentElement || ['SCRIPT','STYLE'].includes(node.parentElement.tagName)) continue;
      const raw = node.nodeValue;
      const m = raw.match(/^(\s*)([\s\S]*?)(\s*)$/);
      if (!m || !m[2]) continue;
      node.__i18n = { before:m[1], key:m[2], after:m[3] };
      textNodes.push(node);
    }
    document.querySelectorAll('*').forEach(el => {
      ['aria-label','title','alt','content'].forEach(attr => {
        if (!el.hasAttribute(attr)) return;
        const value = el.getAttribute(attr);
        if (!value) return;
        attrNodes.push({el, attr, key:value});
      });
    });
  }

  function textFor(key, lang=current) {
    if (lang === 'en') return EN[key] || key;
    return RU[key] || key;
  }

  function attrFor(key, lang=current) {
    if (lang === 'en') return ATTR_EN[key] || EN[key] || key;
    return RU[key] || key;
  }

  function optionName(key, lang=current) {
    if (lang === 'ru') return key.replace(' Offline', ' Офлайн');
    return key;
  }

  function render(lang=current) {
    current = lang === 'en' ? 'en' : 'ru';
    document.documentElement.lang = current;
    document.title = textFor(documentTitleKey, current);
    textNodes.forEach(node => {
      if (!node.isConnected || !node.__i18n) return;
      const d = node.__i18n;
      node.nodeValue = d.before + textFor(d.key, current) + d.after;
    });
    attrNodes.forEach(item => {
      if (item.el.isConnected) item.el.setAttribute(item.attr, attrFor(item.key, current));
    });
    document.querySelectorAll('.lang-current').forEach(el => el.textContent = current.toUpperCase());
    document.querySelectorAll('.lang-option').forEach(btn => {
      const active = btn.dataset.lang === current;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-checked', String(active));
    });
    document.dispatchEvent(new CustomEvent('cubecheck:languagechange', {detail:{language:current}}));
  }

  function setLanguage(lang, animate=true) {
    const next = lang === 'en' ? 'en' : 'ru';
    try { localStorage.setItem(STORAGE_KEY, next); } catch (_) {}
    if (!animate || next === current) { render(next); return; }
    document.body.classList.add('lang-changing');
    setTimeout(() => {
      render(next);
      setTimeout(() => document.body.classList.remove('lang-changing'), 130);
    }, 110);
  }

  function closeMenus(except=null) {
    document.querySelectorAll('.language-switcher.open').forEach(sw => {
      if (sw === except) return;
      sw.classList.remove('open');
      sw.querySelector('.lang-trigger')?.setAttribute('aria-expanded','false');
    });
  }

  function setupSwitchers() {
    document.querySelectorAll('.language-switcher').forEach(sw => {
      const trigger = sw.querySelector('.lang-trigger');
      trigger?.addEventListener('click', e => {
        e.stopPropagation();
        const open = !sw.classList.contains('open');
        closeMenus(sw);
        sw.classList.toggle('open', open);
        trigger.setAttribute('aria-expanded', String(open));
      });
      sw.querySelectorAll('.lang-option').forEach(btn => btn.addEventListener('click', e => {
        e.stopPropagation();
        const lang = btn.dataset.lang;
        sw.classList.remove('open');
        trigger?.setAttribute('aria-expanded','false');
        setLanguage(lang, true);
      }));
    });
    document.addEventListener('click', () => closeMenus());
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenus(); });
  }

  window.CubeI18n = {
    get language() { return current; },
    t: textFor,
    optionName,
    setLanguage,
    render
  };

  document.addEventListener('DOMContentLoaded', () => {
    rememberNodes();
    setupSwitchers();
    render(current);
  });
})();
