import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>

      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        hideProgressBar={true}
        draggable
        theme="light"
      />
      <main className="App-body">
        <RoutesMain />
      </main>
      <Footer />
    </>
  );
}

export default App;
