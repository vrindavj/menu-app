import logo from "./logo.svg";
import "./App.css";
import { Container, Typography } from "@mui/material";
import Appbar from "./components/appbar";
import { useEffect } from "react";
import Banner from "./components/banner";
import MenuCard from "./components/menucard";
import { TextContainer } from "./styles/textContainer";
import MenuCarousel from "./components/carousel/menuCarousel";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";

function App() {
  useEffect(() => {
    document.title = "Food Factori";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <div className="App">
          <Appbar> </Appbar>
          <Banner> </Banner>
          <TextContainer variant="h3">
            {" "}
            Whats on my platter today ?{" "}
          </TextContainer>
          <MenuCarousel> </MenuCarousel>{" "}
        </div>
      </Container>{" "}
    </ThemeProvider>
  );
}

export default App;
