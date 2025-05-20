import axios from 'axios';

export async function getExplanationsByCode(code) {

    try {
        const url = new URL('/api/code-explain', import.meta.env.VITE_API_URL);
        const response = await axios.post(url, {code: code},{
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(response.data);
            

            return { data: response.data?.data }
    }catch(error){
        console.log(error);
        return { error: error.message.toString() }
        
    }


        
    
}