import React from "react";
import AdminAddProduct from "../components/AdminAddProduct";
import AdminMenu from "../components/AdminMenu";
import { withAuth } from "../components/ProtectedRoute";
import AdminFooter from "../components/AdminFooter";

//admin products page
function AdminProducts(props) {
  return (
    <div>
      <AdminMenu></AdminMenu>
      <h1>Admin Products</h1>
      <AdminAddProduct></AdminAddProduct>
      <AdminFooter></AdminFooter>
    </div>
  );
}

//page only accessible by admin
export default withAuth(AdminProducts);
