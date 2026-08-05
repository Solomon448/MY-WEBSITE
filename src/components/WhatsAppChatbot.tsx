import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  ExternalLink, 
  Sparkles, 
  PhoneCall, 
  CheckCheck, 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  DollarSign, 
  ShoppingBag, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
  isFaqAnswer?: boolean;
}

interface FaqItem {
  id: string;
  category: 'Shopify' | 'Pricing' | 'Process' | 'AI & Automation';
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Shopify',
    question: 'How long does a Shopify store redesign take?',
    answer: 'Starter landing pages take 5–7 business days, while full custom Shopify ecommerce stores take 2–3 weeks from kickoff to launch.',
    icon: <ShoppingBag className="w-4 h-4 text-[#0eb0a4]" />,
  },
  {
    id: 'faq-2',
    category: 'Pricing',
    question: 'What are your payment terms and pricing tiers?',
    answer: 'We operate on a 50% upfront deposit and 50% upon final launch approval. Starter packages begin at $750, Shopify Pro at $1,800, and Enterprise AI at $3,500.',
    icon: <DollarSign className="w-4 h-4 text-emerald-400" />,
  },
  {
    id: 'faq-3',
    category: 'Shopify',
    question: 'Can you migrate my store from Wix/Squarespace to Shopify?',
    answer: 'Yes! We securely migrate all products, customer data, and blog history to Shopify without losing SEO rankings or experiencing downtime.',
    icon: <ShoppingBag className="w-4 h-4 text-[#0eb0a4]" />,
  },
  {
    id: 'faq-4',
    category: 'AI & Automation',
    question: 'How does the WhatsApp AI Assistant integration work?',
    answer: 'We train a custom AI model on your business knowledge to automatically answer customer FAQs, book meetings, and collect leads 24/7 directly on WhatsApp.',
    icon: <Zap className="w-4 h-4 text-[#25D366]" />,
  },
  {
    id: 'faq-5',
    category: 'Process',
    question: 'How many design revisions are included?',
    answer: 'All projects include structured feedback rounds (2 to Unlimited depending on tier) until you are 100% satisfied with the outcome.',
    icon: <ShieldCheck className="w-4 h-4 text-blue-400" />,
  },
  {
    id: 'faq-6',
    category: 'Process',
    question: 'What is needed to get started with Solomon?',
    answer: 'Simply choose a package or book a call! We will guide you through a short 5-minute onboarding form to gather your goals and assets.',
    icon: <Calendar className="w-4 h-4 text-purple-400" />,
  },
];

export const WhatsAppChatbot: React.FC<{
  onOpenBookingWithService?: (serviceName: string) => void;
}> = ({ onOpenBookingWithService }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'faq'>('chat');
  const [faqSearch, setFaqSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1');

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: '👋 Hello! I am Solomon Elijah’s AI WhatsApp Assistant. Ask me anything or browse our quick FAQs below!',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && activeTab === 'chat') {
      scrollToBottom();
    }
  }, [messages, isOpen, activeTab]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || input.trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    try {
      let aiReply = '';

      if (query.toLowerCase().includes('shopify') || query.toLowerCase().includes('ecommerce')) {
        aiReply = 'Shopify & E-commerce redesign is Solomon’s core specialty! He builds conversion-focused stores with speed scores > 90. Would you like to book a direct design session now or chat on WhatsApp?';
      } else if (query.toLowerCase().includes('price') || query.toLowerCase().includes('cost') || query.toLowerCase().includes('quote')) {
        aiReply = 'Projects start at $750 for Starter Landing Pages, $1,800 for full Shopify Stores, and $3,500 for Enterprise AI Ecosystems. All include fixed rates and milestone guarantees!';
      } else if (query.toLowerCase().includes('book') || query.toLowerCase().includes('consult') || query.toLowerCase().includes('appointment')) {
        aiReply = 'You can book a direct strategy call right here on the website! Select your preferred service and date slot in our Direct Booking section below.';
        if (onOpenBookingWithService) {
          onOpenBookingWithService('Shopify Website Design');
        }
      } else if (query.toLowerCase().includes('timeline') || query.toLowerCase().includes('long') || query.toLowerCase().includes('time')) {
        aiReply = 'Landing pages take 5–7 days, full Shopify stores take 2–3 weeks, and custom AI ecosystems take 3–4 weeks.';
      } else {
        aiReply = `Thanks for asking about "${query}". Solomon Elijah specializes in Shopify, WordPress, Conversion Rate Optimization, and WhatsApp AI Chatbots. Let's connect on WhatsApp for an instant custom quote!`;
      }

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'ai',
            text: aiReply,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
        setIsTyping(false);
      }, 600);
    } catch (err) {
      setIsTyping(false);
    }
  };

  const handleSelectFaqQuestion = (faq: FaqItem) => {
    setActiveTab('chat');
    handleSendMessage(faq.question);
  };

  const directWhatsAppUrl = `https://wa.me/17828592148?text=${encodeURIComponent(
    `Hello Solomon! I'm reaching out from your website portfolio. I'd like to discuss a web design project.`
  )}`;

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) || 
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-full bg-[#034A46] text-white border border-[#0eb0a4] shadow-[0_8px_30px_rgba(14,176,164,0.4)] hover:bg-[#056a64] hover:scale-105 transition-all duration-300 cursor-pointer group"
          aria-label="Open WhatsApp AI Assistant"
        >
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md">
              <MessageSquare className="w-5 h-5 fill-current" />
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#09090b] rounded-full animate-pulse" />
          </div>
          <div className="text-left hidden sm:block">
            <p className="font-mono text-[10px] text-[#0eb0a4] font-extrabold uppercase leading-none flex items-center gap-1">
              <span>AI CHATBOT & FAQs</span>
            </p>
            <p className="font-display text-xs font-bold text-white leading-tight">
              Instant Help & Chat
            </p>
          </div>
        </button>
      )}

      {/* Floating WhatsApp AI Modal Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] h-[550px] max-h-[85vh] rounded-3xl bg-[#0b1012] border border-[#0eb0a4]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-fade-in font-body">
          
          {/* Header */}
          <div className="p-4 bg-[#0e1618] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold shadow-md">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#0e1618] rounded-full" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-white flex items-center gap-1.5">
                  ELIJDEV Assistant
                  <span className="px-1.5 py-0.5 rounded bg-[#034A46] text-[#0eb0a4] text-[9px] font-mono font-extrabold uppercase">
                    AI & FAQs
                  </span>
                </h4>
                <p className="font-montserrat text-[11px] text-slate-400">
                  Online • Typically replies instantly
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Mode Switcher: Chat vs FAQs */}
          <div className="grid grid-cols-2 bg-[#080c0e] border-b border-white/10 text-xs font-mono font-bold">
            <button
              onClick={() => setActiveTab('chat')}
              className={`py-2.5 flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
                activeTab === 'chat'
                  ? 'border-[#0eb0a4] text-white bg-[#034A46]/30'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>LIVE CHAT</span>
            </button>

            <button
              onClick={() => setActiveTab('faq')}
              className={`py-2.5 flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
                activeTab === 'faq'
                  ? 'border-[#0eb0a4] text-white bg-[#034A46]/30'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#0eb0a4]" />
              <span>FREQUENT FAQS</span>
            </button>
          </div>

          {/* TAB 1: LIVE CHAT VIEW */}
          {activeTab === 'chat' && (
            <>
              {/* Quick Info Bar */}
              <div className="bg-[#034A46]/20 border-b border-[#0eb0a4]/20 px-4 py-2 flex items-center justify-between text-[11px] text-[#0eb0a4]">
                <span className="font-montserrat font-medium flex items-center gap-1 truncate">
                  <Sparkles className="w-3 h-3 shrink-0" /> Ask AI or pick a quick FAQ chip
                </span>
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono font-bold hover:underline flex items-center gap-1 shrink-0"
                >
                  Open WA <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Messages Body */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#080c0e]">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3 text-[13px] font-montserrat leading-relaxed shadow-sm ${
                        msg.sender === 'user'
                          ? 'bg-[#034A46] text-white rounded-br-none border border-[#0eb0a4]/50'
                          : 'bg-[#121a1d] text-slate-200 rounded-bl-none border border-white/10'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-slate-400 font-mono">
                        <span>{msg.time}</span>
                        {msg.sender === 'user' && <CheckCheck className="w-3 h-3 text-[#0eb0a4]" />}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-[#121a1d] border border-white/10 rounded-2xl p-3 text-xs text-slate-400 flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#0eb0a4] animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-[#0eb0a4] animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 rounded-full bg-[#0eb0a4] animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick FAQ Chips */}
              <div className="px-3 py-2 bg-[#0a0f11] border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
                <button
                  onClick={() => handleSendMessage('What are your Shopify design prices?')}
                  className="px-2.5 py-1 rounded-full bg-[#121a1d] border border-white/10 text-[11px] font-montserrat text-slate-300 hover:text-white hover:border-[#0eb0a4] whitespace-nowrap cursor-pointer shrink-0"
                >
                  💰 Pricing
                </button>
                <button
                  onClick={() => handleSendMessage('How long does a Shopify store redesign take?')}
                  className="px-2.5 py-1 rounded-full bg-[#121a1d] border border-white/10 text-[11px] font-montserrat text-slate-300 hover:text-white hover:border-[#0eb0a4] whitespace-nowrap cursor-pointer shrink-0"
                >
                  ⏱️ Timeline
                </button>
                <button
                  onClick={() => handleSendMessage('I want to book a direct consultation call.')}
                  className="px-2.5 py-1 rounded-full bg-[#121a1d] border border-white/10 text-[11px] font-montserrat text-slate-300 hover:text-white hover:border-[#0eb0a4] whitespace-nowrap cursor-pointer shrink-0"
                >
                  📅 Book Call
                </button>
                <button
                  onClick={() => setActiveTab('faq')}
                  className="px-2.5 py-1 rounded-full bg-[#034A46]/60 border border-[#0eb0a4]/40 text-[11px] font-mono text-[#0eb0a4] hover:text-white whitespace-nowrap cursor-pointer shrink-0"
                >
                  🔍 View All FAQs →
                </button>
              </div>

              {/* Input & Direct WhatsApp Action */}
              <div className="p-3 bg-[#0e1618] border-t border-white/10 space-y-2">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask AI or type a question..."
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#080c0e] border border-white/15 text-white text-xs font-montserrat focus:outline-none focus:border-[#0eb0a4]"
                  />
                  <button
                    type="submit"
                    className="p-2.5 rounded-xl bg-[#034A46] text-white hover:bg-[#056a64] border border-[#0eb0a4] transition-colors cursor-pointer shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>CONTINUE ON WHATSAPP APP</span>
                </a>
              </div>
            </>
          )}

          {/* TAB 2: INTERACTIVE FAQ DIRECTORY VIEW */}
          {activeTab === 'faq' && (
            <div className="flex-1 flex flex-col bg-[#080c0e] overflow-hidden">
              
              {/* FAQ Search Bar */}
              <div className="p-3 bg-[#0e1618] border-b border-white/10 space-y-2">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    value={faqSearch}
                    onChange={(e) => setFaqSearch(e.target.value)}
                    placeholder="Search FAQs (pricing, Shopify, timeline...)"
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#080c0e] border border-white/15 text-white text-xs font-montserrat focus:outline-none focus:border-[#0eb0a4]"
                  />
                </div>

                {/* Category Pills */}
                <div className="flex gap-1.5 overflow-x-auto no-scrollbar pt-1">
                  {['All', 'Shopify', 'Pricing', 'Process', 'AI & Automation'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                        selectedCategory === cat
                          ? 'bg-[#034A46] text-white border border-[#0eb0a4]'
                          : 'bg-white/[0.04] text-slate-400 hover:text-slate-200 border border-white/5'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Accordion FAQ List */}
              <div className="flex-1 p-3 overflow-y-auto space-y-2">
                {filteredFaqs.length === 0 ? (
                  <div className="p-6 text-center space-y-2 text-slate-400 font-montserrat text-xs">
                    <p>No matching questions found.</p>
                    <button
                      onClick={() => {
                        setFaqSearch('');
                        setSelectedCategory('All');
                      }}
                      className="text-[#0eb0a4] font-bold underline cursor-pointer"
                    >
                      Reset filters
                    </button>
                  </div>
                ) : (
                  filteredFaqs.map((faq) => {
                    const isExpanded = expandedFaqId === faq.id;
                    return (
                      <div
                        key={faq.id}
                        className={`rounded-2xl border transition-all overflow-hidden ${
                          isExpanded
                            ? 'bg-[#0e1618] border-[#0eb0a4]/60 shadow-lg'
                            : 'bg-[#0b1012] border-white/10 hover:border-white/20'
                        }`}
                      >
                        <button
                          onClick={() => setExpandedFaqId(isExpanded ? null : faq.id)}
                          className="w-full p-3 flex items-center justify-between gap-3 text-left cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="p-1.5 rounded-lg bg-white/[0.05] shrink-0">
                              {faq.icon}
                            </div>
                            <span className="font-montserrat text-xs font-bold text-white leading-tight">
                              {faq.question}
                            </span>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-[#0eb0a4] shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                          )}
                        </button>

                        {isExpanded && (
                          <div className="px-3 pb-3 pt-1 border-t border-white/5 space-y-3 font-montserrat text-xs text-slate-300 leading-relaxed bg-[#080c0e]/50">
                            <p>{faq.answer}</p>
                            
                            <div className="flex items-center gap-2 pt-1">
                              <button
                                onClick={() => handleSelectFaqQuestion(faq)}
                                className="px-3 py-1.5 rounded-lg bg-[#034A46] text-white text-[11px] font-mono font-bold hover:bg-[#056a64] border border-[#0eb0a4] transition-colors flex items-center gap-1 cursor-pointer"
                              >
                                <MessageSquare className="w-3 h-3" />
                                <span>Ask AI about this</span>
                              </button>

                              <a
                                href={directWhatsAppUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded-lg bg-[#25D366]/20 text-[#25D366] text-[11px] font-mono font-bold hover:bg-[#25D366]/30 transition-colors flex items-center gap-1 cursor-pointer"
                              >
                                <span>Chat on WA</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>

              {/* Bottom Direct WA Action */}
              <div className="p-3 bg-[#0e1618] border-t border-white/10">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>HAVE A CUSTOM QUESTION? CHAT ON WHATSAPP</span>
                </a>
              </div>
            </div>
          )}

        </div>
      )}
    </>
  );
};

