import axios from 'axios';


export default class PharmacyService {

    async getPharmacys() {
        try {
            let data = await axios.get('http://localhost:8000/api/pharmacy/7')
            if (data) {
                console.log("🚀 ~ file: pharmacy_service.ts ~ line 10 ~ PharmacyService ~ getPharmacys ~ data", data)
                return data.data
            }
        }
        catch (error) {
            return error;
        }
    }
}