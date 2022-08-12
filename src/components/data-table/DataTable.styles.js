import styled from "styled-components";
import { DataTable } from "./DataTable";

export const StyledTable = styled(props => <DataTable {...props} />)`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  border-spacing: 0;
`;

export const TableElement = styled.td`
  margin: 1rem 0;
  padding: 1rem;
`;

export const TableHeading = styled.th`
  position: relative;
  width: 20%;
  padding: 0.5rem;
`;

export const TableHeadRow = styled.tr`
  background-color: #ef9f9f;
`;

export const FilterBox = styled.div`
  position: absolute;
  right: 10px;
  z-index: 10;
  background-color: lightblue;
  padding: 0.5rem;
  box-shadow: 0px 3px 5px 0px rgba(120, 120, 120, 1);
`;
