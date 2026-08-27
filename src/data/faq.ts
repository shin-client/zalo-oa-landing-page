import type { FAQItem } from '../types/landing';

export const faqItems: FAQItem[] = [
  {
    question: 'Để kết nối Zalo Official Account vào ZTKS cần chuẩn bị những gì?',
    answer: 'Bạn chỉ cần có một tài khoản Zalo OA đã được xác thực, sau đó lấy thông tin App ID, App Secret và OA ID từ cổng Zalo for Developers. ZTKS hỗ trợ cấp quyền qua OAuth v4 chỉ với 1 cú nhấp chuột và tự động làm mới Access Token liên tục.'
  },
  {
    question: 'Tính năng Zalo VoIP Call gọi điện thoại trực tiếp hoạt động thế nào?',
    answer: 'ZTKS tích hợp trực tiếp Zalo Call API qua WebRTC. Khi cần gọi cho khách, hệ thống thực hiện quy trình 3 bước gửi yêu cầu cấp quyền gọi (User Consent) tới Zalo khách hàng. Khi khách hàng đồng ý, bạn có thể thực hiện cuộc gọi thoại hoặc video chất lượng cao ngay trên trình duyệt mà không mất cước viễn thông truyền thống.'
  },
  {
    question: 'Hệ thống hỗ trợ quản lý phân quyền và chia tin nhắn cho nhân viên ra sao?',
    answer: 'Quản trị viên có thể tạo tài khoản cho nhiều nhân viên, phân công nhân viên phụ trách từng OA cụ thể, đặt hạn mức số lượng tin nhắn được gửi mỗi ngày và cấu hình tài khoản nhận thông báo khi có khách hàng mới nhắn tin.'
  },
  {
    question: 'Chi phí gửi tin ZNS và cơ chế nạp tiền ví hoạt động như thế nào?',
    answer: 'Hệ thống tính cước gửi ZNS minh bạch theo từng mẫu tin (theo SĐT hoặc Zalo UID). Bạn có thể nạp tiền vào ví bất kỳ lúc nào bằng cách quét mã VietQR ngân hàng MBBank qua cổng SePay. Tiền sẽ được tự động cộng vào số dư ví sau 3 giây 24/7.'
  },
  {
    question: 'Dữ liệu khách hàng và thông tin Zalo OA có được bảo mật không?',
    answer: 'Toàn bộ thông tin nhạy cảm như App Secret, OA Secret và Token đều được mã hóa lưu trữ an toàn. Dữ liệu trò chuyện và đơn hàng thuộc quyền sở hữu 100% của doanh nghiệp bạn.'
  },
  {
    question: 'Tôi có thể dùng thử miễn phí trước khi nâng cấp không?',
    answer: 'Có! ZTKS cung cấp gói Trải nghiệm Miễn phí cho phép bạn kết nối Zalo OA, sử dụng hộp thư live chat và trải nghiệm đầy đủ các tính năng cơ bản của hệ thống mà không cần thẻ tín dụng.'
  }
];
