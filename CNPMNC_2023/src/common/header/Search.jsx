import React, { useState, useEffect } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { getAllProducts } from "../../userService";
import { Buffer } from "buffer";

import logo from "../../component/assets/logo.svg";
import user from "../../../public/images/search/user.png";
import edit from "../../../public/images/search/edit.png";
import logout from "../../../public/images/search/log-out.png";
import "./Search.css";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const Search = ({ cartItem }) => {



  window.addEventListener("scroll", function () {
    const search = this.document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();
  const [user, setUser] = useState({ taikhoan: "" });

  useEffect(() => {
    // Sử dụng một hàm async để lấy dữ liệu từ Local Storage
    const getUserDataFromLocalStorage = async () => {
      const userData = localStorage.getItem("user");
      console.log("userData", userData); // Kiểm tra giá trị userData

      if (userData) {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      }
    };

    getUserDataFromLocalStorage(); // Gọi hàm để lấy dữ liệu từ Local Storage
  }, []);






 
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);

    history.replace("/login-signup/Login"); // Sử dụng replace thay vì push
    window.location.reload(); // Tải lại trang
  };
  {
    user && <Search/>;
  }






 const [arrProducts, setArrProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");


  useEffect(() => {
    getAllUserFromReact();
    
  }, []);

  const getAllUserFromReact = async () => {
   let idCate="";
   let idbrand ='';
   let selectedPriceRange="";
   let orderBy="";
    let response = await getAllProducts("ALL", idCate, idbrand, selectedPriceRange, orderBy);
    if (response && response.errcode === 0) {
      setArrProducts(response.products);
    }
  };


  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = arrProducts.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };



 




  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>






          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text"  placeholder="Tìm kiếm..."
            value={wordEntered}
            onChange={handleFilter}
            />
            <input type="submit" className="submit" value="Tìm kiếm"/>

            
          </div>
          <div className="benduoi">
          {filteredData.length !== 0 && (
        <div className="dataResult">
          <div className="title-product">Sản phẩm gợi ý</div>
       
         
          {filteredData.slice(0, 15).map((value, key) => {
            let imageBase63 = '';
            if (value.image) {
              imageBase63 = Buffer.from(value.image, 'base64').toString('binary');
            }
            return (
              <>


                    
               <a href={`/productdetail/${value.id}`} className="xoagachduoi">
                <div class="product-container" key={key}>
                 
                  <div class="product-image">
     
                  <img src={imageBase63} alt="Product Image"/>
                </div>
                <div class="product-details">
                  <h2 class="product-name">{value.name}  </h2>
                  <p class="product-price">{value.price}</p>
                </div>     
                </div>
                </a>
              </>
              
            );
          })}
        </div>
      )}
          </div>
         

         



















          <div className="icon f_flex width">
            <div className="cart">
              <Link to="/cart/Cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{cartItem.length == 0 ? "" : cartItem.length}</span>
              </Link>
            </div>
            <div
              className="login"
            >

              <div>
                    <Button
                     
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      <i className="fa fa-user icon-circle"></i>
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem ><Link to="/profile/Profile">Profile</Link></MenuItem>
                     
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                  </div>

             
            </div>
            
            
        
          </div>
          
        </div>
        
        
      </section>
      
    </>
  );
};

