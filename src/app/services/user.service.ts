import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

import {
	Observable
} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import {gridData} from './grid.data';


var baseUrl = 'http://localhost:8080/';

@Injectable()
export class UserService {

	constructor(private _http: Http) { }


	getUsers(){
		this.getProductGridData()
		.subscribe(
			res => { console.log('res', res);},
			err => { console.log('error', err);},
			() => { console.log('gid data completed');}
			);
		return this.httpGetJson('sample/api/users');
	}

	addUser(userData){
		return this.httpPostJson('sample/api/users', userData);
	}

	httpGetJson(url) {
		return this._http.get(baseUrl + url)
			.map(res => res.json());
	}

	httpPostJson(url, inputData) {
		var jsonData = JSON.stringify(inputData);
		var headers = new Headers();
		headers.append('Accept', 'application/json');
		headers.append('Content-Type', 'application/json');
		return this._http.post(baseUrl + url, jsonData, {
			headers: headers
		}).map(res => res.json());
	}

	getProductGridData(){
		return new Observable((o) => {
			o.next(gridData);
		});
	}

	// postJSON(url, inputData) {
	// 	console.log('inputData', inputData);
	// 	return $.ajax(baseUrl+url, {
	// 		method: 'POST',
	// 		crossDomain: true,
	// 		data: JSON.stringify(inputData),
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			'Accept': 'application/json'
	// 		},
	// 		error: function(error){
	// 			console.log('error', error);
	// 		}
	// 	});
	// }

	// getJSON(url) {

	// 	return $.ajax(baseUrl+url, {
	// 		method: 'GET',
	// 		crossDomain: true
	// 	});
	// }
}
