import {appendFileSync} from 'fs';

export default class Contact {
    constructor(name = '', surname = '', email = '', phone = '') {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }

    saveAsCSV() {
        const csv = `${this.name},${this.surname},${this.email},${this.phone}\n`;
        try {
            appendFileSync('src/users.csv', csv);
        } catch (err) {
            console.error(err);
        }
    }
}