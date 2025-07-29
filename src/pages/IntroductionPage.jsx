// ---------- Thư viện sử dụng ---------- 
import Header from "../components/Header";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { CiCircleChevUp } from "react-icons/ci";

// ---------- Code chính ---------- 
const IntroductionPage = () => {
  return (
    <>
      <Header />
      {/* Scroll up button */}
      <a href="#introduction-main" className="scroll-up fixed bottom-10 right-10 z-50 bg-yellow-400 p-3 animate-bounce rounded-full shadow-lg cursor-pointer hover:bg-yellow-500 transition-all duration-300 ease-in-out"><CiCircleChevUp className="text-gray-800 text-4xl font-semibold animate-pulse" /></a>

      <main id="introduction-main" className="introduction-page">
        <section className="relative w-full min-h-[100vh] pt-[150px] flex items-center justify-center bg-fixed bg-cover bg-center z-10" style={{ backgroundImage: "url('src/assets/images/projects-bg.png')" }}>
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-65 z-20"> </div>

          <div className="max-w-[70vw] h-full flex flex-col items-center justify-end z-30 text-center">
            <h1 className="text-5xl md:text-4xl font-bold text-white z-30"><span className="animate-shimmer ml-[0.3em]">Tổng Công Ty TNHH EduAE</span></h1>
            <p className="text-lg md:text-base text-gray-300 max-w-[80vw] mt-5 z-30 italic">–- Cộng đồng giáo dục tiên phong giúp bạn khám phá bản thân và định hướng nghề nghiệp hiệu quả --</p>
            <div className="line bg-gray-400 h-[1px] my-8 w-[400px] rounded-full"></div>

            <div className="max-w-[95vw] flex items-center justify-center">
              <video autoPlay loop muted src="src/assets/videos/videoplayback.mp4" className="w-[95vw]" alt="" />
            </div>

            <div className="flex flex-wrap justify-center gap-28 my-28 text-white">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-yellow-400">50.000+</h3>
                <p className="text-sm mt-1">Người dùng toàn quốc</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-yellow-400">200+</h3>
                <p className="text-sm mt-1">Trường học triển khai</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-yellow-400">4.9★</h3>
                <p className="text-sm mt-1">Đánh giá trung bình</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-yellow-400">10.000+</h3>
                <p className="text-sm mt-1">Bài trắc nghiệm hoàn thành</p>
              </div>
            </div>
          </div>
        </section>

        <Projects />

        <section className="relative w-full h-[15vh] flex pt-16 items-center justify-center bg-fixed bg-cover bg-center z-10" style={{ backgroundImage: "url('src/assets/images/projects-bg.png')" }}>
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-65 z-20"> </div>
          <h3 data-aos='fade-up' className="text-yellow-400 relative z-30 text-lg italic">--- Hãy liên hệ ngay với chúng tôi ---</h3>
        </section>

        <section className="relative w-full h-[75vh] flex items-center px-6 justify-end bg-fixed bg-cover bg-center z-10" style={{ backgroundImage: "url('src/assets/images/projects-bg.png')" }}>
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-65 z-20"></div>
          {/* Nội dung chính */}
          <Contact />
        </section>

        <section className="relative w-full h-[13vh] flex pt-16 items-center justify-center bg-fixed bg-cover bg-center z-10" style={{ backgroundImage: "url('src/assets/images/projects-bg.png')" }}>
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-65 z-20"> </div>
          {/* Overlay gradient để chuyển sang section tiếp theo */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-gray-800 z-30"></div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default IntroductionPage;