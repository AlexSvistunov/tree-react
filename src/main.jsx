
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


// header element active with react router NavLink component
// cart counter in circle
// all categories line
// sale request instead of static
// yandex or google map
// categories link from homepage
//categories page differs from categories section(button)
// section categories has 4 category as the layout in figma has, but there's button to check out all the sales and categories
// make cards categories
// product card component or css class
// sort just class sort

// maybe I should pass props to categories and AllCategories with data, useEffect, ..., etc should be in the page component
// <Contact> everywhere even in allProducts, allSales, cart etc
// filtration need to be with object(complex filtration combinations)


// newest(updated at) + write this sorting function by myself
// think about apply filters btn
// фильтер применяется по цене которая старая если есть скидка
// select change handler is too long

// бывает падает приложение из-за shopping cart undefined image
// округлить сумму в корзине, а то бывает 58.42384328423842382438


//необязательные доработки: (hover, focus, active), всякие спиннеры мб зеленые, read more и когда тайтл не влазиет
// маленькие доработки: checkbox, когда корзина пустая
//средние доработки: отправка get a discount, select, select bug, заказ оформлен и после этого (наверное) корзина пустая
// важные доработки: если ввожу product 101 то падает приложение, а не на 404, плюсик минусик кол-во товаров

// хранение в localStorage или redux библиотека, или вообще ничего не делать так как нет авторизации

// может уйти в минус цена товара и количество
// было бы удобно перейти из корзины в товар(по карточке)
//нет синхронизации с корзины в singleProduct количество, так как там по умолчанию 1
//можно добавить много раз товар))
// в sale нет added