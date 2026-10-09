import { useState } from 'react';

export const SERVICE_OPTIONS = [
  'Drain cleaning & rooter',
  'Sewer & tree roots',
  'Leak repair',
  'Water line replacement',
  'Garbage disposals',
  'Faucets, valves & fixtures',
  'Not sure',
];

interface QuoteFormProps {
  selectedService?: string;
  onServiceChange?: (service: string) => void;
  formIdPrefix?: string;
}

export function QuoteForm({
  selectedService = '',
  onServiceChange,
  formIdPrefix = 'quote',
}: QuoteFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(selectedService || '');
  const [touched, setTouched] = useState<{ name?: boolean; phone?: boolean; service?: boolean }>({});
  const [errors, setErrors] = useState<{ name?: string; phone?: string; service?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const nameId = `${formIdPrefix}-name`;
  const phoneId = `${formIdPrefix}-phone`;
  const serviceId = `${formIdPrefix}-service`;

  // Sync if selectedService prop changes externally
  if (selectedService && service !== selectedService) {
    setService(selectedService);
  }

  const validateField = (fieldName: 'name' | 'phone' | 'service', value: string): string | undefined => {
    if (fieldName === 'name') {
      const trimmed = value.trim();
      if (!trimmed) {
        return 'Please enter your full name';
      }
      if (trimmed.length < 2) {
        return 'Name must be at least 2 characters';
      }
      return undefined;
    }

    if (fieldName === 'phone') {
      const cleanDigits = value.replace(/[^0-9]/g, '');
      if (!value.trim()) {
        return 'Phone number is required';
      }
      if (cleanDigits.length < 10) {
        return 'Please enter a valid 10-digit phone number (e.g. 555-123-4567)';
      }
      return undefined;
    }

    if (fieldName === 'service') {
      if (!value) {
        return 'Please select a service from the list';
      }
      return undefined;
    }

    return undefined;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setName(val);
    if (touched.name) {
      const err = validateField('name', val);
      setErrors((prev) => ({ ...prev, name: err }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPhone(val);
    if (touched.phone) {
      const err = validateField('phone', val);
      setErrors((prev) => ({ ...prev, phone: err }));
    }
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setService(val);
    if (onServiceChange) onServiceChange(val);
    if (touched.service) {
      const err = validateField('service', val);
      setErrors((prev) => ({ ...prev, service: err }));
    }
  };

  const handleBlur = (fieldName: 'name' | 'phone' | 'service') => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    let val = '';
    if (fieldName === 'name') val = name;
    if (fieldName === 'phone') val = phone;
    if (fieldName === 'service') val = service;
    const err = validateField(fieldName, val);
    setErrors((prev) => ({ ...prev, [fieldName]: err }));
  };

  const validateAll = (): boolean => {
    const nameErr = validateField('name', name);
    const phoneErr = validateField('phone', phone);
    const serviceErr = validateField('service', service);

    setTouched({ name: true, phone: true, service: true });
    setErrors({ name: nameErr, phone: phoneErr, service: serviceErr });

    return !nameErr && !phoneErr && !serviceErr;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;

    setSubmitting(true);
    // TODO: connect form endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSubmitting(false);
      setSubmitted(true);
    } catch {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setService('');
    setTouched({});
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="text-center py-6 px-4">
        <div className="w-12 h-12 rounded-full bg-[#DCEBE8] text-[#0F5C6E] mx-auto flex items-center justify-center mb-4">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="font-heading font-semibold text-2xl text-[#12303A] mb-2">
          Request Received
        </h4>
        <p className="font-sans text-[16px] sm:text-[17px] text-[#5B7378] leading-relaxed mb-6">
          Thanks, {name.split(' ')[0]}. We&apos;ll call you back during business hours at{' '}
          <strong className="text-[#12303A]">{phone}</strong>.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="link-draw font-sans text-sm font-medium text-[#0F5C6E]"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Name Field */}
      <div>
        <label
          htmlFor={nameId}
          className="block font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-[#12303A] mb-1.5"
        >
          Your Name <span className="text-[#B42318]">*</span>
        </label>
        <input
          id={nameId}
          type="text"
          value={name}
          onChange={handleNameChange}
          onBlur={() => handleBlur('name')}
          placeholder="Jane Doe"
          disabled={submitting}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? `${nameId}-error` : undefined}
          className={`w-full h-[52px] px-4 rounded-xl bg-[#F6F1E7] border text-[#12303A] placeholder-[#5B7378]/60 font-sans text-[16px] sm:text-[17px] transition-colors disabled:opacity-60 ${
            errors.name ? 'border-[#B42318] focus:border-[#B42318]' : 'border-[#DCD3C0] focus:border-[#0F5C6E]'
          }`}
        />
        {errors.name && (
          <p id={`${nameId}-error`} className="mt-1.5 text-sm font-sans text-[#B42318] flex items-center gap-1.5">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#B42318] shrink-0" />
            <span>{errors.name}</span>
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label
          htmlFor={phoneId}
          className="block font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-[#12303A] mb-1.5"
        >
          Phone Number <span className="text-[#B42318]">*</span>
        </label>
        <input
          id={phoneId}
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          onBlur={() => handleBlur('phone')}
          placeholder="555-123-4567"
          disabled={submitting}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? `${phoneId}-error` : undefined}
          className={`w-full h-[52px] px-4 rounded-xl bg-[#F6F1E7] border text-[#12303A] placeholder-[#5B7378]/60 font-sans text-[16px] sm:text-[17px] transition-colors disabled:opacity-60 ${
            errors.phone ? 'border-[#B42318] focus:border-[#B42318]' : 'border-[#DCD3C0] focus:border-[#0F5C6E]'
          }`}
        />
        {errors.phone && (
          <p id={`${phoneId}-error`} className="mt-1.5 text-sm font-sans text-[#B42318] flex items-center gap-1.5">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#B42318] shrink-0" />
            <span>{errors.phone}</span>
          </p>
        )}
      </div>

      {/* Service Select */}
      <div>
        <label
          htmlFor={serviceId}
          className="block font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-[#12303A] mb-1.5"
        >
          Service Needed <span className="text-[#B42318]">*</span>
        </label>
        <select
          id={serviceId}
          value={service}
          onChange={handleServiceChange}
          onBlur={() => handleBlur('service')}
          disabled={submitting}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? `${serviceId}-error` : undefined}
          className={`w-full h-[52px] px-4 rounded-xl bg-[#F6F1E7] border text-[#12303A] font-sans text-[16px] sm:text-[17px] transition-colors disabled:opacity-60 ${
            errors.service ? 'border-[#B42318] focus:border-[#B42318]' : 'border-[#DCD3C0] focus:border-[#0F5C6E]'
          }`}
        >
          <option value="">Select a plumbing service</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id={`${serviceId}-error`} className="mt-1.5 text-sm font-sans text-[#B42318] flex items-center gap-1.5">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#B42318] shrink-0" />
            <span>{errors.service}</span>
          </p>
        )}
      </div>

      {/* Submit Pill Button with Temporary 'Submitting' State */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className={`w-full min-h-[56px] sm:min-h-[60px] px-8 rounded-full font-sans font-bold text-[16px] sm:text-[17px] text-[#FFFFFF] bg-[#D9480F] hover:bg-[#B93A0A] transition-all flex items-center justify-center gap-2.5 shadow-none active:scale-[0.99] ${
            submitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          style={{
            transition: 'background-color 200ms cubic-bezier(0.16, 1, 0.3, 1), transform 200ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms',
          }}
        >
          {submitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              <span>Submitting quote request...</span>
            </>
          ) : (
            <>
              <span>Contact us</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
