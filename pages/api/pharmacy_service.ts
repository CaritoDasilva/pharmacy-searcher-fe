import axios from 'axios';

export default class PharmacyService {

    async getCommunesAndPharmacys() {
        try {
            let data = await axios.get('https://pharmacy-searcher-be.herokuapp.com/api/communes/7')
            if (data) {
                console.log("🚀 ~ file: pharmacy_service.ts ~ line 10 ~ PharmacyService ~ getCommunesAndPharmacys ~ data", data)
                return data.data
            }
        }
        catch (error) {
            return error;
        }
    }
}