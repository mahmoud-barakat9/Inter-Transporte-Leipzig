import { useState } from "react";

export const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission and send email using Email.js
        //   emailjs
        //       .sendForm(
        //           "YOUR_SERVICE_ID",
        //           "YOUR_TEMPLATE_ID",
        //           e.target,
        //           "YOUR_USER_ID"
        //       )
        //       .then(
        //           (result) => {
        //               console.log(result.text);
        //           },
        //           (error) => {
        //               console.log(error.text);
        //           }
        //       );
        e.target.reset();
    };

    return (
        <section className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <div className="max-w-md mx-auto bg-white-600/20 rounded-3xl shadow-md p-6">
                    <h2 className="text-3xl text-center font-bold mb-4">
                        Kontaktieren Sie uns
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 font-medium"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary-600"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 font-medium"
                            >
                                E-Mail
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary-600"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block mb-2 font-medium"
                            >
                                Nachricht
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary-600"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-secondary-500 py-3 px-6 rounded-lg hover:bg-secondary-700 transition-colors duration-300"
                        >
                            Senden
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
  
};
