import axios from "axios";
import Config from "../config";

const { apiUrl } = Config;

export default async function apiCall(endpoint, id = false, params = {}) {
    const config = {}
    if (params) config.params = params;

    if (id) return await axios.get(`${apiUrl}/${endpoint}/${id}`, config);
    return await axios.get(`${apiUrl}/${endpoint}`, config);
}

