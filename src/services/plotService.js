import axios from "axios";
import { BASE_URL } from "../utils/urls";

export const getCategoryCounts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/plot/category-counts`);
        return response.data;
    } catch (error) {
        console.error("Error fetching category counts:", error);
        return {
            Commercial: 0,
            Residence: 0
        };
    }
};

export const getTrendingPlots = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/plot/trending`);
        // Assuming the API returns { data: [...] } or just [...]
        // Adjust based on actual API response structure if known, otherwise default to response.data
        return response.data.data || response.data;
    } catch (error) {
        console.error("Error fetching trending plots:", error);
        return [];
    }
};
