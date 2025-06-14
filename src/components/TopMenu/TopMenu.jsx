import { InputSearch } from "../InputSearch/InputSearch";
import style from "./TopMenu.module.css"
import { useEffect, useRef, useState } from "react"


function TopMenu({ setTextSearch, searchArticles, textError, openMenu, setOpenMenu, setOpenMenuMobile }) {

    const menuRef = useRef(null);
    const menuIconRef = useRef(null);

    function closeMenu(e) {
        menuIconRef.current.contains(e.target) && setOpenMenu(p => !p);
        menuIconRef.current.contains(e.target) && setOpenMenuMobile(p => !p);
        !menuRef.current.contains(e.target) && !menuIconRef.current.contains(e.target) && setOpenMenu(false);
    };

    useEffect(() => {
        document.body.addEventListener("mousedown", closeMenu);

        return () => {
            document.body.removeEventListener("mousedown", closeMenu);
        }
    }, []);

    return <>
        <div className={style.TopMenu}>

            <div ref={menuIconRef} className={style.menuLine}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={style.inputSearch}>
                <InputSearch
                    setTextSearch={setTextSearch}
                    searchArticles={searchArticles}
                    textError={textError}
                />
            </div>

            <div ref={menuRef} className={openMenu ? `${style.menu} ${style.flex}` : style.menu}>
                <a className={style.topMenuA} href="https://app.insfamily.ru/faq/index/">Главная</a>
                <a className={style.topMenuA} href="https://app.insfamily.ru/faq/index/">Тестирования</a>
                <a className={style.topMenuA} href="/" target="blank_">СРМ</a>
                <a className={style.topMenuA} href="https://insfamily.ru/" target="blank_">Наш сайт</a>
            </div>

        </div>
    </>
};


export { TopMenu }
