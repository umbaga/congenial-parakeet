class PicklistsApi {

    static requestHeaders() {
        return {'AUTHORIZATION': 'Bearer ${sessionStorage.jwt}'};
    }

    static getAllPicklists() {
        const headers = this.requestHeaders();
        const request = new Request('http://localhost:5000/api/adm/picklists/all', {
            method: 'GET',
            headers: headers
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static addPicklistItem(picklist, picklistItem) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        const newItem = Object.assign({}, picklistItem);
        newItem.picklistId = picklist.id;
        const request = new Request('http://localhost:5000/api/adm/picklist/item', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({picklistItem: newItem})
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static removePicklistItem(picklist, picklistItem) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        const request = new Request('http://localhost:5000/api/adm/picklist/item/' + picklistItem.id, {
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

export default PicklistsApi;