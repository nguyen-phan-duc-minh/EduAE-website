// ---------- Thư viện sử dụng ---------- 
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";

// ---------- Code chính ---------- 
const ContactComponent = () => {
    return (
        <>
            {/* Nội dung chính */}
            <div data-aos="fade-up" className="container text-center max-w-[50%] relative z-30 px-20">
                <h3 className="text-3xl font-bold text-white mb-4">Liên hệ với chúng tôi</h3>
                <p className="text-white mb-6"> Nếu bạn có bất kỳ <span className="text-yellow-400"> câu hỏi nào hoặc cần hỗ trợ, hãy liên hệ với chúng tôi</span> qua các kênh dưới đây. Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn.</p>
                <ul className="flex flex-col justify-center items-center gap-3 text-base mt-6 text-gray-200">
                    <li className="flex items-center gap-2"><span className="text-yellow-400 flex items-center gap-1"><FiCheckSquare /> Email tư vấn:</span><a href="mailto:SWminh0918195615@gmail.com" className="hover:underline">SWminh0918195615@gmail.com</a></li>
                    <li className="flex items-center gap-2"><span className="text-yellow-400 flex items-center gap-1"><FiCheckSquare /> Email hỗ trợ:</span><a href="mailto:support@eduAE.com" className="hover:underline">support@eduAE.com</a></li>
                    <li className="flex items-center gap-2"><span className="text-yellow-400 flex items-center gap-1"><FiCheckSquare /> Hotline 1:</span><a href="tel:0918195615" className="hover:underline">0918 195 615</a></li>
                    <li className="flex items-center gap-2"><span className="text-yellow-400 flex items-center gap-1"><FiCheckSquare /> Hotline 2:</span><a href="tel:0987654321" className="hover:underline">0987 654 321</a></li>
                    <li className="flex items-center gap-2"><span className="text-yellow-400 flex items-center gap-1"><FiCheckSquare /> Zalo:</span><a href="https://zalo.me/0918195615" target="_blank" rel="noopener noreferrer" className="hover:underline">Nhắn Zalo 0918 195 615</a></li>
                </ul>

                <h3 className="text-gray-300 my-10 text-base italic">---- Hoặc ----</h3>
                <ul className="flex flex-wrap justify-center gap-6 text-gray-800 text-2xl mt-6">
                    <li className="flex items-center gap-2 bg-white hover:bg-yellow-400 cursor-pointer transition-all duration-300 ease-in-out p-3 rounded-full"><MdEmail /></li>
                    <li className="flex items-center gap-2  bg-white hover:bg-yellow-400 cursor-pointer transition-all duration-300 ease-in-out p-3 rounded-full"><FaPhone /></li>
                    <li className="flex items-center gap-2  bg-white hover:bg-yellow-400 cursor-pointer transition-all duration-300 ease-in-out p-3 rounded-full"><FaFacebook /></li>
                    <li className="flex items-center gap-2  bg-white hover:bg-yellow-400 cursor-pointer transition-all duration-300 ease-in-out p-3 rounded-full"><FaMapMarkerAlt /></li>
                </ul>
            </div>

            <div data-aos="fade-up" className="bg-transparent p-20 rounded-lg shadow-md w-[50%] relative z-30 h-[75vh] flex flex-col justify-center">
                <p className="text-sm font-semibold italic mb-6 text-gray-200 text-justify">*Nếu bạn cần hỗ trợ: hãy nhập thông tin dưới đây. Đội ngũ của chúng tôi sẽ <span className="text-yellow-400 font-bold">nhanh chóng liên hệ lại</span> để giải đáp thắc mắc, hỗ trợ <span className="text-yellow-400 font-bold">tư vấn định hướng phù hợp nhất</span> với nhu cầu của bạn. Đừng ngần ngại chia sẻ — chúng tôi luôn sẵn sàng <span className="text-yellow-400 font-bold">đồng hành cùng bạn</span> trên hành trình <span className="text-yellow-400 font-bold">phát triển bản thân và sự nghiệp</span>.</p>
                <form className="space-y-5">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input type="text" placeholder="Nhập họ tên của bạn" className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                        <input type="tel" placeholder="Nhập số điện thoại" className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    </div>

                    <div>
                        <textarea rows="4" placeholder="Nội dung cần hỗ trợ..." className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-start gap-2 text-sm text-gray-200">
                            <input type="checkbox" className="mt-1" required />
                            <span>Tôi đồng ý với <a href="#" className="underline text-yellow-300">các điều khoản và dịch vụ</a>.</span>
                        </label>
                        <label className="flex items-start gap-2 text-sm text-gray-200">
                            <input type="checkbox" className="mt-1" required />
                            <span>Tôi đồng ý gửi thông tin cá nhân để được tư vấn hỗ trợ.</span>
                        </label>
                    </div>

                    <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-3 px-6 rounded transition-all duration-300"> Gửi thông tin</button>
                </form>
            </div>
        </>
    );
}

export default ContactComponent;