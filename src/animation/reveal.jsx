
import { scale } from 'framer-motion';
import AnimatedContent from '../components/AnimatedContent';

export default function RevealUp(
  {
    children,
    isLargeScreen,
    distance = 100,
    direction = "vertical",
    config = { tension: 100, friction: 30 },
    initialOpacity = 0,
    threshold = 0,
    delay = 0,
    reverse = false,
    scale = 1,
  }
) {
  return (
    <AnimatedContent
      distance={distance}
      direction={direction}
      reverse={reverse}
      config={config}
      initialOpacity={initialOpacity}
      threshold={threshold}
      delay={delay}
      scale={scale}
    >
      {children}
    </AnimatedContent>
  )
}