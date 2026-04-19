const homeUI = (() => {
  const LS_LANG_KEY = "aerosolve_lang";
  const LS_THEME_KEY = "aerosolve_theme";

  const translations = {
    uk: {
      title: "SGM SCION - Aerosolve",
      "nav.product": "Продукт",
      "nav.cta": "Зв'язатися",
      "sideNav.product": "Продукт",
      "sideNav.gui": "GUI",
      "sideNav.architecture": "Архітектура оборони",
      "sideNav.projects": "Наші розробки",
      "sideNav.contact": "Контакт",
      "slides.s1.title": "SGM «SCION»",
      "slides.s1.titleHtml": "<span class=\"ref-title-accent\">Small Guided Missile</span><br>SGM «SCION»",
      "slides.s1.p1": "SGM «Scion» — це керована ракета на базі серійної платформи Hydra 70, призначена для масового застосування проти малогабаритних повітряних цілей.",
      "slides.s1.p2": "Основний підхід — використання існуючих ракетних платформ з додаванням модуля управління, що дозволяє швидко перейти від некерованого озброєння до керованого без зміни виробничої бази.",
      "slides.s1.p3": "Проект орієнтований на створення компактного та масштабованого рішення, яке може бути розгорнуто у складі розподіленого комплексу з мінімальними вимогами до інфраструктури та персоналу.",
      "slides.s2.title": "Проблема",
      "slides.s2.titleHtml": "<span class=\"ref-title-accent\">Проблема</span>",
      "slides.s2.p1": "Сучасні системи протидії БПЛА характеризуються високою вартістю однієї одиниці ураження та обмеженою масштабованістю.",
      "slides.s2.p2": "При цьому цілі, такі як дрони типу Shahed, мають істотно нижчу вартість, що призводить до економічно неефективного використання класичних ракетних рішень.",
      "slides.s2.p3": "Крім того, багато систем вимагають складної інфраструктури, тривалого розгортання та значної кількості операторів, що знижує їхню застосовність в умовах масових атак.",
      "slides.s2.p4": "У результаті виникає потреба у простому, дешевому та швидко масштабованому засобі ураження повітряних цілей.",
      "slides.s3.title": "Рішення",
      "slides.s3.titleHtml": "<span class=\"ref-title-accent\">Рішення</span>",
      "slides.s3.p1": "SGM «Scion» реалізує модернізацію стандартної ракети Hydra 70 за рахунок встановлення модуля керування та впровадження комбінованої системи наведення.",
      "slides.s3.list1": "маса ~12 кг",
      "slides.s3.list2": "довжина ~1,6 м",
      "slides.s3.list3": "діаметр 70 мм",
      "slides.s3.list4": "швидкість 200 м/с на маршовій ділянці",
      "slides.s3.list5": "час польоту ~20 секунд",
      "slides.s3.p2": "Ракета працює за двоступеневою схемою: на маршовій ділянці використовується координатне наведення, на фінальній — автономне наведення з використанням оптичного та інфрачервоного каналів.",
      "slides.s3.p3": "Перед запуском ракета отримує параметри цілі, у польоті можлива корекція траєкторії, а на фінальному відрізку система працює автономно без участі оператора.",
      "slides.s4.title": "Модуль наведення",
      "slides.s4.titleHtml": "<span class=\"ref-title-accent\">Модуль</span> наведення",
      "slides.s4.p1": "Модуль наведення являє собою компактний блок, що встановлюється на стандартну ракету Hydra 70 без зміни її базової конструкції.",
      "slides.s4.p2": "Модуль забезпечує прийом даних перед запуском, керування траєкторією на маршовій ділянці та перехід до автономного наведення після захоплення цілі.",
      "slides.s4.p3": "Конструкція модуля орієнтована на серійне виробництво, просту інтеграцію та сумісність з існуючими ракетними платформами.",
      "slides.s5.title": "Застосування",
      "slides.s5.titleHtml": "<span class=\"ref-title-accent\">Застосування</span>",
      "slides.s5.p1": "Система призначена для ураження малогабаритних повітряних цілей на відстанях до 20 км при мінімальній вартості застосування.",
      "slides.s5.list1": "наземні платформи.",
      "slides.s5.list2": "повітряні платформи.",
      "slides.s5.list3": "морські безпілотні системи.",
      "slides.s5.p2": "Використання серійних компонентів та існуючих ракетних платформ дозволяє знизити вартість однієї ракети до ~10 000 USD.",
      "sections.system.title": "Система управління «FourTwo»",
      "sections.system.titleHtml": "Система управління <span class=\"ref-title-accent\">«FourTwo»</span>",
      "sections.system.p1": "Система управління FourTwo — це програмне забезпечення власної розробки, що забезпечує контроль запуска, взаємодію з ракетами та моніторинг їхнього стану в режимі реального часу. Вона об’єднує функції управління, наведення та аналізу телеметрії, дозволяючи оператору контролювати повний цикл застосування — від отримання даних про ціль до її ураження.",
      "sections.system.list1": "відображення карти з цілями та зонами покриття",
      "sections.system.list2": "отримання та обробка даних про ціль",
      "sections.system.list3": "вибір пускової установки та управління пуском",
      "sections.system.list4": "передача параметрів на ракету перед стартом",
      "sections.system.p2": "У процесі польоту система відображає телеметрію ракети в реальному часі:",
      "sections.system.list5": "положення в просторі",
      "sections.system.list6": "швидкість та перевантаження",
      "sections.system.list7": "кути орієнтації та траєкторію",
      "sections.system.list8": "стан систем та режими роботи",
      "sections.system.p3": "Система забезпечує постійний зв'язок з ракетою на маршовій ділянці та дозволяє відстежувати її поведінку до моменту переходу на автономне наведення.",
      "sections.system.p4": "FourTwo розрахована на одночасну роботу з декількома пусковими установками та забезпечує централізоване керування всією системою з однієї наземної станції.",
      "sections.architecture.title": "Архітектура оборони",
      "sections.architecture.titleHtml": "Архітектура <span class=\"ref-title-accent\">оборони</span>",
      "sections.architecture.p1": "Система являє собою автономний модульний ракетний комплекс, орієнтований на масштабоване розгортання та об'єктову протиповітряну оборону.",
      "sections.architecture.p2": "Рішення постачається як єдиний комплекс «під ключ», що включає всі елементи для виявлення, супроводу та ураження цілей без необхідності глибокої інтеграції зі сторонніми системами.",
      "sections.architecture.list1": "керовані ракети SGM «Scion»",
      "sections.architecture.list2": "розподілені пускові установки",
      "sections.architecture.list3": "наземну станцію управління",
      "sections.architecture.p3": "Пускові установки розміщуються на території об'єкта, забезпечуючи покриття зони, що захищається. Усі установки об'єднані в мережу та керуються однією наземною станцією, розташованою на безпечній відстані.",
      "sections.architecture.p4": "На маршовій ділянці ракета отримує координати цілі, її швидкість і відстань до пускової установки та рухається по розрахунковій траєкторії з корекцією. Після захоплення цілі система переходить в автономний режим. Підрив відбувається на малій відстані від цілі.",
      "sections.architecture.p5": "Комплекс вимагає мінімального персоналу:",
      "sections.architecture.list4": "2 оператори",
      "sections.architecture.list5": "2 особи обслуговування",
      "sections.architecture.p6": "Використання серійних компонентів та розподіленої архітектури забезпечує швидке масштабування та адаптацію під завдання об'єктної оборони.",
      "projects.title": "Наші розробки",
      "projects.titleHtml": "Наші <span class=\"ref-title-accent\">розробки</span>",
      "projects.otherTitle": "Інші розробки",
      "projects.otherTitleHtml": "Інші <span class=\"ref-title-accent\">розробки</span>",
      "projects.other1": "Розробка механічних систем і деталей машин, включаючи трьохступеневі редуктори, зварні та гнуті конструкції, з практичним досвідом виробництва: точіння, фрезерування, 3D обробка. Орієнтація на міцність, надійність і довговічність конструкцій.",
      "projects.other2": "Створення інженерного програмного забезпечення для термодинамічних розрахунків ракетних двигунів, оптимізації розкрою матеріалів і підвищення ефективності виробничих процесів.",
      "projects.other3": "Участь у NDA-проєктах у сфері безпілотних систем та суміжних оборонних розробках, деталі яких обмежені умовами нерозголошення.",
      "portfolio.modalLabel": "Проєкт",
      "portfolio.p1.title": "Метеорологічна зондувальна ракета",
      "portfolio.p1.titleHtml": "Метеорологічна <span class=\"ref-title-accent\">зондувальна ракета</span>",
      "portfolio.p1.summary": "Зондувальна ракета для цивільних атмосферних досліджень із розрахунковою висотою польоту близько 3 км.",
      "portfolio.p1.body1": "Розробка зондувальної ракети для цивільних задач атмосферних досліджень з розрахунковою висотою польоту близько 3 км. Проєкт виконано в рамках СКБ-4 — студентського конструкторського бюро, створеного для розробки аерокосмічних систем, як опрацювання базової архітектури ракети.",
      "portfolio.p1.body2": "У межах роботи виконано: розробку конструкції корпусу, інтеграцію двигунної установки, теплові розрахунки та підготовку конструктивних рішень для виготовлення прототипу. Окрема увага приділялась узгодженню елементів системи та підготовці платформи до подальшого розвитку.",
      "portfolio.p1.body3": "Проведено експериментальні випробування зразків твердого палива та попередні тести елементів двигунної установки.",
      "portfolio.p2.title": "Рідинний ракетний двигун",
      "portfolio.p2.titleHtml": "<span class=\"ref-title-accent\">Рідинний</span> ракетний двигун",
      "portfolio.p2.summary": "Турбонасосний рідинний двигун із тиском у камері близько 50 бар і тягою близько 5 тонн.",
      "portfolio.p2.body1": "Розробка рідинного ракетного двигуна з турбонасосною подачею компонентів палива. Двигун розрахований на тиск у камері близько 50 бар і тягу близько 5 тонн із використанням гіперголічної пари Tonka TG-02 та азотної кислоти.",
      "portfolio.p2.body2": "Виконано: розрахунок і проєктування камери згоряння, розробку турбонасосного агрегату з витратою близько 16 кг/с, а також компоновку повної двигунної установки, включаючи баки, регулятори тиску та систему подачі.",
      "portfolio.p2.body3": "У матеріалах проєкту представлені CAD-моделі, збірки та попередні випробування малого двигуна.",
      "portfolio.p3.title": "Тактичний БПЛА літакового типу",
      "portfolio.p3.titleHtml": "Тактичний <span class=\"ref-title-accent\">БПЛА літакового типу</span>",
      "portfolio.p3.summary": "Компактний літаковий БПЛА для розвідувальних і ударних задач на тактичній глибині.",
      "portfolio.p3.body1": "Розробка малогабаритного безпілотного літального апарата літакового типу для виконання розвідувальних і ударних задач на тактичній глибині.",
      "portfolio.p3.body2": "Апарат відповідає класу малих БПЛА за стандартами НАТО та розрахований на дальність до 50 км. Час польоту — до 1 години, максимальна швидкість — до 180 км/год за рахунок електричної силової установки.",
      "portfolio.p3.body3": "Виконано проєктування планера, підбір силової установки та загальну компоновку системи з урахуванням вимог до дальності та стійкості польоту.",
      "portfolio.p4.title": "Ударний мультикоптер підвищеної вантажопідйомності",
      "portfolio.p4.titleHtml": "Ударний <span class=\"ref-title-accent\">мультикоптер підвищеної вантажопідйомності</span>",
      "portfolio.p4.summary": "Мультикоптерна ударна платформа з корисним навантаженням до 12 кг і дальністю застосування до 10 км.",
      "portfolio.p4.body1": "Розробка безпілотної мультикоптерної платформи з нуля для виконання ударних задач і доставки корисного навантаження.",
      "portfolio.p4.body2": "У межах проєкту спроєктовано та реалізовано власну раму, що забезпечує вантажопідйомність до 12 кг і дальність застосування до 10 км. Особливу увагу приділено міцності конструкції, стійкості під навантаженням і загальній надійності.",
      "portfolio.p4.body3": "Проєкт орієнтований на створення простої та ефективної ударної платформи з можливістю масштабування.",
      "portfolio.p5.title": "БПЛА контейнерного запуску",
      "portfolio.p5.titleHtml": "<span class=\"ref-title-accent\">БПЛА</span> контейнерного запуску",
      "portfolio.p5.summary": "Компактний БПЛА для запуску з транспортно-пускового контейнера з дальністю застосування до 12 км.",
      "portfolio.p5.body1": "Розробка компактного безпілотного апарата, призначеного для запуску з транспортно-пускового контейнера.",
      "portfolio.p5.body2": "Апарат оснащений механізмом розкладання променів після виходу з контейнера, що забезпечує компактність під час зберігання і транспортування. Дальність застосування — до 12 км, маса бойової частини — до 1.5 кг.",
      "portfolio.p5.body3": "Виконано розробку конструкції, механізму розкладання та адаптацію платформи під вимоги контейнерного запуску.",
      "contact.title": "Контакт",
      "contact.titleHtml": "<span class=\"ref-title-accent\">Контакт</span>",
      "contact.infoTitle": "Прямий зв'язок",
      "contact.formTitle": "Форма запиту",
      "contact.description": "Відкриті до діалогу з інвесторами, грантовими організаціями та партнерами.",
      "contact.locationLabel": "Локація",
      "contact.locationValue": "Київ, Україна",
      "form.name": "Ім'я",
      "form.nameHtml": "Ім'я <em>обов'язково</em>",
      "form.namePlaceholder": "Ваше ім'я",
      "form.company": "Компанія",
      "form.companyHtml": "Компанія <em>не обов'язково</em>",
      "form.companyPlaceholder": "Компанія / Фонд",
      "form.emailHtml": "Email <em>обов'язково</em>",
      "form.phone": "Телефон",
      "form.phoneHtml": "Телефон <em>не обов'язково</em>",
      "form.message": "Повідомлення",
      "form.messageHtml": "Повідомлення <em>обов'язково, мінімум 100 символів</em>",
      "form.messagePlaceholder": "Коротко опишіть ваш запит",
      "form.requiredInvalid": "Будь ласка, заповніть це поле.",
      "form.emailInvalid": "Будь ласка, введіть коректний email.",
      "form.messageInvalid": "Будь ласка, введіть щонайменше 100 символів.",
      "form.submit": "Надіслати",
      "form.submitSending": "Надсилання...",
      "form.submitSuccess": "Повідомлення успішно надіслано.",
      "form.submitError": "Не вдалося надіслати повідомлення. Спробуйте ще раз.",
      "form.submitFix": "Будь ласка, перевірте форму та виправте помилки."
    },
    en: {
      title: "SGM SCION - Aerosolve",
      "nav.product": "Product",
      "nav.cta": "Contact Us",
      "sideNav.product": "Product",
      "sideNav.gui": "GUI",
      "sideNav.architecture": "Defense Architecture",
      "sideNav.projects": "Our Developments",
      "sideNav.contact": "Contact",
      "slides.s1.title": "SGM “SCION”",
      "slides.s1.titleHtml": "<span class=\"ref-title-accent\">Small Guided Missile</span><br>SGM “SCION”",
      "slides.s1.p1": "The SGM “Scion” is a guided missile based on the production-ready Hydra 70 platform, designed for mass deployment against small aerial targets.",
      "slides.s1.p2": "The main approach involves using existing missile platforms with the addition of a guidance module, enabling a rapid transition from unguided to guided weapons without altering the production base.",
      "slides.s1.p3": "The project is focused on creating a compact and scalable solution that can be deployed as part of a distributed system with minimal infrastructure and personnel requirements.",
      "slides.s2.title": "The Problem",
      "slides.s2.titleHtml": "The <span class=\"ref-title-accent\">Problem</span>",
      "slides.s2.p1": "Modern UAV countermeasure systems are characterised by a high cost per target and limited scalability.",
      "slides.s2.p2": "At the same time, targets such as Shahed-type drones have a significantly lower cost, leading to the economically inefficient use of conventional missile solutions.",
      "slides.s2.p3": "Furthermore, many systems require complex infrastructure, lengthy deployment times and a significant number of operators, which reduces their applicability in the event of mass attacks.",
      "slides.s2.p4": "Consequently, there is a need for a simple, inexpensive and rapidly scalable means of engaging aerial targets.",
      "slides.s3.title": "Solution",
      "slides.s3.titleHtml": "<span class=\"ref-title-accent\">Solution</span>",
      "slides.s3.p1": "The SGM “Scion” modernises the standard Hydra 70 rocket by installing a control module and implementing a combined guidance system.",
      "slides.s3.list1": "weight ~12 kg",
      "slides.s3.list2": "length ~1.6 m",
      "slides.s3.list3": "diameter 70 mm",
      "slides.s3.list4": "Speed: 200 m/s during the cruise phase",
      "slides.s3.list5": "Flight time: ~20 seconds",
      "slides.s3.p2": "The missile operates on a two-stage scheme: coordinate guidance is used during the cruise phase, whilst autonomous guidance using optical and infrared channels is employed during the terminal phase.",
      "slides.s3.p3": "Prior to launch, the missile receives target parameters; trajectory correction is possible during flight, and in the terminal phase the system operates autonomously without operator intervention.",
      "slides.s4.title": "Guidance module",
      "slides.s4.titleHtml": "<span class=\"ref-title-accent\">Guidance</span> module",
      "slides.s4.p1": "The guidance module is a compact unit that can be mounted on a standard Hydra 70 missile without altering its basic design.",
      "slides.s4.p2": "The module provides data reception prior to launch, trajectory control during the cruise phase, and a transition to autonomous guidance after target acquisition.",
      "slides.s4.p3": "The module’s design is geared towards mass production, simple integration and compatibility with existing missile platforms.",
      "slides.s5.title": "Application",
      "slides.s5.titleHtml": "<span class=\"ref-title-accent\">Application</span>",
      "slides.s5.p1": "The system is designed to engage small-sized aerial targets at ranges of up to 20 km at minimal cost of operation.",
      "slides.s5.list1": "ground-based platforms.",
      "slides.s5.list2": "airborne platforms.",
      "slides.s5.list3": "maritime unmanned systems.",
      "slides.s5.p2": "The use of off-the-shelf components and existing missile platforms reduces the cost of a single missile to approximately USD 10,000.",
      "sections.system.title": "The ‘FourTwo’ Control System",
      "sections.system.titleHtml": "The <span class=\"ref-title-accent\">‘FourTwo’ Control System</span>",
      "sections.system.p1": "The FourTwo control system is proprietary in-house developed software that provides launch control, communication with missiles and real-time monitoring of their status. It combines control, guidance and telemetry analysis functions, enabling the operator to oversee the entire mission cycle—from receiving target data to engaging the target.",
      "sections.system.list1": "display of a map showing targets and coverage areas",
      "sections.system.list2": "acquisition and processing of target data",
      "sections.system.list3": "selection of the launcher and launch control",
      "sections.system.list4": "transmission of parameters to the missile prior to launch",
      "sections.system.p2": "During flight, the system displays real-time missile telemetry:",
      "sections.system.list5": "spatial position",
      "sections.system.list6": "velocity and g-forces",
      "sections.system.list7": "orientation angles and trajectory",
      "sections.system.list8": "system status and operating modes",
      "sections.system.p3": "The system maintains constant communication with the missile during the cruise phase and allows its behaviour to be tracked until the transition to autonomous guidance.",
      "sections.system.p4": "FourTwo is designed to operate simultaneously with multiple launchers and provides centralised control of the entire system from a single ground station.",
      "sections.architecture.title": "Defense Architecture",
      "sections.architecture.titleHtml": "Defense <span class=\"ref-title-accent\">Architecture</span>",
      "sections.architecture.p1": "The system is an autonomous, modular missile system designed for scalable deployment and site-based air defence.",
      "sections.architecture.p2": "The solution is supplied as a complete turnkey system, comprising all the components required for target detection, tracking and engagement, without the need for extensive integration with third-party systems.",
      "sections.architecture.list1": "SGM “Scion” guided missiles",
      "sections.architecture.list2": "distributed launchers",
      "sections.architecture.list3": "a ground control station",
      "sections.architecture.p3": "The launchers are deployed across the site, providing coverage of the protected area. All launchers are networked and controlled by a single ground control station located at a safe distance.",
      "sections.architecture.p4": "During the flight phase, the missile receives the target’s coordinates, its speed and the distance to the launcher, and moves along a calculated trajectory with corrections. Once the target is locked on, the system switches to autonomous mode. The missile detonates at close range from the target.",
      "sections.architecture.p5": "The system requires minimal personnel:",
      "sections.architecture.list4": "2 operators",
      "sections.architecture.list5": "2 maintenance personnel",
      "sections.architecture.p6": "The use of off-the-shelf components and a distributed architecture ensures rapid scaling and adaptation to site defence tasks.",
      "projects.title": "Our Developments",
      "projects.titleHtml": "Our <span class=\"ref-title-accent\">Developments</span>",
      "projects.otherTitle": "Other Developments",
      "projects.otherTitleHtml": "Other <span class=\"ref-title-accent\">Developments</span>",
      "projects.other1": "Development of mechanical systems and machine components, including three-stage gearboxes, welded and bent structures, with hands-on manufacturing experience: turning, milling, 3D machining. Focus on strength, reliability, and durability.",
      "projects.other2": "Development of engineering software for thermodynamic analysis of rocket engines, material cutting optimization, and improving efficiency of industrial processes.",
      "projects.other3": "Participation in NDA projects in the field of UAV systems and related defense developments, with details restricted due to confidentiality agreements.",
      "portfolio.modalLabel": "Project",
      "portfolio.p1.title": "Meteorological Sounding Rocket",
      "portfolio.p1.titleHtml": "Meteorological <span class=\"ref-title-accent\">Sounding Rocket</span>",
      "portfolio.p1.summary": "Sounding rocket for civilian atmospheric research missions with a target altitude of approximately 3 km.",
      "portfolio.p1.body1": "Development of a sounding rocket for civilian atmospheric research missions with a target altitude of approximately 3 km. The project was carried out within SKB-4 — a student design bureau focused on aerospace system development — as a study of the rocket’s base architecture.",
      "portfolio.p1.body2": "The work included airframe design, propulsion system integration, thermal analysis, and development of structural solutions for prototype manufacturing. Particular attention was given to system integration and preparation of the platform for further development.",
      "portfolio.p1.body3": "Experimental tests of solid propellant samples and preliminary testing of propulsion components were conducted.",
      "portfolio.p2.title": "Liquid Rocket Engine",
      "portfolio.p2.titleHtml": "Liquid <span class=\"ref-title-accent\">Rocket Engine</span>",
      "portfolio.p2.summary": "Turbopump-fed liquid rocket engine designed for approximately 50 bar chamber pressure and about 5 tons of thrust.",
      "portfolio.p2.body1": "Development of a liquid rocket engine with turbopump-fed propellant supply. The engine is designed for chamber pressure of approximately 50 bar and thrust of around 5 tons, using the hypergolic propellant pair of Tonka TG-02 fuel and nitric acid oxidizer.",
      "portfolio.p2.body2": "The work included calculation and design of the combustion chamber, development of a turbopump unit with a mass flow of approximately 16 kg/s, and layout of the complete propulsion system, including tanks, pressure regulators, and the feed system.",
      "portfolio.p2.body3": "Project materials include CAD models, assemblies, and preliminary tests of a small engine.",
      "portfolio.p3.title": "Tactical Fixed-Wing UAV",
      "portfolio.p3.titleHtml": "Tactical <span class=\"ref-title-accent\">Fixed-Wing UAV</span>",
      "portfolio.p3.summary": "Compact fixed-wing UAV for reconnaissance and strike missions at tactical range.",
      "portfolio.p3.body1": "Development of a compact fixed-wing unmanned aerial vehicle for reconnaissance and strike missions at tactical range.",
      "portfolio.p3.body2": "The platform fits within the small UAV class by NATO standards and is designed for operational ranges up to 50 km. Endurance is up to 1 hour, with a maximum speed of approximately 180 km/h using an electric propulsion system.",
      "portfolio.p3.body3": "The work included airframe design, propulsion system selection, and overall system layout optimized for range and flight stability.",
      "portfolio.p4.title": "Heavy-Lift Strike Multicopter",
      "portfolio.p4.titleHtml": "Heavy-Lift <span class=\"ref-title-accent\">Strike Multicopter</span>",
      "portfolio.p4.summary": "Strike multicopter platform with payload capacity up to 12 kg and operational range up to 10 km.",
      "portfolio.p4.body1": "Development of a multicopter UAV platform from scratch for strike missions and payload delivery.",
      "portfolio.p4.body2": "A custom frame was designed and implemented to support payloads up to 12 kg with an operational range of up to 10 km. The project focused on structural strength, load stability, and overall system reliability.",
      "portfolio.p4.body3": "The platform is designed as a scalable and efficient strike solution.",
      "portfolio.p5.title": "Container-Launched UAV",
      "portfolio.p5.titleHtml": "Container-Launched <span class=\"ref-title-accent\">UAV</span>",
      "portfolio.p5.summary": "Compact UAV designed for launch from a transport-launch container with operational range up to 12 km.",
      "portfolio.p5.body1": "Development of a compact UAV designed for launch from a transport-launch container.",
      "portfolio.p5.body2": "The system features a folding arm deployment mechanism that enables compact storage and automatic deployment after launch. Operational range is up to 12 km, with a payload capacity of up to 1.5 kg.",
      "portfolio.p5.body3": "The work included structural design, deployment mechanism development, and adaptation of the platform for container-based launch requirements.",
      "contact.title": "Contact",
      "contact.titleHtml": "<span class=\"ref-title-accent\">Contact</span>",
      "contact.infoTitle": "Direct Contact",
      "contact.formTitle": "Send a Message",
      "contact.description": "Open to conversations with investors, grant organizations, and partners.",
      "contact.locationLabel": "Location",
      "contact.locationValue": "Kyiv, Ukraine",
      "form.name": "Name",
      "form.nameHtml": "Name <em>required</em>",
      "form.namePlaceholder": "Your name",
      "form.company": "Company",
      "form.companyHtml": "Company <em>optional</em>",
      "form.companyPlaceholder": "Company / Fund",
      "form.emailHtml": "Email <em>required</em>",
      "form.phone": "Phone",
      "form.phoneHtml": "Phone <em>optional</em>",
      "form.message": "Message",
      "form.messageHtml": "Message <em>required, minimum 100 characters</em>",
      "form.messagePlaceholder": "Briefly describe your request",
      "form.requiredInvalid": "Please fill in this field.",
      "form.emailInvalid": "Please enter a valid email address.",
      "form.messageInvalid": "Please enter at least 100 characters.",
      "form.submit": "Send",
      "form.submitSending": "Sending...",
      "form.submitSuccess": "Message sent successfully.",
      "form.submitError": "Failed to send the message. Please try again.",
      "form.submitFix": "Please check the form and fix the errors."
    }
  };
  function getSavedLang() {
    const saved = localStorage.getItem(LS_LANG_KEY);
    return saved && translations[saved] ? saved : "uk";
  }

  function getSavedTheme() {
    const saved = localStorage.getItem(LS_THEME_KEY);
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function renderLang(lang) {
    const dict = translations[lang];

    document.documentElement.lang = lang;
    document.title = dict.title;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (dict[key]) node.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((node) => {
      const key = node.dataset.i18nHtml;
      if (dict[key]) node.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-placeholder-i18n]").forEach((node) => {
      const key = node.dataset.placeholderI18n;
      if (dict[key]) node.placeholder = dict[key];
    });

    document.querySelectorAll(".ref-lang-switch").forEach((switcher) => {
      switcher.dataset.activeLang = lang;
    });

    document.querySelectorAll(".ref-lang-btn").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.lang === lang);
      button.setAttribute("aria-pressed", button.dataset.lang === lang ? "true" : "false");
    });
  }
  async function applyLang(lang) {
    if (!translations[lang]) return;
    renderLang(lang);
    const header = document.querySelector(".ref-header");
    if (header && window.matchMedia("(max-width: 720px)").matches) {
      header.classList.remove("is-mobile-hidden");
    }
    document.dispatchEvent(new CustomEvent("i18n:change", { detail: { lang } }));

    localStorage.setItem(LS_LANG_KEY, lang);
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(LS_THEME_KEY, theme);
  }

  function ensureZoomBadge() {
    let badge = document.querySelector(".ref-zoom-badge");
    if (badge) return badge;

    badge = document.createElement("div");
    badge.className = "ref-zoom-badge";
    badge.setAttribute("aria-live", "polite");
    badge.innerHTML = `
      <span class="ref-zoom-badge-icon" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="7"></circle>
          <path d="M20 20l-3.6-3.6"></path>
        </svg>
      </span>
      <span class="ref-zoom-badge-value">100%</span>
    `;
    document.body.appendChild(badge);
    return badge;
  }

  function setZoomBadgeVisible(visible) {
    const badge = ensureZoomBadge();
    badge.classList.toggle("is-visible", visible);
  }

  function normalizeZoom(zoom) {
    let nextZoom = Math.min(1.8, Math.max(0.8, zoom));
    if (Math.abs(nextZoom - 1) < 0.051) nextZoom = 1;
    return Number(nextZoom.toFixed(1));
  }

  function applyZoom(zoom, { announce = true } = {}) {
    const nextZoom = normalizeZoom(zoom);
    document.body.style.zoom = String(nextZoom);
    const railScale = 1 / (1 + Math.max(0, nextZoom - 1) * 0.8);
    document.body.style.setProperty("--ref-rail-scale", String(railScale));
    document.body.style.setProperty("--ref-page-zoom", String(nextZoom));
    const badge = ensureZoomBadge();
    const badgeValue = badge.querySelector(".ref-zoom-badge-value");
    if (badgeValue) {
      badgeValue.textContent = `${Math.round(nextZoom * 100)}%`;
    }
    if (announce) {
      setZoomBadgeVisible(true);
    }
    return nextZoom;
  }

  function initProductSlider() {
    const slider = document.querySelector("[data-product-slider]");
    if (!slider) return;

    const mediaTrack = slider.querySelector(".ref-slider-track");
    const copyTrack = slider.querySelector(".ref-copy-slider-track");
    const copyPanel = slider.querySelector(".ref-copy--carousel");
    const dots = Array.from(slider.querySelectorAll(".ref-slider-dot"));
    const arrows = Array.from(slider.querySelectorAll(".ref-slider-arrow"));
    const totalSlides = dots.length;
    let currentIndex = 0;
    let autoplayId = null;
    let isSliderVisible = false;
    let isTextHovered = false;

    if (!mediaTrack || !copyTrack || !totalSlides) return;

    const renderSlider = () => {
      const offset = `translateX(-${currentIndex * 100}%)`;
      mediaTrack.style.transform = offset;
      copyTrack.style.transform = offset;

      dots.forEach((dot, index) => {
        const isActive = index === currentIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
    };

    const clearAutoplay = () => {
      window.clearTimeout(autoplayId);
      autoplayId = null;
    };

    const canAutoplay = () => isSliderVisible && !document.hidden && !isTextHovered;

    const scheduleAutoplay = () => {
      clearAutoplay();
      if (!canAutoplay()) return;

      autoplayId = window.setTimeout(() => {
        goToSlide(currentIndex + 1);
      }, 15000);
    };

    const goToSlide = (nextIndex, shouldResetAutoplay = true) => {
      currentIndex = (nextIndex + totalSlides) % totalSlides;
      renderSlider();
      if (shouldResetAutoplay) scheduleAutoplay();
    };

    arrows.forEach((arrow) => {
      arrow.addEventListener("click", () => {
        goToSlide(currentIndex + Number(arrow.dataset.sliderDir || 0));
      });
    });

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        goToSlide(Number(dot.dataset.slideTo || 0));
      });
    });

    if (copyPanel) {
      copyPanel.addEventListener("pointerenter", (event) => {
        if (event.pointerType && event.pointerType !== "mouse") return;
        isTextHovered = true;
        clearAutoplay();
      });

      copyPanel.addEventListener("pointerleave", (event) => {
        if (event.pointerType && event.pointerType !== "mouse") return;
        isTextHovered = false;
        scheduleAutoplay();
      });
    }

    slider.addEventListener("pointerdown", scheduleAutoplay);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        clearAutoplay();
      } else {
        scheduleAutoplay();
      }
    });

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isSliderVisible = Boolean(entry?.isIntersecting && entry.intersectionRatio >= 0.45);

        if (isSliderVisible) {
          scheduleAutoplay();
        } else {
          clearAutoplay();
        }
      },
      {
        threshold: [0, 0.45, 0.7],
      }
    );

    visibilityObserver.observe(slider);

    renderSlider();
  }

  function initSideRail() {
    const rail = document.querySelector(".ref-side-rail");
    const links = Array.from(document.querySelectorAll(".ref-side-link"));
    const headerTools = document.querySelector(".ref-header-tools");
    const originalParent = rail?.parentElement || null;
    const originalNextSibling = rail?.nextElementSibling || null;
    const compactRailMq = window.matchMedia("(max-width: 1180px), (max-aspect-ratio: 5/4)");
    const resolveSection = (id) => {
      const matches = Array.from(document.querySelectorAll(`[data-side-section="${id}"]`));
      if (!matches.length) return null;

      return (
        matches.find((section) => {
          const styles = window.getComputedStyle(section);
          return styles.display !== "none" && styles.visibility !== "hidden" && section.getClientRects().length > 0;
        }) || matches[0]
      );
    };

    const sections = links
      .map((link) => {
        const id = link.dataset.sideTarget;
        return id ? { id, link } : null;
      })
      .filter(Boolean);

    if (!sections.length) return;

    const headerOffset = 84;
    let ticking = false;
    const phoneRailMq = window.matchMedia("(max-width: 720px)");
    const shouldUseTapRail = () => compactRailMq.matches;

    const getSectionTop = (section) =>
      window.scrollY + section.getBoundingClientRect().top - headerOffset;

    const updateActiveLink = () => {
      const viewportAnchor = window.innerHeight * 0.42;
      let active = sections[0];
      let minDistance = Number.POSITIVE_INFINITY;

      sections.forEach((entry) => {
        const section = resolveSection(entry.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - viewportAnchor);

        if (distance < minDistance) {
          minDistance = distance;
          active = entry;
        }
      });

      links.forEach((link) => {
        link.classList.toggle("is-active", link === active.link);
        if (link === active.link) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });

      ticking = false;
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateActiveLink);
    };

    const syncRailPlacement = () => {
      if (!rail || !headerTools || !originalParent) return;

      const shouldDockInHeader = phoneRailMq.matches;
      document.body.classList.toggle("has-touch-nav", shouldUseTapRail());
      document.body.classList.toggle("has-mobile-rail-in-header", shouldDockInHeader);

      if (shouldDockInHeader) {
        if (rail.parentElement !== headerTools) {
          headerTools.appendChild(rail);
        }
      } else if (rail.parentElement !== originalParent) {
        if (originalNextSibling && originalNextSibling.parentElement === originalParent) {
          originalParent.insertBefore(rail, originalNextSibling);
        } else {
          originalParent.appendChild(rail);
        }
      }
    };

    sections.forEach(({ link, id }) => {
      link.addEventListener("click", (event) => {
        const section = resolveSection(id);
        if (!section) return;

        if (shouldUseTapRail() && rail && !rail.classList.contains("is-touch-open")) {
          event.preventDefault();
          rail.classList.add("is-touch-open");
          return;
        }

        event.preventDefault();

        const targetTop = Math.max(0, getSectionTop(section));
        window.scrollTo({
          top: targetTop,
          behavior: "smooth",
        });

        if (link.hash) {
          window.history.replaceState(null, "", link.hash);
        }

        if (shouldUseTapRail() && rail) {
          rail.classList.remove("is-touch-open");
        }

        window.setTimeout(() => {
          link.blur();
        }, 0);
      });
    });

    if (rail) {
      rail.addEventListener(
        "click",
        (event) => {
          if (!shouldUseTapRail()) return;

          const clickedLink = event.target.closest(".ref-side-link");

          if (!rail.classList.contains("is-touch-open")) {
            event.preventDefault();
            event.stopPropagation();
            rail.classList.add("is-touch-open");
            return;
          }

          if (!clickedLink) {
            event.preventDefault();
            rail.classList.remove("is-touch-open");
          }
        },
        true
      );

      document.addEventListener("pointerdown", (event) => {
        if (!shouldUseTapRail()) return;
        if (!rail.contains(event.target)) {
          rail.classList.remove("is-touch-open");
        }
      });

      window.addEventListener(
        "scroll",
        () => {
          if (phoneRailMq.matches) {
            rail.classList.remove("is-touch-open");
          }
        },
        { passive: true }
      );

      window.addEventListener("resize", () => {
        if (!shouldUseTapRail()) {
          rail.classList.remove("is-touch-open");
        }

        syncRailPlacement();
      });
    }

    if (compactRailMq.addEventListener) {
      compactRailMq.addEventListener("change", syncRailPlacement);
    } else if (compactRailMq.addListener) {
      compactRailMq.addListener(syncRailPlacement);
    }

    if (phoneRailMq.addEventListener) {
      phoneRailMq.addEventListener("change", syncRailPlacement);
    } else if (phoneRailMq.addListener) {
      phoneRailMq.addListener(syncRailPlacement);
    }

    syncRailPlacement();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();
  }

  function initPortfolioModal() {
    const cards = Array.from(document.querySelectorAll(".ref-project-card[data-portfolio]"));
    const modal = document.getElementById("portfolio-modal");
    const backdrop = document.getElementById("pd-backdrop");
    const closeButton = document.getElementById("pd-close");
    const track = document.getElementById("pd-track");
    const controls = document.getElementById("pd-controls");
    const dots = document.getElementById("pd-dots");
    const prevButton = document.getElementById("pd-prev");
    const nextButton = document.getElementById("pd-next");
    const label = document.getElementById("pd-label");
    const title = document.getElementById("pd-title");
    const body = document.getElementById("pd-body");
    const modalBox = modal?.querySelector(".portfolio-modal-box");
    const detailDesc = modal?.querySelector(".portfolio-detail-desc");
    const detailMedia = modal?.querySelector(".portfolio-detail-media");

    if (!cards.length || !modal || !backdrop || !closeButton || !track || !controls || !dots || !prevButton || !nextButton || !label || !title || !body || !modalBox || !detailDesc || !detailMedia) {
      return;
    }

    const portfolioMedia = {
      p1: [
        { type: "image", src: "content/2_sub_roc/sub_roc.jpg", alt: "Sub roc" },
        { type: "video", src: "content/2_sub_roc/sub_l1.mp4", alt: "Sub roc video 1", thumb: "VID 1" },
        { type: "video", src: "content/2_sub_roc/sub_l2.mp4", alt: "Sub roc video 2", thumb: "VID 2" },
        { type: "video", src: "content/2_sub_roc/sub_l3.mp4", alt: "Sub roc video 3", thumb: "VID 3" },
      ],
      p2: [
        { type: "image", src: "content/3_engine/DU.jpg", alt: "DU engine" },
        { type: "image", src: "content/3_engine/Cam.jpg", alt: "Engine cam" },
        { type: "image", src: "content/3_engine/TNA.jpg", alt: "TNA engine" },
        { type: "video", src: "content/3_engine/пуск_1.mp4", alt: "Engine launch", thumb: "VID 1" },
      ],
      p3: [
        { type: "image", src: "content/4_drone1/Matka_v10.jpg", alt: "Matka v10" },
      ],
      p4: [
        { type: "image", src: "content/5_drone2/13inc_frame.jpg", alt: "13 inch frame" },
      ],
      p5: [
        { type: "image", src: "content/6_drone_3/pipe_1.jpg", alt: "Pipe 1" },
        { type: "image", src: "content/6_drone_3/pipe_2.jpg", alt: "Pipe 2" },
        { type: "image", src: "content/6_drone_3/pipe_3.jpg", alt: "Pipe 3" },
      ],
    };

    let activeCard = null;
    let currentSlides = [];
    let currentIndex = 0;

    const imageLightbox = document.createElement("div");
    imageLightbox.className = "portfolio-image-lightbox";
    imageLightbox.setAttribute("aria-hidden", "true");
    imageLightbox.inert = true;
    imageLightbox.innerHTML = `
      <div class="portfolio-image-lightbox-backdrop" data-image-lightbox-close="true"></div>
      <button type="button" class="portfolio-image-lightbox-close" aria-label="Close image" data-image-lightbox-close="true">\u2715</button>
      <img class="portfolio-image-lightbox-media" alt="" data-image-lightbox-close="true">
    `;
    modal.appendChild(imageLightbox);

    let touchScrollStartY = 0;

    const lockPageScroll = () => {
      if (document.body.classList.contains("portfolio-modal-open")) return;

      document.documentElement.classList.add("portfolio-modal-open");
      document.body.classList.add("portfolio-modal-open");
    };

    const unlockPageScroll = () => {
      if (!document.body.classList.contains("portfolio-modal-open")) return;

      document.documentElement.classList.remove("portfolio-modal-open");
      document.body.classList.remove("portfolio-modal-open");
    };

    const getScrollableModalParent = (target) => {
      if (!(target instanceof Element)) return null;

      const detailScroller = target.closest(".portfolio-detail-desc");
      const modalScroller = target.closest(".portfolio-modal-box");

      if (detailScroller && detailScroller.scrollHeight > detailScroller.clientHeight + 1) {
        return detailScroller;
      }

      if (modalScroller && modalScroller.scrollHeight > modalScroller.clientHeight + 1) {
        return modalScroller;
      }

      return detailScroller || modalScroller;
    };

    const canScrollElement = (element, deltaY) => {
      if (!element) return false;

      const { scrollTop, scrollHeight, clientHeight } = element;
      if (scrollHeight <= clientHeight + 1) return false;
      if (deltaY < 0) return scrollTop > 0;
      if (deltaY > 0) return scrollTop + clientHeight < scrollHeight - 1;
      return true;
    };

    const preventBackgroundWheelScroll = (event) => {
      if (!modal.classList.contains("is-open")) return;
      if (imageLightbox.classList.contains("is-open")) {
        event.preventDefault();
        return;
      }

      const scrollableParent = getScrollableModalParent(event.target);
      if (canScrollElement(scrollableParent, event.deltaY)) return;

      event.preventDefault();
    };

    const preventBackgroundKeyScroll = (event) => {
      if (!modal.classList.contains("is-open")) return;

      const blockedKeys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " ", "Spacebar"];
      if (!blockedKeys.includes(event.key)) return;

      const scrollableParent = getScrollableModalParent(document.activeElement || event.target);
      if (scrollableParent) return;

      event.preventDefault();
    };

    const onTouchScrollStart = (event) => {
      if (!modal.classList.contains("is-open")) return;
      touchScrollStartY = event.touches[0]?.clientY ?? 0;
    };

    const preventBackgroundTouchScroll = (event) => {
      if (!modal.classList.contains("is-open")) return;
      if (imageLightbox.classList.contains("is-open")) {
        if (event.cancelable) {
          event.preventDefault();
        }
        return;
      }

      const currentTouchY = event.touches[0]?.clientY ?? touchScrollStartY;
      const deltaY = touchScrollStartY - currentTouchY;
      const scrollableParent = getScrollableModalParent(event.target);

      if (canScrollElement(scrollableParent, deltaY)) {
        touchScrollStartY = currentTouchY;
        return;
      }

      if (event.cancelable) {
        event.preventDefault();
      }
    };

    const imageLightboxMedia = imageLightbox.querySelector(".portfolio-image-lightbox-media");
    const imageLightboxCloseButton = imageLightbox.querySelector(".portfolio-image-lightbox-close");

    const openImageLightbox = (slide) => {
      if (!slide?.src || !imageLightboxMedia) return;
      imageLightboxMedia.src = encodeURI(slide.src);
      imageLightboxMedia.alt = slide.alt || "";
      imageLightbox.inert = false;
      imageLightbox.classList.add("is-open");
      imageLightbox.setAttribute("aria-hidden", "false");
      imageLightboxCloseButton?.focus({ preventScroll: true });
    };

    const closeImageLightbox = () => {
      if (!imageLightbox.classList.contains("is-open")) return;
      if (imageLightbox.contains(document.activeElement)) {
        closeButton.focus({ preventScroll: true });
      }
      imageLightbox.classList.remove("is-open");
      imageLightbox.setAttribute("aria-hidden", "true");
      imageLightbox.inert = true;
      window.setTimeout(() => {
        if (!imageLightbox.classList.contains("is-open") && imageLightboxMedia) {
          imageLightboxMedia.removeAttribute("src");
        }
      }, 220);
    };

    const toggleVideoPlayback = (video) => {
      if (video.paused) {
        pauseVideos();
        video.play().catch(() => {});
      } else {
        video.pause();
      }
      syncVideoControls(video);
    };

    const syncVideoControls = (video) => {
      const shell = video.closest(".portfolio-video-shell");
      if (!shell) return;

      const playButton = shell.querySelector("[data-video-play]");
      const volumeSlider = shell.querySelector("[data-video-volume]");

      if (playButton) {
        playButton.textContent = video.paused ? "▶" : "❚❚";
        playButton.setAttribute("aria-label", video.paused ? "Play video" : "Pause video");
      }

      if (volumeSlider) {
        const value = video.muted ? 0 : Math.round(video.volume * 100);
        volumeSlider.value = String(value);
        volumeSlider.setAttribute("aria-valuenow", String(value));
      }
    };

    const pauseVideos = () => {
      track.querySelectorAll("video").forEach((video) => {
        video.pause();
        syncVideoControls(video);
      });
    };

    const playActiveVideo = () => {
      const activeSlide = track.children[currentIndex];
      const activeVideo = activeSlide?.querySelector("video");
      if (!activeVideo) return;

      activeVideo.play().catch(() => {});
      syncVideoControls(activeVideo);
    };

    const updateCarousel = () => {
      track.style.transform = `translate3d(-${currentIndex * 100}%, 0, 0)`;

      Array.from(dots.children).forEach((dot, index) => {
        dot.classList.toggle("is-active", index === currentIndex);
        dot.setAttribute("aria-pressed", index === currentIndex ? "true" : "false");
      });

      const shouldDisable = currentSlides.length <= 1;
      prevButton.classList.toggle("is-disabled", shouldDisable || currentIndex === 0);
      nextButton.classList.toggle("is-disabled", shouldDisable || currentIndex === currentSlides.length - 1);

      pauseVideos();
      playActiveVideo();
    };

    const goToSlide = (index) => {
      currentIndex = Math.max(0, Math.min(index, currentSlides.length - 1));
      updateCarousel();
    };

    const buildSlides = (slides) => {
      currentSlides = slides;
      currentIndex = 0;
      track.style.transition = "none";
      track.style.transform = "translate3d(0, 0, 0)";
      track.innerHTML = "";
      dots.innerHTML = "";

      slides.forEach((slide, index) => {
        const slideEl = document.createElement("div");
        slideEl.className = "carousel-slide";

        if (slide.type === "video") {
          slideEl.classList.add("carousel-slide--video");
          const shell = document.createElement("div");
          shell.className = "portfolio-video-shell";

          const video = document.createElement("video");
          video.src = encodeURI(slide.src);
          video.controls = false;
          video.autoplay = true;
          video.preload = "metadata";
          video.playsInline = true;
          video.setAttribute("playsinline", "");
          video.setAttribute("webkit-playsinline", "");
          video.muted = true;
          video.defaultMuted = true;
          video.setAttribute("muted", "");
          video.draggable = false;

          const controlsEl = document.createElement("div");
          controlsEl.className = "portfolio-video-controls";

          const playButton = document.createElement("button");
          playButton.type = "button";
          playButton.className = "portfolio-video-button";
          playButton.dataset.videoPlay = "true";

          const volumeWrap = document.createElement("label");
          volumeWrap.className = "portfolio-video-volume";

          const volumeText = document.createElement("span");
          volumeText.textContent = "VOL";

          const volumeSlider = document.createElement("input");
          volumeSlider.type = "range";
          volumeSlider.min = "0";
          volumeSlider.max = "100";
          volumeSlider.step = "1";
          volumeSlider.value = "0";
          volumeSlider.dataset.videoVolume = "true";
          volumeSlider.setAttribute("aria-label", "Video volume");

          playButton.addEventListener("click", (event) => {
            event.stopPropagation();
            toggleVideoPlayback(video);
          });

          volumeSlider.addEventListener("input", (event) => {
            event.stopPropagation();
            const nextVolume = Number(volumeSlider.value) / 100;
            video.volume = nextVolume;
            video.muted = nextVolume <= 0;
            syncVideoControls(video);
          });

          video.addEventListener("play", () => syncVideoControls(video));
          video.addEventListener("pause", () => syncVideoControls(video));
          video.addEventListener("volumechange", () => syncVideoControls(video));
          video.addEventListener("click", (event) => {
            event.stopPropagation();
            toggleVideoPlayback(video);
          });
          shell.addEventListener("click", (event) => {
            if (event.target.closest(".portfolio-video-controls")) return;
            event.stopPropagation();
            toggleVideoPlayback(video);
          });

          volumeWrap.append(volumeText, volumeSlider);
          controlsEl.append(playButton, volumeWrap);
          shell.append(video, controlsEl);
          slideEl.appendChild(shell);
          syncVideoControls(video);
        } else {
          slideEl.classList.add("carousel-slide--image");
          const image = document.createElement("img");
          image.src = encodeURI(slide.src);
          image.alt = slide.alt || "";
          image.draggable = false;
          slideEl.appendChild(image);
          slideEl.addEventListener("click", () => openImageLightbox(slide));
        }

        track.appendChild(slideEl);

        if (slides.length > 1) {
          const dot = document.createElement("button");
          dot.type = "button";
          dot.className = "ref-slider-dot";
          dot.dataset.slideTo = String(index);
          dot.setAttribute("aria-label", `Media ${index + 1}`);
          dot.addEventListener("click", () => goToSlide(index));
          dots.appendChild(dot);
        }
      });

      controls.hidden = slides.length <= 1;
      updateCarousel();
      void track.offsetHeight;
      track.style.transition = "";
    };

    const populateModal = (card) => {
      const id = card.dataset.portfolio;
      const lang = translations[document.documentElement.lang] ? document.documentElement.lang : "uk";
      const dict = translations[lang];
      const projectTitle = dict[`portfolio.${id}.title`] || card.querySelector("h3")?.textContent?.trim() || "";
      const projectTitleHtml = dict[`portfolio.${id}.titleHtml`] || projectTitle;
      const modalLabel = dict["portfolio.modalLabel"] || "Project";
      const paragraphs = [1, 2, 3]
        .map((index) => dict[`portfolio.${id}.body${index}`])
        .filter(Boolean);

      label.textContent = `${modalLabel} / ${projectTitle}`.toUpperCase();
      title.innerHTML = projectTitleHtml;
      body.innerHTML = paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");

      buildSlides(portfolioMedia[id] || []);
    };

    const resetModalScrollPosition = () => {
      modal.scrollTop = 0;
      modalBox.scrollTop = 0;
      detailDesc.scrollTop = 0;
      detailMedia.scrollTop = 0;
    };

    const openModal = (card) => {
      activeCard = card;
      cards.forEach((item) => item.classList.toggle("is-active", item === card));
      populateModal(card);
      resetModalScrollPosition();

      const rect = card.getBoundingClientRect();
      const originX = Math.round(((rect.left + rect.width / 2) / window.innerWidth) * 100);
      const originY = Math.round(((rect.top + rect.height / 2) / window.innerHeight) * 100);
      modalBox.style.transformOrigin = `${originX}% ${originY}%`;

      modal.classList.remove("is-closing");
      modal.inert = false;
      modal.setAttribute("aria-hidden", "false");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          modal.classList.add("is-open");
          resetModalScrollPosition();
          lockPageScroll();
          closeButton.focus({ preventScroll: true });
          window.setTimeout(() => {
            resetModalScrollPosition();
            playActiveVideo();
          }, 80);
        });
      });
    };

    const closeModal = () => {
      if (!modal.classList.contains("is-open")) return;

      closeImageLightbox();
      pauseVideos();
      if (modal.contains(document.activeElement)) {
        (activeCard || document.body).focus?.({ preventScroll: true });
      }
      modal.classList.add("is-closing");
      modal.classList.remove("is-open");

      window.setTimeout(() => {
        modal.classList.remove("is-closing");
        modal.setAttribute("aria-hidden", "true");
        modal.inert = true;
        unlockPageScroll();
      }, 520);

      cards.forEach((item) => item.classList.remove("is-active"));
      activeCard = null;
    };

    cards.forEach((card) => {
      card.addEventListener("click", () => openModal(card));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openModal(card);
        }
      });
    });

    backdrop.addEventListener("click", closeModal);
    closeButton.addEventListener("click", closeModal);
    imageLightbox.addEventListener("click", (event) => {
      if (event.target.closest("[data-image-lightbox-close='true']")) {
        closeImageLightbox();
      }
    });
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) goToSlide(currentIndex - 1);
    });
    nextButton.addEventListener("click", () => {
      if (currentIndex < currentSlides.length - 1) goToSlide(currentIndex + 1);
    });

    window.addEventListener("wheel", preventBackgroundWheelScroll, { passive: false, capture: true });
    window.addEventListener("touchstart", onTouchScrollStart, { passive: true, capture: true });
    window.addEventListener("touchmove", preventBackgroundTouchScroll, { passive: false, capture: true });
    window.addEventListener("keydown", preventBackgroundKeyScroll, { capture: true });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      if (imageLightbox.classList.contains("is-open")) {
        closeImageLightbox();
        return;
      }
      closeModal();
    });

    document.addEventListener("i18n:change", () => {
      if (activeCard) populateModal(activeCard);
    });
  }

  function initLangSwitch() {
    document.querySelectorAll(".ref-lang-btn").forEach((button) => {
      button.addEventListener("click", () => {
        applyLang(button.dataset.lang);
      });
    });
  }

  function initThemeSwitch() {
    const toggle = document.querySelector(".ref-theme-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
    });
  }

  function initContactForm() {
    const form = document.querySelector(".ref-form");
    const nameField = form?.querySelector('input[name="name"]');
    const emailField = form?.querySelector('input[name="email"]');
    const messageField = form?.querySelector('textarea[name="message"]');
    const messageError = form?.querySelector('[data-field-error="message"]');
    const statusField = form?.querySelector("[data-form-status]");
    const submitButton = form?.querySelector('button[type="submit"]');
    const fields = Array.from(form?.querySelectorAll("input, textarea") || []);
    if (!form || !nameField || !emailField || !messageField || !messageError || !statusField || !submitButton) return;

    let hasSubmitted = false;
    let currentStatusKey = "";
    let currentStatusType = "";

    const getDict = () => translations[document.documentElement.lang] || translations.uk;

    const setStatus = (key = "", type = "") => {
      currentStatusKey = key;
      currentStatusType = type;

      if (!key) {
        statusField.textContent = "";
        statusField.removeAttribute("data-status");
        return;
      }

      const dict = getDict();
      statusField.textContent = dict[key] || "";
      if (type) {
        statusField.dataset.status = type;
      } else {
        statusField.removeAttribute("data-status");
      }
    };

    const updateSubmitButton = (isSubmitting = false) => {
      const dict = getDict();
      submitButton.disabled = isSubmitting;
      submitButton.textContent = dict[isSubmitting ? "form.submitSending" : "form.submit"] || "Send";
    };

    const getFieldError = (field) => {
      const dict = getDict();
      const value = field.value.trim();

      if (field.required && !value) {
        return dict["form.requiredInvalid"] || "Please fill in this field.";
      }

      if (field === emailField && value && !field.validity.valid) {
        return dict["form.emailInvalid"] || "Please enter a valid email address.";
      }

      if (field === messageField && value.length < 100) {
        return dict["form.messageInvalid"] || "Please enter at least 100 characters.";
      }

      return "";
    };

    const renderFieldState = (field) => {
      const error = getFieldError(field);
      const showError = Boolean(error) && (hasSubmitted || field.dataset.touched === "true");

      if (showError) {
        field.setAttribute("aria-invalid", "true");
      } else {
        field.removeAttribute("aria-invalid");
      }

      if (field === messageField) {
        messageError.hidden = !showError;
        messageError.textContent = showError ? error : "";
      }

      return !error;
    };

    const validateForm = () => {
      let firstInvalidField = null;
      let isValid = true;

      fields.forEach((field) => {
        const fieldValid = renderFieldState(field);
        if (!fieldValid) {
          isValid = false;
          if (!firstInvalidField) firstInvalidField = field;
        }
      });

      return { isValid, firstInvalidField };
    };

    const resetFieldState = () => {
      fields.forEach((field) => {
        field.removeAttribute("aria-invalid");
        delete field.dataset.touched;
      });
      messageError.hidden = true;
      messageError.textContent = "";
    };

    fields.forEach((field) => {
      field.addEventListener("blur", () => {
        field.dataset.touched = "true";
        renderFieldState(field);
      });

      field.addEventListener("input", () => {
        if (hasSubmitted || field.dataset.touched === "true") {
          renderFieldState(field);
        }

        if (currentStatusType === "error") {
          setStatus();
        }
      });
    });

    document.addEventListener("i18n:change", () => {
      validateForm();
      updateSubmitButton(submitButton.disabled);
      if (currentStatusKey) {
        setStatus(currentStatusKey, currentStatusType);
      }
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      hasSubmitted = true;

      const { isValid, firstInvalidField } = validateForm();
      if (!isValid) {
        setStatus("form.submitFix", "error");
        firstInvalidField?.focus();
        return;
      }

      updateSubmitButton(true);
      setStatus("form.submitSending");

      try {
        const payload = {
          name: nameField.value.trim(),
          company: (form.querySelector('input[name="company"]')?.value || "").trim(),
          email: emailField.value.trim(),
          phone: (form.querySelector('input[name="phone"]')?.value || "").trim(),
          message: messageField.value.trim(),
        };

        const response = await fetch("https://formspree.io/f/xgorybzo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json().catch(() => ({}));
        if (!response.ok || !result.ok) {
          throw new Error(result.error || "Request failed");
        }

        form.reset();
        hasSubmitted = false;
        resetFieldState();
        setStatus("form.submitSuccess", "success");
      } catch (error) {
        setStatus("form.submitError", "error");
      } finally {
        updateSubmitButton(false);
      }
    });
  }

  function initWheelZoom() {
    let zoomLevel = 1;
    let badgeTimer = null;
    applyZoom(zoomLevel, { announce: false });

    window.addEventListener(
      "wheel",
      (event) => {
        if (!event.ctrlKey) return;

        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        const lockedScrollX = window.scrollX;
        const lockedScrollY = window.scrollY;
        const delta = event.deltaY < 0 ? 0.1 : -0.1;
        zoomLevel = applyZoom(zoomLevel + delta);

        window.scrollTo({
          left: lockedScrollX,
          top: lockedScrollY,
          behavior: "auto",
        });

        window.clearTimeout(badgeTimer);
        badgeTimer = window.setTimeout(() => {
          setZoomBadgeVisible(false);
        }, 900);
      },
      { passive: false, capture: true }
    );
  }

  function initMobileHeaderAutoHide() {
    const header = document.querySelector(".ref-header");
    if (!header) return;

    const phoneMq = window.matchMedia("(max-width: 720px)");
    let lastY = window.scrollY;
    let ticking = false;
    let suppressHideUntil = 0;

    const updateHeader = () => {
      ticking = false;

      if (!phoneMq.matches) {
        header.classList.remove("is-mobile-hidden");
        lastY = window.scrollY;
        return;
      }

      const currentY = window.scrollY;
      const delta = currentY - lastY;

      if (performance.now() < suppressHideUntil) {
        header.classList.remove("is-mobile-hidden");
        lastY = currentY;
        return;
      }

      if (currentY <= 8 || delta < -8) {
        header.classList.remove("is-mobile-hidden");
      } else if (delta > 10 && currentY > header.offsetHeight) {
        header.classList.add("is-mobile-hidden");
      }

      lastY = currentY;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateHeader);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateHeader);
    document.addEventListener("i18n:change", () => {
      suppressHideUntil = performance.now() + 900;
      header.classList.remove("is-mobile-hidden");
      lastY = window.scrollY;
    });
    updateHeader();
  }

  function init() {
    applyTheme(getSavedTheme());
    applyLang(getSavedLang());
    applyZoom(1, { announce: false });
    initProductSlider();
    initPortfolioModal();
    initLangSwitch();
    initThemeSwitch();
    initContactForm();
    initWheelZoom();
    initMobileHeaderAutoHide();
    initSideRail();
  }

  document.addEventListener("DOMContentLoaded", init);

  return { applyLang, applyTheme };
})();

