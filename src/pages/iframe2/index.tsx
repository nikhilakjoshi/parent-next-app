import clsx from "clsx";
import { Rubik } from "next/font/google";
import Head from "next/head";
import React, { useCallback, useEffect } from "react";

const font = Rubik({
  subsets: ["latin-ext"],
});

export default function Iframe2() {
  return (
    <React.Fragment>
      <Head>
        <title>Iframe</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={clsx(font.className, "flex min-h-screen flex-col")}>
        <nav className="bg-gradient-to-r from-gray-700 via-gray-700 to-gray-800">
          <div className="container mx-auto max-w-screen-xl px-4 py-4">
            <span className="text-4xl text-white">EJ Frame</span>
          </div>
        </nav>
        <div className="grow bg-gray-100">
          <div className="container mx-auto max-w-screen-xl px-4 py-4">
            <div className="mt-2 flex h-[90dvh] flex-col overflow-hidden rounded-lg bg-white shadow">
              <iframe
                src="https://parent-next-app.vercel.app/proxy"
                className="h-full w-full grow"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-top-navigation allow-storage-access-by-user-activation"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
