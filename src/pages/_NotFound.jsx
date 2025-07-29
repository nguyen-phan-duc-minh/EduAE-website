import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 3000); // 3 giây

    return () => clearTimeout(timeout); // Xoá timeout khi unmount
  }, [navigate]);

  return (
    <div data-aos='fade-up' className="bg-gradient-to-br from-gray-900 to-gray-700 min-h-screen flex flex-col items-center justify-center text-center px-4">
      <FaExclamationTriangle className="text-yellow-400 text-7xl mb-6 animate-bounce" />
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
        404 - Không tìm thấy trang
      </h1>
      <p className="text-yellow-400 italic text-lg md:text-base mb-6 mt-2 max-w-full">
        Rất tiếc! Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
      </p>
      <p className="text-sm text-gray-400 mb-4">Bạn sẽ được chuyển hướng về trang chủ sau 3 giây...</p>
    </div>
  );
};

export default NotFound;