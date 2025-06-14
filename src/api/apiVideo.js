import { apiHost, headers } from "./apiSetting";
import axios from "axios";


// получает массив аудио по статье
async function getVideos(article_id) {
    try {
        const response = await axios(`${apiHost}vf/?article=${article_id}`, {headers: headers});
        return response;

    } catch (error) {
        return error.response;
    };
};

// добавляет видео
async function createVideo(item, article_id, setProgress) {
    const formData = new FormData();

    formData.append('name', item.name);
    formData.append('file', item);
    formData.append('article', article_id);

    try {
        const response = await axios.post(`${apiHost}vf/`, formData, 
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

// удаляет видео
async function deleteVideo(video_id) {
    try {
        const response = await axios.delete(`${apiHost}vf/${video_id}/`, {headers: headers});
        return response;

    } catch (error) {
        return error.response;
    };
};


export { getVideos, deleteVideo, createVideo }