// @ts-nocheck
import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

interface AccordionElementProps {
  question: string;
  answer: string;
}

const AccordionElement: React.FC<AccordionElementProps> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={handleOpen}
      className="hover:cursor-pointer border-b-2 border-gray-200 pb-2 mb-6"
    >
      <div className="flex justify-between items-end">
        <span className="font-medium">{question}</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-4 h-4 mr-6 transition-all duration-100 ${
              isOpen ? `rotate-180` : ``
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
      <CSSTransition
        in={isOpen}
        nodeRef={ref}
        timeout={300}
        classNames="slide"
        unmountOnExit
      >
        <div ref={ref} className={`relative overflow-hidden py-2`}>
          <p className="text-sm text-justify text-gray-700 tracking-wide leading-relaxed">
            {answer}
          </p>
        </div>
      </CSSTransition>
    </div>
  );
};

const Accordion = ({ questions }) => {
  return (
    <li>
      {questions &&
        questions.map((question) => (
          <AccordionElement
            key={question.question}
            question={question.question}
            answer={question.answer}
          />
        ))}
    </li>
  );
};

export default Accordion;
