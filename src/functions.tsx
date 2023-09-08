/**
   * Обработка нажатия на кнопку Заказать
   */
export const scrollToOrderForm = () => {
    document
      .getElementById("order-form")
      .scrollIntoView({ behavior: "smooth" });
  };