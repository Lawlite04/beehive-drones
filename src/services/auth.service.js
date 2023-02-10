
class AuthService {
    getUser() {
        if(localStorage.getItem('user')) {
            const data = JSON.parse(localStorage.getItem('user'))
            return data;
        }

        return 0;
    }
    getTokenUser() {
        if(localStorage.getItem('user')) {
            const data = JSON.parse(localStorage.getItem('user'))
            return data.token;
        }

        return 0;
    }
}

export default new AuthService()