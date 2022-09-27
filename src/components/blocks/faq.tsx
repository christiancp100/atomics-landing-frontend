import Image from 'next/image';
import React from 'react';
import BaseSection from '../layout/base-section';
import Accordion from '../ui/accordion';
import Animated, { animations } from '../ui/animations';

export const FAQ = () => {
  return (
    <BaseSection className="w-full my-24 mb-96">
      <Animated
        animation={animations.fadeRight}
        className="col-span-12 lg:col-span-6"
      >
        <div className="relative w-full h-96">
          <Image
            layout="fill"
            objectFit="contain"
            src="/img/question.svg"
            alt=""
          />
        </div>
      </Animated>
      <Animated
        animation={animations.fadeLeft}
        className="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8"
      >
        <span className="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">
          FAQ
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">
          Preguntas Frecuentes
        </h2>

        <ul>
          <Accordion />
        </ul>
      </Animated>
    </BaseSection>
  );
};
