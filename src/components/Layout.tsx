
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, showBackButton = false, title }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-lab-purple to-lab-darkpurple overflow-hidden">
      <header className="p-4 flex items-center">
        {showBackButton && !isHomePage && (
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white mr-2"
            asChild
          >
            <Link to="/">
              <ArrowLeft className="h-6 w-6" />
            </Link>
          </Button>
        )}
        {title && <h1 className="text-xl font-bold text-white">{title}</h1>}
      </header>
      <main className="flex-grow p-4">
        {children}
      </main>
      <footer className="p-4 text-center text-white/70 text-sm">
        Element Fusion Lab © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Layout;
