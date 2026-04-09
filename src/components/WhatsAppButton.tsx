import { useSiteSettings } from "@/hooks/usePageContent";

const WhatsAppButton = () => {
  const { data: settings } = useSiteSettings();
  const whatsappNumber = settings?.whatsapp_number || "34639810887";
  const whatsappMessage = settings?.whatsapp_message || "Hola!";
  const href = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}&type=phone_number&app_absent=0`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20bd5a] transition-colors hover:scale-110 transform duration-200"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.908 15.908 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.302 22.612c-.39 1.1-1.932 2.012-3.18 2.278-.852.18-1.964.324-5.71-1.228-4.8-1.988-7.882-6.856-8.122-7.174-.23-.318-1.932-2.574-1.932-4.908s1.222-3.482 1.656-3.96c.434-.478.95-.598 1.266-.598.316 0 .632.002.908.016.292.014.684-.11 1.07.816.39.94 1.326 3.234 1.442 3.468.116.234.194.508.04.816-.156.316-.234.512-.468.788-.234.278-.492.62-.702.832-.234.234-.478.488-.206.958.274.468 1.216 2.006 2.612 3.25 1.794 1.596 3.306 2.09 3.774 2.324.468.234.742.196 1.014-.118.274-.316 1.17-1.364 1.482-1.834.312-.468.624-.39 1.054-.234.432.156 2.724 1.286 3.192 1.52.468.234.78.352.896.546.116.194.116 1.128-.274 2.226z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
