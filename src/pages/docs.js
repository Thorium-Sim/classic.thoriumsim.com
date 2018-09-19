import React from "react";
import { navigate } from "gatsby";
import Layout from "../components/layout";
export default () => {
  if (typeof window === "undefined") return null;
  navigate("/docs/overview");
  return <Layout />;
};
