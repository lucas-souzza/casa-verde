import { selector } from "recoil";
import axios from "axios";

export const fetchProductsList = selector({
	key: "fetchProductsList",
	get: async () => {
        try{
            const data = axios.get("http://localhost:8080/products")
                .then(result => result.data);
            return data;
        }
        catch(error) {
            console.error(error)
        }
	},
});
