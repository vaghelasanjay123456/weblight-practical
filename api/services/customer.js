import CustomerDB from "../model/customer.js"

export async function checkEmail(email) {
    try{
        return await CustomerDB.findOne({
            where: {
                email: email
            }
        })
    } catch (error) {
        throw new Error(error)
    }
}

export async function signup(data){
    try{
        const result = await CustomerDB.create(data)
        return result
    }catch (error) {
        throw new Error(error);
    }
}

export async function customerList(data){
    try {
        return await CustomerDB.paginate({
            paginate: parseInt(data.limit),
            page: parseInt(data.page)
        });
    } catch (error) {
        throw new Error(error);
    }
}