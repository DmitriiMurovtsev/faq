import { api } from "./apiSetting";


// получает статью
async function getArticle(id) {
    const response = await api(`/faq/article/${id}/`);
    return response;
};

// поиск по статьям
async function searchForArticle(text) {
    const response = await api(`/faq/article/?search=${text}`);
    return response;
};

// редактирует статью - заголовок и содержание
async function editArticle(id, name = null, content = null) {

    let body = {};
    name && (body['name'] = name);
    content && (body['content'] = content);

    const response = await api.patch(`/faq/article/${id}/`, body);
    return response;
};


export { getArticle, editArticle, searchForArticle }
