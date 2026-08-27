import type { PricingPlan } from '../types/landing';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Gói Trải Nghiệm',
    desc: 'Dành cho cá nhân hoặc shop online nhỏ bắt đầu tiếp cận Zalo OA CRM.',
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      'Kết nối 1 Zalo Official Account',
      'Giới hạn 30 tin nhắn gửi/ngày/nhân sự',
      'Hộp thư Live Chat cơ bản',
      'Quản lý đơn hàng & ghi chú khách hàng',
      'Hỗ trợ qua tài liệu cộng đồng'
    ],
    excludedFeatures: [
      'Cuộc gọi thoại & video Zalo VoIP',
      'Chiến dịch gửi ZNS tự động hàng loạt',
      'Quản lý phân quyền đa nhân viên nâng cao',
      'Hỗ trợ kỹ thuật 1-1 qua Zalo/Hotline'
    ],
    ctaText: 'Đăng Ký Dùng Thử',
    ctaLink: 'https://ztks.taokosao.com/signin'
  },
  {
    id: 'pro',
    name: 'Gói Chuyên Nghiệp',
    desc: 'Giải pháp hoàn hảo cho shop kinh doanh, đội Telesale và CSKH chủ lực.',
    monthlyPrice: 299000,
    annualPrice: 249000,
    popular: true,
    features: [
      'Kết nối không giới hạn Zalo OA',
      'Không giới hạn số lượng tin nhắn mỗi ngày',
      'Mở khóa tính năng Gọi Zalo VoIP 1-click',
      'Gửi chiến dịch ZNS tự động qua SĐT & UID',
      'Quản lý đơn hàng, doanh số & trạng thái thanh toán',
      'Ghi chú CRM, đính kèm tài liệu & phân loại khách',
      'Phân quyền nhân viên & điều phối chat tự động',
      'Nạp tiền tự động qua SePay VietQR 24/7',
      'Hỗ trợ ưu tiên qua nhóm Zalo VIP'
    ],
    ctaText: 'Bắt Đầu Với Gói Pro',
    ctaLink: 'https://ztks.taokosao.com/signin'
  },
  {
    id: 'enterprise',
    name: 'Gói Doanh Nghiệp',
    desc: 'Dành cho doanh nghiệp lớn, chuỗi chi nhánh và Agency vận hành nhiều OA.',
    monthlyPrice: 899000,
    annualPrice: 749000,
    features: [
      'Mọi tính năng của Gói Chuyên Nghiệp',
      'Quản lý không giới hạn nhân sự và phòng ban',
      'Cấu hình Webhook & Custom API riêng biệt',
      'Hỗ trợ tích hợp hệ thống CRM / ERP nội bộ',
      'Tự động cấp phát và gia hạn OAuth Token an toàn',
      'Báo cáo phân tích chuyên sâu & xuất dữ liệu Excel',
      'Cam kết chất lượng dịch vụ SLA 99.9% Uptime',
      'Chuyên viên kỹ thuật hỗ trợ Onboarding 1-1'
    ],
    ctaText: 'Liên Hệ Tư Vấn VIP',
    ctaLink: 'https://ztks.taokosao.com/signin'
  }
];
