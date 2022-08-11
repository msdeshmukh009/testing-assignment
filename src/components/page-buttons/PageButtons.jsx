const PageButtons = ({ pageBtns, setUrl }) => {
  return (
    <div>
      {pageBtns.map(btnIfo => {
        const [url, rel] = btnIfo.split(";");
        return (
          <button key={url} onClick={() => setUrl(url.replace("<", "").replace(">", ""))}>
            {rel
              .split("=")[1]
              .slice(1, rel.split("=")[1].length - 1)
              .toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default PageButtons;
