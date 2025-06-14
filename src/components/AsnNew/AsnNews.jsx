import style from "./AsnNews.module.css"


function AsnNews({ item }) {
    return <>
        <div className={style.asnNew}>
            <img src={'data:image/png;base64,' + item.img} />
            <div className={style.date}>{item.date}</div>
            <div className={style.title}>{item.title}</div>
            <div className={style.content}>{item.content}</div>
            <div className={style.link}>
                <a href={item.link} target="_blank">Подробнее...</a>
            </div>
        </div>
    </>
};


export { AsnNews }
