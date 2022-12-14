import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex items-center justify-center h-screen bg-main-color">
          <div className="max-w-md bg-card-color text-white rounded-md shadow-md overflow-hidden md:max-w-4xl my-10 mx-3 md:my-0 md:mx-0">
            <div className="flex flex-col-reverse md:flex md:flex-row">
              <div className="p-10 text-center md:text-left">
                <h2 className="text-4xl text-bold">
                  Get{" "}
                  <span className="text-soft-violate font-bold">insights</span>{" "}
                  that help your business grow.
                </h2>
                <p className="py-6 text-white/70">
                  Discover the benefits of data analytics and make better
                  decisions regarding revenue, customer experience, and overall
                  efficiency.
                </p>
                <div className="uppercase md:grid md:grid-cols-3 ">
                  <div className=" my-4 ">
                    <p className="text-2xl font-bold">10k+</p>
                    <p className="text-white/60">companies</p>
                  </div>
                  <div className=" my-4 ">
                    {" "}
                    <p className="text-2xl font-bold">314</p>
                    <p className="text-white/60">templates</p>
                  </div>
                  <div className=" my-4 ">
                    {" "}
                    <p className="text-2xl font-bold">12m+</p>
                    <p className="text-white/60">Queries</p>
                  </div>
                </div>
              </div>
              <div className="md:shrink-0 md:w-1/2">
                <img
                  className="h-48 w-full object-cover inset-x-0 md:h-full md:w-full"
                  src="/images/image-header-mobile.jpg"
                  alt="Modern building architecture"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
