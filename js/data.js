const MENU_DATA = [
  {
    category: "grill",
    categoryLabel: { ru: "Мангал", en: "Grill", kr: "그릴" },
    items: [
      { id: 1, name: { ru: "Баранина кусками", en: "Lamb pieces", kr: "양고기 조각" }, desc: { ru: "180 г", en: "180 g", kr: "180g" }, price: 13000, image: "./images/grill.png" },
      { id: 2, name: { ru: "Говядина люля кебаб", en: "Beef lula kebab", kr: "소고기 룰랴 케밥" }, desc: { ru: "180 г", en: "180 g", kr: "180g" }, price: 13000, image: "./images/grill.png" },
      { id: 3, name: { ru: "Курица кусками", en: "Chicken pieces", kr: "닭고기 조각" }, desc: { ru: "Шашлык из курицы", en: "Chicken skewer", kr: "닭고기 꼬치" }, price: 13000, image: "./images/grill.png" },
      { id: 4, name: { ru: "Острые куриные крылышки", en: "Spicy chicken wings", kr: "매운 닭날개" }, desc: { ru: "Острые крылышки", en: "Spicy wings", kr: "매운 닭날개" }, price: 13000, image: "./images/grill.png" },
      { id: 5, name: { ru: "Печень говяжья жигар", en: "Beef liver", kr: "소간" }, desc: { ru: "Традиционное блюдо", en: "Traditional dish", kr: "전통 요리" }, price: 13000, image: "./images/grill.png" },
      { id: 6, name: { ru: "Шампиньоны", en: "Champignons", kr: "양송이 구이" }, desc: { ru: "На мангале", en: "Grilled", kr: "숯불구이" }, price: 13000, image: "./images/grill.png" },
      { id: 7, name: { ru: "Овощи на мангале", en: "Grilled vegetables", kr: "구운 야채" }, desc: { ru: "Овощное ассорти", en: "Vegetable mix", kr: "야채 모둠" }, price: 13000, image: "./images/grill.png" },
      { id: 8, name: { ru: "Говядина кусками", en: "Beef pieces", kr: "소고기 조각" }, desc: { ru: "200 г", en: "200 g", kr: "200g" }, price: 13000, image: "./images/grill.png" },
      { id: 9, name: { ru: "Баранина рёбра", en: "Lamb ribs", kr: "양갈비" }, desc: { ru: "200 г", en: "200 g", kr: "200g" }, price: 13000, image: "./images/grill.png" },
      { id: 10, name: { ru: "Сет шашлыки", en: "Skewer set", kr: "꼬치 세트" }, desc: { ru: "Большой сет", en: "Large set", kr: "대형 세트" }, price: 81000, image: "./images/grill.png" }
    ]
  },
  {
    category: "pilaf",
    categoryLabel: { ru: "Плов и основные", en: "Pilaf & mains", kr: "플로브와 메인" },
    items: [
      { id: 11, name: { ru: "Ошли джиз", en: "Oshli djiz", kr: "오슐리 지즈" }, desc: { ru: "Фирменное блюдо", en: "Signature dish", kr: "대표 요리" }, price: 21000, image: "./images/2.png" },
      { id: 12, name: { ru: "Плов сет", en: "Pilaf set", kr: "플로브 세트" }, desc: { ru: "Плов с добавками", en: "Pilaf set", kr: "플로브 세트" }, price: 21000, image: "./images/2.png" },
      { id: 13, name: { ru: "Плов с казы", en: "Pilaf with kazy", kr: "카지 플로브" }, desc: { ru: "Плов с казы", en: "Pilaf with kazy", kr: "카지 플로브" }, price: 21000, image: "./images/2.png" },
      { id: 14, name: { ru: "Плов", en: "Pilaf", kr: "플로브" }, desc: { ru: "Классический плов", en: "Classic pilaf", kr: "클래식 플로브" }, price: 19500, image: "./images/2.png" },
      { id: 15, name: { ru: "Ханум", en: "Khanum", kr: "하눔" }, desc: { ru: "Паровой рулет", en: "Steamed roll", kr: "찐 롤" }, price: 19500, image: "./images/2.png" },
      { id: 16, name: { ru: "Казан кабоб", en: "Kazan kabob", kr: "카잔 카보브" }, desc: { ru: "Мясо с картофелем", en: "Meat with potatoes", kr: "고기와 감자" }, price: 22500, image: "./images/2.png" },
      { id: 17, name: { ru: "Джиз-биз", en: "Djiz-biz", kr: "지즈비즈" }, desc: { ru: "Жареное мясное блюдо", en: "Fried meat dish", kr: "볶은 고기 요리" }, price: 19500, image: "./images/2.png" },
      { id: 18, name: { ru: "Манты", en: "Manti", kr: "만티" }, desc: { ru: "Паровые манты", en: "Steamed dumplings", kr: "찐 만두" }, price: 19500, image: "./images/2.png" },
      { id: 19, name: { ru: "Соленья (small)", en: "Pickles small", kr: "피클 소" }, desc: { ru: "Небольшая порция", en: "Small portion", kr: "소 사이즈" }, price: 7500, image: "./images/2.png" }
    ]
  },
  {
    category: "soups",
    categoryLabel: { ru: "Первые блюда", en: "Soups", kr: "수프" },
    items: [
      { id: 20, name: { ru: "Солянка классическая", en: "Classic solyanka", kr: "솔랸카" }, desc: { ru: "Большая порция", en: "Large portion", kr: "큰 사이즈" }, price: 12000, image: "./images/3.png" },
      { id: 21, name: { ru: "Шурпа по-восточному", en: "Eastern shurpa", kr: "쇼르파" }, desc: { ru: "Большая порция", en: "Large portion", kr: "큰 사이즈" }, price: 13500, image: "./images/3.png" },
      { id: 22, name: { ru: "Кукси из говядины", en: "Kuksi with beef", kr: "국시" }, desc: { ru: "На соевом бульоне", en: "On soy broth", kr: "간장 육수" }, price: 15000, image: "./images/3.png" },
      { id: 23, name: { ru: "Лагман с бульоном", en: "Lagman with broth", kr: "라그만" }, desc: { ru: "Домашняя лапша", en: "Homemade noodles", kr: "수타면" }, price: 19500, image: "./images/3.png" },
      { id: 24, name: { ru: "Чучвара из говядины", en: "Chuchvara with beef", kr: "추츠바라" }, desc: { ru: "Пельмешки в бульоне", en: "Mini dumplings in broth", kr: "육수 만두" }, price: 13500, image: "./images/3.png" },
      { id: 25, name: { ru: "Борщ ханский", en: "Royal borsh", kr: "보르쉬" }, desc: { ru: "Борщ с говядиной", en: "Borsh with beef", kr: "소고기 보르쉬" }, price: 12000, image: "./images/3.png" }
    ]
  },
  {
    category: "salads",
    categoryLabel: { ru: "Салаты", en: "Salads", kr: "샐러드" },
    items: [
      { id: 26, name: { ru: "Смак", en: "Smak", kr: "스막" }, desc: { ru: "350 г", en: "350 g", kr: "350g" }, price: 15000, image: "./images/4.png" },
      { id: 27, name: { ru: "Оливье классическое", en: "Olivier classic", kr: "올리비에" }, desc: { ru: "350 г", en: "350 g", kr: "350g" }, price: 15000, image: "./images/4.png" },
      { id: 28, name: { ru: "Цезарь с курицей", en: "Caesar with chicken", kr: "치킨 시저 샐러드" }, desc: { ru: "350 г", en: "350 g", kr: "350g" }, price: 15000, image: "./images/4.png" },
      { id: 29, name: { ru: "Греческий", en: "Greek", kr: "그릭 샐러드" }, desc: { ru: "350 г", en: "350 g", kr: "350g" }, price: 15000, image: "./images/4.png" },
      { id: 30, name: { ru: "Мужской каприз", en: "Men's caprice", kr: "맨스 카프리스" }, desc: { ru: "400 г", en: "400 g", kr: "400g" }, price: 25500, image: "./images/4.png" },
      { id: 31, name: { ru: "Капрезе", en: "Caprese", kr: "카프레제" }, desc: { ru: "400 г", en: "400 g", kr: "400g" }, price: 18000, image: "./images/4.png" },
      { id: 32, name: { ru: "Острое вея", en: "Spicy salad", kr: "매운 샐러드" }, desc: { ru: "350 г", en: "350 g", kr: "350g" }, price: 15000, image: "./images/4.png" },
      { id: 33, name: { ru: "Хе из куриной грудки", en: "Chicken he", kr: "닭가슴살 무침" }, desc: { ru: "350 г", en: "350 g", kr: "350g" }, price: 15000, image: "./images/4.png" },
      { id: 34, name: { ru: "Хе из говядины", en: "Beef he", kr: "소고기 무침" }, desc: { ru: "350 г", en: "350 g", kr: "350g" }, price: 18000, image: "./images/4.png" },
      { id: 35, name: { ru: "Морковь-ча", en: "Carrot-cha", kr: "당근 무침" }, desc: { ru: "350 г", en: "350 g", kr: "350g" }, price: 13500, image: "./images/4.png" },
      { id: 36, name: { ru: "Шакароб", en: "Shakarob", kr: "샤카롭" }, desc: { ru: "350 г", en: "350 g", kr: "350g" }, price: 13500, image: "./images/4.png" },
      { id: 37, name: { ru: "Свежий ачичук", en: "Fresh achichuk", kr: "아치축" }, desc: { ru: "350 г", en: "350 g", kr: "350g" }, price: 13500, image: "./images/4.png" }
    ]
  },
  {
    category: "cold",
    categoryLabel: { ru: "Холодные закуски", en: "Cold appetizers", kr: "차가운 전채" },
    items: [
      { id: 38, name: { ru: "Селёдка с картошкой", en: "Herring with potatoes", kr: "감자와 청어" }, desc: { ru: "450 г", en: "450 g", kr: "450g" }, price: 22500, image: "./images/5.png" },
      { id: 39, name: { ru: "Маринованное ассорти", en: "Marinated assorted", kr: "모둠 피클" }, desc: { ru: "650 г", en: "650 g", kr: "650g" }, price: 18000, image: "./images/5.png" },
      { id: 40, name: { ru: "Русская закуска", en: "Russian starter", kr: "러시안 스타터" }, desc: { ru: "400 г", en: "400 g", kr: "400g" }, price: 21000, image: "./images/5.png" },
      { id: 41, name: { ru: "Соте из баклажан", en: "Eggplant sauté", kr: "가지 소테" }, desc: { ru: "500 г", en: "500 g", kr: "500g" }, price: 18000, image: "./images/5.png" },
      { id: 42, name: { ru: "Селёдка под шубой", en: "Herring under fur coat", kr: "청어 샐러드" }, desc: { ru: "400 г", en: "400 g", kr: "400g" }, price: 18000, image: "./images/5.png" },
      { id: 43, name: { ru: "Маринованные огурцы", en: "Pickled cucumbers", kr: "오이 피클" }, desc: { ru: "350 г", en: "350 g", kr: "350g" }, price: 15000, image: "./images/5.png" },
      { id: 44, name: { ru: "Французский салат", en: "French salad", kr: "프렌치 샐러드" }, desc: { ru: "600 г", en: "600 g", kr: "600g" }, price: 19500, image: "./images/5.png" },
      { id: 45, name: { ru: "Холодец говяжий", en: "Beef aspic", kr: "소고기 아스픽" }, desc: { ru: "400 г", en: "400 g", kr: "400g" }, price: 15000, image: "./images/5.png" },
      { id: 46, name: { ru: "Винегрет", en: "Vinaigrette", kr: "비네그레트" }, desc: { ru: "350 г", en: "350 g", kr: "350g" }, price: 13500, image: "./images/5.png" },
      { id: 47, name: { ru: "Свежая нарезка", en: "Fresh vegetable plate", kr: "신선한 야채 플레이트" }, desc: { ru: "500 г", en: "500 g", kr: "500g" }, price: 19500, image: "./images/5.png" }
    ]
  },
  {
    category: "special",
    categoryLabel: { ru: "Специальные блюда", en: "Special dishes", kr: "스페셜 메뉴" },
    items: [
      { id: 48, name: { ru: "Манты из говядины", en: "Beef manti", kr: "소고기 만티" }, desc: { ru: "Паровые манты", en: "Steamed dumplings", kr: "찐 만두" }, price: 13500, image: "./images/6.png" },
      { id: 49, name: { ru: "Ханум по-узбекски", en: "Uzbek khanum", kr: "우즈베크식 하눔" }, desc: { ru: "Традиционный ханум", en: "Traditional khanum", kr: "전통 하눔" }, price: 19500, image: "./images/6.png" },
      { id: 50, name: { ru: "Плов чайханский", en: "Chaikhona pilaf", kr: "차이호나 플로브" }, desc: { ru: "Фирменный плов", en: "House pilaf", kr: "하우스 플로브" }, price: 15000, image: "./images/6.png" },
      { id: 51, name: { ru: "Джиз биз по-ташкентски", en: "Tashkent djiz-biz", kr: "타슈켄트식 지즈비즈" }, desc: { ru: "Традиционное мясное блюдо", en: "Traditional meat dish", kr: "전통 고기 요리" }, price: 19500, image: "./images/6.png" },
      { id: 52, name: { ru: "Казан кабоб", en: "Kazan kabob", kr: "카잔 카보브" }, desc: { ru: "Мясо и картофель", en: "Meat and potatoes", kr: "고기와 감자" }, price: 22500, image: "./images/6.png" },
      { id: 53, name: { ru: "Голубцы", en: "Stuffed cabbage rolls", kr: "양배추 롤" }, desc: { ru: "С соусом", en: "With sauce", kr: "소스 포함" }, price: 9000, image: "./images/6.png" },
      { id: 54, name: { ru: "Вареники с картошкой", en: "Potato vareniki", kr: "감자 바레니키" }, desc: { ru: "Со сметаной", en: "With sour cream", kr: "사워크림 포함" }, price: 18000, image: "./images/6.png" },
      { id: 55, name: { ru: "Цыпленок табака", en: "Chicken tabaka", kr: "치킨 타바카" }, desc: { ru: "С картофелем фри", en: "With fries", kr: "감자튀김 포함" }, price: 27000, image: "./images/6.png" },
      { id: 56, name: { ru: "Бешбармак по-казахски", en: "Beshbarmak", kr: "베쉬바르막" }, desc: { ru: "С казы", en: "With kazy", kr: "카지 포함" }, price: 24000, image: "./images/6.png" }
    ]
  },
  {
    category: "mains",
    categoryLabel: { ru: "Вторые блюда и гарниры", en: "Main dishes & sides", kr: "메인과 사이드" },
    items: [
      { id: 57, name: { ru: "Яичница 2 штуки", en: "2 eggs", kr: "계란 2개" }, desc: { ru: "Гарнир", en: "Side", kr: "사이드" }, price: 6000, image: "./images/7.png" },
      { id: 58, name: { ru: "Пюре", en: "Mashed potatoes", kr: "감자 퓌레" }, desc: { ru: "Гарнир", en: "Side", kr: "사이드" }, price: 7000, image: "./images/7.png" },
      { id: 59, name: { ru: "Гречка", en: "Buckwheat", kr: "메밀" }, desc: { ru: "Гарнир", en: "Side", kr: "사이드" }, price: 7000, image: "./images/7.png" },
      { id: 60, name: { ru: "Картофель фри", en: "French fries", kr: "감자튀김" }, desc: { ru: "Гарнир", en: "Side", kr: "사이드" }, price: 7000, image: "./images/7.png" },
      { id: 61, name: { ru: "Картофель айдахо", en: "Rustic potatoes", kr: "웨지 감자" }, desc: { ru: "Гарнир", en: "Side", kr: "사이드" }, price: 7000, image: "./images/7.png" },
      { id: 62, name: { ru: "Рис", en: "Rice", kr: "밥" }, desc: { ru: "Гарнир", en: "Side", kr: "사이드" }, price: 6000, image: "./images/7.png" },
      { id: 63, name: { ru: "Бризоль из говядины", en: "Beef brizol", kr: "소고기 브리졸" }, desc: { ru: "С гарниром", en: "With garnish", kr: "가니시 포함" }, price: 21000, image: "./images/7.png" },
      { id: 64, name: { ru: "Фрикасе из курицы с шампиньонами", en: "Chicken fricassee", kr: "치킨 프리카세" }, desc: { ru: "Курица с грибами", en: "Chicken with mushrooms", kr: "버섯 치킨" }, price: 15000, image: "./images/7.png" },
      { id: 65, name: { ru: "Бифштекс с яйцом", en: "Beef steak with egg", kr: "계란 비프스테이크" }, desc: { ru: "Сытное блюдо", en: "Hearty dish", kr: "든든한 요리" }, price: 15000, image: "./images/7.png" },
      { id: 66, name: { ru: "Гуляш из говядины", en: "Beef goulash", kr: "소고기 굴라시" }, desc: { ru: "Говядина в соусе", en: "Beef stew", kr: "소고기 스튜" }, price: 15000, image: "./images/7.png" },
      { id: 67, name: { ru: "Котлета из говядины", en: "Beef cutlet", kr: "소고기 커틀릿" }, desc: { ru: "С гарниром", en: "With garnish", kr: "가니시 포함" }, price: 13500, image: "./images/7.png" },
      { id: 68, name: { ru: "Мясо по-французски", en: "French-style meat", kr: "프렌치 스타일 고기" }, desc: { ru: "Запеченное мясо", en: "Baked meat", kr: "오븐 구이 고기" }, price: 21000, image: "./images/7.png" },
      { id: 69, name: { ru: "Kaurma chuchwara", en: "Kaurma chuchwara", kr: "카우르마 추츠바라" }, desc: { ru: "Традиционное блюдо", en: "Traditional dish", kr: "전통 요리" }, price: 18000, image: "./images/7.png" }
    ]
  },
  {
    category: "desserts",
    categoryLabel: { ru: "Хлеб, десерты и напитки", en: "Bread, desserts & drinks", kr: "빵, 디저트, 음료" },
    items: [
      { id: 70, name: { ru: "Самса солёная", en: "Salted samsa", kr: "짭짤한 삼사" }, desc: { ru: "1 штука", en: "1 piece", kr: "1개" }, price: 7000, image: "./images/8.png" },
      { id: 71, name: { ru: "Лепешка молочная", en: "Milk flatbread", kr: "밀크 플랫브레드" }, desc: { ru: "Свежая лепешка", en: "Fresh flatbread", kr: "신선한 빵" }, price: 4000, image: "./images/8.png" },
      { id: 72, name: { ru: "Медовый", en: "Honey cake", kr: "허니 케이크" }, desc: { ru: "Десерт", en: "Dessert", kr: "디저트" }, price: 13000, image: "./images/8.png" },
      { id: 73, name: { ru: "Наполеон", en: "Napoleon", kr: "나폴레옹" }, desc: { ru: "Десерт", en: "Dessert", kr: "디저트" }, price: 13000, image: "./images/8.png" },
      { id: 74, name: { ru: "Чай чёрный / зелёный", en: "Black / green tea", kr: "홍차 / 녹차" }, desc: { ru: "Чайник", en: "Teapot", kr: "티포트" }, price: 3000, image: "./images/8.png" },
      { id: 75, name: { ru: "Чай с молоком", en: "Milk tea", kr: "밀크티" }, desc: { ru: "Традиционный чай", en: "Traditional tea", kr: "전통 차" }, price: 5000, image: "./images/8.png" },
      { id: 76, name: { ru: "Кефир 0.5L", en: "Kefir 0.5L", kr: "케피어 0.5L" }, desc: { ru: "Кисломолочный напиток", en: "Fermented drink", kr: "발효 음료" }, price: 9000, image: "./images/8.png" },
      { id: 77, name: { ru: "Cola / Fanta / Saida", en: "Cola / Fanta / Saida", kr: "콜라 / 환타 / 사이다" }, desc: { ru: "330 мл", en: "330 ml", kr: "330ml" }, price: 3000, image: "./images/8.png" },
      { id: 78, name: { ru: "Компот 1L", en: "Compote 1L", kr: "콤포트 1L" }, desc: { ru: "Узбекский компот", en: "Uzbek compote", kr: "우즈베크 콤포트" }, price: 13000, image: "./images/8.png" }
    ]
  }
];