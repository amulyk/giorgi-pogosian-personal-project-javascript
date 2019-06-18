export let validate = (schema, data, flag = false) => { // false: add | true: update
    for(let item in data) {
        if(item in schema) {
            if(data[item] instanceof Object) {
                if(Array.isArray(data[item]) && Array.isArray(schema[item])) {
                    for(let i = 0; i < data[item].length; i++) {
                        validate(schema[item][i], data[item][i], flag);
                    }
                } else {
                    validate(schema[item], data[item], flag);
                }
            } else {
                if(typeof data[item] !== schema[item]) {
                    throw new Error(`Error: invalid property type ${typeof data[item]} for ${item}`);
                } else {
                    if(flag === true) {
                        console.log('test');
                    }
                }
            }
        } else {
            if(item !== 'id') {
                throw new Error(`Error: invalid property "${item}"`);
            }
        }
    }
}