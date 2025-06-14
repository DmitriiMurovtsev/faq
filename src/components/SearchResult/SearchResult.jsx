import style from "./SearchResult.module.css"


function SearchResult({ article, textSearch, setArticle, setSearchResult }) {

    // убираем форматирование текста
    function removeFormat(text) {
        const div = document.createElement('div');
        div.innerHTML = text;

        const clearText = div.textContent;
        div.remove();

        return clearText;
    };

    // выделяет найденный текст
    function markText(text) {
        const result = text.split(textSearch).map((fragment, index) => (
            index != 0
                ? <><span key={index} className={style.searchText}>{textSearch}</span>{fragment}</>
                : fragment
        ));

        return result;
    };

    return <>
        <div className={style.search}>

            <div className={style.title}>
                {
                    markText(removeFormat(article.name))
                }
            </div>

            <div className={style.content}>
                {
                    markText(removeFormat(article.content))
                }
            </div>

            <div className={style.more} onClick={() => { setArticle(article); setSearchResult([]); }}>
                Подробнее...
            </div>

        </div>
    </>
};


export { SearchResult }
