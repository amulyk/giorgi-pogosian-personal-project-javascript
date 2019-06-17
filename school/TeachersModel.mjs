export class TeachersModel {
    constructor() {
        this.database = new Map();
    }

    _verify(teacher) {
        let {id, name, image, dateOfBirth, emails, phones, sex, subjects, description = null} = teacher;
        if(typeof teacher !== 'object' || !id) {
            throw new Error("Parameter is not an object or id is not defined");
        }
        if(!name || typeof name !== 'object') {
            throw new Error("Error: name is required and should be an object");
        }
        if(!name.first || typeof name.first !== 'string') {
            throw new Error("Error: name.first is required and should be a string");
        }
        if(!name.last || typeof name.last !== 'string') {
            throw new Error("Error: name.last is required and should be a string");
        }
        if(!image || typeof image !== 'string') {
            throw new Error("Error: image is required and should be a string");
        }
        if(!dateOfBirth || typeof dateOfBirth !== 'string') {
            throw new Error("Error: dateOfBirth is required and should be a string");
        }
        if(!this._isDate(dateOfBirth)) {
            throw new Error("Invalid date format");
        }
        if(!emails || !Array.isArray(emails)) {
            throw new Error("Error: emails are required and should be an array");
        }
        if(emails.length === 0) {
            throw new Error("Error: at least one email is required");
        }
        for(let item of emails) {
            if(typeof item !== 'object') {
                throw new Error("Error: each item should be an object");
            } else if(typeof item.email !== 'string') {
                throw new Error("Error: email should be a string");
            } else if(!this._isEmail(item.email)) {
                throw new Error("Invalid email format");
            } else if(typeof item.primary !== 'boolean') {
                throw new Error("Error: email.primary should be a boolean");
            }
        }
        if(!phones || !Array.isArray(phones)) {
            throw new Error("Error: phones are required and should be an array");
        }
        if(phones.length === 0) {
            throw new Error("Error: at least one phone is required");
        }
        for(let item of phones) {
            if(typeof item !== 'object') {
                throw new Error("Error: each item should be an object");
            } else if(typeof item.phone !== 'string') {
                throw new Error("Error: phone should be a string");
            } else if(typeof item.primary !== 'boolean') {
                throw new Error("Error: phone.primary should be a boolean");
            }
        }
        if(!sex || typeof sex !== 'string') {
            throw new Error("Error: sex is required and should be a string");
        }
        if(sex !== 'male' && sex !== 'female') {
            throw new Error("Error: invalid input");
        }
        if(!subjects || !Array.isArray(subjects)) {
            throw new Error("Error: subjects are required and should be an array");
        }
        if(subjects.length === 0) {
            throw new Error("Error: at least one subject is required");
        }
        for(let item of subjects) {
            if(typeof item !== 'object') {
                throw new Error("Error: each item should be an object");
            } else if(typeof item.subject !== 'string') {
                throw new Error("Error: subject should be a string");
            }
        }
        if(description !== null && typeof description !== 'string') {
            throw new Error("Error: description field should be a string");
        }
        return true;
    }

    _isDate(str) {
        if(typeof str !== 'string') {
            throw new Error("Error: parameter should be a string");
        }

        let re = /^(0[1-9]|[1-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.\d{4}$/;
        return str.match(re) ? true : false;
    }

    _isEmail(str) {
        if(typeof str !== 'string') {
            throw new Error("Error: parameter should be a string");
        }

        let re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return str.match(re) ? true : false;
    }

    add(teacher) {
        return new Promise((resolve, reject) => {
            if(typeof teacher !== 'object') {
                reject("Parameter is not an object or id is not defined");
            } else {
                let id = String(Math.floor(Math.random() * new Date().getTime()));
                teacher.id = id;
                if(this._verify(teacher)) {
                    this.database.set(id, teacher);
                    resolve(id);
                } else {
                    reject("Error: object is not valid");
                }
            }
        });
    }

    read(teacherId) {
        return new Promise((resolve, reject) => {
            if(typeof teacherId !== 'string') {
                reject("Id should be a string");
            } else {
                if(this.database.has(teacherId)) {
                    resolve(this.database.get(teacherId));
                } else {
                    reject("Object not found");
                }
            }
        });
    }

    update(teacherId, updated) {
        return new Promise((resolve, reject) => {
            if(typeof teacherId !== 'string') {
                reject("Id should be a string");
            }
            if(typeof updated !== 'object') {
                reject("UpdatedProfile is not an object");
            }
            // console.log(Object.getOwnPropertyNames(updated));
        });
    }

    remove(teacherId) {
        return new Promise((resolve, reject) => {
            if(typeof teacherId !== 'string') {
                reject("Id should be a string");
            } else {
                if(this.database.has(teacherId)) {
                    resolve(this.database.delete(teacherId));
                } else {
                    reject("Object not found");
                }
            }
        });
    }
}