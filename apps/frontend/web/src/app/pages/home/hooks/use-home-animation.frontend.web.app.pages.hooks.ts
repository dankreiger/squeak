import { useChain, useSpringRef, useTransition } from '@react-spring/web';

export const useHomeAnimation = <T extends any[] | undefined>({
  data,
}: {
  data: T;
}) => {
  const springApi = useSpringRef();

  const transApi = useSpringRef();
  const transition = useTransition(data ? data : [], {
    ref: transApi,
    trail: data ? 400 / data.length : 0,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(data ? [springApi, transApi] : [transApi, springApi], [
    0,
    data ? 0.1 : 0.6,
  ]);

  return { transition };
};
