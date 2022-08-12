import { filterData } from "../filterData";

const data = [
  {
    html_url: "https://github.com/facebook/docusaurus",
    name: "docusaurus",
    id: 94911145,
    stargazers_count: 36773,
    forks_count: 5424,
    license: { name: "MIT License" },
  },
  {
    html_url: "https://github.com/facebook/random_121",
    name: "random_121",
    id: 949111121,
    stargazers_count: 36773,
    forks_count: 5424,
    license: { name: "Apache License 2.0" },
  },
  {
    html_url: "https://github.com/facebook/random_141",
    name: "random_141",
    id: 949111141,
    stargazers_count: 36773,
    forks_count: 5424,
    license: { name: "other" },
  },
];

const expectedOutput = [
  {
    html_url: "https://github.com/facebook/docusaurus",
    name: "docusaurus",
    id: 94911145,
    stargazers_count: 36773,
    forks_count: 5424,
    license: { name: "MIT License" },
  },
];

describe("filterData", () => {
  test("should filter the list according to provided state", () => {
    expect(filterData({ appliedLicenses: ["MIT License"] }, data)).toStrictEqual(expectedOutput);
  });
});
