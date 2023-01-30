import $api from '../http';

export default class AuthService {
	static async login(email: string, password: string) {
		return await $api.post('login/login', { email, password });
	}
	static async registration(name: string, email: string, password: string) {
		return await $api.post('login/register', { name, email, password });
	}
}
