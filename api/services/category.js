import CategoryDB from "../model/category.js"

export async function createCategory(categoryDetails){
    try{
        let result = await CategoryDB.create(categoryDetails);
        return result
    }catch (error) {
        throw new Error(error);
    }
}

export async function categoryList(data){
    // console.log(data)
    try {
        if (data.type == 1){
            return await CategoryDB.findAll();
        }else{
            return await CategoryDB.paginate({
                paginate: parseInt(data.limit),
                page: parseInt(data.page)   
            });
        }
        // return await CategoryDB.paginate({
        //     paginate: parseInt(data.limit),
        //     page: parseInt(data.page)   
        // });
    } catch (error) {
        throw new Error(error);
    }
}

export async function update(categoryDetails, id) {
    try {
      return await CategoryDB.update(categoryDetails, {
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  export async function destroy(id) {
    try {
      return await CategoryDB.destroy({
        where: {
          id: id,
        },
      });
      return true;
    } catch (error) {
      throw new Error(error);
    }
  }
