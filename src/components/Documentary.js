import React from "react";
import DocumentaryRow from "../pages/DocumentaryRow";
import Banner from "../pages/Banner";
import requests from "../requests";
import Header from "../pages/Header";
import bg from "../sass/fixedBg.module.css";
import { useState } from "react";

function Documentary() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  return (
    <>
      <div className={selectedPhoto === null ? "" : bg.fixedBg}>
        <Header />
        <Banner
          fetchURL={requests.fetchDocumentaries}
        />
        <DocumentaryRow
          title={"Documentary Movie"}
          fetchURL={requests.fetchDocumentaries}
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
        />
      </div>
    </>
  );
}

export default Documentary;
