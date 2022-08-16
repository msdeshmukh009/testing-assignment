import { useState } from "react";
import { TableHeading, TableHeadRow, Button, FilterBox, FilterContainer } from "./DataTable.styles";

const TableHead = ({ filterState, handleLicenseCheckBox, dataList }) => {
  const [showFilters, setShowFilters] = useState(false);
  const tableHeaders = ["Name", "Stars", "Forks", "License"];

  const uniqueLicense = [
    ...new Set(dataList.map(data => (data?.license ? data.license.name : null))),
  ].filter(lic => lic !== null);

  const Filters = () => {
    return (
      <FilterBox>
        <FilterContainer>
          {uniqueLicense.map(lic => (
            <label key={lic}>
              <input
                type="checkbox"
                checked={filterState.appliedLicenses.includes(lic)}
                onChange={() => handleLicenseCheckBox(lic)}
              />
              {lic}
            </label>
          ))}
        </FilterContainer>
      </FilterBox>
    );
  };

  return (
    <thead>
      <TableHeadRow>
        {tableHeaders.map(header =>
          header === "License" ? (
            <TableHeading>
              License
              <Button onClick={() => setShowFilters(prevState => !prevState)}>
                <i className="fas fa-filter"></i>
              </Button>
              {showFilters ? <Filters /> : null}
            </TableHeading>
          ) : (
            <TableHeading>{header}</TableHeading>
          )
        )}
      </TableHeadRow>
    </thead>
  );
};

export { TableHead };
