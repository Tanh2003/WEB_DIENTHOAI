import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../utils/emitter";
import { toast } from "react-toastify";
import "./ModalProducts.scss";
import _ from "lodash";
import CommonUtils from "../../utils/CommonUtils";
import { getAllCategories, getAllBrand } from "../../userService";
import { validateInput } from "../Utility/CRUDUltility";
import ImageUtility from "../Utility/ImageUtility";
class ModalProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrCate: [],
      arrBrand: [],
      name: "",
      price: "",
      quantity: "",
      idCate: "",
      idBrand: "",
      avatar: "",
      previewImgURL: " ",
    };
    this.listenToEmitter();
  }
  listenToEmitter = () => {
    emitter.on("EVENT_CLEAR_MODAL_DATA", () => {
      //reset state
      this.setState({
        name: "",
        price: "",
        quantity: "",
        idCate: "",
        idBrand: "",
        avatar: "",
        previewImgURL: " ",
      });
    });
  };
  async componentDidMount() {
    await this.getAllCategoriesReact();
    await this.getAllBrandReact();
  }

  getAllCategoriesReact = async () => {
    let response = await getAllCategories("ALL");
    if (response && response.errcode == 0) {
      this.setState({
        arrCate: response.categories,
      });
    }
  };
  getAllBrandReact = async () => {
    let response = await getAllBrand("ALL");
    if (response && response.errcode == 0) {
      this.setState({
        arrBrand: response.Brand,
      });
    }
  };

  toggle = () => {
    this.props.toggleFromParent();
  };

  handleOnChangeInput = (event, id) => {
    //good code
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState(
      {
        ...copyState,
      },
      () => {
        // console.log('check good state: ',this.state);
      }
    );
    //console.log('copystate: ',copyState);

    // console.log(event.target.value,id)
  };

  handleOnChangeInputPrice = (event, field) => {
    // Loại bỏ các dấu phẩy từ giá trị người dùng nhập
    const inputValue = event.target.value.replace(/,/g, "");

    // Kiểm tra xem giá trị có phải là số không
    if (!isNaN(inputValue)) {
      // Cập nhật state
      this.setState({
        [field]: inputValue,
      });
    }
  };


  handleAddNewUser = () => {
    let isValid = validateInput(["name", "price", "quantity", "idCate", "idBrand", "avatar"]);

    if (isValid == true) {
      //call api create modal
      //  console.log('check props child:',this.props);
      this.props.createNewUser(this.state);
      // console.log('data modal:',this.state)
    }
  };


  render() {
    const formattedPrice = new Intl.NumberFormat("en-US").format(
      this.state.price
    );
    let category = this.state.arrCate;
    let brand = this.state.arrBrand;
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        className={"model-user-container"}
        size="lg"
        centered
      >
        <ModalHeader
          className="header-user-content"
          toggle={() => {
            this.toggle();
          }}
        >
          Thêm sản phẩm mới
        </ModalHeader>
        <ModalBody>
          <div className="user-redux-body">
            <div className="container center">
              <div className="row-12">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Tên sản phẩm</label>
                    <input
                      className="form-control"
                      placeholder="iphone"
                      onChange={(event) => {
                        this.handleOnChangeInput(event, "name");
                      }}
                      value={this.state.name}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Giá</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="10,000,000"
                      onChange={(event) => {
                        this.handleOnChangeInputPrice(event, "price");
                      }}
                      value={formattedPrice} // Hiển thị giá trị đã được định dạng
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Số Lượng</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="50"
                      onChange={(event) => {
                        this.handleOnChangeInput(event, "quantity");
                      }}
                      value={this.state.quantity}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Loại</label>
                    <select
                      className="form-control"
                      onChange={(event) => {
                        this.handleOnChangeInput(event, "idCate");
                      }}
                      value={this.state.idCate}
                    >
                      <option value="">Chọn loại sản phẩm</option>
                      {category &&
                        category.length > 0 &&
                        category.map((item, index) => {
                          return <option value={item.id}>{item.name}</option>;
                        })}
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Hãng</label>
                    <select
                      className="form-control"
                      onChange={(event) => {
                        this.handleOnChangeInput(event, "idBrand");
                      }}
                      value={this.state.idBrand}
                    >
                      <option value="">Chọn Hãng sản phẩm</option>
                      {brand &&
                        brand.length > 0 &&
                        brand.map((item, index) => {
                          return <option value={item.id}>{item.name}</option>;
                        })}
                    </select>
                  </div>

                  <ImageUtility></ImageUtility>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="primary"
            color="primary"
            className="px-3"
            onClick={() => {
              this.handleAddNewUser();
            }}
          >
            Thêm
          </Button>
          <Button
            variant="secondary"
            color="danger"
            className="px-3"
            onClick={() => {
              this.toggle();
            }}
          >
            Đóng
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalProducts;