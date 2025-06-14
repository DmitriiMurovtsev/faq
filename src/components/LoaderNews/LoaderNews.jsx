import style from "./LoaderNews.module.css"


function LoaderNews() {
    return <>
        <div className={style.loader}>
            <div className={style.img}></div>
            <div className={style.title}></div>
            <div className={style.text}></div>
            <div className={style.link}></div>
        </div>
    </>
};


export { LoaderNews }
