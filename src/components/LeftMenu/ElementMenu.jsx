import { useState } from "react"
import style from "./LeftMenu.module.css"
import { getArticle } from "../../api/apiArticle";
import iconCancel from "../../assets/icon-delete-red.png"
import iconAdd from "../../assets/icon-add-green.png"
import { deletePoint } from "../../api/apiMenu";

function ElementMenu({
    admin,
    setArticle,
    article,
    item,
    num,
    setOpenPopUp,
    setMenuName,
    setMenuId,
    setOpenMenu,
    delPoint,
}) {

    const [isOpen, setIsOpen] = useState(false);            // открытие / закрытие вложенного меню    

    function clickElement() {
        if (item.article) {
            getArticle(item.article.id).then(response => setArticle(response.data));
            setOpenMenu && setOpenMenu(false);
            return;
        };

        setIsOpen(p => !p);
    };

    // открывает pop-up для добавления пункта в текущий элемент
    function openCreatePopUp(item) {
        setMenuName(item.name);
        setMenuId(item.next_menu_id);
        setOpenPopUp(true);
    };

    return <>
        <div className={
            item.article
                ?
                article && item.article.id == article.id
                    ?
                    `${style.article} ${style.articleActice}`
                    :
                    style.article
                :
                isOpen
                    ?
                    `${style.elementMenu} ${style.elementMenuActice}`
                    :
                    style.elementMenu
        }>

            <div onClick={clickElement} className={style.name}><div>{num}.</div>{item.name}</div>

            {
                item.next_menu &&
                <div className={admin ? style.count : `${style.count} ${style.fixCount}`}>{item.next_menu.length}</div>
            }

            {
                admin &&
                <div className={style.icons}>
                    {
                        (item.article || item.next_menu?.length == 0) &&
                        <img onClick={() => delPoint(item)} src={iconCancel} />
                    }
                    {!item.article && <img onClick={() => { openCreatePopUp(item) }} src={iconAdd} />}
                </div>
            }

        </div>
        {
            isOpen && item.next_menu &&
            <div className={style.subElements}>
                {
                    item.next_menu.map((itm, i) =>
                        <ElementMenu
                            admin={admin}
                            setArticle={setArticle}
                            article={article}
                            key={itm.id}
                            item={itm}
                            num={i + 1}
                            setOpenPopUp={setOpenPopUp}
                            setMenuName={setMenuName}
                            setMenuId={setMenuId}
                            setOpenMenu={setOpenMenu}
                            delPoint={delPoint}
                        />
                    )
                }
            </div>
        }
    </>
};


export { ElementMenu }
