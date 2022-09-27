import Image, { ImageProps } from 'next/image';
import Animated, { animations } from './animations';

const ClientLogo: React.FC<ImageProps> = ({ src, alt }) => (
  <Animated
    animation={animations.fadeUp}
    className="hover:grayscale-0 md:grayscale"
  >
    <Image
      src={src}
      alt={alt}
      layout="fixed"
      height={75}
      width={200}
      objectFit="contain"
    />
  </Animated>
);

export default ClientLogo;
