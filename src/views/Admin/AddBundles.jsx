import React, { useState } from "react";

// Liberties
import { Upload, Button } from "antd";

// Components
import { UploadButton, UploadedImg } from "../../components/UploadCustom";

//Assets
import "../../assets/addProduct.css";
import "../../assets/responsive.css";

//variables

const AddNewBundles = () => {
  const [bundleName, setBundleName] = useState("");
  const [showImg, setShowImg] = useState(0);
  const [img, setImg] = useState();

  const handleUpload = ({ fileList }) => {
    setShowImg(1);
    const imageUrl = URL.createObjectURL(fileList[0].originFileObj);
    setImg(imageUrl);
  };

  const deleteImg = () => {
    setShowImg(0);
  };

  const onSubmit = () => {
    const data = {
      bundleName,
      img,
    };

    console.log(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // logic to upload the img
  };
  return (
    <div className="add-product-main">
      <div className="add-product-layout">
        <nav className="add-product-nav">
          <h1>Add a new bundle</h1>
        </nav>
        <div className="add-product-container">
          <div className="parent-add-product">
            <section className="section-1">
              <div className=" gen-bundle">
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
                      name="bundleName"
                      onChange={(e) => {
                        setBundleName(e.target.value);
                      }}
                      value={bundleName}
                    />
                  </div>
                  <div className="img-parent">
                    {showImg === 0 && (
                      <Upload
                        onChange={handleUpload}
                        beforeUpload={() => false}
                        className="upload"
                        style={{
                          width: "100%",
                        }}
                      >
                        <UploadButton />
                      </Upload>
                    )}
                    {showImg === 1 && (
                      <UploadedImg srcImg={img} onDelete={deleteImg} />
                    )}
                  </div>
                </div>
              </div>
            </section>
            <hr />
            {/*  // -------------End Of 1st Section  ------------  */}
            <div className="parent-add-product">
              <section className="button-section">
                <div className="w-75"></div>
                <div className="button-box">
                  <div className="button-box-child">
                    <Button className="button-1 ">Cancel</Button>
                    <Button
                      type="primary"
                      className={
                        bundleName
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
    </div>
  );
};

export default AddNewBundles;
