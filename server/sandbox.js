const bcrypt = require('bcrypt');
const userPass = '987654321'

async function hash() {
    try {
        const hash = await bcrypt.hash("987654321", 10);
        console.log(hash);
        const password = hash
        
        const validPassword = await bcrypt.compare(userPass, password);
        console.log(validPassword);


    } catch (error) {
        console.log(error)
    }
}

hash();