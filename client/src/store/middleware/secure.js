import bcrypt from 'bcryptjs-react';

const secure = state => next => action => {
    try {
        if (action.type === "api/callBegan" && action.payload.onSuccess === 'users/userAdded') {
            const salt = bcrypt.genSaltSync(10);
            let hashPass = bcrypt.hashSync(action.payload.data.basicInfo.password, salt);
            action.payload.data.basicInfo.password = hashPass;
        }
        
        return next(action);
    } catch (error) {
        throw Promise.reject({ status: error.status, message: error.message })
    }
}

export default secure;