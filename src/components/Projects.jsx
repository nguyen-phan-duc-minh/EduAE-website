// ---------- Code chính ---------- 
const Project = () => {
  // Biến mẫu
  const projects = [{ time: "3/2025 – 6/2025", title: "Dự Án Phân Loại Nấm Bằng AI", description: "Ứng dụng học sâu để phân loại 4 loại nấm phổ biến tại Việt Nam bằng hình ảnh thực tế. Công nghệ: CNN + Augmentation + PyTorch.", videoId: "VIDEO_ID_1" }, { time: "12/2024 – 2/2025", title: "Nhận Diện Hành Động Qua WiFi CSI", description: "Sử dụng dữ liệu CSI từ tín hiệu Wi-Fi để phân loại hành động con người. Công nghệ: LSTM + Phase Sanitization + Deep Learning.", videoId: "VIDEO_ID_2" }, { time: "8/2024 – 10/2024", title: "Hệ Thống Gợi Ý Học Tập Cá Nhân Hóa", description: "Dự đoán phong cách học tập và đưa ra lộ trình học cá nhân hóa. Công nghệ: Machine Learning, KMeans Clustering, Flask API.", videoId: "VIDEO_ID_3" }, { time: "5/2024 – 7/2024", title: "Website Bán Giày Nike", description: "Thiết kế giao diện React + API Flask cho trang bán giày cao cấp. Công nghệ: ReactJS, TailwindCSS, NodeJS, MongoDB.", videoId: "VIDEO_ID_4" }, { time: "9/2023 – 12/2023", title: "Phát Hiện Ung Thư Phổi Bằng EfficientNet", description: "Ứng dụng mô hình EfficientNet B1 phân loại ung thư phổi từ ảnh CT-scan. Công nghệ: Transfer Learning, EfficientNet, IQ-OTH/NCCD dataset.", videoId: "VIDEO_ID_5" }];

  return (
    <>
        {projects.map((project, index) => (
          <section key={index} className="relative w-full h-[70vh] flex bg-fixed bg-cover bg-center overflow-hidden z-10 mx-auto" style={{ backgroundImage: "url('src/assets/images/projects-bg.png')" }}>
            {/* Overlay toàn màn */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-65 z-20"></div>
            {/* 30% bên trái: timestamp */}
            <div className="w-[30%] flex items-start pt-20 justify-end px-10 text-yellow-400 z-30 relative">
              <div className="text-center"> <h3 className="text-xl font-bold">{project.time}</h3> </div>
            </div>
            {/* Line chia giữa */}
            <div className="relative w-[2px] h-[100%] bg-yellow-400 z-30 self-center"> <div className="absolute mt-24 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-yellow-400 border-2 border-yellow-400"></div></div>
            {/* 70% bên phải: nội dung dự án */}
            <div data-aos="fade-up" className="w-[70%] flex flex-col justify-start pt-20 z-30 relative px-10 text-yellow-400">
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
              <p className="text-base max-w-[720px] mb-6 text-gray-200">{project.description}</p>
              <div className="w-full max-w-[720px] aspect-video">
                <iframe className="w-full h-full rounded-lg shadow-lg" src={`https://www.youtube.com/embed/${project.videoId}`} title={`Video - ${project.title}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </section>
        ))}
    </>
  );
};

export default Project;