"use client"
import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import { LockedIcon } from "@/components/ui/iconsSVG"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope, faJ } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

const menuList = [
    {
        item: "Accueil"
    },
    {
        item: "Compétences"
    },
    {
        item: "Projets"
    },
    {
        item: "Contact"
    },

]

export default function Navbar(){
    return(
        <div className="flex flex-row items-center justify-center w-full pt-8 select-none">
            <NavigationMenu className={`flex w-full max-w-[1040px] justify-between px-5 py-2 h-[60px] items-center`}>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" className="flex items-center space-x-2">
                            {/* <Logo /> */}
                            <h2 className="text-2xl font-bold uppercase">Jeromson<br/>Portfolio</h2>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList className="flex justify-between items-center space-x-14 text-mg font-bold">
                        {menuList.map((link, index) => (
                            <NavigationMenuItem key={index} className="cursor-pointer hover:underline">
                                {link.item}
                            </NavigationMenuItem>
                        ))}
                </NavigationMenuList>
                <NavigationMenuList>
                    <NavigationMenuItem className="flex flex-row justify-between space-x-6 text-2xl">
                        <FontAwesomeIcon icon={faSquareEnvelope} className="text-amber-200"/>
                        <FontAwesomeIcon icon={faLinkedin} className="text-sky-500" />
                        <FontAwesomeIcon icon={faSquareGithub} />
                        <FontAwesomeIcon icon={faSquareInstagram} className="text-rose-400"/>
                        {/* <Link href="/">
                            <Button variant={"primary"} size={"lg"}>
                            <LockedIcon/> Connexion
                            </Button>
                        </Link> */}
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}