import heroImage from '../assets/images/hero-image.png';

const Hero = () => {
  return (
    <header className="flex overflow-hidden py-16 px-4 items-center justify-between max-w-7x container mx-auto ">
      <h1 className="text-7xl font-bold text-green max-w-lg">
        Mi Kadi
        <span className="block text-3xl font-normal text-black/70 mt-4">
          Les meilleures affaires de l’île, partagées par vous !
        </span>
      </h1>
      <img
        src={heroImage}
        alt="Panier avec fruits et légumes locaux"
        className="w-xl h-auto"
      />
      {/* <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-accent/5 to-secondary/5"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-4 animate-fade-in">
              Mi Kadi
            </h1>
            <p
              className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in"
              style={{ animationDelay: '0.1s' }}>
              Les meilleurs prix pour vos courses à la Réunion
            </p>
            <div
              className="relative max-w-md mx-auto md:mx-0 animate-fade-in"
              style={{ animationDelay: '0.2s' }}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Rechercher un produit..."
                className="pl-10 bg-background border h-12 text-base"
              />
            </div>
          </div>
          <div
            className="flex-1 flex justify-center md:justify-end animate-scale-in"
            style={{ animationDelay: '0.3s' }}>
            <img
              src={heroImage}
              alt="Panier avec fruits et légumes locaux"
              className="w-full max-w-lg h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div> */}
    </header>
  );
};

export default Hero;
