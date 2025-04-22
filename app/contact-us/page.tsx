export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Get in touch with us. We'd love to hear from you and discuss how we
          can help.
        </p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-2">
            <p>Email: info@flexforce.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
}
