import style from "./PopUpDelete.module.css";
import iconOk from "../../assets/icon-ok-green.png";
import iconCancel from "../../assets/icon-delete-red.png";


function PopUpDelete({
    articleForDelete,
    setArticleForDelete,
    delArticle,
    admin,
}) {
    return <>
        <div className={style.popUpBody}>
            <div className={style.popUpTitle}>Удалить статью?</div>
            <div className={style.popUpTitleName}>{articleForDelete.name}</div>

            {
                admin &&
                <div className={style.icons}>
                    <img onClick={() => { setArticleForDelete(null) }} src={iconCancel} />
                    <img onClick={delArticle} src={iconOk} />
                </div>
            }

        </div>
    </>
};


export { PopUpDelete };
