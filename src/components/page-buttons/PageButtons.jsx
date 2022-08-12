import { ButtonContainer, StyledButtons } from "./PageButtons.styles";

const PageButtons = ({ pageBtns, setUrl }) => {
  const buttonText = rel => {
    return rel
      .split("=")[1]
      .slice(1, rel.split("=")[1].length - 1)
      .toUpperCase();
  };

  return (
    <ButtonContainer>
      {pageBtns.map(btnIfo => {
        const [url, rel] = btnIfo.split(";");
        return (
          <StyledButtons
            data-testid={`btn-rel-${buttonText(rel)}`}
            key={url}
            onClick={() => setUrl(url.replace("<", "").replace(">", ""))}
          >
            {buttonText(rel)}
          </StyledButtons>
        );
      })}
    </ButtonContainer>
  );
};

export default PageButtons;
