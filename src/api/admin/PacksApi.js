class PacksApi {

    static requestHeaders() {
        return {'AUTHORIZATION': 'Bearer ${sessionStorage.jwt}'};
    }

    static getAllPacks() {
        const headers = this.requestHeaders();
        const request = new Request('http://localhost:5000/api/adm/equipment/packs', {
            method: 'GET',
            headers: headers
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static updatePack(pack) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        const request = new Request('http://localhost:5000/api/adm/equipment/pack/' + pack.id, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({pack: pack})
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static createPack(pack) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        const request = new Request('http://localhost:5000/api/adm/equipment/pack', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({pack: pack})
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static deletePack(pack) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        const request = new Request('http://localhost:5000/api/adm/equipment/pack/' + pack.id, {
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

export default PacksApi;