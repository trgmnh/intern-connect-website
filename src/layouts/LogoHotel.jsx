import LogoLoop from "../libraries/LogoLoop";
import jwmarriot from "../assets/hotels_logo/jwmarriot.png";
import meriton from "../assets/hotels_logo/meriton.jpeg";
import sofiteldubai from "../assets/hotels_logo/sofiteldubai.png";
import vinpearl from "../assets/hotels_logo/vinpearl.webp";
import westin from "../assets/hotels_logo/westin.png";
import reveriesaigon from "../assets/hotels_logo/vn_reveriesaigon.png";
import rexhotel from "../assets/hotels_logo/vn_rexhotel.png";
import wyndham from "../assets/hotels_logo/vn_wyndham.png";
import hilton from "../assets/hotels_logo/hilton.png";
import carravelle from "../assets/hotels_logo/carravelle.png";
import lemeridien from "../assets/hotels_logo/lemeridien.webp";

const imageLogos = [
    { src: jwmarriot, alt: "JW Marriot" },
    { src: meriton, alt: "Meriton" },
    { src: sofiteldubai, alt: "Sofitel Dubai" },
    { src: vinpearl, alt: "Vinpearl" },
    { src: westin, alt: "Westin" },
    { src: reveriesaigon, alt: "Reverie Saigon" },
    { src: rexhotel, alt: "Rex Hotel" },
    { src: wyndham, alt: "Wyndham" },
    { src: hilton, alt: "Hilton" },
    { src: carravelle, alt: "Carravelle" },
    { src: lemeridien, alt: "Le Meridien" }
];

export const LogoHotel = () => {
    return (
        <div style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
            {/* Basic horizontal loop */}
            <LogoLoop
                logos={imageLogos}
                speed={50}
                direction="left"
                logoHeight={70}
                gap={30}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Hotel partners"
            />
        </div>
    );
}