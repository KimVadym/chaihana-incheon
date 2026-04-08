const CATEGORY_ICONS = {
  grill: "fa-fire",
  pilaf: "fa-bowl-rice",
  soups: "fa-bowl-food",
  salads: "fa-seedling",
  cold: "fa-cheese",
  special: "fa-star",
  mains: "fa-drumstick-bite",
  desserts: "fa-cake-candles"
};

const translations = {
  ru: {
    badge: "Традиционная центральноазиатская кухня",
    title: "Добро пожаловать в Чайхану",
    subtitle: "Вкусная еда, уютная атмосфера и настоящий вкус в Инчхоне.",
    cartTitle: "Ваш заказ",
    cartEmpty: "Корзина пуста",
    total: "Итого",
    clearCart: "Очистить корзину",
    add: "Добавить",
    checkout: "Оформить заказ",
    modalTitle: "Оформление заказа",
    nameLabel: "Имя",
    phoneLabel: "Телефон",
    commentLabel: "Комментарий",
    deliveryLabel: "Способ получения",
    sendOrder: "Отправить заказ",
    orderSent: "Заказ успешно отправлен",
    orderError: "Ошибка отправки заказа",
    yourOrder: "Ваш заказ",
    pickup: "Самовывоз",
    hall: "В зал / к столу",
    delivery: "Доставка",
    enterName: "Введите имя",
    enterPhone: "Введите телефон",
    enterComment: "Комментарий к заказу"
  },
  en: {
    badge: "Traditional Central Asian Cuisine",
    title: "Welcome to Chaihana",
    subtitle: "Delicious food, cozy atmosphere and authentic taste in Incheon.",
    cartTitle: "Your order",
    cartEmpty: "Cart is empty",
    total: "Total",
    clearCart: "Clear cart",
    add: "Add",
    checkout: "Checkout",
    modalTitle: "Checkout",
    nameLabel: "Name",
    phoneLabel: "Phone",
    commentLabel: "Comment",
    deliveryLabel: "Pickup type",
    sendOrder: "Send order",
    orderSent: "Order sent successfully",
    orderError: "Order sending failed",
    yourOrder: "Your order",
    pickup: "Pickup",
    hall: "Table service",
    delivery: "Delivery",
    enterName: "Enter your name",
    enterPhone: "Enter phone",
    enterComment: "Comment to order"
  },
  kr: {
    badge: "전통 중앙아시아 요리",
    title: "차이호나에 오신 것을 환영합니다",
    subtitle: "인천에서 즐기는 맛있는 음식, 아늑한 분위기, 정통의 맛.",
    cartTitle: "주문 내역",
    cartEmpty: "장바구니가 비어 있습니다",
    total: "합계",
    clearCart: "장바구니 비우기",
    add: "추가",
    checkout: "주문하기",
    modalTitle: "주문 정보",
    nameLabel: "이름",
    phoneLabel: "전화번호",
    commentLabel: "메모",
    deliveryLabel: "수령 방법",
    sendOrder: "주문 보내기",
    orderSent: "주문이 성공적으로 전송되었습니다",
    orderError: "주문 전송 실패",
    yourOrder: "주문 내역",
    pickup: "포장",
    hall: "홀 주문",
    delivery: "배달",
    enterName: "이름 입력",
    enterPhone: "전화번호 입력",
    enterComment: "주문 메모"
  }
};

let currentLang = "ru";
let cart = [];

const topCategoryNav = document.getElementById("topCategoryNav");
const mobileCategoryNav = document.getElementById("mobileCategoryNav");
const menuGrid = document.getElementById("menuGrid");
const langButtons = document.querySelectorAll(".lang-btn");

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

const mobileCartItems = document.getElementById("mobileCartItems");
const mobileCartTotal = document.getElementById("mobileCartTotal");
const mobileCartCount = document.getElementById("mobileCartCount");

const clearCartBtn = document.getElementById("clearCartBtn");
const mobileClearCartBtn = document.getElementById("mobileClearCartBtn");

const mobileCartBtn = document.getElementById("mobileCartBtn");
const mobileCartPanel = document.getElementById("mobileCartPanel");
const mobileCartOverlay = document.getElementById("mobileCartOverlay");
const mobileCartCloseBtn = document.getElementById("mobileCartCloseBtn");

const orderModal = document.getElementById("orderModal");
const openOrderModalBtn = document.getElementById("openOrderModalBtn");
const mobileOpenOrderModalBtn = document.getElementById("mobileOpenOrderModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("modalOverlay");
const orderForm = document.getElementById("orderForm");
const submitOrderBtn = document.getElementById("submitOrderBtn");
const modalOrderList = document.getElementById("modalOrderList");
const modalOrderTotal = document.getElementById("modalOrderTotal");
const modalOrderCount = document.getElementById("modalOrderCount");
const toast = document.getElementById("toast");

function getText(value) {
  if (typeof value === "string") return value;
  return value[currentLang] || value.ru || "";
}

function formatPrice(price) {
  return `₩${Number(price).toLocaleString("ko-KR")}`;
}

function showToast(message, type = "success") {
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  setTimeout(() => {
    toast.className = "toast";
  }, 3000);
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });

  const customerName = document.getElementById("customerName");
  const customerPhone = document.getElementById("customerPhone");
  const comment = document.getElementById("comment");
  const deliveryType = document.getElementById("deliveryType");

  if (customerName) customerName.placeholder = translations[currentLang].enterName;
  if (customerPhone) customerPhone.placeholder = translations[currentLang].enterPhone;
  if (comment) comment.placeholder = translations[currentLang].enterComment;

  if (deliveryType) {
    const currentValue = deliveryType.value || "pickup";
    deliveryType.innerHTML = `
      <option value="pickup">${translations[currentLang].pickup}</option>
      <option value="hall">${translations[currentLang].hall}</option>
      <option value="delivery">${translations[currentLang].delivery}</option>
    `;
    deliveryType.value = currentValue;
  }
}

function renderTopCategoryNav() {
  if (!topCategoryNav) return;

  topCategoryNav.innerHTML = MENU_DATA.map(section => {
    const icon = CATEGORY_ICONS[section.category] || "fa-utensils";

    return `
      <button class="top-category-btn" data-target="${section.category}">
        <i class="fa-solid ${icon}"></i>
        <span>${getText(section.categoryLabel)}</span>
      </button>
    `;
  }).join("");

  topCategoryNav.querySelectorAll(".top-category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.target;
      document.getElementById(`section-${id}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}

function renderMobileCategoryNav() {
  if (!mobileCategoryNav) return;

  mobileCategoryNav.innerHTML = MENU_DATA.map((section) => {
    const icon = CATEGORY_ICONS[section.category] || "fa-utensils";
    return `
      <button
        class="cat-icon-btn"
        data-target="${section.category}"
        aria-label="${getText(section.categoryLabel)}"
      >
        <i class="fa-solid ${icon}"></i>
      </button>
    `;
  }).join("");

  mobileCategoryNav.querySelectorAll(".cat-icon-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      document.getElementById(`section-${targetId}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}

function getCartQty(itemId) {
  const found = cart.find((item) => item.id === itemId);
  return found ? found.qty : 0;
}

function renderMenu() {
  menuGrid.innerHTML = MENU_DATA.map((section) => `
    <section class="menu-category-section" id="section-${section.category}">
      <h2 class="menu-category-title">${getText(section.categoryLabel)}</h2>
      <div class="menu-grid">
        ${section.items.map((item) => `
          <article class="card">
            <div class="card-image">
              <img src="${item.image}" alt="${getText(item.name)}">
            </div>
            <div class="card-body">
              <div class="card-top">
                <h3 class="card-title">${getText(item.name)}</h3>
                <div class="card-price">${formatPrice(item.price)}</div>
              </div>
              <p class="card-desc">${getText(item.desc)}</p>
              <div class="card-actions">
                <div class="qty-control">
                  <button class="qty-btn" data-minus="${item.id}">-</button>
                  <span class="qty-value" id="qty-${item.id}">${getCartQty(item.id)}</span>
                  <button class="qty-btn" data-plus="${item.id}">+</button>
                </div>
                <button class="order-btn" data-add="${item.id}">
                  ${translations[currentLang].add}
                </button>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");

  document.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => addToCart(Number(button.dataset.add), 1));
  });

  document.querySelectorAll("[data-plus]").forEach((button) => {
    button.addEventListener("click", () => addToCart(Number(button.dataset.plus), 1));
  });

  document.querySelectorAll("[data-minus]").forEach((button) => {
    button.addEventListener("click", () => addToCart(Number(button.dataset.minus), -1));
  });

  setupSectionObserver();
}

function findItemById(id) {
  for (const section of MENU_DATA) {
    const found = section.items.find((item) => item.id === id);
    if (found) return found;
  }
  return null;
}

function addToCart(itemId, delta) {
  const item = findItemById(itemId);
  if (!item) return;

  const existing = cart.find((cartItem) => cartItem.id === itemId);

  if (existing) {
    existing.qty += delta;
    if (existing.qty <= 0) {
      cart = cart.filter((cartItem) => cartItem.id !== itemId);
    }
  } else if (delta > 0) {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      qty: 1
    });
  }

  renderCart();
  updateCardQtyValues();
}

function updateCardQtyValues() {
  MENU_DATA.forEach((section) => {
    section.items.forEach((item) => {
      const el = document.getElementById(`qty-${item.id}`);
      if (el) el.textContent = getCartQty(item.id);
    });
  });
}

function renderCartListHTML() {
  if (cart.length === 0) {
    return `<p class="cart-empty">${translations[currentLang].cartEmpty}</p>`;
  }

  return cart.map((item) => `
    <div class="cart-item">
      <div>
        <div class="cart-item-name">${getText(item.name)}</div>
        <div class="cart-item-meta">${formatPrice(item.price)} × ${item.qty}</div>
      </div>
      <div class="cart-item-actions">
        <button class="cart-mini-btn" data-cart-minus="${item.id}">-</button>
        <span>${item.qty}</span>
        <button class="cart-mini-btn" data-cart-plus="${item.id}">+</button>
      </div>
    </div>
  `).join("");
}

function attachCartActionListeners(root = document) {
  root.querySelectorAll("[data-cart-minus]").forEach((button) => {
    button.addEventListener("click", () => addToCart(Number(button.dataset.cartMinus), -1));
  });

  root.querySelectorAll("[data-cart-plus]").forEach((button) => {
    button.addEventListener("click", () => addToCart(Number(button.dataset.cartPlus), 1));
  });
}

function renderCart() {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  cartItems.innerHTML = renderCartListHTML();
  mobileCartItems.innerHTML = renderCartListHTML();

  attachCartActionListeners(document);

  cartTotal.textContent = formatPrice(total);
  mobileCartTotal.textContent = formatPrice(total);
  cartCount.textContent = count;
  mobileCartCount.textContent = count;

  renderModalOrderSummary();
}

function renderModalOrderSummary() {
  if (!modalOrderList || !modalOrderTotal || !modalOrderCount) return;

  if (cart.length === 0) {
    modalOrderList.innerHTML = `<p class="cart-empty">${translations[currentLang].cartEmpty}</p>`;
    modalOrderTotal.textContent = "₩0";
    modalOrderCount.textContent = "0";
    return;
  }

  modalOrderList.innerHTML = cart.map((item) => `
    <div class="modal-order-item">
      <span>${getText(item.name)} × ${item.qty}</span>
      <strong>${formatPrice(item.price * item.qty)}</strong>
    </div>
  `).join("");

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  modalOrderTotal.textContent = formatPrice(total);
  modalOrderCount.textContent = count;
}

function openMobileCart() {
  mobileCartPanel.classList.remove("hidden");
}

function closeMobileCart() {
  mobileCartPanel.classList.add("hidden");
}

function openModal() {
  if (cart.length === 0) {
    showToast(translations[currentLang].cartEmpty, "error");
    return;
  }
  renderModalOrderSummary();
  closeMobileCart();
  orderModal.classList.remove("hidden");
}

function closeModal() {
  orderModal.classList.add("hidden");
}

async function submitOrder(event) {
  event.preventDefault();

  if (cart.length === 0) {
    showToast(translations[currentLang].cartEmpty, "error");
    return;
  }

  const payload = {
    lang: currentLang,
    customerName: document.getElementById("customerName").value.trim(),
    customerPhone: document.getElementById("customerPhone").value.trim(),
    comment: document.getElementById("comment").value.trim(),
    deliveryType: document.getElementById("deliveryType").value,
    items: cart.map((item) => ({
      name: getText(item.name),
      price: item.price,
      qty: item.qty
    })),
    total: cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  };

  submitOrderBtn.disabled = true;

  try {
    const response = await fetch("/.netlify/functions/send-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error("Request failed");

    showToast(translations[currentLang].orderSent, "success");
    cart = [];
    renderCart();
    updateCardQtyValues();
    orderForm.reset();
    closeModal();
  } catch (error) {
    console.error(error);
    showToast(translations[currentLang].orderError, "error");
  } finally {
    submitOrderBtn.disabled = false;
  }
}

function setLanguage(lang) {
  currentLang = lang;

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  applyTranslations();
  renderTopCategoryNav();
  renderMobileCategoryNav();
  renderMenu();
  renderCart();
}

function setupSectionObserver() {
  const buttons = [
    ...document.querySelectorAll(".cat-icon-btn"),
    ...document.querySelectorAll(".top-category-btn")
  ];

  const sections = [...document.querySelectorAll(".menu-category-section")];

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      const id = visible.target.id.replace("section-", "");
      buttons.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.target === id);
      });
    },
    {
      rootMargin: "-18% 0px -62% 0px",
      threshold: [0.2, 0.35, 0.5, 0.7]
    }
  );

  sections.forEach((section) => observer.observe(section));
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

clearCartBtn.addEventListener("click", () => {
  cart = [];
  renderCart();
  updateCardQtyValues();
});

mobileClearCartBtn.addEventListener("click", () => {
  cart = [];
  renderCart();
  updateCardQtyValues();
});

mobileCartBtn.addEventListener("click", openMobileCart);
mobileCartOverlay.addEventListener("click", closeMobileCart);
mobileCartCloseBtn.addEventListener("click", closeMobileCart);

openOrderModalBtn.addEventListener("click", openModal);
mobileOpenOrderModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);
orderForm.addEventListener("submit", submitOrder);

setLanguage("ru");