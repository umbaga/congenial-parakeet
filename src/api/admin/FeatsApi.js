class FeatsApi {

    static requestHeaders() {
        return {'AUTHORIZATION': 'Bearer ${sessionStorage.jwt}'};
    }

    static getAllFeats() {
        const headers = this.requestHeaders();
        const request = new Request('http://localhost:5000/api/adm/feats', {
            method: 'GET',
            headers: headers
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static updateFeat(feat) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        const request = new Request('http://localhost:5000/api/adm/feat/' + feat.id, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({feat: feat})
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static createFeat(feat) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        const request = new Request('http://localhost:5000/api/adm/feat', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({feat: feat})
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static deleteFeat(feat) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        const request = new Request('http://localhost:5000/api/adm/feat/' + feat.id, {
            method: 'DELETE',
            headers: headers
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default FeatsApi;