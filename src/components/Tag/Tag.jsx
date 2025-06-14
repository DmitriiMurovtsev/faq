import style from "./Tag.module.css";
import iconCancel from "../../assets/icon-delete-red.png";


function Tag({ tag, deleteTags, admin }) {

    if (!tag) {
        return <></>;
    };

    return <>
        <div className={style.tag}>
            {tag.name}
            {admin && <img onClick={() => { deleteTags(tag) }} src={iconCancel} />}
        </div>
    </>
};


export { Tag };
