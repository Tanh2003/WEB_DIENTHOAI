import React from "react";
import "./Detailproduct.css";
const DetailProduct = () => {
  return (
    <>
      <div className="login-container">
        <h1> Sửa sản phẩm</h1>

        <div className="sanpham">
          <label htmlFor="Name">Tên sản phẩm</label>
          <input
            type="text"
            id="Name"
            name="Name"
            placeholder="Tên sản phẩm"
          ></input>{" "}
        </div>
        <div className="gia">
          <label htmlFor="Price">Giá</label>
          <input
            type="number"
            id="Price"
            name="Price"
            placeholder="20000000"
          ></input>
        </div>

        <div className="soluong">
          <label htmlFor="Quantity">Số lượng</label>
          <input
            type="number"
            id="Quantity"
            name="IQuantity"
            placeholder="Quantity"
          ></input>
        </div>
        <div className="loai">
          <label htmlFor="Category">Loại</label>
          <select id="Category" name="Category">
            <option value="loại">Chọn loại sản phẩm</option>
            <option value="Iphone">Iphone</option>
            <option value="Samsung">Samsung</option>
            <option value="Xiaomi">Xiaomi</option>
          </select>{" "}
        </div>
        <div className="anh">
          <label>Hình ảnh</label>
          <div className="lamdep">
            <input type="file" id="previewImg" hidden></input>
          </div>
        </div>
        <div className="s1">
          <button class="button">Thêm</button>
          <button class="button">Đóng</button>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
