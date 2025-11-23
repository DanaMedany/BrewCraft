import { socialMediaLinks } from "../lib/constant";

function Footer() {
  return (
    <footer className="bg-[#2c1810] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/icons/footer-logo.svg"
              alt="logo"
              className="w-10 h-10 object-cover"
            />
            <h3 className="text-2xl font-bold">BrewCraft</h3>
          </div>
          <p className="text-sm max-w-[280px] mb-4">
            Crafting the perfect cup, one bean at a time.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-2">
            {socialMediaLinks.map(({ title, icon }) => (
              <a
                key={title}
                href="#"
                className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <img src={icon} alt={title} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-primary transition-colors cursor-pointer">
              Menu
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              About
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              Reviews
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Hours</h3>
          <ul className="space-y-1 text-sm">
            <li>Monday - Friday: 7am - 8pm</li>
            <li>Saturday: 8am - 9pm</li>
            <li>Sunday: 8am - 6pm</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-xs text-white/70">
        &copy; {new Date().getFullYear()} BrewCraft. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
