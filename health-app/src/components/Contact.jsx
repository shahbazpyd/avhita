function Contact() {
  return (
    <section id="contact" className="py-20 px-20 bg-lightGray backgroundimg shadow-md hover:shadow-lg transition scrollspyHeading2">
        
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-start">
            Get in Touch
          </h2>
          <p className="text-gray-500 mb-6">
            Have questions or want to collaborate? Fill out the form and our
            team will get back to you shortly.
          </p>

          <p className="text-sm text-gray-400">
            We typically respond within 24–48 hours.
          </p>
        </div>

        {/* FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-borderGray">
          
          <form className="space-y-5">
            
            {/* Name */}
            <div>
              <label className="block text-sm mb-1 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-borderGray rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-borderGray rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-1 font-medium">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-borderGray rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-full font-medium hover:scale-105 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;