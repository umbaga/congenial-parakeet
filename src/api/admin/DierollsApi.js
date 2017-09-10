class DierollsApi {

    static requestHeaders() {
        return {'AUTHORIZATION': 'Bearer ${sessionStorage.jwt}'};
    }

    static getAllDierolls() {
        const headers = this.requestHeaders();
        const request = new Request('http://localhost:5000/api/adm/core/dierolls', {
            method: 'GET',
            headers: headers
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static createDieroll(dieroll) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        const request = new Request('http://localhost:5000/api/adm/dieroll', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({dieroll: dieroll})
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

}

export default DierollsApi;