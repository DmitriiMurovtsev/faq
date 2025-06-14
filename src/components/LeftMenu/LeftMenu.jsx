import style from "./LeftMenu.module.css"
import { ElementMenu } from "./ElementMenu";
import { Input } from "../Input/Input";
import { useEffect, useState } from "react";
import { deletePoint, getMenu } from "../../api/apiMenu";
import iconAdd from "../../assets/icon-add-green.png"
import { PopUpMenu } from "../PopUpMenu/PopUpMenu";
import { PopUpDelete } from "../PopUpDelete/PopUpDelete";
import { InputSearch } from "../InputSearch/InputSearch";


function LeftMenu({
    admin,
    setArticle,
    searchArticles,
    setTextSearch,
    textError,
    article,
    setOpenMenu,
    mobile = false,
}) {

    const [openPopUp, setOpenPopUp] = useState(false);                  // открытие попапа добавления статьи / категории    

    const [menuName, setMenuName] = useState("Категории");              // название категории / подкатегории, в которую добавляем новый пункт
    const [menuId, setMenuId] = useState(1);                            // id категории / подкатегории, в которую добавляем новый пункт

    const [menu, setMenu] = useState([]);                               // массив пунктов меню

    const [articleForDelete, setArticleForDelete] = useState(null);     // пункт меню-статья на удаление

    // отрисовывает меню
    function viewMenu() {
        getMenu().then(response => setMenu(response.data));
    };

    // открывает pop-up на добавление
    function openCreatePopUp() {
        setMenuName("Категории");
        setMenuId(1);
        setOpenPopUp(true);
    };

    // удаляет статью
    function delArticle() {
        deletePoint(articleForDelete.id).then(response => {
            setArticleForDelete(null);
            viewMenu();
        });
    };

    // удаляет текущий элемент
    function delPoint(item) {

        // если статья - открываем popup удаления статьи
        if (item.article && !articleForDelete) {
            setArticleForDelete(item);
            return;
        };

        // если меню - удаляем
        deletePoint(item.id).then(response => viewMenu());
    };

    useEffect(() => {
        viewMenu();
    }, []);

    return <>
        <div className={mobile ? `${style.leftMenu} ${style.mobile}` : style.leftMenu}>

            {
                !mobile &&
                <div className={style.inputSearch}>
                    <InputSearch
                        setTextSearch={setTextSearch}
                        searchArticles={searchArticles}
                        textError={textError}
                        mini
                    />
                </div>
            }

            {
                openPopUp &&
                <PopUpMenu
                    menuName={menuName}
                    menuId={menuId}
                    setOpenPopUp={setOpenPopUp}
                    viewMenu={viewMenu}
                    setMenuId={setMenuId}
                    setMenuName={setMenuName}
                />
            }

            {
                articleForDelete &&
                <PopUpDelete
                    articleForDelete={articleForDelete}
                    setArticleForDelete={setArticleForDelete}
                    delArticle={delArticle}
                    admin={admin}
                />
            }

            <div className={style.menu}>

                <div className={style.title}>
                    <div className={style.titleName}>Категории</div>
                    {admin && <img onClick={openCreatePopUp} src={iconAdd} />}
                </div>

                <div className={style.menuList}>
                    {
                        menu.map((item, i) =>
                            <ElementMenu
                                setOpenPopUp={setOpenPopUp}
                                setMenuName={setMenuName}
                                setMenuId={setMenuId}
                                delPoint={delPoint}
                                admin={admin}
                                setArticle={setArticle}
                                article={article}
                                key={item.id}
                                item={item}
                                setOpenMenu={setOpenMenu}
                                num={i + 1}
                            />
                        )
                    }
                </div>
            </div>

        </div>
    </>
};


export { LeftMenu }
