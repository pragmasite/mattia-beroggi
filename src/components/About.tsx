import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="uber-uns" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.about.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">
            {t.about.title1} <span className="text-accent">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.p2}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-background p-6 border border-border shadow-soft"
            >
              <div className="text-3xl font-serif font-bold text-primary mb-2">
                25+
              </div>
              <p className="text-sm text-muted-foreground">{t.about.stat1}</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-background p-6 border border-border shadow-soft"
            >
              <div className="text-3xl font-serif font-bold text-primary mb-2">
                500+
              </div>
              <p className="text-sm text-muted-foreground">{t.about.stat2}</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-background p-6 border border-border shadow-soft col-span-2"
            >
              <div className="text-3xl font-serif font-bold text-accent mb-2">
                100%
              </div>
              <p className="text-sm text-muted-foreground">{t.about.stat3}</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6"
        >
          {t.about.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-2xl bg-background p-6 border border-border shadow-soft hover:shadow-medium transition-shadow"
            >
              <h3 className="font-serif text-lg mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
