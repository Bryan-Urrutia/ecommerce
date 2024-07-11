import React from 'react'
import Socials from '../Socials'

const Footer = () => {
    return (
        <footer className="bg-secondary py-12">
            <div className="flex flex-col items-center justify-between">
                <Socials containerStyles='flex gap-x-6 xl:mx-0 mb-4' iconsStyles='text-primary text-[20px] dark:text-white/70 hover:text-white dark:hover:text-primary' />
                <div className="text-muted-foreground">Copyright &copy; Bryan Urrutia. All right reserved. </div>
            </div>
        </footer>
    )
}

export default Footer