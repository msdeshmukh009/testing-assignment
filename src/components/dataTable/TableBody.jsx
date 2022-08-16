import { TableElement } from "./DataTable.styles";

const TableBody = ({ repoList }) => {
  const properties = ["name", "stargazers_count", "forks_count", "license"];

  return repoList.map(repo => (
    <tr data-testid={`repo-${repo.name}-${repo.id}`} key={repo.id}>
      {properties.map(property => {
        if (property === "name") {
          return (
            <TableElement>
              <a href={repo["html_url"]} target="_blank" rel="noreferrer">
                {repo[property]}
              </a>
            </TableElement>
          );
        }
        if (property === "license") {
          return <TableElement>{repo.license?.name ? repo.license.name : "-"}</TableElement>;
        }
        return <TableElement>{repo[property]}</TableElement>;
      })}
    </tr>
  ));
};

export { TableBody };
