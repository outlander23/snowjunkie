import { Routes, Route, Redirect } from "react-router-dom";
import AddNewBundles from "../views/Admin/AddBundles";
import AddNewProduct from "../views/Admin/AddNewProduct";

export default function Admin() {
  return (
    <div>
      <Routes>
        <Route exact path="/addNewProduct" element={<AddNewProduct />} />
        <Route exact path="/addNewBundles" element={<AddNewBundles />} />
      </Routes>
    </div>
  );
}
