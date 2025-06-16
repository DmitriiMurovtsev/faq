import { api } from "./apiSetting";


// получает массив пунктов меню
async function getMenu() {
    const response = await api(`/faq/show_faq/`);
    return response;
};

// добавляет пункт в меню
async function createPoint(menuId, typePoint, name) {
    const body = {
        menu_id: menuId,
        point: typePoint,
        name: name
    };

    const response = await api.post(`/faq/items/`, body)
    return response;
};

// удаляет пункт из меню вместе со статьей или с вложенным меню
async function deletePoint(point_id) {
    const response = await api.delete(`/faq/items/${point_id}/`)
    return response;
};


export { getMenu, createPoint, deletePoint, }
