import Animated, { animations } from '@/components/ui/animations';
import Image from 'next/image';
import React from 'react';

interface StepProps {
  title: string;
  img: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ img, title, description }) => (
  <div className="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center">
    <div className="w-48 h-48 relative mx-auto">
      <Image src={img} alt="" layout="fill" objectFit="contain" />
    </div>
    <div>
      <h3 className="text-xl text-neutral-800 font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Steps = () => {
  return (
    <section>
      <div className="w-full py-16 flex flex-col items-center">
        <Animated animation={animations.fadeIn}>
          <h2 className="text-3xl sm:text-4xl font-semibold text-center">
            ¿Cómo trabajamos?
          </h2>
        </Animated>
        <Animated
          animation={animations.fadeUp}
          className="w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <Step
            img="/img/contact_us.svg"
            title="Nos Contactas"
            description="Cuando rellenes nuestro formulario de contacto, hablaremos para
        concertar una cita y tomarnos un café. Resolveremos todas tus dudas y
        acotaremos el alcance tu proyecto, así como su coste."
          />
          <Step
            img="/img/savings.svg"
            title="Buscamos subvenciones"
            description="En caso de ser posible, tramitamos las subvenciones disponibles para que tengas que poner la menor cantidad de dinero posible e invertirlo en seguir haciendo crecer tu negocio."
          />
          <Step
            img="/img/programmer.svg"
            title="Manos a la obra"
            description="Planificamos el proyecto y nos ponemos a desarrollar tu producto, entregándote valor cada semana y formándote para aprender a usar nuestras herramientas."
          />
        </Animated>
      </div>
    </section>
  );
};

export default Steps;
