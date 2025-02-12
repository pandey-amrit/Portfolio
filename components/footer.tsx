import Link from "next/link";
import Image from "next/image";
import { getYear } from "date-fns"

export function Footer() {
  return (
    <footer className="py-6 bg-black">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <p className="bg-gradient-to-r from-violet-400 to-fuchsia-400 text-transparent bg-clip-text font-medium">
            © {getYear(new Date())} Amrit Pandey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

