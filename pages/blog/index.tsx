import MyCard from "@/components/card";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  const data = [
    {
      text: "Linux — это как собака, которую ты сам дрессируешь. Сначала орёт на всё подряд, а потом слушается с полуслова. Зато контроль полный — хочешь так, хочешь эдак. Windows — это как арендованный офис: красиво, удобно, но полку без разрешения не повесишь. А в Linux ты сам решаешь, где у тебя стол, а где кофемашина. Главное — не бояться терминала, а подружиться с ним.",
      author: "@icelink39",
      authorName: "IceLink",
      likes: 122,
      tags: ["linux", "os", "opensource"],
    },
    {
      text: "Когда видишь, как кто-то в 2025 пишет проекты на jQuery — хочется обнять человека и сказать: «Бро, всё уже хорошо, можно отпустить». Да, раньше это был монстр-фреймворк, но сегодня есть React, Vue, Svelte — они дышат современностью. Хватит тянуть динозавров в будущее. Дай себе шанс на удобный и быстрый фронт.",
      author: "@icelink39",
      authorName: "IceLink",
      likes: 235,
      tags: ["frontend", "javascript", "webdev"],
    },
    {
      text: "Пока кто-то настраивает Jenkins, я сижу на GitHub Actions и кайфую. Настроил YAML, запушил — и всё летит. Никаких серверов, никаких лишних обвязок. CI/CD не должен быть болью, он должен быть автоматической магией. Особенно если у тебя нет отдельного DevOps — это просто спасение.",
      author: "@icelink39",
      authorName: "IceLink",
      likes: 92,
      tags: ["ci", "devops", "github"],
    },
    {
      text: "MacOS хороша, спору нет. Но когда тебе нужно запустить контейнер с нестандартным образом, перекомпилировать ядро или просто не платить ползарплаты за ноут — тут появляется Linux. И ты понимаешь, что свобода — это не про графику, а про то, чтобы делать, что хочешь, когда хочешь. Да, иногда больно. Но зато честно.",
      author: "@icelink39",
      authorName: "IceLink",
      likes: 745,
      tags: ["macos", "linux", "os"],
    },
    {
      text: "Если ты до сих пор боишься писать тесты, знай — багов бояться, в прод не ходить. Один раз покроешь код тестами, и жить станет проще. Особенно когда через два месяца надо править тот самый кусок, который ты уже забыл. Тесты — это письмо самому себе из прошлого. Научись слушать.",
      author: "@icelink39",
      authorName: "IceLink",
      likes: 754,
      tags: ["testing", "code", "backend"],
    },
    {
      text: "Когда ты думаешь, что всё понял в программировании — приходит асинхронщина. async/await, промисы, event loop — вся эта тусовка ломает привычный порядок. Но стоит понять одну вещь: всё происходит не одновременно, а по очереди, просто ты не всегда первый в очереди. И тогда всё встаёт на место.",
      author: "@icelink39",
      authorName: "IceLink",
      likes: 423,
      tags: ["javascript", "async", "programming"],
    },
    {
      text: "Контейнеризация — это как коробка для твоего кода. Всё сложил — зависимости, настройки, окружение — и запустил хоть на луне. Docker — не просто модный словарь, это про стабильность. «У меня работает» — это когда у всех работает, потому что у всех один и тот же контейнер.",
      author: "@icelink39",
      authorName: "IceLink",
      likes: 653,
      tags: ["docker", "devops", "containers"],
    },
    {
      text: "Ты не настоящий программист, если хотя бы раз не гуглил: «Как выйти из Vim». А потом уже как-то втягиваешься. Vim — это как игра: сначала злишься, потом учишься, а потом без него никуда. Да, у него странный интерфейс. Но мышкой двигать — это для слабаков.",
      author: "@icelink39",
      authorName: "IceLink",
      likes: 23945,
      tags: ["vim", "tools", "devlife"],
    },
    {
      text: "Когда ты говоришь «я фулстек», где-то один DevOps начинает тихо плакать. Фулстек — это когда ты умеешь всё, но не всё любишь. Кто-то любит бэкенд, кто-то фронт, кто-то базы. Не надо всё тащить на себе. Команда — это когда каждый в своём, но вместе — сила.",
      author: "@icelink39",
      authorName: "IceLink",
      likes: 234,
      tags: ["teamwork", "fullstack", "career"],
    },
    {
      text: "ОС — это как дом. Windows — квартира с мебелью, но ты не можешь её двигать. macOS — дизайнерский лофт, дорого, но стильно. Linux — это голая комната, где ты сам решаешь, где будет кухня. Главное — понимать, что тебе нужно, а не просто что модно.",
      author: "@icelink39",
      authorName: "IceLink",
      likes: 942,
      tags: ["os", "linux", "windows", "macos"],
    },
    {
      text: "Не гонитесь за новыми технологиями ради названия. Rust, Go, Elixir — всё круто, но не значит, что тебе это надо. Лучше быть профи в старом добром Node.js, чем поверхностно знать 5 языков. Глубина важнее ширины. А хайп — он приходит и уходит.",
      author: "@icelink39",
      authorName: "IceLink",
      likes: 231,
      tags: ["languages", "career", "tech"],
    },
    {
      text: "Программирование — это не только про код. Это ещё про сон, еду, спину и общение. Бессонные ночи за багом — романтика только в кино. В жизни тебе нужна ясная голова и удобное кресло. Заботься о себе, бро. Код напишешь, а здоровье не соберёшь из npm.",
      author: "@icelink39",
      authorName: "IceLink",
      likes: 6764,
      tags: ["devlife", "health", "mindset"],
    },
    {
      text: `Когда проект работает в проде, и ты ничего не трогал 3 месяца — не трогай. Даже думать не смей. Просто молись и делай бэкап. Опытный разработчик не тот, кто много пишет, а тот, кто знает, когда **не надо** писать.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1387,
      tags: ["prod", "developer", "wisdom"],
    },
    {
      text: `Люблю этот момент, когда запускаешь проект, и он работает с первого раза... А потом просыпаюсь. Иду чинить, как обычно. Жизнь разработчика — это вечная борьба между «сейчас всё пофикшу» и «почему это вообще работает???»`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 772,
      tags: ["bugfix", "devlife", "debugging"],
    },
    {
      text: `Senior — это не когда ты всё знаешь. Это когда ты видишь баг и уже знаешь, в какой файл надо плакать. Иногда в чужой, иногда в свой... но плакать всё равно придётся.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 2154,
      tags: ["career", "senior", "bugs"],
    },
    {
      text: `— Почему ты не спишь?\n— У меня билд идёт...\n— Уже 2 часа!\n— Да я просто не знаю, на каком этапе оно снова сломается, поэтому сижу и смотрю, как страдает CI.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 643,
      tags: ["ci", "build", "reallife"],
    },
    {
      text: `npm install — и держи кулачки. Никогда не знаешь, получишь ты приложение или портал в ад. Особенно с 200 зависимостями от пакетов, которые писал школьник ночью в 2015-м.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 29763,
      tags: ["npm", "nodejs", "frontend"],
    },
    {
      text: `Когда заказчик говорит: «Сделай быстро, мне не важно как» — знай, потом ему будет важно всё. Даже цвет иконки, которую ты не ставил. Даже баг, который он сам придумал.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 880,
      tags: ["freelance", "client", "project"],
    },
    {
      text: `Работа программиста — это как сериал: один баг фиксишь, появляется два новых. Каждая серия заканчивается деплойем и клиффхэнгером в виде красного лога. Ждём следующий сезон.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1045,
      tags: ["bugs", "funny", "codinglife"],
    },
    {
      text: `Когда код компилируется без ошибок с первого раза — у меня два варианта:\n1) Это не мой код.\n2) Я что-то очень сильно сломал, просто ещё не знаю об этом.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1323,
      tags: ["compile", "errors", "lol"],
    },
    {
      text: `Кажется, я понял, что такое чистый код. Это тот, который ты через месяц открыл, прочитал и не захотел уволиться. Остальное — компромиссы.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1730,
      tags: ["cleancode", "readable", "refactor"],
    },
    {
      text: `Мой рабочий процесс:\n1. Пишу фичу\n2. Чиню баги в фиче\n3. Случайно чиню старый баг\n4. Ломаю три других места\n5. Откатываюсь\n6. Пишу фичу заново\n7. Обед 😎`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1569,
      tags: ["workflow", "bugs", "devlife"],
    },
    {
      text: `Если в пятницу вечером тебе приходит баг от тестировщика, а ты решил по-быстрому глянуть и пофиксить... брат, ты сам виноват. Ничего хорошего в этом мире не начинается словами «я быстро посмотрю». Быстро — это в сказках. В проде быстро заканчивается в 3 ночи, с отвалом базы и криками DevOps'а.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1451,
      tags: ["bugs", "friday", "backend"],
    },
    {
      text: `Когда верстаешь, и у тебя всё идеально в Chrome, красиво в Safari, и даже Edge вдруг всё понял... а потом открываешь в Firefox — и он такой: «не понял». Спасибо, что живой, CSS. Спасибо, что всегда как лотерея. Каждый браузер — как свой тест на веру.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1230,
      tags: ["frontend", "css", "browsers"],
    },
    {
      text: `Пишу микросервис. Назвал красиво. Сделал красиво. Завёл. Через неделю он уже не такой уж и микро. Через месяц — монолитик. А через два я его удалил и запустил скрипт, который делает всё то же самое, но без Kafka и философии.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1194,
      tags: ["backend", "microservices", "truth"],
    },
    {
      text: `Иногда backend — это не архитектура, не логика и не данные. Это искусство успевать возвращать 200 OK, пока фронт не заподозрил, что ты на самом деле только начал писать бизнес-логику. Главное — создать ощущение стабильности.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1577,
      tags: ["backend", "api", "statuscode"],
    },
    {
      text: `Разработка под Android — это как квест. У тебя 5000 устройств, 800 версий ОС, 3 разных способа ломать layout и ещё куча чудес от китайских прошивок. Хочешь стабильности? Пиши на бумаге.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 991,
      tags: ["android", "mobile", "dev"],
    },
    {
      text: `Когда тебе кажется, что ты всё понял в React — выходит новая версия, и ты снова ребёнок. useEffect снова ведёт себя как капризная подруга. А ты снова лезешь на StackOverflow и спрашиваешь у мира: «А как правильно?»`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1330,
      tags: ["react", "frontend", "hooks"],
    },
    {
      text: `Самый честный коммент в коде: // не трогай, оно работает. Этот комментарий прошёл через баги, рефакторинги и скандалы. Это не просто строка — это оберег. Трогнешь — поймёшь, что зря родился.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1900,
      tags: ["code", "comment", "backend"],
    },
    {
      text: `OS — это как родитель: вроде бы хочет, чтобы тебе было хорошо, но по-своему. Windows: «Я обновлюсь прямо сейчас». Linux: «Разберись сам». macOS: «А ты точно достоин этой кнопки?» И ты такой: спасибо, любимая ОС, я просто хотел собрать проект.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1109,
      tags: ["os", "devlife", "funny"],
    },
    {
      text: `Самая страшная фраза на проекте: «а что, если мы просто перепишем всё с нуля?». Ни один человек, который это предлагал, не дожил до конца рефакторинга. Потому что через месяц начинается: «а зачем мы вообще это начали?»`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1777,
      tags: ["refactor", "project", "team"],
    },
    {
      text: `Собеседование на позицию junior: тебе задают вопросы, на которые сам собес не знает ответ. На middle — ждут, что ты будешь знать чужой баг пятилетней давности. А на senior — просто хотят, чтобы ты говорил уверенно, даже если врёшь.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1650,
      tags: ["career", "interview", "senior"],
    },
    {
      text: `Настоящий DevOps не тот, кто всё автоматизировал, а тот, кто смог сделать так, чтобы при деплое не дрожали руки. Один скрипт, один мир. Один kubectl apply — и ты уже в отпуске.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1322,
      tags: ["devops", "deploy", "automation"],
    },
    {
      text: `Самая большая ложь в IT — это «я просто добавлю одну строчку». Эта строчка потом тянет за собой 4 импорта, 2 миграции, обновление npm-пакета, сломанный билд и вызов тимлида.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1483,
      tags: ["bugs", "devlife", "truth"],
    },
    {
      text: `Не существует универсального способа хранить конфиги. Есть просто 3 стадии:  
      1. Лежат в коде  
      2. Вынесли в .env  
      3. Кто-то удалил .env.prod и теперь всё упало.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1048,
      tags: ["config", "backend", "ops"],
    },
    {
      text: `Фронтендерам больно от багов. Бэкендерам больно от проды. А мобильным больно от всего сразу — особенно от заказчика, у которого «на моём Xiaomi работает по-другому».`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1177,
      tags: ["mobile", "frontend", "backend"],
    },
    {
      text: `Почему программисты так любят чёрный фон в редакторе? Потому что в темноте не видно слёз. Особенно, когда после merge падает прод и ты пытаешься найти виновного, глядя в зеркало.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1742,
      tags: ["darkmode", "merge", "bugs"],
    },
    {
      text: `Фуллстек разработчик — это не тот, кто умеет всё. Это тот, на кого скинули всё. Он и фронт, и бэк, и база, и DevOps, и психотерапевт команде. А зарплата одна. Но зато когда прод упал, все бегут не к тимлиду, а к тебе. Потому что ты единственный, кто знает, где хоть примерно лежит это проклятое API.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1399,
      tags: ["fullstack", "backend", "frontend"],
    },
    {
      text: `Есть два типа программистов. Первые пишут тесты. Вторые — быстро чинят баги в проде. И между ними пропасть: первый не понимает, зачем торопиться, второй — зачем писать тесты, если «всё же работает». И оба, кстати, по-своему правы. Просто у каждого свой путь к тому самому багу.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1137,
      tags: ["testing", "bugs", "dev"],
    },
    {
      text: `Когда тебе говорят: «давай быстро сделаем MVP», знай — это будет единственная версия. Быстро на коленке, без архитектуры, но зато с реальными пользователями через два дня. А потом это MVP живёт в проде три года и становится твоей болью. Но ты уже привык, и даже любишь это страшное чудовище.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1280,
      tags: ["mvp", "startup", "truth"],
    },
    {
      text: `Разработка в понедельник — как кофе без кофеина. Вроде процесс идёт, а толку — ноль. То среда сломалась, то билд не собирается, то ты просто забыл, чем занимался в пятницу. А главное — тикеты ждут. И никто не спросит, в каком ты состоянии, только — где таска.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1010,
      tags: ["monday", "devlife", "sprint"],
    },
    {
      text: `Когда релиз ночью и ты один в офисе, прод пахнет страхом. Любой лог — как последний крик системы. Каждая кнопка — как мина. И ты думаешь: «а мог ведь стать поваром». Но ты ж выбрал код, ну держи теперь.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1490,
      tags: ["release", "nightshift", "prod"],
    },
    {
      text: `Есть особый вид багов — духовные. Они не в логах, не в коде, не воспроизводятся. Но пользователь их видит. И он прав. Ты это знаешь. Просто баг ушёл в тонкий мир, но продолжает там вредить.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1782,
      tags: ["bugs", "mystery", "frontend"],
    },
    {
      text: `Когда ты делаешь новый проект и говоришь себе: «Теперь я всё сделаю по-человечески». Но проходит неделя, и ты уже копируешь старые костыли, потому что времени нет, а работать надо. Архитектура архитектурой, но таска в Jira не сделает себя сама.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1043,
      tags: ["architecture", "dev", "refactor"],
    },
    {
      text: `Frontend — это когда у тебя 2000 строк CSS, 15 компонентов, а бага одна: кнопка уехала на пиксель влево. И ты 4 часа ищешь, что поехало. А потом понимаешь — это flex и твоя гордость. Снова.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1122,
      tags: ["frontend", "css", "debug"],
    },
    {
      text: `Разработка под iOS — это как жить в Швейцарии: всё красиво, строго и дорого. Но шаг влево — и всё ломается. А если ты не заплатил за подписку в Apple Dev — ты уже не разработчик, ты просто наблюдатель.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 940,
      tags: ["ios", "mobile", "apple"],
    },
    {
      text: `Настоящий программист — это тот, кто может одновременно править баг, обсуждать архитектуру в чате, пить третий кофе и гуглить, почему у него не работает docker build. И всё это в одних тапках.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1199,
      tags: ["multitask", "devlife", "docker"],
    },
    {
      text: `Когда заказчик говорит: «Нам нужен просто сайт», знай — это не просто сайт. Это портал в ад с логикой, API, мобильной версией и админкой, которую никто не описал. Просто сайт — это ложь, с которой всё начинается.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1327,
      tags: ["web", "client", "truth"],
    },
    {
      text: `Состояние «сделал фичу, которая сразу заработала» — редкое, почти мифическое. В такие дни разработчик чувствует себя богом. Но не расслабляйся. Это просто баг, который ещё не показал своё лицо.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1211,
      tags: ["bugs", "dev", "mystery"],
    },
    {
      text: `Кто знает боль веба, тот не смеётся над float. Потому что когда-то мы верстали на float, и оно работало. Ну, почти. Иногда. А сейчас мы на Grid и Flex, и... всё равно ничего не понятно. Просто теперь боль современнее.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 980,
      tags: ["css", "frontend", "layout"],
    },
    {
      text: `Плохой код пишут все. Хороший код — только те, кто потом сами же его читают. Главное — помнить, что через год ты сам себе будешь враг. Пиши так, будто оставляешь письмо себе в будущее. Только без ругательств, пожалуйста.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1503,
      tags: ["clean-code", "future", "advice"],
    },
    {
      text: `Когда у тебя 3 года опыта, но ты читаешь чужой код, написанный вчера, и чувствуешь себя нубом — не переживай. Это нормально. У каждого проекта свои приколы. Просто прими хаос и сделай вид, что ты его контролируешь.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1338,
      tags: ["code", "chaos", "experience"],
    },
    {
      text: `Иногда кажется, что баги — живые. Ты их чинишь — они прячутся. Ты отвлёкся — они вылезли. Они как домашние животные: требуют внимания. Только не милые. А злобные. И логи грызут.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1299,
      tags: ["bugs", "code", "nightmare"],
    },
    {
      text: `Самый быстрый способ что-то понять — объяснить это джуну. Пока рассказываешь, сам начнёшь понимать, где косяк. А джун — он как зеркало твоего кода. Если он не понял, значит, ты тоже писал на автомате.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1405,
      tags: ["mentoring", "learning", "juniors"],
    },
    {
      text: `Когда ты только начал изучать Linux, тебе кажется, что всё сложно. Потом ты думаешь, что всё понял. А потом правишь systemd unit в 3 ночи, потому что у тебя просто не стартует nginx — и снова всё сложно.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1180,
      tags: ["linux", "sysadmin", "pain"],
    },
    {
      text: `Секрет продуктивности разработчика — не в Pomodoro или Notion. А в умении вовремя сказать: «я потом это починю» и пойти спать. Потому что отдохнувший мозг — лучший дебаггер.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1350,
      tags: ["productivity", "advice", "devlife"],
    },
    {
      text: `Когда кто-то говорит: «у нас agile», всегда уточняй — это тот agile, где обсуждают идеи и делают спринты, или тот, где просто таски накидывают без плана и просят «на вчера»? Потому что это два разных agile. Очень разных.`,
      author: "@icelink39",
      authorName: "IceLink",
      likes: 1277,
      tags: ["agile", "sprint", "project"],
    },
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div
          className={`columns-3 max-lg:columns-2  max-sm:columns-1 gap-4 space-y-4`}
        >
          {data.map((item, index) => (
            <div key={index} className="break-inside-avoid">
              <MyCard {...item} />
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
