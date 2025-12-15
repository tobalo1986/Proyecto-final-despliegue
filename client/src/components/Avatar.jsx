import neutral from "../assets/sensei-neutral.webp";
import happy from "../assets/sensei-happy.webp";
import angry from "../assets/sensei-angry.webp";
import surprised from "../assets/sensei-surprised.webp";
import thinking from "../assets/sensei-thinking.webp";

const images = {
    neutral,
    happy,
    angry,
    surprised,
    thinking
};

export default function Avatar({ emotion }) {
    return (
        <div className="avatar-container">
            <img
                src={images[emotion] || images.neutral}
                alt="Sensei"
                className="avatar-img"
            />
        </div>
    );
}
