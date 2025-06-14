import style from "./Comment.module.css"


function Comment({
    owner = 'ownerComment',
    dateTime = '01.01.2024 11:32:13',
    content = 'Comment content Comment content Comment content Comment content',
}) {
    return <>
        <div className={style.comment}>
            <div className={style.owner}>{owner}</div>
            <div className={style.content}>{content}</div>
            <div className={style.dateTime}>{dateTime}</div>
        </div>
    </>
};


export { Comment }
