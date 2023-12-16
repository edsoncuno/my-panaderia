import Header from "../header";
import Footer from "../footer";

export default function App({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}