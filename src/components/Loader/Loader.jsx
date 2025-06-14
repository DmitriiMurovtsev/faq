import style from "./Loader.module.css"

function Loader({ mini = false, progress = null }) {
    if (progress) {
        return <>
            <div className={style.loaderGroup}>
                <div className={mini ? `${style.loading} ${style.mini}` : style.loading}></div>
                {
                    progress &&
                    <div className={style.progress}>{progress < 100 ? `Загружено ${progress}%` : 'Сохранение на сервере..'}</div>
                }
            </div>
        </>
    };

    return <div className={mini ? `${style.loading} ${style.mini}` : style.loading}></div>

}

export { Loader }
