import Link from 'next/link';
import { SearchBar } from './SearchBar';
import { TopBar } from './TopBar';
import { Navigation } from './Navigation';
import { IconButton } from '@/components/ui/IconButton';
import { Badge } from '@/components/ui/Badge';

interface HeaderProps {
  compareCount?: number;
  wishlistCount?: number;
  cartCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  compareCount = 0,
  wishlistCount = 0,
  cartCount = 0,
}) => {
  return (
    <header className="w-full bg-white shadow-sm">
      <TopBar />
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img 
              src="/logo.svg" 
              alt="Nest Mart & Grocery" 
              className="h-12"
            />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <SearchBar />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-6">
            <Link 
              href="/become-vendor" 
              className="text-green-600 hover:text-green-700 font-medium whitespace-nowrap hidden lg:flex items-center gap-2"
            >
              Become Vendor
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <IconButton 
              icon="compare" 
              count={compareCount}
              label="Compare"
              href="/compare"
            />
            
            <IconButton 
              icon="heart" 
              count={wishlistCount}
              label="Wishlist"
              href="/wishlist"
            />
            
            <IconButton 
              icon="cart" 
              count={cartCount}
              label="Cart"
              href="/cart"
            />
            
            <IconButton 
              icon="user" 
              label="Account"
              href="/account"
            />
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};
