// ---------- Thư viện sử dụng ---------- 
import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
import Contact from "../components/Contact"; 
import Projects from "../components/Projects"; 
import { CiCircleChevUp } from "react-icons/ci"; 
import { MdOutlineDoneAll } from "react-icons/md"; 
import { BsStars } from "react-icons/bs"; 
import { GoCheckCircleFill } from "react-icons/go";

// ---------- Component - Mapping Index ---------- 
// Component hiển thị một bước
const isStep = ({ number, title, items }) => (
  <div className="step-item flex flex-col items-center w-[250px] p-2">
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* Sóng tỏa chậm đầu tiên */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75 animate-[ping-small_3s_ease-in-out_infinite]"></span>
      {/* Sóng tỏa chậm thứ hai có delay */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-30 animate-[ping-small_3s_ease-in-out_infinite] [animation-delay:1.5s]"></span>
      {/* Số bước chính */}
      <div className="relative z-10 w-16 h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg">{number}</div>
    </div>
    <p className="mt-4 mb-3 text-center text-white font-semibold text-lg">{title}</p>
    <ul className="space-y-2 text-sm  text-gray-300">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2"><MdOutlineDoneAll className="text-yellow-500 text-base mt-[2px]" /><span>{item}</span></li>
      ))}
    </ul>
  </div>
);

// Component hiển thị tính năng của trang
const FeatureColumn = ({ index, items }) => {
  return (
    <div className="space-y-10 border-l-4 border-yellow-400">
      <h3 className="text-white text-xl font-bold uppercase bg-yellow-400 w-14 h-14 flex items-center justify-center rounded-full -translate-x-[50%] -translate-y-[20%]">{index}</h3>
      {items.map((item, i) => (
        <div key={i}>
          <h4 className="text-yellow-400 text-xl font-semibold mb-1">------ {item.title}</h4>
          <p className="text-gray-200 text-sm ml-[3.5em] mt-2">{item.description}</p>
        </div>
      ))}
      <div className="end-signal text-white text-2xl font-bold uppercase bg-yellow-400 w-14 h-14 flex items-center justify-center rounded-full -translate-x-[50%] translate-y-[10%]"><GoCheckCircleFill /></div>
    </div>
  );
};

// ---------- Code chính ---------- 
const HomePage = () => {
  // Biến mẫu
  const steps = [{ number: 1, title: "Khám phá bản thân", items: ["Trắc nghiệm tính cách MBTI", "Đánh giá sở thích & giá trị sống", "Khám phá điểm mạnh - yếu"] }, { number: 2, title: "Gợi ý ngành nghề", items: ["Kết nối kết quả trắc nghiệm với ngành học", "Đề xuất nghề nghiệp phù hợp", "Phân tích xu hướng thị trường lao động"] }, { number: 3, title: "Khóa học theo ngành", items: ["Lộ trình học tập theo ngành", "Khóa học kỹ năng mềm và chuyên môn", "Tài nguyên học tập đa dạng"] }, { number: 4, title: "Lộ trình phát triển", items: ["Lộ trình nghề nghiệp 3-5 năm", "Chuẩn bị hồ sơ & CV", "Phỏng vấn mô phỏng với chuyên gia"] }, { number: 5, title: "Kỹ năng cần thiết", items: ["Phân tích các kỹ năng nghề nghiệp cốt lõi", "Khóa học bổ trợ kỹ năng", "Tự đánh giá và cải thiện"] }, { number: 6, title: "Kết nối cộng đồng", items: ["Diễn đàn nghề nghiệp", "Mentor & Cố vấn định hướng", "Chia sẻ kinh nghiệm từ người đi trước"] }, { number: 7, title: "Phát triển cá nhân", items: ["Kỹ năng quản lý cảm xúc", "Kỹ năng ra quyết định", "Thói quen và tư duy tích cực"] }, { number: 8, title: "Học tập suốt đời", items: ["Khuyến khích học tập liên tục", "Chứng chỉ & các nguồn học online", "Tư duy mở và linh hoạt"] }, { number: 9, title: "Thực tập & làm thêm", items: ["Gợi ý nơi thực tập phù hợp", "Tạo kinh nghiệm thực tế", "Kết nối với doanh nghiệp"] }, { number: 10, title: "Định hướng chuyên sâu", items: ["Tìm hiểu ngành nghề thực tế", "Phân tích cơ hội thăng tiến", "So sánh các lựa chọn nghề nghiệp"] }, { number: 11, title: "Đánh giá tiến độ", items: ["Theo dõi sự tiến bộ cá nhân", "Cập nhật lại lộ trình nếu cần", "Phản hồi từ chuyên gia hướng nghiệp"] }, { number: 12, title: "Hoàn thiện bản thân", items: ["Tổng kết quá trình định hướng", "Thiết lập mục tiêu dài hạn", "Duy trì động lực và kỷ luật"] }];
  const sectionData = [{ title: "Định hướng rõ ràng", bg: "bg-yellow-400", items: ["Khám phá tính cách và sở thích cá nhân", "Hiểu rõ ưu nhược điểm bản thân", "Trắc nghiệm MBTI, Holland và năng lực nghề", "So sánh tính cách với yêu cầu ngành nghề", "Định hình hướng đi học tập dài hạn", "Đưa ra lựa chọn ngành học chính xác", "Giao diện dễ dùng, trải nghiệm mượt mà", "Cá nhân hóa kết quả theo từng người"] }, { title: "Gỡ rối ngành nghề", bg: "bg-white", items: ["Phân biệt rõ các ngành dễ nhầm lẫn", "Video mô phỏng thực tế môi trường làm việc", "Giải đáp: ngành nào dễ xin việc? ngành nào nên tránh?", "Thống kê mức lương, nhu cầu nhân lực mỗi năm", "Câu chuyện nghề nghiệp từ người thật – việc thật", "Bảng so sánh chi tiết giữa các ngành", "Gợi ý ngành phù hợp nếu muốn đổi hướng", "Tư vấn chọn ngành nếu không đậu nguyện vọng 1"] }, { title: "Hiểu bản thân để chọn đúng", bg: "bg-yellow-400", items: ["Khám phá điểm mạnh & điểm yếu cá nhân", "Trắc nghiệm MBTI, Holland, DISC chuyên sâu", "So khớp tính cách với nhóm ngành phù hợp", "Gợi ý định hướng học tập cá nhân hóa", "Đưa ra lộ trình phát triển năng lực lâu dài", "Tự đánh giá tiến bộ qua từng giai đoạn", "Hệ thống gợi ý mục tiêu phù hợp từng độ tuổi", "Tư vấn trực tuyến từ chuyên gia định hướng"] }, { title: "Khóa học phù hợp", bg: "bg-white", items: ["Khóa học gợi ý dựa trên ngành bạn chọn", "Gợi ý kỹ năng mềm theo từng giai đoạn", "Cập nhật liên tục từ nền tảng uy tín", "Học thử miễn phí và đánh giá chất lượng", "Học lộ trình tăng dần từ cơ bản đến nâng cao", "Giao diện lọc theo thời lượng, cấp độ", "Kết nối học viên với chuyên gia", "Cấp chứng chỉ số khi hoàn tất"] }, { title: "Học đúng thứ cần", bg: "bg-yellow-400", items: ["Gợi ý khóa học theo ngành, mục tiêu cá nhân", "Phân chia rõ: học kiến thức – kỹ năng – thực hành", "Cập nhật học liệu từ các nền tảng uy tín", "Giao diện học tập đơn giản, thân thiện người mới", "Học thử miễn phí, có feedback ngay", "Kết nối mentor theo từng ngành nghề", "Theo dõi tiến độ và khuyến khích học tập định kỳ", "Cấp chứng chỉ, hỗ trợ add vào hồ sơ tuyển dụng"] }, { title: "Chuẩn bị sớm cho sự nghiệp", bg: "bg-white", items: ["Làm quen kỹ năng viết CV, Portfolio từ sớm", "Gợi ý hoạt động ngoại khóa theo ngành học", "Xây dựng thương hiệu cá nhân trên LinkedIn", "Gợi ý ngành nghề có tiềm năng trong 5 năm tới", "Làm bài tập tình huống mô phỏng công việc", "Định hướng chọn nơi thực tập phù hợp", "Giao lưu online với cựu sinh viên & người đi làm", "Chuẩn bị tinh thần & kỹ năng nghề nghiệp"] }];
  const projects = [{ time: "3/2025 – 6/2025", title: "Dự Án Phân Loại Nấm Bằng AI", description: "Ứng dụng học sâu để phân loại 4 loại nấm phổ biến tại Việt Nam bằng hình ảnh thực tế. Công nghệ: CNN + Augmentation + PyTorch.", videoId: "VIDEO_ID_1" }, { time: "12/2024 – 2/2025", title: "Nhận Diện Hành Động Qua WiFi CSI", description: "Sử dụng dữ liệu CSI từ tín hiệu Wi-Fi để phân loại hành động con người. Công nghệ: LSTM + Phase Sanitization + Deep Learning.", videoId: "VIDEO_ID_2" }, { time: "8/2024 – 10/2024", title: "Hệ Thống Gợi Ý Học Tập Cá Nhân Hóa", description: "Dự đoán phong cách học tập và đưa ra lộ trình học cá nhân hóa. Công nghệ: Machine Learning, KMeans Clustering, Flask API.", videoId: "VIDEO_ID_3" }, { time: "5/2024 – 7/2024", title: "Website Bán Giày Nike", description: "Thiết kế giao diện React + API Flask cho trang bán giày cao cấp. Công nghệ: ReactJS, TailwindCSS, NodeJS, MongoDB.", videoId: "VIDEO_ID_4" }, { time: "9/2023 – 12/2023", title: "Phát Hiện Ung Thư Phổi Bằng EfficientNet", description: "Ứng dụng mô hình EfficientNet B1 phân loại ung thư phổi từ ảnh CT-scan. Công nghệ: Transfer Learning, EfficientNet, IQ-OTH/NCCD dataset.", videoId: "VIDEO_ID_5" }];
  const featuresData = [{ id: 1, items: [{ title: "Hơn 50.000 người dùng", description: "Chúng tôi đã hỗ trợ hơn 50.000 học sinh, sinh viên và người đi làm trong việc khám phá bản thân và lựa chọn nghề nghiệp phù hợp." }, { title: "Các bài trắc nghiệm khoa học", description: "Áp dụng các mô hình MBTI, Holland, DISC… giúp đánh giá chính xác tính cách và định hướng nghề nghiệp cá nhân hóa." }, { title: "Chuyên gia đồng hành", description: "Đội ngũ cố vấn và chuyên gia tâm lý, hướng nghiệp hỗ trợ bạn trong suốt quá trình phát triển nghề nghiệp." }, { title: "Phản hồi tích cực", description: "98% người dùng hài lòng và sẵn sàng giới thiệu EduAE cho người khác sau khi trải nghiệm." }, { title: "Kho nội dung chất lượng cao", description: "Cung cấp các khoá học, tài liệu, bài viết, video hướng nghiệp được chọn lọc và cập nhật liên tục." }, { title: "Tính năng AI mạnh mẽ", description: "Ứng dụng trí tuệ nhân tạo để phân tích kết quả trắc nghiệm, đề xuất lộ trình học tập và mô phỏng phỏng vấn nghề nghiệp." }] }, { id: 2, items: [{ title: "Phỏng vấn mô phỏng bằng AI", description: "Giúp bạn rèn luyện kỹ năng phỏng vấn với các câu hỏi thực tế từ nhà tuyển dụng, chấm điểm tự động, phản hồi tức thì." }, { title: "Lộ trình học cá nhân hoá", description: "Hệ thống tự động đề xuất các khóa học và ngành nghề phù hợp với năng lực, sở thích và mục tiêu của bạn." }, { title: "Tương tác dễ dàng", description: "Giao diện thân thiện, dễ sử dụng trên cả máy tính và điện thoại, trải nghiệm mượt mà cho mọi đối tượng." }, { title: "Cộng đồng hỗ trợ tích cực", description: "Tham gia các nhóm chia sẻ kinh nghiệm học tập, định hướng nghề nghiệp và nhận sự hỗ trợ từ cộng đồng người dùng." }, { title: "Liên tục cập nhật công nghệ", description: "EduAE không ngừng nâng cấp nền tảng, tích hợp AI và dữ liệu thực tiễn để mang đến trải nghiệm định hướng nghề nghiệp chính xác và hiện đại." }, { title: "Kết nối chuyên gia & mentor", description: "Cho phép bạn dễ dàng kết nối với các chuyên gia trong ngành, mentor và cố vấn để nhận lời khuyên, định hướng và hỗ trợ nghề nghiệp thực tế." }] }];

  return (
    <div className="home-page">
      <Header />
      {/* Scroll up button */}
      <a href="#home-main" className="scroll-up fixed bottom-10 right-10 z-50 bg-yellow-400 p-3 animate-bounce rounded-full shadow-lg cursor-pointer hover:bg-yellow-500 transition-all duration-300 ease-in-out"><CiCircleChevUp className="text-gray-800 text-4xl font-semibold animate-pulse" /></a>

      <main className="home-main w-full h-auto flex flex-col items-center justify-center overflow-hidden" id="home-main">
        <section className="relative w-full h-[105vh] flex items-center justify-center bg-fixed bg-cover bg-center overflow-hidden z-10" style={{ backgroundImage: "url('src/assets/images/backgroundSection1.png')" }}>
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gray-700 opacity-65 z-20"></div>
          {/* Nội dung chính */}
          <div data-aos="fade-up" className="container relative z-30 text-white">
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="text-5xl md:text-7xl font-extrabold text-center leading-tight mb-10">Khám phá nghề nghiệp<br /><span className="text-yellow-400 mt-6 block">Phù hợp với bạn</span></h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-gray-200 mb-12 whitespace-nowrap">{["Khám phá điểm mạnh và điểm yếu của bản thân", "Định hình lộ trình học tập và nghề nghiệp rõ ràng", "Lựa chọn ngành học phù hợp với tính cách", "Phát triển kỹ năng mềm cần thiết cho công việc", "Tiết kiệm thời gian và chi phí khi chọn ngành đúng", "Giảm rủi ro chọn sai nghề, sai ngành học", "Tự tin hơn khi định hướng tương lai rõ ràng", "Tăng cơ hội phát triển và thành công bền vững",].map((text, index) => (<div key={index} className="flex items-start gap-3"><span className="text-yellow-400 text-xl">✔</span><p className="text-lg">{text}</p></div>))}</div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href=""><button className="bg-gray-800 hover:bg-yellow-500 hover:text-gray-800 transition-all duration-300 ease-in-out text-white font-semibold py-4 px-10 rounded">Bắt đầu trắc nghiệm</button></a>
                <a href=""><button className="border border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out text-white font-semibold py-4 px-10 rounded">Hướng dẫn sử dụng</button></a>
              </div>
            </div>
          </div>
          {/* Hiệu ứng chuyển mượt từ section-1 sang section-2 */}
          <div className="absolute bottom-0 left-0 w-full h-32 z-30 pointer-events-none bg-gradient-to-b from-transparent to-[#1F2937]"></div>
        </section>

        <section className="w-full h-auto min-h-[50vh] bg-[#1F2937] py-20">
          <div className="flex flex-col items-center w-full">
            <h2 data-aos="fade-up" className="text-4xl md:text-[2.5em] font-extrabold text-center text-white leading-tight max-w-5xl mx-auto mb-14 space-y-3">
              <span className="block">Quy trình - <span className="text-yellow-400">Định hướng nghề nghiệp</span>,</span>
              <span className="block">
                <span className="text-yellow-400">Hỗ trợ học</span> và <span className="text-yellow-400">Phỏng vấn mô phỏng</span> cùng
                <span className="animate-shimmer ml-[0.3em]">EduAE</span>
              </span>
            </h2>
            {/* Grid các bước */}
            <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">{steps.map((step, index) => (<div key={index}>{isStep(step)}</div>))}</div>
          </div>
        </section>

        <section className="relative w-full h-[45vh] mt-4 flex items-center justify-center bg-fixed bg-cover bg-center overflow-hidden z-10" style={{ backgroundImage: "url('src/assets/images/lastPurpose.png')" }} >
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gray-700 opacity-65 z-20"></div>
          {/* Nội dung chính */}
          <div data-aos="fade-up" className="relative z-30 text-white text-center">
            <h2 className="text-4xl md:text-[2.5em] font-extrabold text-center text-white leading-tight max-w-5xl mx-auto mb-10"><span className="block">Vậy <span className="text-yellow-400">mục tiêu cuối cùng</span> là gì?</span></h2>
            <p className="text-lg text-gray-100 text-center max-w-3xl mx-auto mb-8">Mục tiêu cuối cùng của <span className="font-semibold text-yellow-400">EduAE</span> là giúp bạn hiểu rõ bản thân, chọn đúng ngành nghề và phát triển toàn diện để tự tin bước vào tương lai. Và để đạt được điều đó, bạn sẽ cần một lộ trình rõ ràng với những yếu tố cốt lõi sau đây:</p>
            <div className="flex justify-center"> <a href="#lastPurpose"><button className="bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 ease-in-out text-gray-800 font-semibold py-4 px-10 rounded">Xem chi tiết</button></a></div>
          </div>
        </section>

        {/* {Direction Routes} */}
        <div id="lastPurpose" style={{ transform: 'translateY(-5vh)' }}></div>

        <section className="w-full flex items-center max-w-[90vw] h-auto min-h-[80vh] bg-[#1F2937] py-2">
          <div className="container mx-auto">
            <div data-aos="fade-in" className="grid grid-cols-1 md:grid-cols-3 gap-2 text-gray-800 text-center">
              {sectionData.map((section, index) => (
                <div key={index} className={`${section.bg} p-10 cursor-pointer shadow-lg transition-all duration-300 ease-in-out`}>
                  <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                  <ul className="list-inside space-y-3 text-sm text-left">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-1"> <BsStars /> {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full h-[45vh] flex items-center justify-center bg-fixed bg-cover bg-center overflow-hidden z-10" style={{ backgroundImage: "url('src/assets/images/backgroundSection3.png')" }}>
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gray-700 opacity-65 z-20"></div>
          {/* Nội dung chính */}
          <div data-aos="fade-up" className="content-section-3 relative z-30 text-white text-center">
            <h2 className="text-4xl md:text-[2.5em] font-extrabold text-center text-white leading-tight max-w-5xl mx-auto mb-10"><span className="block">Có nhiều người tin dùng <span className="text-yellow-400">EduAE</span>?</span></h2>
            <p className="text-lg text-gray-100 text-center max-w-3xl mx-auto mb-8"> Hơn <span className="font-semibold text-yellow-400">50.000 người</span> đã tin tưởng sử dụng <span className="font-semibold text-yellow-400">EduAE</span> để định hướng nghề nghiệp. Chúng tôi giúp bạn khám phá bản thân, lựa chọn đúng ngành học và phát triển kỹ năng cần thiết để thành công trong tương lai.</p>
            <div className="flex justify-center"><a href="#mainReason"><button className="bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 ease-in-out text-gray-800 font-semibold py-4 px-10 rounded">Tìm hiểu thêm</button></a></div>
          </div>
        </section>

        {/* {Direction Routes} */}
        <div id="mainReason" style={{ transform: 'translateY(0vh)' }}></div>

        <section data-aos="fade-up" className="bg-transparent py-20">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
              {featuresData.map((column) => (<FeatureColumn key={column.id} index={column.id} items={column.items} />))}
            </div>
          </div>
        </section>

        <Projects/>

        <section className="relative w-full h-[15vh] flex pt-16 items-center justify-center bg-fixed bg-cover bg-center z-10" style={{ backgroundImage: "url('src/assets/images/projects-bg.png')" }}>
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-65 z-20"> </div>
          <h3 data-aos='fade-up' className="text-yellow-400 relative z-30 text-lg italic">--- Hãy liên hệ ngay với chúng tôi ---</h3>
        </section>

        <section className="relative w-full h-[75vh] flex items-center px-6 justify-end bg-fixed bg-cover bg-center z-10" style={{ backgroundImage: "url('src/assets/images/projects-bg.png')" }}>
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-65 z-20"></div>
          {/* Nội dung chính */}
          <Contact/>
        </section>

        <section className="relative w-full h-[13vh] flex pt-16 items-center justify-center bg-fixed bg-cover bg-center z-10" style={{ backgroundImage: "url('src/assets/images/projects-bg.png')" }}>
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-65 z-20"> </div>
          {/* Overlay gradient để chuyển sang section tiếp theo */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-gray-800 z-30"></div>
        </section>

        <div className="line bg-gray-400 h-[1px] my-10 mb-12 w-[600px] rounded-full"></div>

        <section data-aos="fade-in" className="w-full h-auto min-h-[30vh] flex flex-col items-center justify-center overflow-hidden z-10 text-white text-center">
          <h2 className="text-3xl font-bold">Chân thành cảm ơn sự hợp tác đến từ <br />
            <span className="mt-2 block"><span className="text-yellow-400">Các Tổ Chức Giáo Dục, Tập Đoàn, Công Ty</span> và <span className="text-yellow-400">Cá nhân</span></span>
          </h2>
          <p className="text-base mt-3 text-gray-300 italic">
            - Chúng tôi trân trọng sự đồng hành và đóng góp quý báu từ quý đối tác -
          </p>
          <ul className="flex flex-wrap max-w-[1000px] justify-center items-center gap-6 my-6">
            <li className="w-20 h-20 flex items-center justify-center p-3 overflow-hidden bg-white rounded-full"><img className="" src="src/assets/images/hutech-logo.jpg" alt="" /></li>
            <li className="w-20 h-20 flex items-center justify-center p-1 overflow-hidden bg-white rounded-full"><img className="" src="src/assets/images/hub-logo.png" alt="" /></li>
            <li className="w-20 h-20 flex items-center justify-center p-3 overflow-hidden bg-white rounded-full"><img className="" src="src/assets/images/uit-logo.png" alt="" /></li>
            <li className="w-20 h-20 flex items-center justify-center p-2 overflow-hidden bg-white rounded-full"><img className="" src="src/assets/images/hca-logo.png" alt="" /></li>
            <li className="w-20 h-20 flex items-center justify-center p-0 overflow-hidden bg-white rounded-full"><img className="" src="src/assets/images/hust-logo.jpg" alt="" /></li>
            <li className="w-20 h-20 flex items-center justify-center p-2 pb-4 overflow-hidden bg-white rounded-full"><img className="" src="src/assets/images/hcmus-logo.png" alt="" /></li>
            <li className="w-20 h-20 flex items-center justify-center p-3 overflow-hidden bg-white rounded-full"><img className="" src="src/assets/images/hutech-logo.jpg" alt="" /></li>
            <li className="w-20 h-20 flex items-center justify-center p-1 overflow-hidden bg-white rounded-full"><img className="" src="src/assets/images/hub-logo.png" alt="" /></li>
            <li className="w-20 h-20 flex items-center justify-center p-3 overflow-hidden bg-white rounded-full"><img className="" src="src/assets/images/uit-logo.png" alt="" /></li>
            <li className="w-20 h-20 flex items-center justify-center p-2 overflow-hidden bg-white rounded-full"><img className="" src="src/assets/images/hca-logo.png" alt="" /></li>
            <li className="w-20 h-20 flex items-center justify-center p-0 overflow-hidden bg-white rounded-full"><img className="" src="src/assets/images/hust-logo.jpg" alt="" /></li>
            <li className="w-20 h-20 flex items-center justify-center p-2 pb-4 overflow-hidden bg-white rounded-full"><img className="" src="src/assets/images/hcmus-logo.png" alt="" /></li>
            <li className="w-20 h-20 flex items-center justify-center p-3 overflow-hidden bg-white rounded-full"><img className="" src="src/assets/images/hutech-logo.jpg" alt="" /></li>
            <li className="w-20 h-20 flex items-center justify-center p-1 overflow-hidden bg-white rounded-full"><img className="" src="src/assets/images/hub-logo.png" alt="" /></li>
            <li className="w-20 h-20 flex items-center justify-center p-3 overflow-hidden bg-white rounded-full"><img className="" src="src/assets/images/uit-logo.png" alt="" /></li>
          </ul>
        </section>

        <div className="line bg-gray-400 h-[1px] my-10 w-[400px] rounded-full"></div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;