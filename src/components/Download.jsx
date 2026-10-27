import { useTranslation } from "react-i18next";

const Download = () => {
  const { t } = useTranslation();
  return (
    <a
      href="/assets/files/DiegoGSA_Resume.pdf"
      download="DiegoGSA_Resume.pdf"
      className="relative px-3 py-4 text-xl text-center rounded-full bg-black lg:w-[15rem] cursor-pointer overflow-hidden inline-block no-underline w-auto hover-animation"
    >
      <p className="flex items-center justify-center gap-2 text-white">
        {t("about.downloadResume")}
      </p>
    </a>
  );
};

export default Download;
