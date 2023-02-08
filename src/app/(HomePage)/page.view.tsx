import React from "react";
import { Inter } from "@next/font/google";
import Link from "next/link";

type Props = {};

const inter = Inter({ subsets: ["latin"] });

export default function HomeView() {
  return (
    <main>
      HomePage
      <ul>
        <li>
          <Link href="/tik-tak-toe">tik-tak-toe</Link>
        </li>
        <li>
          <Link href="/shashte">сheckers</Link>
        </li>
      </ul>
    </main>
  );
}
