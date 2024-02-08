import { useState } from "react";
import { Menu } from "@headlessui/react";
import { MdOutlineLanguage } from "react-icons/md";
import { Slide, toast } from "react-toastify";

import { lang } from "../../services/lang";

const Languages = ({ setLanguage }) => {
  const [languageImg, setLanguageImg] = useState("");

  const handleSelectLanguage = (code, img, lang) => {
    setLanguage(code);
    setLanguageImg(img);
    toast(
      <div className="flex items-center font-body">
        Translating to{" "}
        <img src={img} alt="flag" className="h-6 w-6 ml-2 mr-1" />
        {lang}
      </div>,
      {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Slide,
      }
    );
  };
  return (
    <Menu>
      <Menu.Button className="px-2">
        {languageImg !== "" ? (
          <img src={languageImg} alt="Selected language" className="w-6 h-6" />
        ) : (
          <MdOutlineLanguage size={20} />
        )}
      </Menu.Button>
      <Menu.Items className="language-menu absolute right-0 flex flex-col bg-slate-100 max-h-40 overflow-y-scroll rounded-md shadow-md font-body mt-2">
        <h2 className="font-title ml-2">Translate to:</h2>
        {lang
          .sort((a, b) => a.language.localeCompare(b.language))
          .map((item) => (
            <Menu.Item key={item.code}>
              {({ active }) => (
                <div
                  onClick={() =>
                    handleSelectLanguage(item.code, item.imgUrl, item.language)
                  }
                  className={`${
                    active && "bg-secondary text-slate-100"
                  } flex justify-start items-center gap-2 mx-2 hover:cursor-pointer`}
                >
                  <img src={item.imgUrl} alt="flag" className="w-6 h-6" />{" "}
                  <span>{item.language}</span>
                </div>
              )}
            </Menu.Item>
          ))}
      </Menu.Items>
    </Menu>
  );
};

export default Languages;
