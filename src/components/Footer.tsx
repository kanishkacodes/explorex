import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" border-t-2 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-12 lg:space-y-0">
        {/* Logo and Address Section */}
        <div className="flex flex-col md:w-1/3 space-y-6">
          <Image
            src="/TF.png"
            alt="Logo"
            width={1351}
            height={184}
            className="w-48 md:w-auto"
          />
          <p className="text-sm md:text-base leading-relaxed">
            Service Road, 2nd Floor, DVK Spaces, 13th Cross, Dr Puneeth Rajkumar Rd, 6th Sector, HSR Layout, Bengaluru, Karnataka 560102
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <Link href="https://www.facebook.com/profile.php?id=61557601275175">
              <Image
                src="/f.png"
                alt="Facebook"
                width={20}
                height={20}
                className="hover:opacity-75"
              />
            </Link>
            <Link href="https://www.instagram.com/thinkfluence.byexplorex/">
              <Image
                src="/i.png"
                alt="Instagram"
                width={20}
                height={20}
                className="hover:opacity-75"
              />
            </Link>
          </div>
        </div>

        

        {/* Business Enquiries */}
        <div className="flex flex-col md:w-1/3 items-start lg:items-end space-y-2">
          <h2 className="text-lg font-bold">Business Enquiries</h2>
          <Link href="mailto:info@thinkfluence.co.in" className="hover:underline">
            info@thinkfluence.co.in
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs mt-12">
        © 2024 Thinkfluence || All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
