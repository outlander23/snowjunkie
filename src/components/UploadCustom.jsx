import { message } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }

  return isJpgOrPng && isLt2M;
};
export const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
export const UploadButton = () => {
  return (
    <div className="img-upload-content">
      <div className="upload-box">
        <span className="upload-text">
          upload
          <small className="upload-small">or drop file</small>
        </span>
      </div>
    </div>
  );
};

export const UploadedImg = ({ srcImg, onDelete }) => {
  return (
    <div className="upload-img-container " onClick={onDelete}>
      <div className="img-icon-cross">
        <CloseOutlined />
      </div>
      <img className="upload-img" alt="test img" src={srcImg} />
    </div>
  );
};
