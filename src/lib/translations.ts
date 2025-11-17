export type Language =
  | "en"
  | "es"
  | "fr"
  | "de"
  | "it"
  | "pt"
  | "zh"
  | "ja"
  | "ar"
  | "ru";

export interface Translations {
  [key: string]: string | { [key: string]: string };
}

export const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    nav: {
      services: "Services",
      process: "Process",
      work: "Work",
      about: "About",
      partners: "Partners",
      blog: "Blog",
      contact: "Contact",
    },
    // Hero
    hero: {
      title: "We Bring",
      subtitle: "Shopify Dreams",
      description:
        "Premium Shopify theme development and expert e-commerce solutions for ambitious brands.",
      cta: "Start Your Project",
      ctaSecondary: "View Our Work",
    },
    // Footer
    footer: {
      description:
        "Premium Shopify theme development agency creating exceptional e-commerce experiences that drive results and exceed expectations.",
      resources: "Resources",
      documentation: "Documentation",
      support: "Support",
      faq: "FAQ",
      getInTouch: "Get in Touch",
      remoteWorldwide: "Remote, Worldwide",
      responseTime: "24h Response Time",
      available: "Available 7 days/week",
      urgentProject: "Urgent Project?",
      emergencySpaces: "2 emergency spaces available",
      copyright: "© {year} Shopify Dev Studio. All rights reserved.",
    },
    // Common
    common: {
      learnMore: "Learn More",
      viewMore: "View More",
      getStarted: "Get Started",
      contactUs: "Contact Us",
      backHome: "Back Home",
      loading: "Loading...",
    },
  },
  es: {
    nav: {
      services: "Servicios",
      process: "Proceso",
      work: "Trabajos",
      about: "Acerca de",
      partners: "Socios",
      blog: "Blog",
      contact: "Contacto",
    },
    hero: {
      title: "Hacemos realidad",
      subtitle: "Tus sueños en Shopify",
      description:
        "Desarrollo premium de temas de Shopify y soluciones de comercio electrónico experto para marcas ambiciosas.",
      cta: "Comienza tu proyecto",
      ctaSecondary: "Ver nuestro trabajo",
    },
    footer: {
      description:
        "Agencia premium de desarrollo de temas de Shopify que crea experiencias excepcionales de comercio electrónico que generan resultados y superan expectativas.",
      resources: "Recursos",
      documentation: "Documentación",
      support: "Soporte",
      faq: "Preguntas frecuentes",
      getInTouch: "Ponte en contacto",
      remoteWorldwide: "Remoto, en todo el mundo",
      responseTime: "Tiempo de respuesta 24h",
      available: "Disponible 7 días a la semana",
      urgentProject: "¿Proyecto urgente?",
      emergencySpaces: "2 espacios de emergencia disponibles",
      copyright: "© {year} Shopify Dev Studio. Todos los derechos reservados.",
    },
    common: {
      learnMore: "Aprende más",
      viewMore: "Ver más",
      getStarted: "Empezar",
      contactUs: "Contáctenos",
      backHome: "Volver a inicio",
      loading: "Cargando...",
    },
  },
  fr: {
    nav: {
      services: "Services",
      process: "Processus",
      work: "Travaux",
      about: "À propos",
      partners: "Partenaires",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      title: "Nous concrétisons",
      subtitle: "Vos rêves Shopify",
      description:
        "Développement premium de thèmes Shopify et solutions de commerce électronique expertes pour les marques ambitieuses.",
      cta: "Commencez votre projet",
      ctaSecondary: "Voir nos travaux",
    },
    footer: {
      description:
        "Agence de développement premium de thèmes Shopify créant des expériences de commerce électronique exceptionnelles qui produisent des résultats et dépassent les attentes.",
      resources: "Ressources",
      documentation: "Documentation",
      support: "Assistance",
      faq: "FAQ",
      getInTouch: "Nous contacter",
      remoteWorldwide: "À distance, dans le monde entier",
      responseTime: "Temps de réponse 24h",
      available: "Disponible 7 jours par semaine",
      urgentProject: "Projet urgent ?",
      emergencySpaces: "2 places d'urgence disponibles",
      copyright: "© {year} Shopify Dev Studio. Tous les droits réservés.",
    },
    common: {
      learnMore: "En savoir plus",
      viewMore: "Voir plus",
      getStarted: "Commencer",
      contactUs: "Nous contacter",
      backHome: "Retour à l'accueil",
      loading: "Chargement...",
    },
  },
  de: {
    nav: {
      services: "Dienstleistungen",
      process: "Prozess",
      work: "Arbeiten",
      about: "Über uns",
      partners: "Partner",
      blog: "Blog",
      contact: "Kontakt",
    },
    hero: {
      title: "Wir verwirklichen",
      subtitle: "Ihre Shopify-Träume",
      description:
        "Premium-Shopify-Theme-Entwicklung und E-Commerce-Lösungen für ehrgeizige Marken.",
      cta: "Starten Sie Ihr Projekt",
      ctaSecondary: "Unsere Arbeiten anzeigen",
    },
    footer: {
      description:
        "Premium-Agentur für Shopify-Theme-Entwicklung, die außergewöhnliche E-Commerce-Erfahrungen schafft, die Ergebnisse bringen und Erwartungen übertreffen.",
      resources: "Ressourcen",
      documentation: "Dokumentation",
      support: "Unterstützung",
      faq: "Häufig gestellte Fragen",
      getInTouch: "Kontaktieren Sie uns",
      remoteWorldwide: "Remote, weltweit",
      responseTime: "24-Stunden-Antwortzeit",
      available: "7 Tage die Woche verfügbar",
      urgentProject: "Eilprojekt?",
      emergencySpaces: "2 Notfallplätze verfügbar",
      copyright: "© {year} Shopify Dev Studio. Alle Rechte vorbehalten.",
    },
    common: {
      learnMore: "Mehr erfahren",
      viewMore: "Mehr anzeigen",
      getStarted: "Erste Schritte",
      contactUs: "Kontaktieren Sie uns",
      backHome: "Zurück zur Startseite",
      loading: "Wird geladen...",
    },
  },
  it: {
    nav: {
      services: "Servizi",
      process: "Processo",
      work: "Lavori",
      about: "Chi siamo",
      partners: "Partner",
      blog: "Blog",
      contact: "Contatti",
    },
    hero: {
      title: "Realizziamo",
      subtitle: "I tuoi sogni Shopify",
      description:
        "Sviluppo premium di temi Shopify e soluzioni di e-commerce esperte per brand ambiziosi.",
      cta: "Inizia il tuo progetto",
      ctaSecondary: "Visualizza i nostri lavori",
    },
    footer: {
      description:
        "Agenzia premium di sviluppo di temi Shopify che crea esperienze di e-commerce eccezionali che producono risultati e superano le aspettative.",
      resources: "Risorse",
      documentation: "Documentazione",
      support: "Supporto",
      faq: "Domande frequenti",
      getInTouch: "Contattaci",
      remoteWorldwide: "Remote, in tutto il mondo",
      responseTime: "Tempo di risposta 24 ore",
      available: "Disponibile 7 giorni a settimana",
      urgentProject: "Progetto urgente?",
      emergencySpaces: "2 posti di emergenza disponibili",
      copyright: "© {year} Shopify Dev Studio. Tutti i diritti riservati.",
    },
    common: {
      learnMore: "Scopri di più",
      viewMore: "Visualizza di più",
      getStarted: "Inizia",
      contactUs: "Contattaci",
      backHome: "Torna alla home",
      loading: "Caricamento...",
    },
  },
  pt: {
    nav: {
      services: "Serviços",
      process: "Processo",
      work: "Trabalhos",
      about: "Sobre",
      partners: "Parceiros",
      blog: "Blog",
      contact: "Contato",
    },
    hero: {
      title: "Realizamos",
      subtitle: "Seus sonhos Shopify",
      description:
        "Desenvolvimento premium de temas Shopify e soluções de e-commerce especializada para marcas ambiciosas.",
      cta: "Comece seu projeto",
      ctaSecondary: "Ver nossos trabalhos",
    },
    footer: {
      description:
        "Agência premium de desenvolvimento de temas Shopify criando experiências de e-commerce excepcionais que geram resultados e excedem expectativas.",
      resources: "Recursos",
      documentation: "Documentação",
      support: "Suporte",
      faq: "Perguntas frequentes",
      getInTouch: "Entre em contato",
      remoteWorldwide: "Remoto, em todo o mundo",
      responseTime: "Tempo de resposta 24h",
      available: "Disponível 7 dias por semana",
      urgentProject: "Projeto urgente?",
      emergencySpaces: "2 espaços de emergência disponíveis",
      copyright: "© {year} Shopify Dev Studio. Todos os direitos reservados.",
    },
    common: {
      learnMore: "Saiba mais",
      viewMore: "Ver mais",
      getStarted: "Começar",
      contactUs: "Entre em contato",
      backHome: "Voltar à página inicial",
      loading: "Carregando...",
    },
  },
  zh: {
    nav: {
      services: "服务",
      process: "流程",
      work: "作品",
      about: "关于",
      partners: "合作伙伴",
      blog: "博客",
      contact: "联系",
    },
    hero: {
      title: "我们实现",
      subtitle: "您的 Shopify 梦想",
      description:
        "为雄心勃勃的品牌提供高级 Shopify 主题开发和专业电子商务解决方案。",
      cta: "开始您的项目",
      ctaSecondary: "查看我们的作品",
    },
    footer: {
      description:
        "高级 Shopify 主题开发机构，创建卓越的电子商务体验，产生结果并超越期望。",
      resources: "资源",
      documentation: "文档",
      support: "支持",
      faq: "常见问题",
      getInTouch: "联系我们",
      remoteWorldwide: "远程，全球",
      responseTime: "24 小时响应时间",
      available: "每周 7 天可用",
      urgentProject: "紧急项目？",
      emergencySpaces: "可用 2 个应急名额",
      copyright: "© {year} Shopify Dev Studio。版权所有。",
    },
    common: {
      learnMore: "了解更多",
      viewMore: "查看更多",
      getStarted: "开始使用",
      contactUs: "联系我们",
      backHome: "返回首页",
      loading: "加载中...",
    },
  },
  ja: {
    nav: {
      services: "サービス",
      process: "プロセス",
      work: "制作事例",
      about: "について",
      partners: "パートナー",
      blog: "ブログ",
      contact: "お問い合わせ",
    },
    hero: {
      title: "実現する",
      subtitle: "あなたの Shopify の夢",
      description:
        "野心的なブランドのための高級 Shopify テーマ開発と専門的な e コマース ソリューション。",
      cta: "プロジェクトを開始",
      ctaSecondary: "制作事例を見る",
    },
    footer: {
      description:
        "優れた e コマース体験を生み出し、成果を上げ、期待を超える高級 Shopify テーマ開発機関。",
      resources: "リソース",
      documentation: "ドキュメント",
      support: "サポート",
      faq: "よくある質問",
      getInTouch: "お問い合わせ",
      remoteWorldwide: "リモート、世界中",
      responseTime: "24 時間の対応時間",
      available: "週 7 日利用可能",
      urgentProject: "緊急プロジェクト？",
      emergencySpaces: "2 つの緊急スペースが利用可能",
      copyright: "© {year} Shopify Dev Studio。著作権所有。",
    },
    common: {
      learnMore: "もっと詳しく",
      viewMore: "もっと見る",
      getStarted: "始める",
      contactUs: "お問い合わせ",
      backHome: "ホームに戻る",
      loading: "読み込み中...",
    },
  },
  ar: {
    nav: {
      services: "الخدمات",
      process: "العملية",
      work: "الأعمال",
      about: "حول",
      partners: "الشركا��",
      blog: "مدونة",
      contact: "اتصل",
    },
    hero: {
      title: "نحن نحقق",
      subtitle: "أحلام Shopify الخاصة بك",
      description:
        "تطوير متقدم لمواضيع Shopify وحلول التجارة الإلكترونية المتخصصة للعلامات الطموحة.",
      cta: "ابدأ مشروعك",
      ctaSecondary: "عرض أعمالنا",
    },
    footer: {
      description:
        "وكالة متقدمة لتطوير مواضيع Shopify تنشئ تجارب التجارة الإلكترونية الاستثنائية التي تحقق النتائج وتتجاوز التوقعات.",
      resources: "الموارد",
      documentation: "التوثيق",
      support: "الدعم",
      faq: "الأسئلة الشائعة",
      getInTouch: "تواصل معنا",
      remoteWorldwide: "عن بعد، في جميع أنحاء العالم",
      responseTime: "وقت الرد 24 ساعة",
      available: "متاح 7 أيام في الأسبوع",
      urgentProject: "مشروع عاجل؟",
      emergencySpaces: "مساحتان احتياطيتان متاحتان",
      copyright: "© {year} Shopify Dev Studio. جميع الحقوق محفوظة.",
    },
    common: {
      learnMore: "تعرف على المزيد",
      viewMore: "عرض المزيد",
      getStarted: "ابدأ",
      contactUs: "اتصل بنا",
      backHome: "العودة إلى الرئيسية",
      loading: "جارٍ التحميل...",
    },
  },
  ru: {
    nav: {
      services: "Услуги",
      process: "Процесс",
      work: "Работы",
      about: "О нас",
      partners: "Партнеры",
      blog: "Блог",
      contact: "Контакт",
    },
    hero: {
      title: "Мы воплощаем",
      subtitle: "Ваши мечты Shopify",
      description:
        "Премиальная разработка тем Shopify и экспертные решения электронной коммерции для амбициозных брендов.",
      cta: "Начните свой проект",
      ctaSecondary: "Посмотреть наши работы",
    },
    footer: {
      description:
        "Премиальное агентство по разработке тем Shopify, создающее исключительные впечатления электронной коммерции, которые приносят результаты и превосходят ожидания.",
      resources: "Ресурсы",
      documentation: "Документация",
      support: "Поддержка",
      faq: "Часто задаваемые вопросы",
      getInTouch: "Свяжитесь с нами",
      remoteWorldwide: "Удаленно, во всем мире",
      responseTime: "Время ответа 24 часа",
      available: "Доступно 7 дней в неделю",
      urgentProject: "Срочный проект?",
      emergencySpaces: "Доступны 2 экстренных места",
      copyright: "© {year} Shopify Dev Studio. Все права защищены.",
    },
    common: {
      learnMore: "Узнать больше",
      viewMore: "Просмотреть еще",
      getStarted: "Начать",
      contactUs: "Свяжитесь с нами",
      backHome: "На главную",
      loading: "Загрузка...",
    },
  },
};

export const useTranslation = (language: Language) => {
  return translations[language] || translations.en;
};

export const getTranslatedValue = (
  obj: string | { [key: string]: string } | undefined,
  defaultValue: string = "",
): string => {
  if (typeof obj === "string") {
    return obj;
  }
  return defaultValue;
};

export const interpolate = (
  text: string,
  vars: Record<string, string | number>,
): string => {
  return text.replace(/{(\w+)}/g, (match, key) => String(vars[key] || match));
};
