import { Navbar } from "@/components";
import { type INavbar } from "@/interfaces"

const navOptions:INavbar = {
  topNav:[
    {
      name: "Trabaja con nosotros",
      href: "/",
    },
    {
      name: "Contacto",
      href: "/",
    }
  ],
  navItems: [
    {
      name: "Productos",
      href: "/productos",
    },
    {
      name: "Lanzamientos",
      href: "/lanzamientos",
    },
    {
      name: "Locales",
      href: "/locales",
    },
    {
      name: "En Familia",
      href: "/familia",
    },
    {
      name: "Nosotros",
      href: "/nosotros",
    }
  ],
  img: {
    src: '/imgs/logo.png',
    alt: 'logo'
  },
  btn: {
    href: '/pedidos',
    text: 'Pedí y retirá',
    icon: '/imgs/phone.png'
  }
}

export default function MainLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">

      <Navbar {...navOptions} />

      <div className="px-0 sm:px-10">
        {children}

      </div>


    </main>
  );
}