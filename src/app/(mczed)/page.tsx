/* eslint-disable react/display-name */

import Image from "next/image";

export default function HomePage() {
  return (
    <section>
        <Image 
            src={'/imgs/banner/Mym_Digital.gif'}
            unoptimized
            alt={'Banner'}
            width={1920}
            height={1080}
        />
    </section>
  );
}
