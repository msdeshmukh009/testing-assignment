import { useMemo, useState } from "react";
import { filterData } from "../../utils";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";

const DataTable = ({ dataList, className }) => {
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

  const filteredList = useMemo(() => {
    return filterData(filterState, dataList);
  }, [filterState, dataList]);

  return (
    <table className={className}>
      <TableHead
        dataList={dataList}
        filterState={filterState}
        handleLicenseCheckBox={handleLicenseCheckBox}
      />
      <TableBody repoList={filteredList} />
    </table>
  );
};

export { DataTable };
