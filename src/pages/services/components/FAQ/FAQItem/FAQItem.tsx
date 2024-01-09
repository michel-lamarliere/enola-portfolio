import React, { useState } from "react";
import { animated, useTransition } from "react-spring";

import styles from "pages/services/components/FAQ/FAQItem/FAQItem.module.scss";

type Props = {
  question: string;
  answer: string;
};

export const FAQItem = ({ question, answer }: Props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const transitions = useTransition(showAnswer, {
    from: { opacity: 0, maxHeight: "0px" },
    enter: { opacity: 1, maxHeight: "200px" },
    leave: { opacity: 0, maxHeight: "0px" },
  });

  return (
    <button
      className={styles.FAQItem}
      onClick={() => setShowAnswer((prevState) => !prevState)}
    >
      <div className={styles.question}>{question}</div>
      {transitions(
        (style, item) =>
          item && (
            <animated.div style={style}>
              <div className={styles.answer}>{answer}</div>
            </animated.div>
          )
      )}
    </button>
  );
};
