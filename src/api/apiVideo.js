import { api } from "./apiSetting";


// получает массив аудио по статье
async function getVideos(article_id) {
    const response = await api(`/faq/vf/?article=${article_id}`);
    return response;
};

// добавляет видео
async function createVideo(item, article_id, setProgress) {
    const formData = new FormData();

    formData.append('name', item.name);
    formData.append('file', item);
    formData.append('article', article_id);

    const response = await api.post(`/faq/vf/`, formData, 
        {
            onUploadProgress: progressEvent => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setProgress(percentCompleted);
            },
        });
    return response;
};

// удаляет видео
async function deleteVideo(video_id) {
    const response = await api.delete(`/faq/vf/${video_id}/`);
    return response;
};


export { getVideos, deleteVideo, createVideo }