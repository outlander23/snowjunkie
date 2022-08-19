import React, { useState } from "react";

// Liberties
import {
  Upload,
  Button,
  Collapse,
  Radio,
  Space,
  Input,
  Select,
  message,
} from "antd";

// Components
import { DollarOutlined, DownloadOutlined } from "@ant-design/icons";
import {
  getBase64,
  UploadButton,
  UploadedImg,
} from "../../components/UploadCustom";

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

// Data
const dataOfTrackingMethod = {
  1: "Rental product",
  2: "Consumable",
  3: "Service",
};

const AddNewProduct = () => {
  const [data, setData] = useState({
    tracking_method: "",
    product_name: "",
    price: "",
    price_per: "Hour",
    img: "",
    enable_validation: false,
    tracking_method_selected_option: "",
  });

  const [showImg, setShowImg] = useState(0);

  const handleInputChange = ({ target }) => {
    setData((prevState) => {
      return { ...prevState, [target.name]: target.value };
    });
  };

  const handleCollapseChange = (key) => {
    setData((prevState) => {
      return { ...prevState, tracking_method: dataOfTrackingMethod[key] };
    });
  };
  const handleRadioChange = (info) => {
    setData((prevState) => {
      return {
        ...prevState,
        tracking_method_selected_option: info.target.value,
      };
    });
  };

  const handlePricePre = (value) => {
    setData((prevState) => {
      return { ...prevState, price_per: value };
    });
  };

  const handleCheckBoxChange = (value) => {
    setData((prevState) => {
      return { ...prevState, enable_validation: !value };
    });
  };

  const handleUpload = ({ fileList }) => {
    setShowImg(1);
    const imageUrl = URL.createObjectURL(fileList[0].originFileObj);
    setData((prevState) => {
      return { ...prevState, img: imageUrl };
    });
  };

  const deleteImg = () => {
    setShowImg(0);
  };
  // Below functions Need Backend for working purposes
  const onSubmit = (e) => {
    console.log(data);
    // Login To submit form
  };

  return (
    <div className="add-product-main">
      <div className="add-product-layout">
        <nav className="add-product-nav">
          <h1>New product</h1>
        </nav>
        <div className="add-product-container">
          <div className="parent-add-product">
            <section className="section-1">
              <div className=" gen-info">
                <div className="add-product-title-container">
                  <h3>General information</h3>
                  <div className="add-product-container-description">
                    This information helps you and your customers identify the
                    product on orders, documents and in the online store.
                  </div>
                </div>
              </div>
              <div className="add-product-title-container ">
                <div className="img-content">
                  <div className=" title-box-img ">
                    <label className="add-product-label">Product name</label>
                    <input
                      className="add-product-input"
                      type="text"
                      autoComplete="off"
                      placeholder="eg: iPad"
                      value={data.product_name}
                      onChange={handleInputChange}
                      name="product_name"
                    />
                  </div>
                  <div className="img-parent">
                    {showImg === 0 && (
                      <Upload
                        onChange={handleUpload}
                        className="upload"
                        style={{
                          width: "100%",
                        }}
                      >
                        <UploadButton />
                      </Upload>
                    )}
                    {showImg === 1 && (
                      <UploadedImg srcImg={data.img} onDelete={deleteImg} />
                    )}
                  </div>
                </div>
              </div>
            </section>
            <hr />
            {/*  // -------------End Of 1st Section  ------------  */}
            <section className="section-1">
              <div className="w-25 gen-info">
                <div className="add-product-title-container">
                  <h3>Tracking method</h3>
                  <div className="add-product-container-description">
                    <p>
                      The
                      <Button
                        className=""
                        type="link"
                        icon={<DownloadOutlined />}
                      >
                        tracking method
                      </Button>
                      determines if (and how detailed) a product's inventory is
                      tracked.
                    </p>
                    <p>You can not change this later.</p>
                  </div>
                </div>
              </div>
              <div className="add-product-title-container w-full ">
                <Collapse
                  className="collapse"
                  accordion
                  bordered={false}
                  expandIcon={({ isActive }) =>
                    isActive ? <IconActive /> : <IconDeactivate />
                  }
                  onChange={handleCollapseChange}
                >
                  <Panel
                    header={
                      <AccordionHeaderCustom
                        title="Rental product"
                        description="Products you rent out. They are expected to be returned at the end of a rental period."
                      />
                    }
                    key="1"
                  >
                    <div className="collapse-body">
                      <div className="accordion-box-content">
                        <Radio.Group onChange={handleRadioChange}>
                          <Space direction="vertical">
                            <Radio
                              value={"Track in bulk"}
                              className="flex justify-start items-center"
                            >
                              <RadioCustom
                                title="Track in bulk"
                                description=" Only track quantities to easily
                                            handle a large number of items."
                              />
                            </Radio>
                            <Radio
                              value={"Track individual items"}
                              className="flex justify-start items-center"
                            >
                              <RadioCustom
                                title="Track individual items"
                                description="Keep track of individual items using identifiers (like serial numbers)."
                              />
                            </Radio>
                            <hr />
                            <CheckBoxCustom
                              handleCheckBox={handleCheckBoxChange}
                              checkedValue={data.enable_validation}
                            />
                          </Space>
                        </Radio.Group>
                      </div>
                    </div>
                  </Panel>
                  <Panel
                    header={
                      <AccordionHeaderCustom
                        title="Consumable"
                        description="Items you sell or give away. They are not returned at the end of a rental period."
                      />
                    }
                    key="2"
                  >
                    <div className="collapse-body">
                      <div className="accordion-box-content">
                        <Radio.Group onChange={handleRadioChange}>
                          <Space direction="vertical">
                            <Radio
                              value={"Not tracked"}
                              className="flex justify-start items-center"
                            >
                              <RadioCustom
                                title={"Not tracked"}
                                description="Don't track quantities for this product."
                              />
                            </Radio>
                            <Radio
                              value={"Track in bulk"}
                              className="flex justify-start items-center"
                            >
                              <RadioCustom
                                title={"Track in bulk"}
                                description="Track quantities for this product."
                              />
                            </Radio>
                            <hr />
                            <CheckBoxCustom
                              handleCheckBox={handleCheckBoxChange}
                              checkedValue={data.enable_validation}
                            />
                          </Space>
                        </Radio.Group>
                      </div>
                    </div>
                  </Panel>
                  <Panel
                    header={
                      <AccordionHeaderCustom
                        title="Service"
                        description=" Non-physical services you offer with rentals
                        (like setup costs)."
                      />
                    }
                    key="3"
                  >
                    <div className="collapse-body">
                      <div className="accordion-box-content">
                        Inventory is not tracked for services
                      </div>
                    </div>
                  </Panel>
                </Collapse>
              </div>
            </section>
            <hr />
            {/*  // -------------End Of 2st Section  ------------  */}
            <section className="section-1">
              <div className="w-25 gen-info">
                <div className="add-product-title-container">
                  <h3>Pricing</h3>
                  <div className="add-product-container-description">
                    <p>
                      Determines how the price will be calculated for a rental
                      period.
                    </p>
                    <p>
                      You can configure more/different settings for the price
                      after the product has been created.
                    </p>
                  </div>
                </div>
              </div>
              <div className="add-product-title-container w-full ">
                <Collapse
                  className="collapse"
                  defaultActiveKey={["1"]}
                  accordion
                  bordered={false}
                  expandIcon={({ isActive }) =>
                    isActive ? <IconActive /> : <IconDeactivate />
                  }
                  onChange={handleCollapseChange}
                >
                  <Panel
                    header={
                      <AccordionHeaderCustom
                        title="Price per..."
                        description="Flat rate per period (e.g. $50 per day)"
                      />
                    }
                    key="1"
                  >
                    <div className="collapse-body">
                      <div className="accordion-box-content">
                        <div className="price-box">
                          <div className="price-picker">
                            <label className=" text-sm">Price</label>
                            <Input
                              placeholder="50"
                              prefix={<DollarOutlined />}
                              size="large"
                              onChange={handleInputChange}
                              name="price"
                            />
                          </div>
                          <div className="data-picker">
                            <label className="text-sm ">Per</label>
                            <Select
                              defaultValue="Hour"
                              style={{ width: "100%" }}
                              size="large"
                              onChange={handlePricePre}
                              name="price_per"
                            >
                              <Option value="Hour">Hour</Option>
                              <Option value="Day">Day</Option>
                              <Option value="Week">Week</Option>
                              <Option value="Month">Month</Option>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Panel>
                  <Panel
                    header={
                      <AccordionHeaderCustom
                        title="Other / no pricing"
                        description="Fixed fee, pricing structure, or no price at all
                        "
                      />
                    }
                    key="2"
                  >
                    <div className="collapse-body ">
                      You can setup other pricing methods after the product is
                      created
                    </div>
                  </Panel>
                </Collapse>
              </div>
            </section>
          </div>
          <hr />
          <div className="parent-add-product">
            <section className="button-section">
              <div className="w-75"></div>
              <div className="button-box">
                <div className="button-box-child">
                  <Button className="button-1 ">Cancel</Button>
                  <Button
                    type="primary"
                    className={
                      data.product_name && data.tracking_method
                        ? "button-1 button-save "
                        : "button-1 button-save disable"
                    }
                    onClick={onSubmit}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
