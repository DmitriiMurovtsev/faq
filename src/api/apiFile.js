import { api } from "./apiSetting";


// получает массив аудио по статье
async function getFiles(article_id) {
    try {
        const response = await api(`/faq/ffa/?article=${article_id}`);
        return response;

    } catch (error) {
        return error.response;
    };
};

// добавляет файл
async function createFile(item, article_id, setProgress) {
    const formData = new FormData();

    formData.append('name', item.name);
    formData.append('file', item);
    formData.append('article', article_id);

    const response = await api.post(`/faq/ffa/`, formData, 
        {
            onUploadProgress: progressEvent => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setProgress(percentCompleted);
            },
        });
    return response;
};

// удаляет файл
async function deleteFile(file_id) {
    const response = await api.delete(`/faq/ffa/${file_id}/`);
    return response;
};


export { getFiles, createFile, deleteFile }