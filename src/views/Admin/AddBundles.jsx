import React, { useState } from "react";

// Liberties
import {
  Upload,
  Button,
  Collapse,
  Radio,
  Space,
  Input,
  DatePicker,
  Select,
} from "antd";

// Components
import { DollarOutlined, DownloadOutlined } from "@ant-design/icons";
import { UploadButton, UploadedImg } from "../../components/UploadCustom";

//Assets
import "../../assets/addProduct.css";
import "../../assets/responsive.css";
import RadioCustom from "../../components/RadioCustom";
import CheckBoxCustom from "../../components/CheckBoxCustom";
import AccordionHeaderCustom from "../../components/AccordionHeader";
import { IconActive, IconDeactivate } from "../../components/RadioIcon";

//variables
const Panel = Collapse.Panel;
const Option = Select.Option;
const AddNewBundles = () => {
  const [showImg, setShowImg] = useState(0);
  const handleChange = () => {
    setShowImg(1);
  };
  const deleteImg = () => {
    setShowImg(0);
  };
  return (
    <div className="add-product-main">
      <div className="add-product-layout">
        <nav className="add-product-nav">
          <h1>General information</h1>
        </nav>
        <div className="add-product-container">
          <div className="parent-add-product">
            <section className="section-1">
              <div className=" gen-info">
                <div className="add-product-title-container">
                  <h3>General information</h3>
                  <div className="add-product-container-description">
                    This will be used to help your team and your customers
                    identify this bundle.
                  </div>
                </div>
              </div>
              <div className="add-product-title-container ">
                <div className="img-content">
                  <div className=" title-box-img ">
                    <label className="add-product-label">Bundle name</label>
                    <input
                      className="add-product-input"
                      type="text"
                      autoComplete="off"
                      placeholder="Bundles name"
                    />
                  </div>
                  <div className="img-parent">
                    {showImg === 0 && (
                      <Upload
                        onChange={handleChange}
                        className="upload"
                        style={{
                          width: "100%",
                        }}
                      >
                        <UploadButton />
                      </Upload>
                    )}
                    {showImg === 1 && (
                      <UploadedImg
                        srcImg={"img src file"}
                        onDelete={deleteImg}
                      />
                    )}
                  </div>
                </div>
              </div>
            </section>
            <hr />
            {/*  // -------------End Of 1st Section  ------------  */}
            <div className="button-box">
              <div className="button-box-child">
                <Button>Cancel</Button>
                <Button type="primary" className="button">
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewBundles;
