import type { MetricItem } from '../types/landing';

export const metrics: MetricItem[] = [
  {
    value: '100.000+',
    label: 'Tin Nhắn Mỗi Ngày',
    desc: 'Được gửi và tiếp nhận mượt mà qua hệ thống WebSocket thời gian thực.'
  },
  {
    value: '80%',
    label: 'Tiết Kiệm Cước Viễn Thông',
    desc: 'Nhờ chuyển đổi sang Zalo VoIP Call & tin thông báo ZNS tối ưu chi phí.'
  },
  {
    value: '3.5x',
    label: 'Tăng Tốc Độ Chốt Đơn',
    desc: 'Nhân viên tạo đơn và gửi thông tin thanh toán ngay trong cửa sổ chat.'
  },
  {
    value: '99.9%',
    label: 'Cam Kết Uptime',
    desc: 'Hạ tầng máy chủ ổn định, tự động làm mới OAuth Token Zalo 24/7.'
  }
];
