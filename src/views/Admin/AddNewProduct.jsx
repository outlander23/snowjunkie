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

const AddNewProduct = () => {
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
                    {showImg === 1 && <UploadedImg onDelete={deleteImg} />}
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
                  <div class="add-product-container-description">
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
                  defaultActiveKey={["1"]}
                  accordion
                  bordered={false}
                  expandIcon={({ isActive }) =>
                    isActive ? <IconActive /> : <IconDeactivate />
                  }
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
                        <Radio.Group>
                          <Space direction="vertical">
                            <Radio
                              value={1}
                              className="flex justify-start items-center"
                            >
                              <RadioCustom
                                title="Track in bulk"
                                description=" Only track quantities to easily
                                            handle a large number of items."
                              />
                            </Radio>
                            <Radio
                              value={2}
                              className="flex justify-start items-center"
                            >
                              <RadioCustom
                                title="Track individual items"
                                description="Keep track of individual items using identifiers (like serial numbers)."
                              />
                            </Radio>
                            <hr />
                            <CheckBoxCustom />
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
                        <Radio.Group>
                          <Space direction="vertical">
                            <Radio
                              value={1}
                              className="flex justify-start items-center"
                            >
                              <RadioCustom
                                title={"Not tracked"}
                                description="Don't track quantities for this product."
                              />
                            </Radio>
                            <Radio
                              value={2}
                              className="flex justify-start items-center"
                            >
                              <RadioCustom
                                title={"Track in bulk"}
                                description="Track quantities for this product."
                              />
                            </Radio>
                            <hr />
                            <CheckBoxCustom />
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
            </section>{" "}
            <hr />
            {/*  // -------------End Of 2st Section  ------------  */}
            <section className="section-1">
              <div className="w-25 gen-info">
                <div className="add-product-title-container">
                  <h3>Pricing</h3>
                  <div class="add-product-container-description">
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
                        <div className=" flex relative">
                          <div className="">
                            <h3 className="mb-2 font-semibold block text-sm color-mini-dark">
                              Price
                            </h3>
                            <Input
                              placeholder="50"
                              prefix={<DollarOutlined />}
                              size="large"
                            />
                          </div>
                          <div className="data-picker">
                            <h3 className="mb-2 font-semibold block text-sm color-mini-dark">
                              Per
                            </h3>
                            <DatePicker size="large" />
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
            </section>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
