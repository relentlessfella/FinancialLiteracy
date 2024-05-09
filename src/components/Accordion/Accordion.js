'use client';
import * as Accordion from '@radix-ui/react-accordion';
import React from 'react';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import styles from './component.module.css';

const AccordionLesson = () => (
  <Accordion.Root className={styles.AccordionRoot} type="single" defaultValue="item-1" collapsible>
    <Accordion.Item className={styles.AccordionItem} value="item-1">
      <div className={styles.wrapper}>
        <AccordionTrigger className={styles.AccordionTrigger}>Is it accessible?</AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </div>
    </Accordion.Item>

    <Accordion.Item className={styles.AccordionItem} value="item-2">
      <div className={styles.wrapper}>
        <AccordionTrigger className={styles.AccordionTrigger}>Is it unstyled?</AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          Yes. It's unstyled by default, giving you freedom over the look and feel.
        </AccordionContent>
      </div>
    </Accordion.Item>

    <Accordion.Item className={styles.AccordionItem} value="item-3">
      <div className={styles.wrapper}>
        <AccordionTrigger className={styles.AccordionTrigger}>Can it be animated?</AccordionTrigger>
        <Accordion.Content className={styles.AccordionContent}>
          <div className={styles.AccordionContentText}>
            Yes! You can animate the Accordion with CSS or JavaScript.
          </div>
        </Accordion.Content>
      </div>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className={styles.AccordionHeader}>
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}>
      {children}
      <ChevronDownIcon className={styles.AccordionChevron} aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}>
    <div className={styles.AccordionContentText}>{children}</div>
  </Accordion.Content>
));
export default AccordionLesson;
