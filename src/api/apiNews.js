import { api } from "./apiSetting";


// получает новости с asn
async function getNews() {
    const response = await api(`/faq/anp/`);
    return response;
}


export { getNews }
