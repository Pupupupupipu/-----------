import Image from "next/image";
import logoSrc from "./logo.svg";
import { Profile } from "../profile/profile";
import { ArrowDownIcon } from "./icons/arrow-down-icon";
import { UIButton } from "../uikit/ui-button";
import { players } from "../game/constants";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="logo" />
      <div className=" w-px h-8 bg-slate-200 mx-6"></div>
      <UIButton className="w-44" variant="primary" size="lg">
        Играть
      </UIButton>
      <button className="flex items-center gap-2 ml-auto hover:text-teal-500 transition-colors">
        <Profile name = {players[0].name} rating = {players[0].rating} avatar/>
        <ArrowDownIcon />
      </button>
    </header>
  );
}
