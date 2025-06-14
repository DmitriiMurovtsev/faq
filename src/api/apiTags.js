import { apiHost, headers } from "./apiSetting";
import axios from "axios";


// получает таги все или по статье
async function getTags(articles_id=null) {
    const link = articles_id ? `${apiHost}tags/?articles=${articles_id}` : `${apiHost}tags/`;

    try {
        const response = await axios(link, {headers: headers});
        return response;

    } catch (error) {
        return error.response;
    };
};

// добавляет тег к статье
async function addArticle(tag_name, article_id) {

    const body = {
        name: tag_name,
        article_id: article_id,
    };

    try {
        const response = await axios.post(`${apiHost}tags/`, body,  {headers: headers});
        return response;

    } catch (error) {
        return error.response;
    };
};

// удаляет тег у статьи
async function removeArticle(tag_id, article_id) {
    
    const body = {
        article_id: article_id,
    };

    try {
        const response = await axios.post(`${apiHost}tags/${tag_id}/remove_article/`, body, {headers: headers});
        return response;

    } catch (error) {
        return error.response;
    };
};


export { getTags, addArticle, removeArticle }
