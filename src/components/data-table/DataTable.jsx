import { useMemo, useState } from "react";
import { filterData } from "../../utils";
import { TableHeading, FilterBox, TableHeadRow, TableElement } from "./DataTable.styles";

const DataTable = ({ dataList, className }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [filterState, setFilterState] = useState({
    appliedLicenses: [],
  });

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

  const Filters = () => {
    return (
      <FilterBox>
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
      </FilterBox>
    );
  };

  return (
    <table className={className}>
      <thead>
        <TableHeadRow>
          <TableHeading>Name</TableHeading>
          <TableHeading>Stars</TableHeading>
          <TableHeading>Forks</TableHeading>
          <TableHeading>
            License
            <button onClick={() => setShowFilters(prevState => !prevState)}>
              {showFilters ? "Hide" : "Show"}
            </button>
            {showFilters ? <Filters /> : null}
          </TableHeading>
        </TableHeadRow>
      </thead>

      <tbody>
        {filteredList?.map(repo => {
          const { html_url, name, id, stargazers_count, forks_count } = repo;
          return (
            <tr data-testid={`${name} - ${id}`} key={id}>
              <TableElement>
                <a href={html_url} target="_blank" rel="noreferrer">
                  {name}
                </a>
              </TableElement>
              <TableElement>{stargazers_count}</TableElement>
              <TableElement>{forks_count}</TableElement>
              <TableElement>{repo.license?.name ? repo.license.name : "-"}</TableElement>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { DataTable };
