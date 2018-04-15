"use strict";

const url = 'http://localhost:8000/api/login';
const atob = require('atob');

module.exports = {
    handle(token) {
        this.set(token);
    },
    set(token) {
        localStorage.setItem('token', token);
    },
    get() {
        return localStorage.getItem('token');
    },
    remove() {
        localStorage.removeItem('token');
    },
    isValid() {
        const token = this.get()
        if (token) {
            const payload = token.split('.')[1]
            if (payload) {
                let payloadItem = null;
                try {
                    payloadItem = JSON.parse(atob(payload));
                } catch (err) {
                    return false;
                }
                return payloadItem.iss === url ? true : false;
            }
        }
        return false;
    }
}