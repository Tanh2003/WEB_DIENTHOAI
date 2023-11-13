import React from "react";
import "./CreateProduct.scss";
import "../Admin.scss";
import { HeaderAdmin } from "../Components/HeaderAdmin";
import { SideBarAdmin } from "../Components/SideBarAdmin";
const CreateProduct = () => {
  return (
    <div className="create-wrapper index-admin">
      <HeaderAdmin />
      <div className="main--content d_flex">
        <SideBarAdmin />

        <div className="login-container">
          <h1> Thêm mới sản phẩm</h1>
          <div className="sanpham p-10">
            <label htmlFor="Name">Tên sản phẩm</label>
            <input type="text" id="TenSP" name="TenSP"></input>{" "}
          </div>
          <div className="gia p-10">
            <label htmlFor="Hoten">Giá</label>
            <input type="text" id="Gia" name="Gia"></input>
          </div>

          <div className="sl p-10">
            <label htmlFor="Password">Số lượng</label>
            <input type="text" id="SoLuong" name="SoLuong"></input>
          </div>

          <div className="loai p-10">
            <label htmlFor="quyen">Loại</label>
            <select id="Loai" name="Loai">
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>{" "}
          </div>
          <div className="anh p-10">
            <label>Hình ảnh</label>
            <input type="file" id="previewImg" hidden></input>
          </div>
          <div className="s1 d_flex">
            <button class="button">Đóng</button>
            <button class="button">Thêm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
