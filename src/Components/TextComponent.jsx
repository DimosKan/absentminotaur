import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

export default function TextComponent({ type }) {
    const keyMap = {
    essay: 'essayContent',
    poem: 'poemContent',
  };
    const { t } = useTranslation();
  const contentArray = t(keyMap[type], { returnObjects: true });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="w-full px-0 text-gray-300 text-2xl space-y-4">
      {contentArray.map((line, index) => (
        <motion.p
          key={index}
          className="whitespace-pre-line"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 }}
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
}
