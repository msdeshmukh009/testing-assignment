import { useMemo } from "react";
import { filterData } from "../../utils";

const DataTable = ({ dataList, filterState, setFilterState }) => {
  const handleLicenseCheckBox = lic => {
    if (filterState.appliedLicenses.includes(lic)) {
      setFilterState(filterState => ({
        ...filterState,
        appliedLicenses: filterState.appliedLicenses.filter(eachLic => eachLic !== lic),
      }));
    } else {
      setFilterState(filterState => ({
        ...filterState,
        appliedLicenses: [...filterState.appliedLicenses, lic],
      }));
    }
  };
  const uniqueLicense = [
    ...new Set(dataList.map(data => (data?.license ? data.license.name : null))),
  ].filter(lic => lic !== null);

  const filteredList = useMemo(() => {
    return filterData(filterState, dataList);
  }, [filterState, dataList]);

  return (
    <div>
      <div>
        <h3>Filter Licenses</h3>
        <ul>
          {uniqueLicense.map(lic => (
            <li key={lic}>
              <label>
                <input
                  type="checkbox"
                  checked={filterState.appliedLicenses.includes(lic)}
                  onChange={() => handleLicenseCheckBox(lic)}
                />
                {lic}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Stars</th>
            <th>Forks</th>
            <th>License</th>
          </tr>
        </thead>

        {filteredList?.map(repo => {
          const { html_url, name, id, stargazers_count, forks_count } = repo;
          return (
            <tbody key={id}>
              <tr>
                <td>
                  <a href={html_url} target="_blank" rel="noreferrer">
                    {name}
                  </a>
                </td>
                <td>{stargazers_count}</td>
                <td>{forks_count}</td>
                <td>{repo?.license?.name}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export { DataTable };
