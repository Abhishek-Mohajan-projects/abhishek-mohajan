import React from "react";
import "./../index.css";
import { useParams } from "react-router-dom";

const Services = () => {
  const { title } = useParams();
  return (
    <div>
      <h1 className="text-white text-2xl flex justify-center tracking-widest">
        {title}
        Services
      </h1>

      <section className="p-5 fadeInBottom1">
        <div className="container sm:p-3 ">
          <h1 className="text-white text-3xl flex ml-20 sm:ml-0 scratch">
            With My Service, You Can Expect:{" "}
          </h1>
          <div className="text-white flex flex-col ml-40 sm:ml-0 tracking-widest leading-10 crack">
            <p>1. Best practices in web development.</p>
            <p>2. High-quality, clean code.</p>
            <p>3. Responsive design.</p>
            <p>4. Expertise in React JS development</p>
            <p>5. Edit HTML page or CSS</p>
            <p>6. Custom web development</p>
            <p>7. Highly Professional Design</p>
            <p>8. Mobile-Friendly website</p>
            <p>9. Easier to maintain & update</p>
            <p>10. And Many More...</p>
          </div>
        </div>
      </section>

      <aside>
        <div className="sm:p-3 fadeInBottom3">
          <h1 className="text-white text-3xl ml-20 sm:ml-0 scratchs">
            You will gain the following advantages from me:
          </h1>
          <div className="text-white flex flex-col ml-40 sm:ml-0 tracking-widest leading-10 cracks">
            <p>1. Clean code(Comments on every HTML CSS section)</p>
            <p>2. Pixel perfect design</p>
            <p>3. Custom website</p>
            <p>4. Responsive design for PC, Mobile, Tablet</p>
            <p>5. Lifetime support</p>
            <p>6. Unlimited revisions</p>
          </div>
        </div>
      </aside>

      <aside className="fadeInBottom3">
        <div className="text-3xl text-white ml-20 scratchs ">
          <h1>My Additional Services for You:</h1>
        </div>
        <div className="text-white flex flex-col ml-40 tracking-widest leading-10 cracks">
          <p>1. Lead Generation</p>
          <p>2. Data Entry</p>
          <p>3. Skip Tracing</p>
        </div>
      </aside>

      <footer className="fadeInBottom4">
        <div className="flex justify-center items-center text-white text-3xl">
          <h1>Why Me?</h1>
        </div>
        <article className="flex justify-center items-center text-center tracking-widest leading-10 p-4">
          <div className="text-white lg:w-3/5">
            <p className="scraps">
              Designing or Developing a website is not the end of the world,
              there is always more. I believe with a good-looking website its
              also essential to maintain best practices for project structure
              and writing code. Your satisfaction is my guarantee, so Ill work
              until you are 100% satisfied. Besides: <br />
              Reusable component. <br />
              Premium quality and timely results <br />
              Communication throughout the whole process
            </p>
            <p className="text-white text-3xl scrap">
              My first priority is to provide quality work to my clients.
            </p>
            <p className="text-white scraps">
              If you are looking for React developer that fits in your budget
              then your search is over. I'll help you with your Web Application
              front end using ReactJs. I can also help you to create React UI
              using Html, CSS, Tailwind CSS or React UI library (Reactstrap).{" "}
              <br />
              Yes.... Passionate about creating beautiful and responsive user
              interfaces. Let's build something amazing together!
            </p>
          </div>
        </article>
      </footer>
    </div>
  );
};

export default Services;
