import { apiHost, headers } from "./apiSetting";
import axios from "axios";


// получает массив аудио по статье
async function getFiles(article_id) {
    try {
        const response = await axios(`${apiHost}ffa/?article=${article_id}`, {headers: headers});
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

    try {
        const response = await axios.post(`${apiHost}ffa/`, formData, 
        {
            headers: headers,
            onUploadProgress: progressEvent => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setProgress(percentCompleted);
            },
        });
        return response;

    } catch (error) {
        return error.response;
    };
};

// удаляет файл
async function deleteFile(file_id) {
    try {
        const response = await axios.delete(`${apiHost}ffa/${file_id}/`, {headers: headers});
        return response;

    } catch (error) {
        return error.response;
    };
};


export { getFiles, createFile, deleteFile }