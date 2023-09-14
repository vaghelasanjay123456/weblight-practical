import AdminDB from "../model/admin.js"

// export async function createUser(userDetails){
//     try{
//         await UserDB.create(userDetails);
//     }catch (error) {
//         throw new Error(error);
//     }
// }

export async function checkEmail(email) {
    try{
        return await AdminDB.findOne({
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
        const result = await AdminDB.create(data)
        return result
    }catch (error) {
        throw new Error(error);
    }
}