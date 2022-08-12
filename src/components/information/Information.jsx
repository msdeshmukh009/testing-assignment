import { useEffect, useState } from "react";
import { StyledTable } from "../data-table/DataTable.styles";
import PageButtons from "../page-buttons/PageButtons";
import { InformationContainer } from "./Information.style";
import { GlobalStyles } from "../../Global.styles";
import axios from "axios";

const Information = () => {
  const [dataList, setDataList] = useState([]);
  const [pageBtns, setPageBtns] = useState([]);
  const [url, setUrl] = useState("https://api.github.com/users/facebook/repos?per_page=10&page=1");

  useEffect(() => {
    (async () => {
      try {
        const { headers, data } = await axios.get(url);
        setDataList(data);
        setPageBtns(headers.link.split(","));
      } catch (err) {
        console.log(new Date(err.response.headers["x-ratelimit-reset"] * 1000), "err", err);
      }
    })();
  }, [url]);

  return (
    <InformationContainer>
      <GlobalStyles />
      <h1>Github Repositories</h1>

      <StyledTable dataList={dataList} />

      <PageButtons pageBtns={pageBtns} setUrl={setUrl} />
    </InformationContainer>
  );
};

export { Information };
