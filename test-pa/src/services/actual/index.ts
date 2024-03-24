import { actual_url } from "../../api/actual";
import { request } from "../baseService";
import { method } from "../method";
import { actual } from "../../data";
export const actualApi = async (options: any) => {
    const {
        id,
        data,
        params
    } = options || {};

    return await request({
        method: method.GET,
        url: "../../data/actual.json",
        data,
        params
    })
}