'use client';
import * as AccordionComponent from '@radix-ui/react-accordion';
import React from 'react';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import styles from './component.module.css';

const Accordion = ({ accordionData }) => {
  console.log('hdds', accordionData);
  return (
    <AccordionComponent.Root
      className={styles.AccordionRoot}
      type="single"
      defaultValue="item-1"
      collapsible>
      {/* <AccordionComponent.Item className={styles.AccordionItem} value="item-1">
        <div className={styles.wrapper}>
          <AccordionTrigger className={styles.AccordionTrigger}>Is it accessible?</AccordionTrigger>
          <AccordionContent className={styles.AccordionContent}>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </div>
      </AccordionComponent.Item>

      <AccordionComponent.Item className={styles.AccordionItem} value="item-2">
        <div className={styles.wrapper}>
          <AccordionTrigger className={styles.AccordionTrigger}>Is it unstyled?</AccordionTrigger>
          <AccordionContent className={styles.AccordionContent}>
            Yes. It's unstyled by default, giving you freedom over the look and feel.
          </AccordionContent>
        </div>
      </AccordionComponent.Item> */}

      {accordionData.map((item, index) => (
        <AccordionComponent.Item
          className={styles.AccordionItem}
          value={`item-${index}`}
          key={index}>
          <div className={styles.wrapper}>
            <AccordionTrigger className={styles.AccordionTrigger}>{item.question}</AccordionTrigger>
            <AccordionComponent.Content className={styles.AccordionContent}>
              <div className={styles.AccordionContentText}>{item.answer}</div>
            </AccordionComponent.Content>
          </div>
        </AccordionComponent.Item>
      ))}
    </AccordionComponent.Root>
  );
};

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <AccordionComponent.Header className={styles.AccordionHeader}>
    <AccordionComponent.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}>
      {children}
      <ChevronDownIcon className={styles.AccordionChevron} aria-hidden />
    </AccordionComponent.Trigger>
  </AccordionComponent.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <AccordionComponent.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}>
    <div className={styles.AccordionContentText}>{children}</div>
  </AccordionComponent.Content>
));
export default Accordion;
