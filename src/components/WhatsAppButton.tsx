import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function WhatsAppButton() {
  const waNumber = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');
  const href = waNumber
    ? `https://wa.me/${waNumber}`
    : '#';

  return (
    <a
      href={href}
      target={href !== '#' ? '_blank' : undefined}
      rel={href !== '#' ? 'noopener noreferrer' : undefined}
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-clay-500 text-cream-50 shadow-lg shadow-clay-900/20 transition-all duration-300 hover:scale-110 hover:bg-clay-600 hover:shadow-xl"
    >
      <MessageCircle size={26} strokeWidth={1.8} />
    </a>
  );
}
