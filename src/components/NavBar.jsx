import React from 'react';
import logo from '/react-website-2025/assets/images/logo.svg';

const NavBar = () => {
  // const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { label: 'Bon plans', href: '#bonplans' },
    { label: 'Contact', href: '#contact' },
    { label: 'Poster', href: '#poster' },
  ];
  return (
    <nav className="sticky top-0 z-100 w-screen bg-white/95 backdrop-blur">
      <div className="container mx-auto w-full px-4 lg:p-0 max-w-5xl">
        <div className="flex shrink-0 items-center ">
          <a href="/" className="flex align-center gap-3 me-auto">
            <img src={logo} alt="Mi Kadi" className="w-12 h-auto py-2" />
            <span className="hidden md:block text-2xl mb-1 font-heading self-end bg-linear-to-r bg-clip-text text-black">
              Mi'Kadi
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg px-1.5 font-medium text-black/80 hover:text-red-800 hover:font-bold transition-colors">
                {item.label}
              </a>
            ))}

            {/* Language Selector */}
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span>FR</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Français</DropdownMenuItem>
                <DropdownMenuItem>Créole réunionnais</DropdownMenuItem>
                <DropdownMenuItem>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
          </div>

          {/* Mobile Navigation */}
          {/* <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}>
                    {item.label}
                  </a>
                ))}

                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-2">Langue</p>
                  <div className="flex flex-col gap-2">
                    <Button variant="ghost" className="justify-start">
                      Français
                    </Button>
                    <Button variant="ghost" className="justify-start">
                      Créole réunionnais
                    </Button>
                    <Button variant="ghost" className="justify-start">
                      English
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
