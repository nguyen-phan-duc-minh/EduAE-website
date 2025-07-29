import Logo from '../assets/images/logo.png'; import { FaCaretRight } from "react-icons/fa"; import { GiLibertyWing } from "react-icons/gi";

const footerColumns = [{ title: "Về EduAE", links: ["Giới thiệu dự án", "Sứ mệnh & Tầm nhìn", "Đội ngũ phát triển", "Dự án đã thực hiện", "Đánh giá cộng đồng"] }, { title: "Công cụ", links: ["Trắc nghiệm hướng nghiệp", "Khám phá ngành nghề", "Gợi ý lộ trình học", "Tham khảo các trường đại học", "Phỏng vấn mô phỏng", "Đăng ký khóa học", "Chuyển video sang tiếng Việt", "AI tạo video"] }, { title: "Hỗ trợ", links: ["Câu hỏi thường gặp", "Hướng dẫn hướng nghiệp", "Hướng dẫn phỏng vấn", "Hướng dẫn tính năng khóa học", "Chính sách bảo mật", "Điều khoản sử dụng"] }];
const contactInfo = ["Địa chỉ: 67/56/5/13 Nguyễn Thị Tú, Bình Hưng Hòa B, Bình Tân, TP.HCM", "Địa chỉ: 122 Ấp Chiến Lược, Xã Tân Quý Tây, Huyện Bình Chánh, TP.HCM", "Email: support@eduAE.vn", "Hotline: 0934 190 061", "Giờ làm việc: 08:00 – 17:30 (T2–T6)"];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6 w-full relative z-30">
      <div className="container mx-auto px-6 md:px-28">
        {/* Logo */}
        <div className="contain-img w-full flex justify-center items-center mb-10">
          <GiLibertyWing className="text-white text-8xl scale-x-[-1] scale-y-50" />
          <img src={Logo} alt="EduAE Logo" className="w-20 h-20 bg-white p-2 rounded-full object-cover" />
          <GiLibertyWing className="text-white text-8xl scale-y-50" />
        </div>
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-left">
          {footerColumns.map((col, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-3">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link, i) => (
                  <li key={i} className="group flex items-start gap-2 hover:text-yellow-300 transition"><FaCaretRight className="mt-1 text-yellow-400 group-hover:text-yellow-300" /><a href="#" className="group-hover:text-yellow-300 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
          {/* Cột Liên hệ */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Liên hệ</h3>
            <ul className="space-y-2 text-sm">{contactInfo.map((info, i) => (<li key={i} className="flex items-start gap-2"><FaCaretRight className="mt-1 text-yellow-400" />{info}</li>))}</ul>
          </div>
        </div>
        {/* Sứ mệnh */}
        <div className='mt-14 max-w-4xl mb-8 mx-auto text-center italic'>
          <h3 className='text-lg font-semibold mb-2'>*** <span className='text-yellow-400'>Sứ mệnh cao cả</span> của chúng tôi ***</h3>
          <p className="text-sm text-gray-400">EduAE là nền tảng định hướng nghề nghiệp dành cho học sinh, sinh viên và người đi làm, với sứ mệnh giúp mỗi người khám phá và hiểu rõ bản thân. Thông qua các bài trắc nghiệm tâm lý, công cụ phân tích hiện đại và nội dung tư vấn chuyên sâu, chúng tôi đồng hành cùng bạn trong việc nhận diện năng lực, sở thích, giá trị sống và phong cách cá nhân. Từ đó, EduAE giúp bạn đưa ra lựa chọn nghề nghiệp phù hợp, tiết kiệm thời gian, tránh những lựa chọn sai lầm và xây dựng một lộ trình phát triển sự nghiệp bền vững và đầy cảm hứng.</p>
        </div>
        {/* Dưới cùng */}
        <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm space-y-1">
          <p>&copy; {new Date().getFullYear()} EduAE. Bản quyền thuộc về chúng tôi.</p>
          <p>Theo dõi chúng tôi trên{' '}<a href="https://facebook.com" className="text-blue-400 hover:text-blue-500 transition">Facebook</a>,{' '}<a href="https://youtube.com" className="text-blue-400 hover:text-blue-500 transition">YouTube</a> và{' '}<a href="https://tiktok.com" className="text-blue-400 hover:text-blue-500 transition">TikTok</a>.</p>
          <p className="text-gray-400">Bản đồ trang web | Liên hệ quảng cáo | Hợp tác nội dung</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;