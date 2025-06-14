import style from "./PopUpMenu.module.css"
import iconOk from "../../assets/icon-ok-green.png"
import iconCancel from "../../assets/icon-delete-red.png"
import { Input } from "../Input/Input"
import { createPoint } from "../../api/apiMenu";
import { useState } from "react";
import { Loader } from "../Loader/Loader";


function PopUpMenu({
    menuName,
    menuId,
    setOpenPopUp,
    viewMenu,
    setMenuId,
    setMenuName,
    mobile = true,
}) {

    const [loading, setLoading] = useState(false);                  // основной лоадер

    const [typePoint, setTypePoint] = useState('article');          // тип пункта меню
    const [name, setName] = useState('');                           // название пункта меню

    // создает пункт меню
    function addPoint() {
        if (!name) {
            return;
        };

        setLoading(true);
        createPoint(menuId, typePoint, name).then(response => {
            setLoading(false);
            viewMenu();
        });

        closePopUp();
    };

    // закрывает pop-up
    function closePopUp() {
        setMenuName("Категории");
        setMenuId(1);
        setOpenPopUp(false);
    };

    return <>
        <div className={mobile ? `${style.popUp} ${style.mobile}` : style.popUp}>
            <div className={style.popUpBody}>
                <div className={style.popUpTitle}>
                    Добавить <select value={typePoint} onChange={(e) => { setTypePoint(e.target.value) }}>
                        <option value="article">статью</option>
                        <option value="menu">категорию</option>
                    </select> в "{menuName}"
                </div>
                <Input onInput={(e) => { setName(e.target.value.trim()) }} label="Название пункта" />
                <div className={style.icons}>
                    {loading && <Loader />}
                    <img onClick={closePopUp} src={iconCancel} />
                    <img onClick={addPoint} src={iconOk} />
                </div>
            </div>
        </div>
    </>
};


export { PopUpMenu }
