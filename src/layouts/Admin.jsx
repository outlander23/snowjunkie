import { Routes, Route, Redirect } from "react-router-dom";
import AddNewProduct from "../views/Admin/AddNewProduct";

export default function Admin() {
  return (
    <div>
      <Routes>
        <Route exact path="/addNewProduct" element={<AddNewProduct />} />
      </Routes>
    </div>
  );
}
