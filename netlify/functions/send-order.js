exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
    const body = JSON.parse(event.body);

    const {
      customerName,
      customerPhone,
      comment,
      deliveryType,
      items,
      total
    } = body;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing Telegram environment variables" })
      };
    }

    const deliveryMap = {
      pickup: "Самовывоз",
      hall: "В зал / к столу",
      delivery: "Доставка"
    };

    const orderLines = items
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} — ${item.qty} x ₩${Number(item.price).toLocaleString("ko-KR")}`
      )
      .join("\n");

    const text = [
      "🍽 Новый заказ из Chaikhona",
      "",
      `👤 Имя: ${customerName || "-"}`,
      `📞 Телефон: ${customerPhone || "-"}`,
      `🚚 Способ получения: ${deliveryMap[deliveryType] || "-"}`,
      `📝 Комментарий: ${comment || "-"}`,
      "",
      "📋 Заказ:",
      orderLines,
      "",
      `💰 Итого: ₩${Number(total).toLocaleString("ko-KR")}`
    ].join("\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text
        })
      }
    );

    const telegramData = await telegramResponse.json();

    if (!telegramData.ok) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Telegram API error", details: telegramData })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};