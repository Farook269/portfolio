
// import { useState } from "react";
// import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Create email content
//       const emailContent = {
//         to: "farookbashamulla269@gmail.com",
//         subject: `Portfolio Contact: ${formData.subject}`,
//         html: `
//           <h2>New Contact Form Submission</h2>
//           <p><strong>Name:</strong> ${formData.name}</p>
//           <p><strong>Email:</strong> ${formData.email}</p>
//           <p><strong>Subject:</strong> ${formData.subject}</p>
//           <p><strong>Message:</strong></p>
//           <p>${formData.message.replace(/\n/g, '<br>')}</p>
//         `
//       };

//       // Using EmailJS service (you'll need to set this up)
//       const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           service_id: 'your_service_id', // You'll need to replace this
//           template_id: 'your_template_id', // You'll need to replace this
//           user_id: 'your_user_id', // You'll need to replace this
//           template_params: {
//             to_email: 'farookbashamulla269@gmail.com',
//             from_name: formData.name,
//             from_email: formData.email,
//             subject: formData.subject,
//             message: formData.message
//           }
//         })
//       });

//       if (response.ok) {
//         toast({
//           title: "Message Sent Successfully!",
//           description: "Thank you for your message. I'll get back to you soon!",
//         });
//         setFormData({ name: "", email: "", subject: "", message: "" });
//       } else {
//         throw new Error('Failed to send email');
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//       toast({
//         title: "Message Sent!",
//         description: "Your message has been received. I'll contact you soon!",
//         variant: "default",
//       });
//       // Clear form anyway for demo purposes
//       setFormData({ name: "", email: "", subject: "", message: "" });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="h-6 w-6" />,
//       title: "Email",
//       info: "farookbashamulla269@gmail.com",
//       link: "mailto:farookbashamulla269@gmail.com"
//     },
//     {
//       icon: <Phone className="h-6 w-6" />,
//       title: "Phone",
//       info: "+91 7396260107",
//       link: "tel:+91XXXXXXXXX"
//     },
//     {
//       icon: <MapPin className="h-6 w-6" />,
//       title: "Location",
//       info: " Andhra Pradesh, India",
//       link: "#"
//     }
//   ];

//   return (
//     <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Get In <span className="text-purple-400">Touch</span>
//           </h1>
//           <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//             I'm always open to discussing new opportunities and interesting projects. Let's connect!
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
//               <div className="space-y-4">
//                 {contactInfo.map((item, index) => (
//                   <a
//                     key={index}
//                     href={item.link}
//                     className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-purple-400/30 hover:border-purple-400 transition-all duration-300 hover:scale-105 shadow-lg"
//                   >
//                     <div className="text-purple-400">{item.icon}</div>
//                     <div>
//                       <p className="text-white font-semibold">{item.title}</p>
//                       <p className="text-gray-300">{item.info}</p>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Social Links */}
//             <div>
//               <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
//               <div className="flex space-x-4">
//                 <a
//                   href="https://github.com/Farook269"
//                   className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-purple-400/30 hover:border-purple-400 text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110 shadow-lg"
//                 >
//                   <Github className="h-6 w-6" />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/farook-basha/"
//                   className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-purple-400/30 hover:border-purple-400 text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110 shadow-lg"
//                 >
//                   <Linkedin className="h-6 w-6" />
//                 </a>
//                 <a
//                   href="mailto:farookbashamulla269@gmail.com"
//                   className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-purple-400/30 hover:border-purple-400 text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110 shadow-lg"
//                 >
//                   <Mail className="h-6 w-6" />
//                 </a>

                
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-purple-400/30 shadow-lg">
//             <h2 className="text-2xl font-bold text-white mb-6">Send Message</h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <Input
//                     type="text"
//                     name="name"
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="bg-white/10 border-purple-400/30 text-white placeholder:text-gray-400 focus:border-purple-400"
//                   />
//                 </div>
//                 <div>
//                   <Input
//                     type="email"
//                     name="email"
//                     placeholder="Your Email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="bg-white/10 border-purple-400/30 text-white placeholder:text-gray-400 focus:border-purple-400"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <Input
//                   type="text"
//                   name="subject"
//                   placeholder="Subject"
//                   value={formData.subject}
//                   onChange={handleInputChange}
//                   required
//                   className="bg-white/10 border-purple-400/30 text-white placeholder:text-gray-400 focus:border-purple-400"
//                 />
//               </div>
//               <div>
//                 <Textarea
//                   name="message"
//                   placeholder="Your Message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   required
//                   rows={5}
//                   className="bg-white/10 border-purple-400/30 text-white placeholder:text-gray-400 focus:border-purple-400 resize-none"
//                 />
//               </div>
//               <Button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
//               >
//                 <Send className="h-4 w-4 mr-2" />
//                 {isSubmitting ? 'Sending...' : 'Send Message'}
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Confetti from "react-confetti"; // ⬅️ Optional confetti import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEffect, setShowEffect] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "service_hh31x1l",
            template_id: "template_ps73jpf",
            user_id: "Ekv1EWrcm8WCIZ0wx",
            template_params: {
              from_name: formData.name,
              from_email: formData.email,
              subject: formData.subject,
              message: formData.message,
            },
          })
        }
      );

      if (response.ok) {
        toast({
          title: `🎉 Thank you for reaching out, ${formData.name}!`,
          description:
            "Your message has been sent successfully via my portfolio. I truly appreciate you reaching out, and I'll get back to you soon. Meanwhile, feel free to connect with me on LinkedIn or check out my projects on GitHub!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        window.scrollTo({ top: 0, behavior: "smooth" });
        setShowEffect(true);
        setTimeout(() => setShowEffect(false), 3000);
      } else {
        throw new Error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error!",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      info: "farookbashamulla269@gmail.com",
      link: "mailto:farookbashamulla269@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      info: "+91 7396260107",
      link: "tel:+917396260107",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      info: "Andhra Pradesh, India",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {showEffect && <Confetti numberOfPieces={200} recycle={false} />}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1
            className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-500 ${
              showEffect ? "text-purple-400 animate-pulse" : ""
            }`}
          >
            Get In <span className="text-purple-400">Touch</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects. Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-purple-400/30 hover:border-purple-400 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <div className="text-purple-400">{item.icon}</div>
                    <div>
                      <p className="text-white font-semibold">{item.title}</p>
                      <p className="text-gray-300">{item.info}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Farook269"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-purple-400/30 hover:border-purple-400 text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/farook-basha/"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-purple-400/30 hover:border-purple-400 text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:farookbashamulla269@gmail.com"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-purple-400/30 hover:border-purple-400 text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-purple-400/30 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Send Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 border-purple-400/30 text-white placeholder:text-gray-400 focus:border-purple-400"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 border-purple-400/30 text-white placeholder:text-gray-400 focus:border-purple-400"
                />
              </div>
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="bg-white/10 border-purple-400/30 text-white placeholder:text-gray-400 focus:border-purple-400"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="bg-white/10 border-purple-400/30 text-white placeholder:text-gray-400 focus:border-purple-400 resize-none"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
              >
                <Send className="h-4 w-4 mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

