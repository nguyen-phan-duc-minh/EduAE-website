// ---------- Thư viện sử dụng ---------- 
import Header from "../components/Header"; 
import Footer from "../components/Footer";
import { CiCircleChevUp } from "react-icons/ci"; 

// ---------- Component - Mapping Index ---------- 
const func = () => { }

// ---------- Code chính ---------- 
const OrientatetionPage = () => {
  return (
    <>
      <Header />
      {/* Scroll up button */}
      <a href="#orientate-main" className="scroll-up fixed bottom-10 right-10 z-50 bg-yellow-400 p-3 animate-bounce rounded-full shadow-lg cursor-pointer hover:bg-yellow-500 transition-all duration-300 ease-in-out"><CiCircleChevUp className="text-gray-800 text-4xl font-semibold animate-pulse" /></a>

      <main id="orientate-main" className="orientate-page">
        <h1>Welcome to the Orientation Page</h1>
        <p>This page provides information about our orientation process.</p>
        {/* Additional content can be added here */}
      </main>
      <Footer />
    </>
  );
}

export default OrientatetionPage;