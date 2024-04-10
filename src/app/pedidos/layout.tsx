import { Breadcrumbs, Navbar } from "@/components";

import { type INavbar } from "@/interfaces"

const navOptions: INavbar = {
  topNav:[
    {
      name: "Volver a la web de McZed",
      href: "/",
    }
  ],
  navItems: [
    {
      name: "McCafe Promociones",
      href: "/pedidos/McCafe Promociones",
    },
    {
      name: "Promociones",
      href: "/pedidos/promociones",
    },
    {
      name: "Menu",
      href: "/pedidos/menu",
    },
    {
      name: "Mis Pedidos",
      href: "/pedidos/pedidos",
    }
  ],
  img: {
    src: '/imgs/logo-orders.svg',
    alt: 'logo',
    height:60,
    width:60
  },
  btn: {
    href: '/auth/login',
    text: 'Entrar',
  }
}


export default function PedidosLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">

      <Navbar {...navOptions} />

      <div className="px-10 lg:px-36">
        <Breadcrumbs />
        {children}

      </div>


    </main>
  );
}