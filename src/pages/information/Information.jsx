import { useEffect, useState } from "react";
import { PageButtons, StyledTable } from "../../components";
import { InformationContainer, Heading } from "./Information.style";
import { GlobalStyles } from "../../Global.styles";
import axios from "axios";

const Information = () => {
  const [url, setUrl] = useState("https://api.github.com/users/facebook/repos?per_page=10&page=1");
  const [fetchData, setFetchData] = useState({
    loading: false,
    dataList: [],
    pageBtns: [],
    error: "",
  });

  useEffect(() => {
    (async () => {
      try {
        setFetchData(prevState => ({ ...prevState, loading: true }));

        const { headers, data, status } = await axios.get(url);

        if (status === 200) {
          setFetchData(prevState => ({
            ...prevState,
            loading: false,
            dataList: data,
            pageBtns: headers.link.split(","),
          }));
        }
      } catch (err) {
        setFetchData(prevState => ({
          ...prevState,
          loading: false,
          dataList: [],
          pageBtns: [],
          error: `Limit exceeded: Try again after ${new Date(
            err.response.headers["x-ratelimit-reset"] * 1000
          )}`,
        }));
      }
    })();
  }, [url]);

  return (
    <InformationContainer>
      <GlobalStyles />

      <Heading>Github Repositories</Heading>

      {fetchData.error ? fetchData.error : null}
      {fetchData.loading ? <p data-testid="loading">Loading...</p> : null}

      {!fetchData.loading && (
        <>
          <StyledTable dataList={fetchData.dataList} />
          <PageButtons pageBtns={fetchData.pageBtns} setUrl={setUrl} />
        </>
      )}
    </InformationContainer>
  );
};

export { Information };
