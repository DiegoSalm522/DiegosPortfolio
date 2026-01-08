import { FlipWords } from "../components/FlipWords";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
    >
      {/* Main Container */}
      <div className="z-10 mt-20 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 w-full max-w-6xl">
        {/* HomeText */}
        <div className="text-center md:mt-30 md:text-left rounded-3xl bg-clip-text flex-1">
          <div>
            <h1 className="text-4xl sm:text-6xl font-bold">Diego Salmones</h1>
            <h1 className="text-2xl sm:text-4xl font-medium">
              Software Developer
            </h1>
            <br />
            <div className="text-3xl sm:text-5xl text-neutral-300">
              <FlipWords
                words={[
                  "Hi! Welcome to my personal portfolio",
                  "I am a 22 y/o software engineer",
                  "Scroll down to explore some of my featured projects",
                  "Feel free to reach out if you'd like to collaborate!",
                ]}
                className="text-center md:text-left"
              />
            </div>
          </div>
        </div>
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 md:mt-10 md:w-100 md:h-100 rounded-full overflow-hidden border-8 border-[#0D5E8B] shadow-2xl">
            <img
              src="/assets/hero/profile.jpg"
              alt="Diego G. Salmones"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Background */}
      <section className="absolute inset-0 bg-black/50">
        <div className="relative h-screen overflow-y-hidden">
          <div
            className="absolute inset-0 w-full h-screen -z-10"
            style={{
              backgroundImage: "url(/assets/hero/paint2.png)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />
        </div>
      </section>
    </section>
  );
};

export default Hero;
