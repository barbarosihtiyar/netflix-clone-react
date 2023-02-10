import React from "react";
import DocumentaryRow from "../pages/DocumentaryRow";
import Banner from "../pages/Banner";
import requests from "../requests";
import Header from "../pages/Header";

function Documentary() {
  return (
    <>
      <Header />
      <Banner fetchURL={requests.fetchDocumentaries} />
      <DocumentaryRow
        title={"Documentary Movie"}
        fetchURL={requests.fetchDocumentaries}
      />
    </>
  );
}

export default Documentary;
