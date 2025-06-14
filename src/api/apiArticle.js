import { apiHost, headers } from "./apiSetting";
import axios from "axios";


// получает статью
async function getArticle(id) {
    try {
        const response = await axios(`${apiHost}article/${id}/`, {headers: headers});
        return response;

    } catch (error) {
        return error.response;
    };
};

// поиск по статьям
async function searchForArticle(text) {
    try {
        const response = await axios(`${apiHost}article/?search=${text}`, {headers: headers});
        return response;

    } catch (error) {
        return error.response;
    };
};

// редактирует статью - заголовок и содержание
async function editArticle(id, name = null, content = null) {

    let body = {};
    name && (body['name'] = name);
    content && (body['content'] = content);

    try {
        const response = await axios.patch(`${apiHost}article/${id}/`, body, {headers: headers});
        return response;

    } catch (error) {
        return error.response;
    };
};


export { getArticle, editArticle, searchForArticle }
