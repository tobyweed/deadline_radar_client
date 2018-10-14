import axios from 'axios';
import decode from 'jwt-decode';

//This class handles client-side auth logic
class AuthService {
	login(data) {
		return axios
			.post('/login', {
				username: data.username,
				password: data.password
			})
			.then(res => {
				const access = res.data.access_token;
				if (!!access) {
					//if we got the access tokens, put them in localStorage
					this.setAccess(res.data.access_token);
				} else {
					return res; //The message from the server
				}
			})
			.then(res => {
				this.setHeader();
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	register(data) {
		return axios
			.post('/register', {
				username: data.username,
				password: data.password,
				email: data.email
			})
			.then(res => {
				const access = res.data.access_token;
				if (!!access) {
					//if we got the access tokens, put them in localStorage
					this.setAccess(res.data.access_token);
				} else {
					return res; //The message from the server
				}
			})
			.then(res => {
				this.setHeader();
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	loggedIn() {
		const token = this.getAccess();
		return !!token && this.isTokenValid(token);
	}

	isTokenValid(token) {
		try {
			const decoded = decode(token);
			if (!!decoded) {
				return true;
			} else return false;
		} catch (err) {
			return false;
		}
	}

	setAccess(idToken) {
		localStorage.setItem('id_access_token', idToken);
	}

	getAccess() {
		return localStorage.getItem('id_access_token');
	}

	logout() {
		localStorage.removeItem('id_access_token');
		console.log('logged out');
	}

	//get user info from their access token
	getProfile() {
		return decode(this.getAccess());
	}

	//set header
	initialize() {
		//if there is an api url defined in our environment set it as the base for all axios requests
		if (!!process.env.REACT_APP_API_URL) {
			axios.defaults.baseURL = process.env.REACT_APP_API_URL;
		}

		return new Promise((resolve, reject) => {
			if (this.loggedIn()) {
				this.setHeader(); //Set axios header
				resolve('axios header set');
			} else {
				resolve('Not logged in');
			}
		});
	}

	//return user and promoter data in a single object
	// getData() {
	// 	let data = {
	// 		userData: null
	// 	};
	// 	return new Promise((resolve, reject) => {
	// 		if (this.loggedIn()) {
	// 			const profile = this.getProfile(); //Get the info from our jwt token
	// 			//now get and set userData
	// 			this.initialize().then(
	// 				axios.get('/user/' + profile.identity).then(res => {
	// 					data.userData = res.data;
	// 					axios.get('/promoter/' + profile.identity).then(res => {
	// 						data.promoterData = res.data;
	// 						resolve(data);
	// 					});
	// 				})
	// 			);
	// 		} else {
	// 			data.userData = null;
	// 			data.promoterData = null;
	// 			resolve(data);
	// 		}
	// 	});
	// }

	//set axios header
	setHeader() {
		if (this.loggedIn()) {
			axios.defaults.headers.common['Authorization'] =
				'Bearer ' + this.getAccess();
		}
	}
}

/* The following is a command to enter in console in the browser.
It changes the access token to an expired one. This is how to test
refresh token functionality.

localStorage.setItem('id_access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwOTZlMzhiNC01NGNhLTQ4ZjYtYjA2Mi02MjY1NGMxNzBkN2MiLCJleHAiOjE1Mjc5NjQ2MjksImZyZXNoIjpmYWxzZSwiaWF0IjoxNTI3OTYzNzI5LCJ0eXBlIjoiYWNjZXNzIiwibmJmIjoxNTI3OTYzNzI5LCJpZGVudGl0eSI6InRlc3QifQ.Eg5je9u-vQNT1vAl33j-wlZ7lBB5ObzymntdLUV-qEI');
*/
export default AuthService;
