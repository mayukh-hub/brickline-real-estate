function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">

        <div>
          <h2 className="mb-4 text-2xl font-bold">
            Brick<span className="text-orange-500">Lines</span>
          </h2>
          <p className="text-sm leading-7 text-gray-400">
           BRICKLINE is a modern real-estate website showcasing premium properties, ongoing projects, and exceptional home-buying experiences.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#home" className="hover:text-orange-500">Home</a></li>
            <li><a href="#about" className="hover:text-orange-500">About Us</a></li>
            <li><a href="#products" className="hover:text-orange-500">Products</a></li>
            <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Customer Service</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>FAQs</li>
            <li>Shipping Policy</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
          <p className="mb-3 text-sm text-gray-400">
            Email: support@bricklines.com
          </p>
          <p className="text-sm text-gray-400">
            Phone: +91 6296667207
          </p>
        </div>

      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Bricklines. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;