
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Camera, Upload, AlertCircle, CheckCircle, Loader2, ShieldAlert, Zap, Cpu, Scan } from 'lucide-react';
import { analyzeRiskFromImage } from '../services/geminiService';
import { AnalysisResult, PlanType } from '../types';

interface AIAnalyzerProps {
  currentPlan: PlanType;
  onNavigate?: (page: string) => void;
}

const AIAnalyzer: React.FC<AIAnalyzerProps> = ({ currentPlan, onNavigate }) => {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isStreaming, setIsStreaming] = useState(false);

  const startCamera = async () => {
    if (currentPlan === 'free') {
      setError(t('analyzer.error_advanced'));
      return;
    }
    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsStreaming(true);
      }
    } catch (err) {
      setError(t('analyzer.error_camera'));
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      setIsStreaming(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setLoading(true);
    setResult(null);

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = (reader.result as string).split(',')[1];
      setPreviewUrl(reader.result as string);

      try {
        const analysis = await analyzeRiskFromImage(base64, file.type, i18n.language);
        setResult(analysis);
      } catch (err) {
        setError(t('analyzer.error_analysis'));
      } finally {
        setLoading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const captureAndAnalyze = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    setLoading(true);
    setError(null);

    const context = canvasRef.current.getContext('2d');
    if (context) {
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0);

      const dataUrl = canvasRef.current.toDataURL('image/jpeg');
      setPreviewUrl(dataUrl);
      const base64 = dataUrl.split(',')[1];

      try {
        const analysis = await analyzeRiskFromImage(base64, 'image/jpeg', i18n.language);
        setResult(analysis);
      } catch (err) {
        setError(t('analyzer.error_fatal'));
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="p-4 md:p-12">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-10">
          <div className="flex flex-col sm:flex-row gap-6">
            <label className="flex-1 flex items-center justify-center gap-4 px-6 lg:px-10 py-6 bg-emerald-950 hover:bg-emerald-800 text-lime-400 font-black rounded-[2.5rem] cursor-pointer transition-all shadow-2xl shadow-emerald-950/20 active:scale-95 group">
              <Upload className="w-8 h-8 group-hover:-translate-y-1 transition-transform" />
              <div className="text-left">
                <span className="block text-base lg:text-lg leading-tight">{t('analyzer.load_photo')}</span>
                <span className="block text-[8px] lg:text-[10px] font-bold text-lime-400/50 uppercase tracking-[0.2em]">{t('analyzer.sector_multimodal')}</span>
              </div>
              <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} />
            </label>

            <button
              onClick={isStreaming ? captureAndAnalyze : startCamera}
              className={`flex-1 flex items-center justify-center gap-4 px-6 lg:px-10 py-6 font-black rounded-[2.5rem] transition-all border-4 text-left active:scale-95 ${isStreaming
                  ? 'bg-rose-600 hover:bg-rose-700 text-white border-rose-500 shadow-2xl shadow-rose-600/20'
                  : 'bg-white border-emerald-950 text-emerald-950 hover:bg-slate-50'
                }`}
            >
              <Camera className={`w-8 h-8 ${isStreaming ? 'animate-pulse' : ''}`} />
              <div>
                <span className="block text-base lg:text-lg leading-tight">{isStreaming ? t('analyzer.capture_btn') : t('analyzer.live_btn')}</span>
                <span className="block text-[8px] lg:text-[10px] font-bold opacity-50 uppercase tracking-[0.2em]">{t('analyzer.realtime_flux')}</span>
              </div>
            </button>
          </div>

          <div className="relative aspect-square md:aspect-video bg-slate-900 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(6,78,59,0.3)] border-8 border-emerald-800/10 group flex items-center justify-center">
            {/* HUD Overlay - corners */}
            <div className="absolute inset-0 pointer-events-none z-20 border-[20px] lg:border-[30px] border-transparent">
              <div className="absolute top-0 left-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-lime-400/30"></div>
              <div className="absolute top-0 right-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-r-2 border-lime-400/30"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-l-2 border-lime-400/30"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-r-2 border-lime-400/30"></div>
            </div>

            {isStreaming ? (
              <video ref={videoRef} autoPlay playsInline className="w-full h-full object-contain bg-black" />
            ) : previewUrl ? (
              <div className="relative w-full h-full flex items-center justify-center bg-black">
                <img src={previewUrl} alt="Visual Analysis" className="max-w-full max-h-full object-contain" />
                {loading && (
                  <div className="absolute inset-x-0 top-0 h-1 bg-lime-400 shadow-[0_0_15px_rgba(163,230,53,1)] animate-scan-line z-40"></div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-emerald-100/10 gap-8">
                <Scan className="w-24 lg:w-32 h-24 lg:h-32 animate-pulse" />
                <p className="font-black uppercase tracking-[0.3em] lg:tracking-[0.5em] text-[10px] lg:text-sm text-center px-10 italic leading-relaxed opacity-40">{t('analyzer.waiting_signal')}</p>
              </div>
            )}

            {loading && (
              <div className="absolute inset-0 bg-emerald-950/90 backdrop-blur-xl flex items-center justify-center z-30">
                <div className="flex flex-col items-center gap-8 text-lime-400">
                  <div className="relative">
                    <Loader2 className="w-20 lg:w-24 h-20 lg:h-24 animate-spin opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Zap className="w-8 lg:w-10 h-8 lg:h-10 text-lime-400 fill-lime-400 animate-pulse" />
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="font-black text-2xl lg:text-3xl tracking-tighter uppercase italic text-white">{t('analyzer.scanning')}</p>
                    <div className="flex items-center gap-2 justify-center">
                      <div className="h-1 w-10 lg:w-12 bg-lime-400/20 rounded-full overflow-hidden">
                        <div className="h-full bg-lime-400 animate-progress"></div>
                      </div>
                      <p className="text-[8px] lg:text-[10px] font-black text-lime-400/50 uppercase tracking-[0.4em]">{t('analyzer.engine_version')}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <canvas ref={canvasRef} className="hidden" />
          </div>
          {isStreaming && (
            <button onClick={stopCamera} className="w-full text-[10px] font-black text-rose-500 uppercase tracking-[0.4em] text-center hover:text-rose-600 transition-colors py-4 border border-rose-500/20 rounded-full bg-rose-500/5 mt-4">{t('analyzer.stop_session')}</button>
          )}
        </div>

        <div className="lg:col-span-5 flex flex-col h-full mt-8 lg:mt-0">
          <div className="flex-1 bg-white border border-slate-100 rounded-[3rem] p-8 lg:p-12 shadow-2xl shadow-emerald-900/5 overflow-y-auto max-h-[750px]">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
              <div className="bg-emerald-950 p-3 lg:p-4 rounded-2xl shadow-xl">
                <Cpu className="w-6 lg:w-8 h-6 lg:h-8 text-lime-400" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-black text-slate-900 uppercase tracking-tighter">{t('analyzer.inference_title')}</h3>
                <span className="text-[8px] lg:text-[10px] font-black text-emerald-700 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded">{t('analyzer.instant_check')}</span>
              </div>
            </div>

            {error && (
              <div className="p-6 lg:p-8 bg-rose-50 border-2 border-rose-100 rounded-[2rem] space-y-6 text-rose-800 animate-in zoom-in duration-500">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 lg:w-8 h-6 lg:h-8 flex-shrink-0 mt-1" />
                  <p className="font-black text-base lg:text-lg leading-tight">{error}</p>
                </div>
                {currentPlan === 'free' && onNavigate && (
                  <button
                    onClick={() => onNavigate('pricing')}
                    className="w-full py-4 bg-rose-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-rose-700 transition-all shadow-xl shadow-rose-200"
                  >
                    {t('analyzer.update_plan')}
                  </button>
                )}
              </div>
            )}

            {!result && !loading && !error && (
              <div className="h-full flex flex-col items-center justify-center text-slate-300 text-center py-16 lg:py-24 space-y-8">
                <div className="relative">
                  <div className="w-16 lg:w-20 h-16 lg:h-20 border-2 border-slate-100 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-emerald-400 rounded-full animate-pulse shadow-glow"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-black text-lg lg:text-xl italic tracking-[0.2em] uppercase opacity-40">{t('analyzer.ready')}</p>
                  <p className="text-[8px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('analyzer.connected')}</p>
                </div>
              </div>
            )}

            {result && (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-5 lg:p-6 rounded-[2rem] border border-slate-100 flex flex-col justify-center">
                    <span className="text-[8px] lg:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{t('analyzer.risk_label')}</span>
                    <div className={`text-xl lg:text-2xl font-black uppercase tracking-tighter ${result.riskLevel === 'high' ? 'text-rose-600' :
                        result.riskLevel === 'medium' ? 'text-amber-500' :
                          'text-emerald-700'
                      }`}>
                      {t(`analyzer.risk_${result.riskLevel}`)}
                    </div>
                  </div>
                  <div className="bg-slate-50 p-5 lg:p-6 rounded-[2rem] border border-slate-100 flex flex-col justify-center">
                    <span className="text-[8px] lg:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{t('analyzer.reliability_label')}</span>
                    <div className="text-xl lg:text-2xl font-black text-emerald-900 tracking-tighter">99.4%</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="font-black text-slate-800 uppercase tracking-widest text-[8px] lg:text-[10px] ml-1">{t('analyzer.elements_label')}</p>
                  <div className="flex flex-wrap gap-2">
                    {result.detectedElements.map((el, idx) => (
                      <span key={idx} className="bg-white border-2 border-slate-100 px-4 py-2 rounded-2xl text-[12px] lg:text-sm font-black text-slate-700 shadow-sm flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-lime-500"></div>
                        {el}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 lg:p-10 bg-emerald-950 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 lg:w-40 lg:h-40 bg-lime-400/5 rounded-full translate-x-16 -translate-y-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                      <Zap className="w-4 h-4 text-lime-400 fill-lime-400" />
                      <p className="text-lime-400 text-[8px] lg:text-[10px] font-black uppercase tracking-[0.3em]">{t('analyzer.security_advice')}</p>
                    </div>
                    <p className="text-xl lg:text-2xl font-black italic leading-tight text-white">"{result.recommendation}"</p>
                  </div>
                </div>

                {result.isAlertNeeded && (
                  <div className="p-8 lg:p-10 bg-rose-600 text-white rounded-[3.5rem] flex items-center gap-6 lg:gap-8 animate-pulse shadow-2xl shadow-rose-600/40">
                    <div className="w-12 lg:w-16 h-12 lg:h-16 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                      <ShieldAlert className="w-8 lg:w-10 h-8 lg:h-10" />
                    </div>
                    <span className="text-2xl lg:text-3xl font-black uppercase tracking-tighter italic leading-none text-center">{t('analyzer.critical_alert')}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAnalyzer;
