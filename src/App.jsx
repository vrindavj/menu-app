import logo from "./logo.svg";
import "./App.css";
import { Container, Typography } from "@mui/material";
import Appbar from "./components/appbar";
import { useEffect } from "react";
import Banner from "./components/banner";
import { TextContainer } from "./styles/textContainer";
import MenuCarousel from "./components/carousel";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import Booking from "./components/booking";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import { UIProvider } from "./context/ui";
import SearchBox from "./components/search";

function App() {
  useEffect(() => {
    document.title = "Food Factori";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <div className="App">
        <UIProvider>
          <Appbar> </Appbar>
          <Banner> </Banner>
          <TextContainer variant="h3">
            {" "}
            Whats on my platter today ?{" "}
          </TextContainer>
          <MenuCarousel> </MenuCarousel>{" "}
          <Booking >
          </Booking>
          <Footer  />
          <AppDrawer />
          <SearchBox></SearchBox>
          </UIProvider>
        </div>
      </Container>{" "}
    </ThemeProvider>
  );
}

export default App;
