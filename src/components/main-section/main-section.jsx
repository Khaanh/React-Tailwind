import ManImage from "../../images/image-hero-desktop.png";
import ManImageMobile from "../../images/image-hero-mobile.png";
import { ReactComponent as Databiz } from "../../images/client-databiz.svg";
import { ReactComponent as Audiophile } from "../../images/client-audiophile.svg";
import { ReactComponent as Meet } from "../../images/client-meet.svg";
import { ReactComponent as Marker } from "../../images/client-maker.svg";
import { Button } from "../button";

export const MainSection = () => {
	return (
		<section className="w-full flex-col-reverse xl:flex-row flex mt-6 items-center justify-between">
			<div className="relative xl:w-2/4 text-center mt-6 xl:mt-60 xl:text-left mt-12">
				<h1 className="text-3xl xl:text-8xl font-black whitespace-pre-line">{`Make\n remote work`}</h1>
				<p className="text-medium-gray text-base md:text-lg my-12 whitespace-pre-line">
					{`Lorem ipsum dolor sit amet consectetur adipisicing elit.\n Magni facere dicta, recusandae blanditiis ex  voluptatibus \n doloremque omnis officiis fugiat, porro dolores officia unde \n maiores cumque minima reprehenderit voluptate perferendis!`}
				</p>
				<Button isFilled={true}>Learn More</Button>
				<div className="flex flex-wrap gap-4 justify-around bottom-2 w-full mt-24">
					<Databiz />
					<Audiophile />
					<Meet />
					<Marker />
				</div>
			</div>
			<div className="hidden xl:flex w-2/4 mt-20">
				<img src={ManImage} alt="Man image" />
			</div>

			<div className="flex xl:hidden w-full mt-20 justify-center mb-8">
				<img src={ManImageMobile} alt="Man image mobile" />
			</div>
		</section>
	);
};
