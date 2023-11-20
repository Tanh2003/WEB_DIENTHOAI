import db from "../models/index";



let checkCartname = (name) => {
    return new Promise(async(resolve, reject) => {
        try {
            let Cart = await db.Cart.findOne({

                where: { name: name },

            });
            if (Cart) {
                resolve(true);
            } else {
                resolve(false);
            }

        } catch (e) {
            reject(e);

        }
    })
}
let CreateCart = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            // check taikhoan is exist??
            let check = await checkCartname(data.name);
            if (check == true) {
                resolve({
                    errcode: 1,
                    errMessage: " Sản phẩm này đã tồn tại trong giỏ hàng"
                })
            } else {
                await db.Cart.create({
                    name: data.name,
                    price: data.price,
                    quantity: data.quantity,
                    image: data.image,
                    iduser: data.iduser,
                    idproduct:data.idproduct

                });
              
                if (!data) {
                    data = {};
                }
                resolve({
                    errcode: 0,
                    data: data
                })

                resolve({
                    errcode: 0,
                    message: 'OK'
                })
            }



        } catch (e) {
            reject(e);

        }
    })
}
let deleteCart = (CartId) => {
    return new Promise(async(resolve, reject) => {
        let category = await db.Cart.findOne({
            where: { id: CartId }
        })
        if (!category) {
            resolve({
                errcode: 2,
                errMessage: " sản phẩm  không tồn tại"
            })
        }
        await db.Cart.destroy({
            where: { id: CartId }
        });
        resolve({
            errcode: 0,
            errMessage: " sản phẩm đã bị xóa !"

        });
    })
}




let updateCartData = (data) => {
    return new Promise(async(resolve, reject) => {
        try {

            if (!data.id) {
                resolve({
                    errcode: 2,
                    errMessage: "Missing required parameter"
                })
            }
            let Cart = await db.Cart.findOne({
                where: { id: data.id },
                raw: false
            })
            if (Cart) {
                Cart.quantity=data.quantity;
                await Cart.save();
                resolve({
                    errcode: 0,
                    errMessage: "update Cart succeeds !"
                });
            } else {
                resolve({
                    errcode: 1,
                    errMessage: "Cart not found !"
                });
            }
        } catch (e) {
            reject(e)

        }
    })
}


let getAllCart = (CartId) => {
    return new Promise(async(resolve, reject) => {
        try {
            let Cart = '';
       
                Cart = db.Cart.findAll({
                    where: { iduser: CartId }
                })

            resolve(Cart)
        } catch (e) {
            reject(e);
        }
    })

}

module.exports = {
    getAllCart: getAllCart,
    CreateCart: CreateCart,
    deleteCart: deleteCart,
    updateCartData: updateCartData,

}