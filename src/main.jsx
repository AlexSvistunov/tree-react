
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


// newest(updated at) + write this sorting function by myself
// think about apply filters btn
// фильтер применяется по цене которая старая если есть скидка
// select change handler is too long


//необязательные доработки: (hover, focus, active), всякие спиннеры мб зеленые, read more и когда тайтл не влазиет, название переменных, чистота кода
//средние доработки:  select, select bug, redirect если продукта нет
// важные доработки: если ввожу product 101 то падает приложение, а не на 404

// под вопросом: 
//нет синхронизации с корзины в singleProduct количество, так как там по умолчанию 1
// хранение в localStorage или redux библиотека, или вообще ничего не делать так как нет авторизации

// localStorage
// sort newest

