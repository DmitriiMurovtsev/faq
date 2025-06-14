import { useEffect, useState } from "react"
import style from "./CenterContent.module.css"
import { getNews } from "../../api/apiNews";
import { AsnNews } from "../AsnNew/AsnNews";
import { Article } from "../Article/Article";
import { LoaderNews } from "../LoaderNews/LoaderNews";
import { SearchResult } from "../SearchResult/SearchResult";
import { LoaderSearchResult } from "../LoaderSearchResult/LoaderSearchResult";


function CenterContent({
    admin,
    article = null,
    setArticle = null,
    searchResult,
    textSearch,
    setSearchResult,
    searchLoading,
}) {

    const [news, setNews] = useState([]);

    useEffect(() => {

        if (!article) {
            getNews().then(response => { setNews(response.data.news) });
        } else {
            setNews([]);
        };

    }, [article]);

    return <>
        <div className={style.centerContent}>

            {/* Лоадер поиска */}
            {
                searchLoading &&
                <>
                    <LoaderSearchResult />
                    <LoaderSearchResult />
                    <LoaderSearchResult />
                    <LoaderSearchResult />
                    <LoaderSearchResult />
                    <LoaderSearchResult />
                    <LoaderSearchResult />
                </>
            }

            {/* Результаты поиска - список статей */}
            {
                searchResult.length > 0 &&
                searchResult.map(article => (
                    <SearchResult
                        key={article.id}
                        article={article}
                        textSearch={textSearch}
                        setArticle={setArticle}
                        setSearchResult={setSearchResult}
                    />
                ))
            }

            {/* Лоадер новостей */}
            {
                !article && searchResult.length == 0 && !news.length &&
                <>
                    <LoaderNews />
                    <LoaderNews />
                    <LoaderNews />
                </>
            }

            {/* Новости */}
            {
                !article && searchResult.length == 0 &&
                news.map(item => <AsnNews key={item.title} item={item} />)
            }

            {/* Статья */}
            {
                article && searchResult.length == 0 &&
                <Article admin={admin} article={article} setArticle={setArticle} />
            }

        </div>
    </>
};


export { CenterContent }
