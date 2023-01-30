import * as mobx from "mobx";
import { makeAutoObservable } from "mobx";
import AuthService from "../Services/AuthService";
export default class Store {
	constructor() {
		makeAutoObservable(this);
		this.load();
		this.autoSave(this, this.save.bind(this));
	}
	user = {};
	isAuth = false;

	setAuth(bool:boolean) {
		this.isAuth = bool;
	}
    setUser(user:User) {
		this.user = user;
	}

	load() {
		if (localStorage.getItem("store") != null) {
			const data:any = localStorage.getItem("store");
			Object.assign(this, JSON.parse(data));
		}
	}
	autoSave(store:any, save:any) {
		let firstRun = true;
		mobx.autorun(() => {
			const json = JSON.stringify(mobx.toJS(store));
			if (!firstRun) {
				save(json);
			}
			firstRun = false;
		});
	}

	save(json:any) {
		localStorage.setItem("store", json);
	}

	async login(email:string, password:string) {
		try {
			const response = await AuthService.login(email, password);
			localStorage.setItem("token", response.data.token);
			this.setAuth(true);
			this.setUser(response.data.username);
			window.location.href = "/";
		} catch (e:any) {
			console.log(e.response?.data?.message);
		}
	}

	async registration(username:string, email:string, password:string) {
		try {
			console.log(username, email, password);
			
			await AuthService.registration(username, email, password).then(() =>
				this.login(email,password)
			);
        } catch (e:any) {
			console.log(e.response?.data?.message);
		}
	}
	async logout() {
		try {
			localStorage.removeItem("token");
			this.setAuth(false);
			this.setUser({});
		} catch (e:any) {
			console.log(e.response?.data?.message);
		}
	}

	async checkAuth() {
		this.setAuth(true);
	}
}