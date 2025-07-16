import { Mail, Map, Phone, Send } from "lucide-react";
import { cn } from "../lib/Utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export default function Contacts(){

    const {toast} = useToast ();
    const[isSubmitting, setIsSubmitting] = useState(false);



    const handleSubmit = (e) =>{
        e.preventDefault()
        setIsSubmitting(true);
        setTimeout(()=>{
            toast({
                title: "Message sent!",
                description: "Thank you for your Message"
            });
            setIsSubmitting(false);
        },1500)
    };





    return(
        <section id="Contacts" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Contact<span className="text-primary"> Details</span>
                </h2>

                <div className="grid grid-cols-1 md: grid-cols-2 gap-60">
                    <div className="space-y-8">
                            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                            <div className="space-y-6 justify-center">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>{" "}
                                    </div>
                                        <div>
                                            <h4> Email </h4>
                                            <a href="mailto:dhruvkumar8773@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                                dhruvkumar8773@gmail.com
                                            </a>
                                        </div>
                                </div>
                                 <div className="flex items-start space-x-15">
                                    <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>{" "}
                                    </div>
                                        <div>
                                            <h4> Contact Number </h4>
                                            <a className="text-muted-foreground hover:text-primary transition-colors">
                                                +918240492702
                                            </a>
                                        </div>
                                </div>

                                <div className="flex items-start space-x-22">
                                    <div className="p-3 rounded-full bg-primary/10">
                                    <Map className="h- w-6 text-primary"/>{" "}
                                    </div>
                                        <div>
                                            <h4>
                                                 Location
                                            </h4>
                                            <a className="text-muted-foreground hover:text-primary transition-colors">
                                                India
                                            </a>
                                        </div>
                                </div>
                            </div>
                    </div>


                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form className="space-y-6" >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary" 
                                placeholder="Your Name"/>
                            </div>

                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input type="text" id=" Email" name="Email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary" 
                                placeholder="adam@gmail.com"/>
                            </div>

                            <div>
                                <label htmlFor="Message" className="block text-sm font-medium mb-2">Write your Message</label>
                                <input type="text" id="Message" name="Message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary" 
                                placeholder="Write Message"/>
                            </div>

                            <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items justify-center gap-2")}>
                                {isSubmitting?"Sending":"Send Message"}
                                <Send size={16}/>
                            </button>
                        </form>

                    </div>

                    
                </div>
            </div>   
        </section>
    )
}