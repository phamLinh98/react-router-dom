import React from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const location = useLocation();
  const fullURL = `${location.pathname}${location.search}${location.hash}`;
  return (
    <div>
      <h2>Thông tin về địa chỉ URL:</h2>
      <p>Full URL: {fullURL}</p>
    </div>
  );
}
