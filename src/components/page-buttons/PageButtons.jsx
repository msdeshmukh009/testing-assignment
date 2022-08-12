const PageButtons = ({ pageBtns, setUrl }) => {
  const buttonText = rel => {
    return rel
      .split("=")[1]
      .slice(1, rel.split("=")[1].length - 1)
      .toUpperCase();
  };
  console.log(pageBtns);
  return (
    <div>
      {pageBtns.map(btnIfo => {
        const [url, rel] = btnIfo.split(";");
        return (
          <button
            data-testid={`btn-rel-${buttonText(rel)}`}
            key={url}
            onClick={() => setUrl(url.replace("<", "").replace(">", ""))}
          >
            {buttonText(rel)}
          </button>
        );
      })}
    </div>
  );
};

export default PageButtons;
