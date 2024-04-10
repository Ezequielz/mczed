

export interface INavbar {
    topNav: {
        name: string,
        href: string
    }[],
    navItems: {
        name: string,
        href: string
    }[],
    img: {
        src: string,
        alt: string,
        width?: number,
        height?: number,
    },
    btn: {
        text: string,
        href: string,
        icon?: string
    }

}
