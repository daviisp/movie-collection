import Header from "../Header";
import VideoList from "../VideoList";
import Footer from "../Footer";
import Container from "./styles";

const Layout = () => {
  return (
    <Container>
      <Header />
      <VideoList />
      <Footer />
    </Container>
  );
};
export default Layout;
