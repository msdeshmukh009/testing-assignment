import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DataTable } from "../DataTable";

const dataList = [
  {
    html_url: "https://github.com/facebook/docusaurus",
    name: "docusaurus",
    id: 94911145,
    stargazers_count: 36773,
    forks_count: 5424,
    license: { name: "MIT License" },
  },
];

describe("DataTable", () => {
  test("should render table from props", () => {
    render(<DataTable dataList={dataList} />);

    const tableRowElement = screen.getByTestId("docusaurus - 94911145");
    expect(tableRowElement).toBeInTheDocument();
  });
});
