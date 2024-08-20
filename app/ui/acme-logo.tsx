import { GlobeAltIcon } from "@heroicons/react/16/solid";
import { lusitana } from "./fonts";

export default function AcmeLogo (){
    return (
        <div className ={`${lusitana.className} flex flex-row items-center text-white`}>
        <GlobeAltIcon className="h-12 w-12 rotate-[15deg]"/>

        <p className="text-[44-px]">Acme</p>
        </div>

    );
}