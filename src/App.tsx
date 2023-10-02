import './App.scss';
import HeaderBlock from "./components/header/headerBlock";
import MainBlock from "./components/main/mainBlock";
import FooterBlock from "./components/footer/footerBlock";
import React, {useState} from "react";
import Burger from "./components/burgerMenu/burger";
function App() {
    const [width, ] = useState(window.innerWidth);
    const [active, setActive] = useState(false);
    const items = [{value: "О нас", href: "#aboutUs"},
        {value: "Проекты", href: "#project"},
        {value: "Правовая информация", href: "#info"},
        {value: "Контакты", href: "#contact"}];
    return (
      <div className="App">
        <HeaderBlock width={width} setActive={setActive} active={active}/>
          <Burger header={"asd"} items={items} active={active} setActive={setActive}/>
        <MainBlock/>
        <FooterBlock/>
      </div>
  );
}

export default App;