import { apiHost, headers } from "./apiSetting";
import axios from "axios";


// получает массив пунктов меню
async function getMenu() {
    try {
        const response = await axios(`${apiHost}show_faq/`, {headers: headers});
        return response;

    } catch (error) {
        return error.response;
    };
};

// добавляет пункт в меню
async function createPoint(menuId, typePoint, name) {
    const body = {
        menu_id: menuId,
        point: typePoint,
        name: name
    };

    try {
        const response = await axios.post(`${apiHost}items/`, body, {headers: headers})
        return response;

    } catch (error) {
        return error.response;
    };
};

// удаляет пункт из меню вместе со статьей или с вложенным меню
async function deletePoint(point_id) {
    try {
        const response = await axios.delete(`${apiHost}items/${point_id}/`, {headers: headers})
        return response;

    } catch (error) {
        return error.response;
    };
};


export { getMenu, createPoint, deletePoint, }
