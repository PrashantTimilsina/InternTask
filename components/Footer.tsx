import { Linkedin, Facebook, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-[#0A142F] text-white mt-56">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-3  gap-8 text-center md:text-left">
        <div>
          <h1 className="font-semibold text-lg mb-4">Title</h1>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Subtitle</li>
            <li>Subtitle</li>
            <li>Subtitle</li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-lg mb-4">Title</h1>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Subtitle</li>
            <li>Subtitle</li>
            <li>Subtitle</li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-lg mb-4">Title</h1>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Subtitle</li>
            <li>Subtitle</li>
            <li>Subtitle</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-4">
            <Twitter className="cursor-pointer" />
            <Linkedin className="cursor-pointer" />
            <Facebook className="cursor-pointer" />
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-300 justify-center">
            <span>© 2026 Copyright</span>
            <span>Terms & Conditions</span>
            <span>Product Website</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
