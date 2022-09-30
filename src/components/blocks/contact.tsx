import { contactUrl } from '@/config/environment';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Animated, { animations } from '../ui/animations';
import Button from '../ui/button';
import Checkbox from '../ui/checkbox';
import Input from '../ui/input';
import SelectMultiple from '../ui/select-multiple';
import TextArea from '../ui/textarea';

const STATUS = {
  notSubmitted: 0,
  loading: 1,
  submitted: 2,
  error: 3,
};

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState<Array<string>>([]);
  const [status, setStatus] = useState(STATUS.notSubmitted);
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

  const handleSubmit = (e) => {
    setStatus(STATUS.loading);
    e.preventDefault();
    const fd = new FormData(e.target);

    const data = {
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      description: fd.get('description'),
      services: selectedServices,
    };

    fetch(contactUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => {
        setStatus(STATUS.submitted);
        e.target.reset();
        setSelectedServices([]);
      })
      .catch(() => setStatus(STATUS.error));
  };

  return (
    <div className="my-20 relative px-4 mt-8 text-justify">
      <h2 className="text-4xl font-semibold text-center sm:text-left">
        <span className="text-header-gradient">Creemos</span> algo juntos
      </h2>
      <div className="flex">
        <Animated animation={animations.fadeRight}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between"
          >
            <div className="flex flex-col gap-y-6 my-8">
              <span className="font-semibold">
                Elige los servicios que buscas
              </span>
              <SelectMultiple
                selectedOptions={selectedServices}
                setSelectedOptions={setSelectedServices}
                options={options}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-8 my-4">
              <Input
                required
                placeholder="Tu nombre"
                name="name"
                className="col-span-2 sm:col-span-1"
                type="text"
              />
              <Input
                required
                placeholder="Tu telefono"
                name="phone"
                type="tel"
                className="col-span-2 sm:col-span-1"
              />
              <Input
                required
                className="col-span-2"
                name="email"
                placeholder="Tu email"
                type="email"
              />
              <TextArea
                name="description"
                className="col-span-2"
                placeholder="Que te gustaria hacer?"
              />
              <Checkbox
                type="checkbox"
                placeholder="Hola"
                name="accept"
                text={
                  <span>
                    Acepto la{' '}
                    <Link href="/">
                      <a className="underline hover:text-primary">
                        politica de privacidad
                      </a>
                    </Link>
                  </span>
                }
              />
            </div>

            <Button
              loading={status == STATUS.loading}
              type="submit"
              variant="primary"
              className="self-start"
            >
              ¡Enviar!
            </Button>
          </form>
        </Animated>
        <Animated
          animation={animations.fadeLeft}
          className="hidden lg:block relative w-1/2 h-[30rem] self-end"
        >
          <Image src="/img/contact.svg" alt="contact image" layout="fill" />
        </Animated>
      </div>
    </div>
  );
};

export default Contact;
