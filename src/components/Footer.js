export default function Footer() {
  const currentYear = new Date().getFullYear();

  const schoolInfo = {
    name: 'Excel Islamic Nursery and Primary School',
  };

  const socials = [
    {
      label: 'Instagram',
      url: 'https://instagram.com/excelislamicschool',
      icon: '📷',
    },
    {
      label: 'TikTok',
      url: 'https://tiktok.com/@excelislamicschool',
      icon: '🎵',
    },
    {
      label: 'WhatsApp',
      url: 'https://wa.me/256702962984',
      icon: '💬',
    },
    {
      label: 'Telegram',
      url: 'https://t.me/excelislamicschool',
      icon: '✈️',
    },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Section - Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EIS</span>
            </div>
            <div>
              <p className="font-bold text-sm">Excel School</p>
              <p className="text-xs text-slate-400">Excellence in Education</p>
            </div>
          </div>

          {/* Center Section - Social Links */}
          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-700 hover:bg-primary-600 flex items-center justify-center transition-colors text-sm"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Right Section - Links */}
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-slate-400 hover:text-primary-400 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-primary-400 transition-colors"
            >
              Terms
            </a>
            <a
              href="https://xhenvolt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-300 transition-colors font-bold"
            >
              Xhenvolt
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {schoolInfo.name}. All rights reserved.
          </p>
          <p>
            Made with ❤️ by{' '}
            <a
              href="https://xhenvolt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-300 transition-colors font-bold"
            >
              Xhenvolt
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
