const Footer = () => {
  return (
    <footer className="py-12 md:py-16 section-padding bg-foreground text-background/80">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-sm">RC</span>
              </div>
              <span className="font-heading font-bold text-background text-lg">Realty Connect</span>
            </div>
            <p className="text-sm text-background/50 font-body leading-relaxed mb-3">
              The real-estate CRM built for how Indian sales teams actually work.
            </p>
            <p className="text-xs text-background/35 font-body">A product by Devascend</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-heading font-semibold text-background text-sm mb-4">Product</h4>
            <ul className="space-y-2.5">
              {["Features", "How It Works", "Pricing", "Integrations"].map((l) => (
                <li key={l}><a href="#" className="text-sm text-background/50 hover:text-background transition-colors font-body">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-background text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {["About Devascend", "Blog", "Careers", "Contact"].map((l) => (
                <li key={l}><a href="#" className="text-sm text-background/50 hover:text-background transition-colors font-body">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-background text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {["Privacy Policy", "Terms of Service", "Data Security"].map((l) => (
                <li key={l}><a href="#" className="text-sm text-background/50 hover:text-background transition-colors font-body">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40 font-body">© {new Date().getFullYear()} Realty Connect by Devascend. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-background/40 hover:text-background/70 font-body transition-colors">Privacy</a>
            <a href="#" className="text-xs text-background/40 hover:text-background/70 font-body transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
