import React from "react";
import DocumentaryRow from "../pages/DocumentaryRow";
import Banner from "../pages/Banner";
import requests from "../requests";
import Header from "../pages/Header";
import bg from "../sass/fixedBg.module.css";
import { useState } from "react";
import LoadingButtons from "../pages/LoadingButtons";

function Documentary() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className={selectedPhoto === null ? "" : bg.fixedBg}>
        {isLoading ? <LoadingButtons /> : ""}
        <Header />
        <Banner fetchURL={requests.fetchDocumentaries} />
        <DocumentaryRow
          title={"Documentary Movie"}
          fetchURL={requests.fetchDocumentaries}
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}

export default Documentary;