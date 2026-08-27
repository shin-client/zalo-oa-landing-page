import type { FeatureItem } from '../types/landing';

export const features: FeatureItem[] = [
  {
    id: 'realtime-chat',
    title: 'Hộp Thư Live Chat Đa OA Tập Trung',
    shortDesc: 'Quản lý toàn bộ tin nhắn từ nhiều Zalo Official Account trên một giao diện duy nhất theo thời gian thực.',
    fullDesc: 'Kết nối WebSocket tốc độ cao (socket.taokosao.com), tự động đồng bộ tin nhắn khách hàng từ nhiều Zalo OA. Hỗ trợ lọc theo từng OA, gán tư vấn viên phụ trách và không bao giờ bỏ sót cuộc hội thoại nào.',
    category: 'chat',
    icon: 'MessageSquare',
    image: '/screenshots/02_chat_support.png',
    highlights: [
      'Đồng bộ tin nhắn đa OA tức thì qua WebSockets',
      'Hộp thư hợp nhất, chuyển đổi nhanh giữa các tài khoản OA',
      'Tự động điều phối phòng chat tới nhân viên trực',
      'Tránh tình trạng nhân viên giẫm chân hoặc phản hồi chậm'
    ],
    badge: 'Real-time'
  },
  {
    id: 'zalo-voip-call',
    title: 'Zalo VoIP Call — Gọi Thoại & Video Trực Tiếp',
    shortDesc: 'Khởi tạo cuộc gọi thoại và video 1-click trực tiếp từ trình duyệt tới Zalo khách hàng mà không tốn cước viễn thông.',
    fullDesc: 'Tích hợp Zalo Call API qua WebRTC. Hệ thống tự động gửi yêu cầu cấp quyền gọi (Consent) 3 bước chuẩn quy định Zalo và kích hoạt cuộc gọi thoại chất lượng cao ngay trên máy tính.',
    category: 'call',
    icon: 'PhoneCall',
    image: '/screenshots/14_calls.png',
    highlights: [
      'Gọi điện thoại và video trực tiếp từ web app tới app Zalo',
      'Quy trình 3 bước gửi yêu cầu và nhận cấp quyền gọi tiện lợi',
      'Tiết kiệm tới 80% chi phí cước viễn thông so với tổng đài truyền thống',
      'Lịch sử cuộc gọi và quản lý trạng thái kết nối rõ ràng'
    ],
    badge: 'Độc quyền'
  },
  {
    id: 'zns-automation',
    title: 'Chiến Dịch ZNS — Gửi Mẫu Tin Tự Động',
    shortDesc: 'Tạo mẫu và gửi thông báo chăm sóc khách hàng qua ZNS theo Số điện thoại hoặc Zalo UID với chi phí tối ưu.',
    fullDesc: 'Quản lý kho mẫu tin ZNS đa dạng (xác nhận đơn hàng, nhắc lịch hẹn, mã OTP, quà tặng tri ân). Hệ thống tính toán chi phí minh bạch theo từng tin nhắn gửi qua SĐT hoặc UID.',
    category: 'zns',
    icon: 'Send',
    image: '/screenshots/03_zns_campaign.png',
    highlights: [
      'Gửi thông báo ZNS tới cả SĐT và Zalo UID',
      'Thiết lập tham số động (Tên khách, Mã đơn, Giá trị, Ngày giờ)',
      'Tỷ lệ mở đọc > 90%, chi phí rẻ hơn 50% so với SMS Brandname',
      'Báo cáo thống kê chi phí và trạng thái gửi minh bạch'
    ],
    badge: 'Tự động hóa'
  },
  {
    id: 'order-management',
    title: 'Tạo & Quản Lý Đơn Hàng Ngay Trong Chat',
    shortDesc: 'Chốt sale nhanh, lên đơn hàng và kiểm soát trạng thái thanh toán ngay khi đang trò chuyện với khách.',
    fullDesc: 'Tích hợp module bán hàng trực tiếp trong luồng hội thoại. Nhân viên có thể tạo đơn, nhập tiêu đề, giá trị tiền (VND), đính kèm file và theo dõi tiến độ thanh toán của từng phòng chat.',
    category: 'order',
    icon: 'ShoppingCart',
    image: '/screenshots/04_order_management.png',
    highlights: [
      'Tạo đơn hàng nhanh gắn liền với ID phòng chat và SĐT khách',
      'Theo dõi trạng thái thanh toán (Đã thanh toán / Chưa thanh toán)',
      'Bộ lọc đơn hàng thông minh theo khoảng giá trị tiền và ngày tạo',
      'Giảm thiểu tối đa tỷ lệ rớt đơn khi chuyển đổi giữa các app'
    ],
    badge: 'Tăng doanh số'
  },
  {
    id: 'customer-notes',
    title: 'Ghi Chú CRM & Hồ Sơ Khách Hàng',
    shortDesc: 'Lưu vết lịch sử tư vấn, đính kèm tài liệu và phân loại insight khách hàng theo từng phòng hội thoại.',
    fullDesc: 'Hệ thống sổ ghi chú thông minh cho phép ghi lại yêu cầu đặc biệt của khách hàng, đính kèm file hợp đồng/ảnh sản phẩm, hỗ trợ đội ngũ bàn giao ca trực mượt mà không bị mất thông tin.',
    category: 'crm',
    icon: 'FileText',
    image: '/screenshots/05_customer_notes.png',
    highlights: [
      'Lưu vết chi tiết lịch sử và nhu cầu của từng khách hàng',
      'Đính kèm file tài liệu, hình ảnh minh chứng ngay tại phòng chat',
      'Tìm kiếm và tra cứu nhanh lịch sử ghi chú theo SĐT',
      'Bàn giao ca trực liền mạch giữa các nhân viên tư vấn'
    ],
    badge: 'CRM Chuyên sâu'
  },
  {
    id: 'staff-quota',
    title: 'Phân Quyền & Giám Sát Hạn Mức Nhân Viên',
    shortDesc: 'Kiểm soát hạn mức tin nhắn hàng ngày, phân bổ gói cước và quản lý hiệu suất đội ngũ tư vấn viên.',
    fullDesc: 'Bảng quản trị nhân viên thông minh: Phân bổ nhân viên theo từng OA, đặt hạn mức số lượng tin nhắn trong ngày (ví dụ 30 tin/ngày cho gói cơ bản), nâng cấp gói linh hoạt cho từng nhân viên xuất sắc.',
    category: 'team',
    icon: 'Users',
    image: '/screenshots/08_staff_management.png',
    highlights: [
      'Kiểm soát hạn mức gửi tin hàng ngày của từng nhân sự',
      'Phân quyền tài khoản chặt chẽ: Admin, Quản lý, Member CSKH',
      'Cấu hình tài khoản nhận thông báo và điều phối tin nhắn linh hoạt',
      'Dễ dàng mở rộng quy mô đội ngũ từ 2 đến 100+ nhân sự'
    ],
    badge: 'Quản trị'
  },
  {
    id: 'vietqr-wallet',
    title: 'Ví Tiền & Nạp Tự Động VietQR 24/7',
    shortDesc: 'Tích hợp cổng nạp tiền tự động SePay VietQR (MBBank), đối soát số dư gửi tin ZNS tức thì chỉ sau 3 giây.',
    fullDesc: 'Quản lý nhiều ví dịch vụ, thanh toán cước phí gửi ZNS và duy trì tài khoản hoàn toàn tự động. Nạp tiền quét mã QR ngân hàng khớp lệnh ngay lập tức và hỗ trợ yêu cầu rút tiền tiện lợi.',
    category: 'billing',
    icon: 'Wallet',
    image: '/screenshots/09_wallet_billing.png',
    highlights: [
      'Quét mã VietQR chuyển khoản tự động khớp lệnh trong 3 giây',
      'Quản lý số dư nhiều ví, theo dõi lịch sử trừ tiền ZNS minh bạch',
      'Cấu hình liên kết tài khoản ngân hàng nhận tiền rút về',
      'Hoạt động liên tục 24/7 không cần can thiệp duyệt thủ công'
    ],
    badge: 'SePay VietQR'
  }
];
