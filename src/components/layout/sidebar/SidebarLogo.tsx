// src/components/layout/Sidebar/SidebarLogo.tsx
import Image from "next/image";
import Link from "next/link";

const SidebarLogo = () => {
  return (
    <div className="flex items-center justify-center py-6 border-b border-gray-200">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
        <span className="text-xl font-bold text-gray-800">MyApp</span>
      </Link>
    </div>
  );
};

export default SidebarLogo;
