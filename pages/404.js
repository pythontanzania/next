import Link from "next/link";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import LogoImage from "../public/img/logo-transparent.png";
function NotFound(props) {
  return (
    <section className="h-screen flex">
      <div className="m-auto text-center">

        <div className="relative w-32 h-24 mx-auto mb-8">
          <Image priority src={LogoImage} layout="fill" objectFit="contain" />
        </div>

        <h1 className="text-green-600 text-xl font-bold">404</h1>
        <h2 className="text-gray-900 dark:text-gray-300 text-4xl md:text-6xl font-semibold md:font-bold my-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 w-4/5 md:w-full text-lg mx-auto my-4">Sorry, we couldn't find the page your looking for.</p>

        <div className="relative w-32 h-24 mx-auto">
          <Image priority src={LogoImage} layout="fill" objectFit="contain" alt="PyCon Logo"/>
        </div>

        <h1 className="text-green-600 text-xl font-bold">404</h1>
        <h2 className="text-4xl font-semibold my-4">Page Not Found</h2>
        <p className="w-4/5 mx-auto my-4">Sorry, we couldn&apos;t find the page your looking for.</p>

        <Link href="/">
          <a className="text-green-600">
            Go back home{" "}
            <span>
              <HiArrowNarrowRight className="inline" />
            </span>
          </a>
        </Link>
      </div>
    </section>
  );
}

export default NotFound;