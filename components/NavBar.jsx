"use client"
import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope, faJ } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

const menuList = [
    {
        item: "Accueil",
        link: "/"
    },
    {
        item: "Compétences",
        link: "/skills"
    },
    {
        item: "Projets",
        link: "/projets"
    },
    {
        item: "Contact",
        link: "/contact"
    },

]

export default function Navbar(props){
    const isVisible = props.view
    return(
        <header className={`flex flex-row items-center justify-center w-full pt-8 select-none ${isVisible ? "active" : ""} box-border pt-2 max-sm:pt-2 max-sm:flex-col`}>
            <NavigationMenu className={`flex w-full max-w-[1040px] justify-between px-5 py-2 h-[60px] items-center max-lg:flex-col max-sm:flex-col max-sm:h-auto`}>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" className="flex items-center space-x-2">
                            {/* <Logo /> */}
                            <h1 className="text-xl font-bold uppercase">[Jeromson]</h1>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList className="flex space-x-4 items-center justify-between text-mg font-bold max-sm:flex-col max-sm:w-full text-center max-sm:justify-center max-sm:items-center max-sm:leading-10 max-sm:space-x-0 max-lg:items-center max-lg:space-x-6">
                        {menuList.map((link, index) => (
                            <NavigationMenuItem key={index} className="uppercase cursor-pointer hover:underline p-0 m-0 text-center">
                                <a href={link.link}>{link.item}</a>
                            </NavigationMenuItem>
                        ))}
                </NavigationMenuList>
                <NavigationMenuList className="max-sm:hidden">
                    <NavigationMenuItem className="flex flex-row justify-between space-x-8 text-2xl p-2 max-sm:hidden">
                        
                        <Link href="mailto:jerome.corso@gmail.com" target="_blank"><FontAwesomeIcon icon={faSquareEnvelope} className="text-white"/></Link>
                        <Link href="https://www.linkedin.com/in/jeromecorso30150/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="text-white" /></Link>
                        <Link href="https://github.com/jeromson30/" target="_blank"><FontAwesomeIcon icon={faSquareGithub} /></Link>
                        <Link href="https://www.instagram.com/jeromson13/" target="_blank"><FontAwesomeIcon icon={faSquareInstagram} className="text-white"/></Link>
                        {/* <Link href="/">
                            <Button variant={"primary"} size={"lg"}>
                            <LockedIcon/> Connexion
                            </Button>
                        </Link> */}
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}