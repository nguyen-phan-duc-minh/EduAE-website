// ---------- Thư viện sử dụng ---------- 
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { CiCircleChevUp } from "react-icons/ci";

// ---------- Code chính ---------- 
const ContactPage = () => {
  return (
    <>
      <Header />
      {/* Scroll up button */}
      <a href="#contact-main" className="scroll-up fixed bottom-10 right-10 z-50 bg-yellow-400 p-3 animate-bounce rounded-full shadow-lg cursor-pointer hover:bg-yellow-500 transition-all duration-300 ease-in-out"><CiCircleChevUp className="text-gray-800 text-4xl font-semibold animate-pulse" /></a>

      <main id="contact-main" className="contact-page w-full h-auto flex flex-col items-center justify-center overflow-hidden">
        <section className="relative w-full h-[110vh] flex items-center px-6 justify-end bg-fixed bg-cover bg-center z-10" style={{ backgroundImage: "url('src/assets/images/projects-bg.png')" }}>
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-65 z-20"></div>
          {/* Overlay gradient để chuyển sang section tiếp theo */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-gray-800 z-30"></div>
          {/* Nội dung chính */}
          <Contact/>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ContactPage;