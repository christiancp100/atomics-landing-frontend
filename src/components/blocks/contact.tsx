import Image from 'next/image';
import React from 'react';
import BaseSection from '../layout/base-section';
import Animated, { animations } from '../ui/animations';
import Button from '../ui/button';
import Input from '../ui/input';
import SelectMultiple from '../ui/select-multiple';
import TextArea from '../ui/textarea';

const Contact = ({ className, ...rest }) => {
  const options = [
    {
      title: 'Desarrollo web',
      value: 'Web Design',
    },
    {
      title: 'Gestion de Redes Sociales',
      value: 'RR SS',
    },
    {
      title: 'Comercio electronico',
      value: 'Ecommerce',
    },
    {
      title: 'Tengo una idea',
      value: 'Idea',
    },
  ];
  return (
    <Animated
      animation={animations.fadeRight}
      className="my-20 relative px-4 mt-8 text-justify"
    >
      <h2 className="text-4xl font-semibold text-center sm:text-left">
        <span className="text-header-gradient">Creemos</span> algo juntos
      </h2>
      <form>
        <div className="flex flex-col gap-y-8 my-8">
          <span className="font-semibold">Que servicios te interesan?</span>
          <SelectMultiple options={options} />
        </div>

        <div className="grid sm:grid-cols-2 gap-8 my-4">
          <Input
            placeholder="Tu nombre"
            className="col-span-2 sm:col-span-1"
            type="text"
          />
          <Input
            placeholder="Tu telefono"
            type="tel"
            className="col-span-2 sm:col-span-1"
          />
          <Input className="col-span-2" placeholder="Tu email" type="email" />
          <TextArea
            className="col-span-2"
            placeholder="Que te gustaria hacer?"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button type="submit" variant="primary">
            ¡Enviar!
          </Button>
        </div>
      </form>
    </Animated>
  );
};

export default Contact;
