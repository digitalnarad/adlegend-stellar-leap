import trustedLogos from '@/assets/trusted-logos.jpg';

export const TrustedBy = () => {
  const companies = [
    'TechCorp', 'DataFlow', 'CloudSync', 'InnovateLab', 'FutureScale'
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-muted-foreground font-medium mb-8">
            Trusted by leading companies worldwide
          </p>
          
          <div className="relative overflow-hidden">
            <img 
              src={trustedLogos} 
              alt="Trusted by leading companies" 
              className="mx-auto opacity-60 hover:opacity-80 transition-opacity"
            />
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8 opacity-60">
            {companies.map((company, index) => (
              <div 
                key={company}
                className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};