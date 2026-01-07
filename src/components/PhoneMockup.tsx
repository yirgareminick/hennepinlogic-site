"use client";

import { useState, useEffect, useRef } from "react";

export interface Message {
  type: "event" | "typing" | "typing-incoming" | "outgoing" | "incoming" | "success";
  label?: string;
  text?: string;
  delay: number;
}

const defaultConversation: Message[] = [
  {
    type: "event",
    label: "MISSED CALL",
    text: "(612) 555-8421",
    delay: 0,
  },
  {
    type: "typing",
    delay: 1200,
  },
  {
    type: "outgoing",
    text: "Hi, this is Twin Cities Plumbing. Sorry we missed your call! How can we help you today?",
    delay: 2800,
  },
  {
    type: "typing-incoming",
    delay: 5000,
  },
  {
    type: "incoming",
    text: "Hi, our water heater stopped working this morning. No hot water at all",
    delay: 7500,
  },
  {
    type: "typing",
    delay: 9500,
  },
  {
    type: "outgoing",
    text: "I can help with that. To get you scheduled, what's the service address?",
    delay: 11500,
  },
  {
    type: "typing-incoming",
    delay: 14000,
  },
  {
    type: "incoming",
    text: "1847 Grand Ave S,\n Minneapolis 55403",
    delay: 17000,
  },
  {
    type: "typing",
    delay: 19000,
  },
  {
    type: "outgoing",
    text: "Got it. Is this urgent, or can it wait until tomorrow?",
    delay: 21000,
  },
  {
    type: "typing-incoming",
    delay: 23500,
  },
  {
    type: "incoming",
    text: "Today would be great if that works. We have kids",
    delay: 26000,
  },
  {
    type: "typing",
    delay: 28000,
  },
  {
    type: "outgoing",
    text: "Understood. A technician will call you within 15 minutes to confirm a time slot. Is this number the best to reach you?",
    delay: 30500,
  },
  {
    type: "typing-incoming",
    delay: 33500,
  },
  {
    type: "incoming",
    text: "Yes, thank you!",
    delay: 35000,
  },
  {
    type: "success",
    text: "Lead captured → Dispatching",
    delay: 37000,
  },
];

interface PhoneMockupProps {
  conversation?: Message[];
  businessName?: string;
}

function TypingIndicator({ isIncoming = false }: { isIncoming?: boolean }) {
  return (
    <div className={`flex ${isIncoming ? 'justify-end' : 'justify-start'}`}>
      <div className={`px-4 py-3 rounded-2xl ${isIncoming ? 'bg-[#1e293b] rounded-tr-md' : 'bg-primary rounded-tl-md'}`}>
        <div className="flex gap-1">
          <div 
            className={`w-1.5 h-1.5 rounded-full ${isIncoming ? 'bg-white/40' : 'bg-white/60'}`}
            style={{ animation: 'typing-dot 1.4s infinite', animationDelay: '0ms' }}
          />
          <div 
            className={`w-1.5 h-1.5 rounded-full ${isIncoming ? 'bg-white/40' : 'bg-white/60'}`}
            style={{ animation: 'typing-dot 1.4s infinite', animationDelay: '200ms' }}
          />
          <div 
            className={`w-1.5 h-1.5 rounded-full ${isIncoming ? 'bg-white/40' : 'bg-white/60'}`}
            style={{ animation: 'typing-dot 1.4s infinite', animationDelay: '400ms' }}
          />
        </div>
      </div>
    </div>
  );
}

export function PhoneMockup({ 
  conversation = defaultConversation, 
  businessName = "Twin Cities Plumbing" 
}: PhoneMockupProps) {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [currentTyping, setCurrentTyping] = useState<'outgoing' | 'incoming' | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const pausedTimeRef = useRef<number>(0);
  const lastProcessedRef = useRef<number>(-1);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [visibleMessages, currentTyping]);

  useEffect(() => {
    const totalDuration = conversation[conversation.length - 1].delay + 5000;
    
    const resetSequence = () => {
      setVisibleMessages([]);
      setCurrentTyping(null);
      lastProcessedRef.current = -1;
      if (containerRef.current) {
        containerRef.current.scrollTop = 0;
      }
    };

    const processFrame = (timestamp: number) => {
      if (startTimeRef.current === 0) {
        startTimeRef.current = timestamp;
      }
      
      const elapsed = timestamp - startTimeRef.current;
      
      // Loop the animation
      if (elapsed >= totalDuration) {
        resetSequence();
        startTimeRef.current = timestamp;
        animationRef.current = requestAnimationFrame(processFrame);
        return;
      }
      
      // Process messages based on elapsed time
      conversation.forEach((msg, index) => {
        if (index <= lastProcessedRef.current) return;
        if (elapsed >= msg.delay) {
          lastProcessedRef.current = index;
          if (msg.type === "typing") {
            setCurrentTyping('outgoing');
          } else if (msg.type === "typing-incoming") {
            setCurrentTyping('incoming');
          } else {
            setCurrentTyping(null);
            setVisibleMessages((prev) => [...prev, index]);
          }
        }
      });
      
      animationRef.current = requestAnimationFrame(processFrame);
    };

    // Handle visibility change to pause/resume cleanly
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab is hidden - pause animation
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
        pausedTimeRef.current = performance.now();
      } else {
        // Tab is visible - restart from beginning for clean state
        resetSequence();
        startTimeRef.current = 0;
        animationRef.current = requestAnimationFrame(processFrame);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Start the animation
    animationRef.current = requestAnimationFrame(processFrame);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [conversation]);

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-blue-500/30 via-transparent to-black/40 blur-[70px]" />
        <div className="absolute inset-6 rounded-[2.5rem] border border-white/5 shadow-[0_20px_60px_rgba(2,6,23,0.9)]" />
      </div>
      <style jsx>{`
        @keyframes typing-dot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-3px); opacity: 1; }
        }
        @keyframes message-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .message-appear {
          animation: message-in 0.35s ease-out forwards;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      {/* Phone frame */}
      <div className="relative w-[280px] h-[580px] bg-gradient-to-b from-white/10 via-black/40 to-black/90 rounded-[3rem] p-2 shadow-[0_25px_90px_rgba(15,23,42,0.55)] border border-blue-500/30 ring-1 ring-blue-500/15 transition duration-500 transform-gpu hover:scale-[0.995] opacity-95">
        {/* Inner screen */}
        <div className="relative w-full h-full bg-[#0a0e14] rounded-[2.5rem] overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />
          
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 h-12 z-10 flex items-end justify-between px-8 pb-1">
            <span className="text-[11px] text-white/60 font-medium">9:41</span>
            <div className="flex items-center gap-1 text-white/60">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3C7.46 3 3.34 4.78.29 7.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.73v3.1c0 .4.23.74.56.9.98.49 1.87 1.12 2.67 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71 0-.28-.12-.52-.3-.7C20.66 4.78 16.54 3 12 3z"/>
              </svg>
              <div className="w-5 h-2.5 border border-white/40 rounded-sm relative">
                <div className="absolute inset-0.5 bg-green-500 rounded-[2px]" style={{ width: '80%' }} />
              </div>
            </div>
          </div>
          
          {/* Chat header */}
          <div className="absolute top-12 left-0 right-0 h-14 bg-[#0a0e14]/95 backdrop-blur-sm border-b border-white/5 flex items-center px-4 z-10">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{businessName}</p>
              <p className="text-green-400 text-[11px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                Auto-responding
              </p>
            </div>
          </div>
          
          {/* Messages container */}
          <div 
            ref={containerRef}
            className="absolute top-26 bottom-16 left-0 right-0 overflow-y-auto px-3 pt-16 pb-4 space-y-2.5 scrollbar-hide"
          >
            {conversation.map((msg, index) => {
              if (!visibleMessages.includes(index)) return null;
              if (msg.type === "typing" || msg.type === "typing-incoming") return null;

              if (msg.type === "event") {
                return (
                  <div key={index} className="flex justify-center message-appear py-1">
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-1.5 text-center">
                      <p className="text-amber-400 text-[10px] font-medium tracking-wider">{msg.label}</p>
                      <p className="text-white/80 text-xs">{msg.text}</p>
                    </div>
                  </div>
                );
              }

              if (msg.type === "success") {
                return (
                  <div key={index} className="flex justify-center message-appear py-1">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                      <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-green-400 text-xs font-medium">{msg.text}</p>
                    </div>
                  </div>
                );
              }

              if (msg.type === "outgoing") {
                return (
                  <div key={index} className="flex justify-start message-appear">
                    <div className="inline-flex max-w-[85%] bg-primary/80 border border-primary/40 text-white px-3 py-2 rounded-2xl rounded-tl-md shadow-[0_10px_40px_rgba(59,130,246,0.25)]">
                      <p className="text-[13px] leading-relaxed break-words whitespace-pre-line">{msg.text}</p>
                    </div>
                  </div>
                );
              }

              if (msg.type === "incoming") {
                return (
                  <div key={index} className="flex justify-end message-appear">
                    <div className="inline-flex max-w-[85%] bg-[#041024]/95 border border-[#1E3A8A]/35 text-white/90 px-3 py-2 rounded-2xl rounded-tr-md shadow-[0_10px_40px_rgba(30,58,138,0.35)]">
                      <p className="text-[13px] leading-relaxed break-words whitespace-pre-line">{msg.text}</p>
                    </div>
                  </div>
                );
              }

              return null;
            })}
            
            {currentTyping && (
              <TypingIndicator isIncoming={currentTyping === 'incoming'} />
            )}
          </div>
          
          {/* Input area */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#0a0e14] border-t border-white/5 flex items-center px-3 gap-2">
            <div className="flex-1 bg-white/5 rounded-full px-4 py-2 text-white/30 text-xs flex items-center">
              <svg className="w-3.5 h-3.5 mr-2 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Auto-responding...
            </div>
          </div>
          
          {/* Home indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/15 rounded-full" />
        </div>
      </div>
    </div>
  );
}