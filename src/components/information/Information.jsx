import { useEffect, useState } from "react";
import { DataTable } from "../data-table/DataTable";
import PageButtons from "../page-buttons/PageButtons";
import axios from "axios";

const Information = () => {
  const [dataList, setDataList] = useState([]);
  const [pageBtns, setPageBtns] = useState([]);
  const [url, setUrl] = useState("https://api.github.com/users/facebook/repos?per_page=10&page=1");
  const [filterState, setFilterState] = useState({
    appliedLicenses: [],
  });

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
    <main>
      <h1>Github Repos</h1>

      <DataTable dataList={dataList} filterState={filterState} setFilterState={setFilterState} />

      <PageButtons pageBtns={pageBtns} setUrl={setUrl} />
    </main>
  );
};

export { Information };
