const filterData = (filterState, data) => {
  let tempData = [...data];

  if (filterState.appliedLicenses.length) {
    tempData = tempData.filter(eachRepo =>
      filterState.appliedLicenses.includes(eachRepo?.license?.name)
    );
  }

  return tempData;
};

export { filterData };
