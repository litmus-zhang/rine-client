import Image from "next/image"
import Button from "./Button"

export const Header = () => {
    return (
        <header className='flex w-full justify-between bg-green-200 fixed top-0'>
            <Image className="w-fit p-2" src="/rine-logo.png" alt="Rine Logo" width={100} height={50} />
            <nav className='flex font-medium hover:green-200 gap-2 items-center p-2'>
                <p>Home</p>
                <p>
                    <Button text="Request for Pickup" />
                </p>
            </nav>

        </header>

    )
}