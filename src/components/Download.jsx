const Download = () => {
  return (
    <a
      href="/assets/files/DiegoGSA_Resume.pdf"
      download="DiegoGSA_Resume.pdf"
      className="relative px-3 py-4 text-sm text-center rounded-full font-extralight bg-black lg:w-[15rem] cursor-pointer overflow-hidden inline-block no-underline w-auto hover-animation"
    >
      <p className="flex items-center headtext justify-center gap-2 text-white">
        Download my Resume
      </p>
    </a>
  );
};

export default Download;
