/** Curated Unsplash photography — catering, hospitality, Moroccan cuisine */

const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  hero: img('photo-1555244162-803834f70033', 2400),
  about: img('photo-1414235077428-338989a2e8c0', 1400),
  services: {
    wedding: img('photo-1519225421980-715cb0215aed', 1000),
    corporate: img('photo-1511795409834-ef04bbd61622', 1000),
    traditional: img('photo-1601050690597-df0568f70950', 1000),
    mourning: img('photo-1652064588708-2a3eefd68077', 1400),
    birthday: img('photo-1530103862676-de8c9debad1d', 1000),
    cocktail: img('photo-1574391884720-bbc3740c59d1', 1000),
  },
  culinary: {
    moroccan: img('photo-1539136788836-5699e78bfc75', 900),
    international: img('photo-1504674900247-0877df9cc836', 900),
    traditional: img('photo-1585937421612-70a008356fbe', 700),
    buffet: img('photo-1555244162-803834f70033', 1100),
    presentation: img('photo-1476224203421-9ac39bcb3327', 800),
  },
  gallery: [
    {
      src: img('photo-1519225421980-715cb0215aed', 1000),
      alt: 'Table de réception de mariage élégamment dressée',
      span: 'tall',
    },
    {
      src: img('photo-1601050690597-df0568f70950', 900),
      alt: 'Plat marocain traditionnel présenté avec raffinement',
      span: 'wide',
    },
    {
      src: img('photo-1555244162-803834f70033', 1000),
      alt: 'Buffet élégant pour événement professionnel',
      span: 'default',
    },
    {
      src: img('photo-1414235077428-338989a2e8c0', 900),
      alt: 'Présentation gastronomique fine dining',
      span: 'default',
    },
    {
      src: img('photo-1511795409834-ef04bbd61622', 1000),
      alt: 'Réception d’entreprise avec service traiteur',
      span: 'wide',
    },
    {
      src: img('photo-1574391884720-bbc3740c59d1', 900),
      alt: 'Cocktail et réception avec mise en scène raffinée',
      span: 'tall',
    },
    {
      src: img('photo-1585937421612-70a008356fbe', 900),
      alt: 'Spécialités traditionnelles marocaines',
      span: 'default',
    },
    {
      src: img('photo-1467003909585-2f8a72700288', 1000),
      alt: 'Dressage de table pour célébration privée',
      span: 'default',
    },
  ],
}

export const trustItems = [
  {
    title: 'Service professionnel',
    titleAr: 'خدمة احترافية',
    description: 'Une équipe dédiée à la réussite de votre événement.',
    descriptionAr: 'فريق مخصص لإنجاح مناسبتكم.',
  },
  {
    title: 'Cuisine marocaine & variée',
    titleAr: 'مطبخ مغربي ومتنوع',
    description: 'Des saveurs authentiques et internationales soigneusement préparées.',
    descriptionAr: 'نكهات أصيلة وعالمية محضّرة بعناية.',
  },
  {
    title: 'Prestations sur mesure',
    titleAr: 'خدمات حسب الطلب',
    description: 'Chaque formule est adaptée à vos envies et à votre budget.',
    descriptionAr: 'كل عرض يُكيَّف حسب رغباتكم وميزانيتكم.',
  },
  {
    title: 'Accompagnement personnalisé',
    titleAr: 'مواكبة شخصية',
    description: 'Un interlocuteur unique de la conception au service.',
    descriptionAr: 'مخاطب واحد من التخطيط إلى يوم المناسبة.',
  },
]

export const services = [
  {
    id: 'mariages',
    title: 'Mariages & Fiançailles',
    titleAr: 'حفلات الزفاف والخطوبة',
    description:
      'Des réceptions élégantes, une cuisine d’exception et un service discret pour célébrer votre union avec raffinement.',
    descriptionAr:
      'استقبالات أنيقة ومطبخ راقٍ وخدمة رصينة للاحتفال بزواجكم بكل أناقة.',
    image: images.services.wedding,
    href: '#devis',
  },
  {
    id: 'professionnel',
    title: 'Événements professionnels',
    titleAr: 'المناسبات المهنية',
    description:
      'Séminaires, conférences et cocktails d’entreprise : un service fiable, ponctuel et parfaitement orchestré.',
    descriptionAr:
      'ندوات ومؤتمرات وكوكتيلات الشركات: خدمة موثوقة ومنظمة بدقة.',
    image: images.services.corporate,
    href: '#devis',
  },
  {
    id: 'traditionnelles',
    title: 'Cérémonies traditionnelles',
    titleAr: 'المناسبات التقليدية',
    description:
      'Honorer les traditions marocaines avec une cuisine authentique et une mise en scène respectueuse de vos rites.',
    descriptionAr:
      'نحتفي بالتقاليد المغربية بمطبخ أصيل وتقديم يحترم طقوسكم.',
    image: images.services.traditional,
    href: '#devis',
  },
  {
    id: 'deuil',
    title: 'Décès & cérémonies funéraires',
    titleAr: 'الوفاة والجنائز والعزاء',
    description:
      'Service traiteur digne et discret pour les décès, veillées et cérémonies d’hommage — avec respect, calme et organisation.',
    descriptionAr:
      'تموين كريم ومتحفظ لحالات الوفاة والعزاء وطقوس التشييع — باحترام وهدوء وتنظيم.',
    image: images.services.mourning,
    href: '#deces',
  },
  {
    id: 'anniversaires',
    title: 'Anniversaires & Fêtes privées',
    titleAr: 'أعياد الميلاد والحفلات الخاصة',
    description:
      'Des moments intimistes ou festifs, imaginés autour de menus gourmands et d’une présentation soignée.',
    descriptionAr:
      'لحظات حميمة أو احتفالية حول قوائم لذيذة وتقديم أنيق.',
    image: images.services.birthday,
    href: '#devis',
  },
  {
    id: 'cocktails',
    title: 'Cocktails & Réceptions',
    titleAr: 'الكوكتيل والاستقبالات',
    description:
      'Finger food, stations gourmandes et service fluide pour des réceptions mémorables.',
    descriptionAr:
      'مقبلات ومحطات تذوق وخدمة سلسة لاستقبالات لا تُنسى.',
    image: images.services.cocktail,
    href: '#devis',
  },
]

export const culinaryCategories = [
  {
    title: 'Gastronomie marocaine',
    titleAr: 'المطبخ المغربي',
    image: images.culinary.moroccan,
    alt: 'Tajine et saveurs de la gastronomie marocaine',
    size: 'large',
  },
  {
    title: 'Cuisine internationale',
    titleAr: 'المطبخ العالمي',
    image: images.culinary.international,
    alt: 'Assiette de cuisine internationale raffinée',
    size: 'medium',
  },
  {
    title: 'Spécialités traditionnelles',
    titleAr: 'أطباق تقليدية',
    image: images.culinary.traditional,
    alt: 'Spécialités traditionnelles présentées avec élégance',
    size: 'small',
  },
  {
    title: 'Buffets élégants',
    titleAr: 'بوفيهات أنيقة',
    image: images.culinary.buffet,
    alt: 'Buffet traiteur élégamment dressé',
    size: 'wide',
  },
  {
    title: 'Présentations raffinées',
    titleAr: 'تقديم راقٍ',
    image: images.culinary.presentation,
    alt: 'Présentation raffinée de plats gastronomiques',
    size: 'medium',
  },
]

export const advantages = [
  {
    title: 'Des prestations adaptées à vos besoins',
    titleAr: 'خدمات تلائم احتياجاتكم',
    description:
      'Nous construisons chaque proposition selon le type d’événement, le nombre d’invités et vos attentes.',
    descriptionAr:
      'نبني كل عرض حسب نوع المناسبة وعدد الضيوف وتطلعاتكم.',
    icon: 'ClipboardList',
  },
  {
    title: 'Une attention particulière à la présentation',
    titleAr: 'عناية خاصة بالتقديم',
    description:
      'Arts de la table et mise en scène : chaque détail contribue à l’expérience de vos convives.',
    descriptionAr:
      'فن المائدة والإخراج: كل تفصيل يثري تجربة ضيوفكم.',
    icon: 'Sparkles',
  },
  {
    title: 'Un accompagnement professionnel',
    titleAr: 'مواكبة احترافية',
    description:
      'De la première consultation au jour J, notre équipe reste à vos côtés pour une organisation sereine.',
    descriptionAr:
      'من أول استشارة إلى يوم المناسبة، فريقنا بجانبكم لتنظيم مطمئن.',
    icon: 'Handshake',
  },
  {
    title: 'Une expérience personnalisée',
    titleAr: 'تجربة مخصّصة',
    description:
      'Menus, service et rythme de réception sont pensés pour refléter votre personnalité et votre événement.',
    descriptionAr:
      'القوائم والخدمة وإيقاع الاستقبال تُصمَّم لتعكس شخصيتكم ومناسبتكم.',
    icon: 'Heart',
  },
]

export const eventTypes = [
  'Mariage',
  'Fiançailles',
  'Cérémonie traditionnelle',
  'Décès / Cérémonie funéraire',
  'Événement de deuil / عزاء',
  'Événement professionnel',
  'Anniversaire',
  'Cocktail / Réception',
  'Réunion de famille',
  'Autre',
]
