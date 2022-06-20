import imgBanner from "../assets/banner.jpg"

export function Banner() {
    return (
            <div className="relative w-full h-screen">
                <div className="absolute w-full h-full bg-gradient-to-t from-black" />
                <img src={imgBanner} className="w-full h-full z-[0]" />
            </div>
    )
}