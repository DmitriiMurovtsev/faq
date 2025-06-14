import { apiHost, headers } from "./apiSetting";
import axios from "axios";


// получает массив аудио по статье
async function getAudios(article_id) {
    try {
        const response = await axios(`${apiHost}af/?article=${article_id}`, {headers: headers});
        return response;

    } catch (error) {
        return error.response;
    };
};

// добавляет аудио
async function createAudio(item, article_id, setProgress) {
    const formData = new FormData();

    formData.append('name', item.name);
    formData.append('file', item);
    formData.append('article', article_id);

    try {
        const response = await axios.post(`${apiHost}af/`, formData, 
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

// удаляет аудио
async function deleteAudio(audio_id) {
    try {
        const response = await axios.delete(`${apiHost}af/${audio_id}/`, {headers: headers});
        return response;

    } catch (error) {
        return error.response;
    };
};


export { getAudios, createAudio, deleteAudio }
