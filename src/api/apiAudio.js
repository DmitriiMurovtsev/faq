import { api } from "./apiSetting";


// получает массив аудио по статье
async function getAudios(article_id) {
    const response = await api(`/faq/af/?article=${article_id}`);
    return response;
};

// добавляет аудио
async function createAudio(item, article_id, setProgress) {
    const formData = new FormData();

    formData.append('name', item.name);
    formData.append('file', item);
    formData.append('article', article_id);

    const response = await api.post(`/faq/af/`, formData, 
        {
            onUploadProgress: progressEvent => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setProgress(percentCompleted);
            },
        });
    return response;
};

// удаляет аудио
async function deleteAudio(audio_id) {
    const response = await api.delete(`/faq/af/${audio_id}/`);
    return response;
};


export { getAudios, createAudio, deleteAudio }
