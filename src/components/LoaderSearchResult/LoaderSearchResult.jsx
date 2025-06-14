import style from "./LoaderSearchResult.module.css"


function LoaderSearchResult() {
    return <>
        <div className={style.loader}>
            <div className={style.title}></div>
            <div className={style.text}></div>
            <div className={style.more}></div>
        </div>
    </>
};


export { LoaderSearchResult };
