import styled from "@emotion/styled";
import { Fab } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { PageState, pageStateAtom } from "../utils/pageState";

const StyledHome = styled("div")({
  height: "40vh",
  "& h1": {
    fontSize: "4rem",
    marginBottom: 0,
  },
  "& h2": {
    marginTop: "8px",
    fontSize: "2rem",
    fontWeight: "normal",
  },
  padding: "32px",
  color: "white",
  backgroundImage:
    "linear-gradient(315deg, #a1c4fd 3%, #cfd9df 38%, #c2e9fb 68%, #a1c4fd 98%);",
  animation: "gradient 15s ease infinite",
  backgroundSize: "400% 400%",
  backgroundAttachment: "fixed",
  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 0%",
    },
    "50%": {
      backgroundPosition: "100% 100%",
    },
    "100%": {
      backgroundPosition: "0% 0%",
    },
  },
  marginBottom: "32px",
});

const TopSection = () => {
  const setPageState = useSetRecoilState(pageStateAtom);

  const handleToForm = (pageState: PageState) => () => {
    setPageState((oldPageState) => {
      return { ...oldPageState, page: pageState };
    });
  };

  return (
    <StyledHome>
      <h1>Overskrift</h1>
      <h2>Underskrift yoho</h2>
      <Fab
        variant="extended"
        size="medium"
        onClick={handleToForm(PageState.Home)}
        sx={{ mr: 1 }}
      >
        Nyheter
      </Fab>
      <Fab
        variant="extended"
        size="medium"
        onClick={handleToForm(PageState.Form)}
      >
        Til skjema
      </Fab>
    </StyledHome>
  );
};

export default TopSection;
