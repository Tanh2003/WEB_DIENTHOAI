import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../utils/emitter";
import { toast } from "react-toastify";
import "./ModalProducts.scss";
import _ from "lodash";
import CommonUtils from "../../utils/CommonUtils";
import {getAllCategories} from "../../userService";

class ModalProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrCate:[],
      name: "",
      price: "",
      quantity: "",
      idCate: "",
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
      avatar: "",
      previewImgURL: " ",
      });
    });
  };
 async componentDidMount() {
  await this.getAllCategoriesReact();
  }

  getAllCategoriesReact = async () => {
    let response = await getAllCategories("ALL");
    if (response && response.errcode == 0) {
      this.setState({
        arrCate: response.categories,
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
  checkValideInput = () => {
    let isValid = true;
    let arrInput = [
      "name",
      "price",
      "quantity",
      "idCate",
      "avatar"
    ];

    for (let i = 0; i < arrInput.length; i++) {
      console.log("check inside loop", this.state[arrInput[i]], arrInput[i]);
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter: " + arrInput[i]);
        break;
      }
    }

    return isValid;
  };

  handleAddNewUser = () => {
    let isValid = this.checkValideInput();

    if (isValid == true) {
      //call api create modal
      //  console.log('check props child:',this.props);
      this.props.createNewUser(this.state);
      // console.log('data modal:',this.state)
      toast.success("Tạo Thành công");
    }
  };

  handleOnChangeImage = async (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let base64 = await CommonUtils.getBase64(file);

      let objectUrl = URL.createObjectURL(file);
      this.setState({
        previewImgURL: objectUrl,
        avatar: base64,
      });
    }
  };

  render() {
    let category=this.state.arrCate;
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
                      type="number"
                      className="form-control"
                      placeholder="10,000,000"
                      onChange={(event) => {
                        this.handleOnChangeInput(event, "price");
                      }}
                      value={this.state.price}
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
                  
                  <div className="form-group col-md-3">
                    <label>Loại</label> 
                    <select className="form-control"
                     onChange={(event) => {
                      this.handleOnChangeInput(event, "idCate");
                    }}
                    value={this.state.idCate}>
                     {
                      category&&category.length>0
                      &&category.map((item,index)=>{
                        return(
                          <option  value={item.id}>{item.name}</option>
                        )
                      })
                     }
                     
                    </select>
                  </div>

                  <div className="form-group col-md-3">
                    <label>Hình ảnh</label>
                    <div className="lamdep">
                      <input
                        type="file"
                        id="previewImg"
                        hidden
                        onChange={(event) => this.handleOnChangeImage(event)}
                      ></input>

                      <label className="label-upload" htmlFor="previewImg">
                        tải ảnh <i className="fas fa-upload"></i>
                      </label>
                      <div
                        className="preview-image"
                        onClick={this.handleImageClick}
                        style={{
                          backgroundImage: `url(${this.state.previewImgURL})`,
                        }}
                      ></div>
                    </div>
                  </div>
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