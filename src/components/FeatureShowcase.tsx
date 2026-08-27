import React, { useState } from 'react';
import {
  MessageSquare,
  PhoneCall,
  Send,
  ShoppingCart,
  FileText,
  Users,
  Wallet,
  CheckCircle2,
  ExternalLink,
  Maximize2
} from 'lucide-react';
import type { FeatureItem } from '../types/landing';
import { features } from '../data/features';

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-4 h-4 shrink-0" />,
  PhoneCall: <PhoneCall className="w-4 h-4 shrink-0" />,
  Send: <Send className="w-4 h-4 shrink-0" />,
  ShoppingCart: <ShoppingCart className="w-4 h-4 shrink-0" />,
  FileText: <FileText className="w-4 h-4 shrink-0" />,
  Users: <Users className="w-4 h-4 shrink-0" />,
  Wallet: <Wallet className="w-4 h-4 shrink-0" />
};

export const FeatureShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(features[0].id);

  const activeFeature = features.find(f => f.id === activeTab) || features[0];

  return (
    <section id="features" className="py-12 md:py-20 border-b border-[#232734] bg-[#090a0f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Hệ Sinh Thái Tính Năng
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Công Cụ Vận Hành Toàn Diện Cho Zalo OA
          </h2>
          <p className="text-slate-400 text-xs sm:text-base">
            7 phân hệ chức năng chuyên sâu phục vụ đầy đủ quy trình bán hàng, telesale, gửi tin và đối soát ví.
          </p>
        </div>

        {/* Tab Navigation (Scrollable on mobile, wrapped on desktop) */}
        <div className="mb-6 sm:mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-none snap-x touch-pan-x">
            {features.map((item: FeatureItem) => {
              const isActive = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`shrink-0 snap-start px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 transition-colors duration-150 cursor-pointer border ${
                    isActive
                      ? 'bg-[#0068FF] text-white border-[#0068FF]'
                      : 'bg-[#11131a] text-slate-300 hover:text-white hover:bg-[#171a23] border-[#232734]'
                  }`}
                >
                  <span className={isActive ? 'text-white' : 'text-slate-400'}>
                    {iconMap[item.icon]}
                  </span>
                  <span className="whitespace-nowrap">{item.title.split('—')[0].split('(')[0].trim()}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature Detail Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-[#0d0f17] border border-[#232734] rounded-xl sm:rounded-2xl p-4 sm:p-8">
          
          {/* Left Column: Details & Highlights */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center px-2.5 py-0.5 rounded bg-[#171a23] text-slate-300 border border-[#282d3d] text-xs font-mono">
              module / {activeFeature.category}
            </div>

            <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
              {activeFeature.title}
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {activeFeature.fullDesc}
            </p>

            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Điểm nổi bật:</span>
              <ul className="space-y-1.5 sm:space-y-2">
                {activeFeature.highlights.map((highlight: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <a
                href="https://ztks.taokosao.com/signin"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0068FF] hover:bg-[#0057d8] text-white text-xs sm:text-sm font-semibold transition-colors duration-150"
              >
                <span>Dùng thử tính năng này</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Screenshot Frame with Click to Zoom */}
          <div className="lg:col-span-7 overflow-hidden">
            <div 
              className="group relative rounded-lg sm:rounded-xl overflow-hidden border border-[#232734] hover:border-[#0068FF]/50 bg-[#090a0f] shadow-lg cursor-zoom-in transition-colors"
              onClick={() => {
                const resolvedSrc = activeFeature.image.startsWith('http') 
                  ? activeFeature.image 
                  : `${(import.meta.env.BASE_URL || '/').replace(/\/$/, '')}${activeFeature.image}`;
                window.dispatchEvent(
                  new CustomEvent('open-lightbox', {
                    detail: { src: resolvedSrc, title: activeFeature.title, alt: activeFeature.title },
                  })
                );
              }}
            >
              {/* Clean Window Header */}
              <div className="px-3 py-1.5 sm:px-3.5 sm:py-2 bg-[#11131a] border-b border-[#232734] flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400">
                <span className="truncate max-w-[200px] sm:max-w-none">{activeFeature.image.replace('/screenshots/', '')}</span>
                <div className="flex items-center gap-1.5 text-slate-400 group-hover:text-white transition-colors">
                  <Maximize2 className="w-3.5 h-3.5 text-[#0068FF]" />
                  <span className="text-[11px] font-sans">Click để phóng lớn</span>
                </div>
              </div>

              {/* Image Viewport */}
              <div className="relative p-2 sm:p-3 bg-[#090a0f] flex items-center justify-center min-h-[220px] sm:min-h-[380px]">
                <img
                  src={activeFeature.image.startsWith('http') ? activeFeature.image : `${(import.meta.env.BASE_URL || '/').replace(/\/$/, '')}${activeFeature.image}`}
                  alt={activeFeature.title}
                  className="w-full max-h-[360px] sm:max-h-[460px] object-contain rounded border border-[#1f2330] transition-transform duration-200 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
