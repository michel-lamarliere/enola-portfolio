import cn from "classnames";

import styles from "pages/services/styles/serviceSvg.module.scss";

export const getServiceSvgStyles = (useAltColor?: boolean) => {
  const colorOneStyles = cn(styles.colorOne, {
    [styles.colorOne__alt]: useAltColor,
  });

  const colorTwoStyles = cn(styles.colorTwo, {
    [styles.colorTwo__alt]: useAltColor,
  });

  return {
    colorOneStyles,
    colorTwoStyles,
  };
};
