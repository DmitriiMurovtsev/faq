import { apiHost, headers } from "./apiSetting";
import axios from "axios";


// получает новости с asn
async function getNews() {
    try {
        const response = await axios(`${apiHost}anp/`, {headers: headers});
        return response;

    } catch (error) {
        return error.response;
    }
}


export { getNews }
