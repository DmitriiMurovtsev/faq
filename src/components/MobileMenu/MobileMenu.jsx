import style from "./MobileMenu.module.css";
import { LeftMenu } from "../LeftMenu/LeftMenu";
import iconClose from "../../assets/icon-delete-red.png"
import iconNext from "../../assets/icon-next-page.png"
import { useEffect, useState, useRef } from "react";


function MobileMenu({
    admin,
    setArticle,
    searchArticles,
    setTextSearch,
    textError,
    article,
    setOpenMenu,
}) {

    const [openNavigate, setOpenNavigate] = useState(false);

    const containerRef = useRef(null);
    const closeRef = useRef(null);

    function closeMenu(e) {
        closeRef.current.contains(e.target) && setOpenMenu(false);
        !containerRef.current.contains(e.target) && setOpenMenu(false);
    };

    useEffect(() => {
        document.body.addEventListener("mousedown", closeMenu);

        return () => {
            document.body.removeEventListener("mousedown", closeMenu);
        };
    }, []);

    return <>
        <div ref={containerRef} className={style.container}>

            <img ref={closeRef} className={style.iconClose} src={iconClose} onClick={() => setOpenMenu(false)} />

            <div className={style.navigate}>

                <div className={style.title}>
                    <div onClick={() => { setOpenNavigate(p => !p) }}>Навигация</div>
                    {openNavigate && <img className={style.iconUp} onClick={() => { setOpenNavigate(p => !p) }} src={iconNext} />}
                    {!openNavigate && <img className={style.iconDown} onClick={() => { setOpenNavigate(p => !p) }} src={iconNext} />}
                </div>

                {
                    openNavigate &&
                    <div className={style.menu}>
                        <a className={style.topMenuA} href="https://app.insfamily.ru/faq/index/">Главная</a>
                        <a className={style.topMenuA} href="https://app.insfamily.ru/faq/index/">Тестирования</a>
                        <a className={style.topMenuA} href="/" target="blank_">СРМ</a>
                        <a className={style.topMenuA} href="https://insfamily.ru/" target="blank_">Наш сайт</a>
                    </div>
                }

            </div>
            <div className={style.category}>

                <LeftMenu
                    admin={admin}
                    setArticle={setArticle}
                    searchArticles={searchArticles}
                    setTextSearch={setTextSearch}
                    textError={textError}
                    article={article}
                    setOpenMenu={setOpenMenu}
                    mobile
                />

            </div>
        </div>
    </>
};


export { MobileMenu }
