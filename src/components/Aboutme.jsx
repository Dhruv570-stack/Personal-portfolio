import { Code, User } from "lucide-react";

export default function Aboutme(){
    return(
        <section id="About" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 items-center">
                    <div className="space-y-6">
                            <h3 className="text-2xl font-semibold">Full Stack Developer</h3>
                            <p className="text-muted-foreground">
                                Detail-oriented and results-driven Electronics and Communication 
                                Engineering graduate with practical 
                                experience in both hardware and software development. 
                                Strong foundation in embedded systems, circuit design, 
                                and core computer science subjects including Data Structures 
                                and Algorithms, Computer Networks, and Database Management 
                                Systems (DBMS). Proficient with tools such as Arduino.
                            </p>

                            <p className="text-muted-foreground">
                                In addition to academic and technical skills, 
                                I have developed a working knowledge of modern software 
                                development practices, including CI/CD pipelines and 
                                microservices architecture, enabling efficient, scalable, 
                                and maintainable application deployment. Eager to contribute 
                                to innovative and impactful engineering solutions while 
                                continuously learning and growing in a collaborative 
                                environment.
                            </p>


                            <div className="flex flex-col sm: flex-row gap-4 pt-4 justify-center ">
                                <a href="#Contact" className="cosmic-button">Get in Touch</a>

                                <a href="Dhruv Kumar.cv.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Downlaod Resume</a>

                            </div>
                    </div>


                </div>


            </div>
        </section>
    );
};