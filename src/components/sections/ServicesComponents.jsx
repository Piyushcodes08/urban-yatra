import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Sparkles, 
  Users, 
  Heart, 
  Users2, 
  Car, 
  PlaneTakeoff, 
  Ticket, 
  Map, 
  ShieldCheck, 
  Camera, 
  Video,
  Check,
  ArrowRight,
  X,
  CheckCircle2,
  BookmarkCheck,
  Trash2,
  Briefcase,
  User,
  Mail,
  Phone,
  Calendar,
  CheckSquare,
  Square,
  MessageSquare,
  RotateCcw
} from 'lucide-react';

// ==========================================
// ICON & GRADIENT MAPS FOR SERVICE CARD
// ==========================================

const iconMap = {
  Compass,
  Sparkles,
  Users,
  Heart,
  Users2,
  Car,
  PlaneTakeoff,
  Ticket,
  Map,
  ShieldCheck,
  Camera,
  Video,
};

const gradientMap = {
  'domestic-tours': 'from-blue-600 to-indigo-700',
  'temple-pilgrimage': 'from-orange-500 to-red-600',
  'family-tours': 'from-yellow-400 to-orange-500',
  'couple-honeymoon': 'from-pink-500 to-rose-600',
  'group-tours': 'from-emerald-500 to-teal-700',
  'cab-service': 'from-slate-700 to-slate-900',
  'airport-transfers': 'from-cyan-500 to-blue-600',
  'flight-booking': 'from-blue-400 to-indigo-500',
  'customized-planning': 'from-purple-600 to-indigo-800',
  'personal-car': 'from-amber-600 to-orange-700',
  'photographer-arrangement': 'from-violet-500 to-fuchsia-600',
  'travel-reel': 'from-brand-orange to-red-500',
};

// ==========================================
// 1. SERVICE CARD COMPONENT
// ==========================================

export const ServiceCard = ({
  service,
  onViewDetails,
  onToggleSelect,
  isSelected,
  index,
}) => {
  const IconComponent = iconMap[service.iconName] || Compass;
  const gradientClass = gradientMap[service.id] || 'from-brand-blue to-brand-orange';

  const getCategoryStyles = (cat) => {
    switch (cat) {
      case 'tours':
        return {
          bg: 'bg-brand-blue/5 text-brand-blue border-brand-blue/10',
          accent: 'bg-brand-blue',
          ring: 'focus:ring-brand-blue',
        };
      case 'transport':
        return {
          bg: 'bg-brand-orange/5 text-brand-orange border-brand-orange/10',
          accent: 'bg-brand-orange',
          ring: 'focus:ring-brand-orange',
        };
      case 'media-planning':
        return {
          bg: 'bg-brand-yellow/10 text-brand-orange-dark border-brand-yellow/30',
          accent: 'bg-brand-yellow text-slate-900',
          ring: 'focus:ring-brand-yellow',
        };
      default:
        return {
          bg: 'bg-slate-100 text-slate-700 border-slate-200',
          accent: 'bg-slate-700',
          ring: 'focus:ring-slate-700',
        };
    }
  };

  const styles = getCategoryStyles(service.category);

  return (
    <motion.div
      id={`service-card-${service.id}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-card-shadow transition-all duration-300 hover:shadow-xl ${
        isSelected 
          ? 'border-brand-blue ring-2 ring-brand-blue/20' 
          : 'border-slate-100 hover:border-slate-200'
      }`}
    >
      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
        <img
          src={service.image}
          alt={service.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} mix-blend-multiply opacity-15 transition-opacity duration-300 group-hover:opacity-30`} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

        <div className="absolute top-4 left-4 flex flex-col gap-2 items-start">
          <span className={`rounded-full border px-3 py-1 text-xs font-semibold tracking-wide shadow-sm backdrop-blur-md ${styles.bg}`}>
            {service.categoryLabel}
          </span>
          {service.badgeText && (
            <span className="rounded-full bg-brand-orange px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase shadow-sm">
              {service.badgeText}
            </span>
          )}
        </div>

        <div className="absolute bottom-4 right-4 rounded-lg bg-slate-950/70 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
          {service.startingPrice}
        </div>

        <div className={`absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-105 ${styles.accent}`}>
          <IconComponent className="h-5 w-5" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex-1">
          <h3 className="font-display text-base font-bold tracking-tight text-slate-800 group-hover:text-brand-blue transition-colors duration-200 line-clamp-1">
            {service.title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-2">
            {service.shortDescription}
          </p>

          <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
            {service.highlights.slice(0, 2).map((h, i) => (
              <div key={i} className="flex items-center text-xs text-slate-600">
                <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Check className="h-2.5 w-2.5 stroke-[3]" />
                </div>
                <span className="truncate">{h}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <button
            id={`btn-details-${service.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(service);
            }}
            className="flex items-center text-xs font-semibold text-slate-600 hover:text-brand-blue group/link transition-colors duration-200"
          >
            Detailed View
            <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
          </button>

          <button
            id={`btn-select-${service.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleSelect(service.id);
            }}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold shadow-sm transition-all duration-200 ${
              isSelected
                ? 'bg-brand-blue text-white hover:bg-brand-blue-dark'
                : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {isSelected ? (
              <>
                <Check className="h-3.5 w-3.5 stroke-[3]" />
                Selected
              </>
            ) : (
              'Add to Plan'
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// 2. QUOTE PLANNER COMPONENT
// ==========================================

export const QuotePlanner = ({
  selectedServices,
  duration,
  setDuration,
  travelers,
  setTravelers,
  onRemoveService,
  onScrollToInquiry,
}) => {
  const calculateMockEstimate = () => {
    let baseTotal = 0;
    
    selectedServices.forEach(s => {
      if (s.id === 'domestic-tours') baseTotal += 399 * travelers;
      else if (s.id === 'temple-pilgrimage') baseTotal += 249 * travelers;
      else if (s.id === 'family-tours') baseTotal += 450 * Math.max(1, Math.ceil(travelers / 4));
      else if (s.id === 'couple-honeymoon') baseTotal += 599 * Math.max(1, Math.ceil(travelers / 2));
      else if (s.id === 'group-tours') baseTotal += 199 * travelers;
      else if (s.id === 'cab-service') baseTotal += 45 * duration;
      else if (s.id === 'airport-transfers') baseTotal += 30 * Math.max(1, Math.ceil(travelers / 4));
      else if (s.id === 'personal-driver') baseTotal += 110 * duration;
      else if (s.id === 'photographer-arrangement') baseTotal += 150;
      else if (s.id === 'travel-reel') baseTotal += 49;
    });

    return baseTotal;
  };

  const estimatedTotal = calculateMockEstimate();

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl lg:p-8 sticky top-6">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue text-white shadow-md shadow-brand-blue/10">
          <Briefcase className="h-5.5 w-5.5" />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-slate-900 tracking-tight">Custom Trip Planner</h3>
          <p className="text-xs text-slate-400">Design your dream package live</p>
        </div>
      </div>

      {selectedServices.length === 0 ? (
        <div className="py-12 text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-50 text-slate-300"
          >
            <Sparkles className="h-6 w-6" />
          </motion.div>
          <h4 className="mt-4 text-sm font-semibold text-slate-700">No Services Added Yet</h4>
          <p className="mx-auto mt-2 max-w-xs text-xs leading-relaxed text-slate-400">
            Browse our list of premium services above and add them to your planner to generate a dynamic quote.
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-6">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-3">Selected Packages ({selectedServices.length})</span>
            <div className="max-h-[180px] overflow-y-auto space-y-2 pr-1 scrollbar-thin">
              <AnimatePresence initial={false}>
                {selectedServices.map(s => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="group/item flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-2.5 transition-colors hover:bg-slate-100/50"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img
                        src={s.image}
                        alt=""
                        referrerPolicy="no-referrer"
                        className="h-8 w-8 rounded-lg object-cover bg-slate-200 shrink-0"
                      />
                      <span className="truncate text-xs font-semibold text-slate-700">
                        {s.title}
                      </span>
                    </div>
                    <button
                      id={`btn-planner-remove-${s.id}`}
                      onClick={() => onRemoveService(s.id)}
                      className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all focus:outline-none"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-5">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Calendar className="h-4 w-4 text-brand-orange" />
                  Duration
                </div>
                <span className="text-brand-orange bg-brand-orange/5 px-2 py-0.5 rounded-md font-mono font-bold">
                  {duration} {duration === 1 ? 'Day' : 'Days'}
                </span>
              </div>
              <input
                id="duration-slider"
                type="range"
                min="1"
                max="30"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
                className="mt-3.5 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-100 accent-brand-orange"
              />
              <div className="mt-1 flex justify-between text-[10px] font-bold text-slate-300 font-mono">
                <span>1 Day</span>
                <span>30 Days</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Users className="h-4 w-4 text-brand-blue" />
                  Total Travelers
                </div>
                <span className="text-brand-blue bg-brand-blue/5 px-2 py-0.5 rounded-md font-mono font-bold">
                  {travelers} {travelers === 1 ? 'Person' : 'People'}
                </span>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <button
                  id="btn-decrement-travelers"
                  type="button"
                  onClick={() => setTravelers(Math.max(1, travelers - 1))}
                  className="flex h-9 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  -
                </button>
                <div className="flex h-9 flex-1 items-center justify-center rounded-xl bg-slate-50 font-mono text-sm font-bold text-slate-700 border border-slate-100">
                  {travelers}
                </div>
                <button
                  id="btn-increment-travelers"
                  type="button"
                  onClick={() => setTravelers(Math.min(50, travelers + 1))}
                  className="flex h-9 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-5 text-white shadow-lg border border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Estimated Total</span>
                <div className="mt-1 flex items-baseline font-display">
                  <span className="text-xl font-bold text-brand-yellow">$</span>
                  <span className="text-3xl font-extrabold tracking-tight text-brand-yellow font-mono">
                    {estimatedTotal.toLocaleString()}
                  </span>
                </div>
              </div>
              <span className="rounded-full bg-slate-800 border border-slate-700 px-2.5 py-1 text-[10px] font-bold text-slate-300">
                Mock Quote
              </span>
            </div>
            <p className="mt-3.5 text-[10px] leading-relaxed text-slate-400 border-t border-slate-800/80 pt-3">
              This is an estimated package pricing. Submit your plan below, and our travel specialists will contact you with exact customized discounts!
            </p>
          </div>

          <button
            id="btn-trigger-scroll-booking"
            onClick={onScrollToInquiry}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue py-3.5 text-xs font-bold text-white shadow-lg shadow-brand-blue/15 hover:bg-brand-blue-dark hover:shadow-brand-blue/20 transition-all duration-200 group/btn hover:scale-[1.01]"
          >
            Lock Service list & Book
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 3. SERVICE DETAILS MODAL COMPONENT
// ==========================================

export const ServiceDetailsModal = ({
  service,
  isOpen,
  onClose,
  onToggleSelect,
  isSelected,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!service) return null;

  const IconComponent = iconMap[service.iconName] || Compass;

  const getCategoryThemeColors = (cat) => {
    switch (cat) {
      case 'tours':
        return { text: 'text-brand-blue', bg: 'bg-brand-blue/10', border: 'border-brand-blue/20' };
      case 'transport':
        return { text: 'text-brand-orange', bg: 'bg-brand-orange/10', border: 'border-brand-orange/20' };
      case 'media-planning':
        return { text: 'text-brand-orange-dark', bg: 'bg-brand-yellow/20', border: 'border-brand-yellow/30' };
      default:
        return { text: 'text-slate-700', bg: 'bg-slate-100', border: 'border-slate-200' };
    }
  };

  const colors = getCategoryThemeColors(service.category);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          <motion.div
            id={`modal-window-${service.id}`}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative flex h-full max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl md:flex-row"
          >
            <button
              id="modal-close-btn"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/50 text-white backdrop-blur-sm transition-all hover:bg-slate-900/75 hover:scale-105 focus:outline-none"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative h-48 w-full shrink-0 md:h-auto md:w-[42%] bg-slate-100">
              <img
                src={service.image}
                alt={service.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-950/20" />
              
              <div className="absolute bottom-4 left-6 right-6 text-white md:bottom-8">
                <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md bg-brand-orange">
                  {service.categoryLabel}
                </span>
                <h4 className="mt-1.5 font-display text-lg font-bold leading-tight md:hidden">
                  {service.title}
                </h4>
              </div>
            </div>

            <div className="flex flex-1 flex-col overflow-hidden p-6 md:p-8">
              <div className="flex-1 overflow-y-auto pr-1">
                <div className="hidden md:block">
                  <div className="flex items-center gap-3">
                    <span className={`rounded-full border px-3 py-0.5 text-xs font-semibold tracking-wide ${colors.bg} ${colors.text} ${colors.border}`}>
                      {service.categoryLabel}
                    </span>
                    {service.badgeText && (
                      <span className="rounded-full bg-brand-orange px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase">
                        {service.badgeText}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2.5 font-display text-2xl font-bold tracking-tight text-slate-900">
                    {service.title}
                  </h3>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl bg-slate-50 p-4 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${colors.bg} ${colors.text}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">Pricing Guide</span>
                      <span className="text-sm font-bold text-slate-800">{service.startingPrice}</span>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-slate-200 hidden sm:block" />
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                      <BookmarkCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">Availability</span>
                      <span className="text-sm font-bold text-emerald-600">Instant Inquiry</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Service Overview</h5>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.longDescription}
                  </p>
                </div>

                <div className="mt-6 pb-4">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Included in this Package</h5>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {service.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-slate-50/50 p-3"
                      >
                        <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-600" />
                        <span className="text-xs font-medium text-slate-700 leading-tight">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5 shrink-0">
                <div className="text-xs text-slate-400 font-medium">
                  Add this service to customize your dream itinerary package.
                </div>
                
                <div className="flex gap-3">
                  <button
                    id="btn-modal-close"
                    onClick={onClose}
                    className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors duration-150"
                  >
                    Back to List
                  </button>
                  <button
                    id="btn-modal-toggle-select"
                    onClick={() => onToggleSelect(service.id)}
                    className={`rounded-xl px-5 py-2.5 text-xs font-bold shadow-md transition-all duration-200 hover:scale-[1.02] ${
                      isSelected
                        ? 'bg-brand-orange text-white hover:bg-brand-orange-dark'
                        : 'bg-brand-blue text-white hover:bg-brand-blue-dark'
                    }`}
                  >
                    {isSelected ? 'Remove from Itinerary' : 'Add to My Itinerary'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// ==========================================
// 4. INQUIRY FORM COMPONENT
// ==========================================

export const InquiryForm = ({
  allServices,
  selectedServiceIds,
  onToggleService,
  travelersCount,
  travelDate,
  setTravelDate,
  onSubmitSuccess,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!travelDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setTravelDate(tomorrow.toISOString().split('T')[0]);
    }
  }, [travelDate, setTravelDate]);

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Full name is required';
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (phone.replace(/\D/g, '').length < 7) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (selectedServiceIds.length === 0) {
      newErrors.services = 'Please select at least one travel service';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onSubmitSuccess();
      
      const inquiry = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        phone,
        travelDate,
        travelersCount,
        selectedServices: selectedServiceIds,
        message,
        createdAt: new Date().toISOString()
      };
      const existing = JSON.parse(localStorage.getItem('travel_inquiries') || '[]');
      localStorage.setItem('travel_inquiries', JSON.stringify([...existing, inquiry]));

    }, 1800);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setIsSuccess(false);
    setErrors({});
  };

  return (
    <div id="booking-section" className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl lg:p-10">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="inquiry-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mb-8 text-center sm:text-left">
              <span className="rounded-full bg-brand-orange/5 px-3.5 py-1 text-xs font-bold text-brand-orange">
                Instant Reservation
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Inquire & Customize Your Tour
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Submit this form to lock down your service choices. Our travel curators will finalize details within 2 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="input-name" className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Full Name
                  </label>
                  <div className="relative mt-2">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                      <User className="h-4.5 w-4.5" />
                    </div>
                    <input
                      id="input-name"
                      type="text"
                      placeholder="e.g. Eleanor Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`block w-full rounded-xl border bg-slate-50/50 py-3 pl-11 pr-4 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                        errors.name 
                          ? 'border-red-300 focus:border-red-400 focus:ring-red-100' 
                          : 'border-slate-200 focus:border-brand-blue focus:ring-brand-blue/15'
                      }`}
                    />
                  </div>
                  {errors.name && <span className="mt-1.5 block text-xs font-semibold text-red-500">{errors.name}</span>}
                </div>

                <div>
                  <label htmlFor="input-email" className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email Address
                  </label>
                  <div className="relative mt-2">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                      <Mail className="h-4.5 w-4.5" />
                    </div>
                    <input
                      id="input-email"
                      type="email"
                      placeholder="e.g. eleanor@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`block w-full rounded-xl border bg-slate-50/50 py-3 pl-11 pr-4 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                        errors.email 
                          ? 'border-red-300 focus:border-red-400 focus:ring-red-100' 
                          : 'border-slate-200 focus:border-brand-blue focus:ring-brand-blue/15'
                      }`}
                    />
                  </div>
                  {errors.email && <span className="mt-1.5 block text-xs font-semibold text-red-500">{errors.email}</span>}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="input-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Phone Number
                  </label>
                  <div className="relative mt-2">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                      <Phone className="h-4.5 w-4.5" />
                    </div>
                    <input
                      id="input-phone"
                      type="tel"
                      placeholder="e.g. +1 (555) 019-2834"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`block w-full rounded-xl border bg-slate-50/50 py-3 pl-11 pr-4 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                        errors.phone 
                          ? 'border-red-300 focus:border-red-400 focus:ring-red-100' 
                          : 'border-slate-200 focus:border-brand-blue focus:ring-brand-blue/15'
                      }`}
                    />
                  </div>
                  {errors.phone && <span className="mt-1.5 block text-xs font-semibold text-red-500">{errors.phone}</span>}
                </div>

                <div>
                  <label htmlFor="input-date" className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Preferred Travel Date
                  </label>
                  <div className="relative mt-2">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                      <Calendar className="h-4.5 w-4.5" />
                    </div>
                    <input
                      id="input-date"
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="block w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-11 pr-4 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:border-brand-blue focus:ring-brand-blue/15"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Services to Include in Inquiry
                </label>
                {errors.services && <span className="mt-1.5 block text-xs font-semibold text-red-500">{errors.services}</span>}
                <div className="mt-3 grid gap-3 sm:grid-cols-2 md:grid-cols-3 max-h-[160px] overflow-y-auto border border-slate-100 rounded-2xl p-4 bg-slate-50/30 scrollbar-thin">
                  {allServices.map(s => {
                    const isChecked = selectedServiceIds.includes(s.id);
                    return (
                      <button
                        key={s.id}
                        type="button"
                        id={`form-checkbox-${s.id}`}
                        onClick={() => onToggleService(s.id)}
                        className={`flex items-center gap-2.5 rounded-xl border p-2.5 text-left text-xs font-semibold transition-all focus:outline-none ${
                          isChecked
                            ? 'border-brand-blue bg-brand-blue/5 text-brand-blue'
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {isChecked ? (
                          <CheckSquare className="h-4.5 w-4.5 shrink-0 text-brand-blue" />
                        ) : (
                          <Square className="h-4.5 w-4.5 shrink-0 text-slate-300" />
                        )}
                        <span className="truncate">{s.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label htmlFor="input-message" className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Special Demands & Customization Details
                </label>
                <div className="relative mt-2">
                  <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                    <MessageSquare className="h-4.5 w-4.5" />
                  </div>
                  <textarea
                    id="input-message"
                    rows={4}
                    placeholder="e.g. Traveling with two seniors, require private transport wheelchair-accessible vehicle, vegetarian organic foods, sunset balloon rides, custom luxury requests..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="block w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-11 pr-4 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:border-brand-blue focus:ring-brand-blue/15"
                  />
                </div>
              </div>

              <button
                id="btn-submit-inquiry"
                type="submit"
                disabled={isSubmitting}
                className="relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-brand-orange py-4 text-sm font-bold text-white shadow-xl shadow-brand-orange/15 hover:bg-brand-orange-dark hover:shadow-brand-orange/25 transition-all duration-200 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2.5">
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Assembling Best Team...</span>
                  </div>
                ) : (
                  <>
                    <span>Submit Inquiry Itinerary</span>
                    <PlaneTakeoff className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-10 text-center"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 shadow-inner relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 10, stiffness: 100, delay: 0.1 }}
              >
                <PlaneTakeoff className="h-10 w-10 rotate-45 text-emerald-600" />
              </motion.div>
              <div className="absolute top-0 right-0 h-3 w-3 bg-brand-yellow rounded-full animate-ping" />
              <div className="absolute bottom-1.5 left-0 h-2.5 w-2.5 bg-brand-orange rounded-full animate-pulse" />
            </div>

            <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Inquiry Filed Successfully!
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500">
              Thank you, <span className="font-semibold text-slate-800">{name}</span>! Your customized travel configuration has been locked in with our travel planners.
            </p>

            <div className="mx-auto mt-8 max-w-md rounded-2xl border border-slate-100 bg-slate-50/50 p-6 text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Reserved Itinerary</h4>
              <div className="mt-3.5 space-y-2.5">
                <div className="flex justify-between text-xs font-medium text-slate-600">
                  <span>Travel Date:</span>
                  <span className="font-semibold text-slate-800">{travelDate}</span>
                </div>
                <div className="flex justify-between text-xs font-medium text-slate-600">
                  <span>Travelers Size:</span>
                  <span className="font-semibold text-slate-800">{travelersCount} Person(s)</span>
                </div>
                <div className="flex justify-between text-xs font-medium text-slate-600">
                  <span>Included Services:</span>
                  <span className="font-semibold text-brand-blue bg-brand-blue/5 px-2 py-0.5 rounded-md font-mono text-[10px]">
                    {selectedServiceIds.length} Checked
                  </span>
                </div>
              </div>

              <div className="mt-5 border-t border-slate-200/60 pt-4 text-xs font-medium leading-relaxed text-slate-500">
                <span className="font-bold text-emerald-600">Next Step:</span> A dedicated travel planner is reviewing your request right now. We will contact you at <span className="font-semibold text-slate-800">{phone}</span> or <span className="font-semibold text-slate-800">{email}</span> within 2 hours.
              </div>
            </div>

            <button
              id="btn-reset-form"
              onClick={handleResetForm}
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all focus:outline-none"
            >
              <RotateCcw className="h-4 w-4" />
              Build Another Itinerary
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
