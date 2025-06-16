import { api } from "./apiSetting";


// получает таги все или по статье
async function getTags(articles_id=null) {
    const response = await api(articles_id ? `/faq/tags/?articles=${articles_id}` : `/faq/tags/`);
    return response;
};

// добавляет тег к статье
async function addArticle(tag_name, article_id) {

    const body = {
        name: tag_name,
        article_id: article_id,
    };

    const response = await api.post(`/faq/tags/`, body);
    return response;
};

// удаляет тег у статьи
async function removeArticle(tag_id, article_id) {
    
    const body = {
        article_id: article_id,
    };

    const response = await axios.post(`/faq/tags/${tag_id}/remove_article/`, body);
    return response;
};


export { getTags, addArticle, removeArticle }
