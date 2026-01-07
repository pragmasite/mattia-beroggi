import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  const schedule = [
    { hours: "09:00 - 12:00, 13:00 - 18:00" }, // Monday
    { hours: "09:00 - 12:00, 13:00 - 18:00" }, // Tuesday
    { hours: "09:00 - 12:00, 13:00 - 18:00" }, // Wednesday
    { hours: "09:00 - 12:00, 13:00 - 18:00" }, // Thursday
    { hours: "09:00 - 12:00, 13:00 - 18:00" }, // Friday
    { hours: "10:00 - 16:00" },                 // Saturday
    { hours: t.hours.closed },                  // Sunday
  ];

  const todayIndex = new Date().getDay();
  const adjustedTodayIndex = todayIndex === 0 ? 6 : todayIndex - 1; // Convert to 0-6 array index

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="offnungszeiten" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.hours.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">
            {t.hours.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <div className="rounded-2xl border bg-card shadow-soft overflow-hidden">
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg">{t.hours.header}</span>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="divide-y"
            >
              {schedule.map((item, i) => {
                const isToday = i === adjustedTodayIndex;
                const isClosed = item.hours === t.hours.closed;

                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      )}
                      <div>
                        <span
                          className={`block text-sm ${
                            isToday ? "font-semibold text-primary" : "font-medium"
                          }`}
                        >
                          {t.hours.days[i]}
                        </span>
                        {isToday && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full inline-block mt-1">
                            {t.hours.today}
                          </span>
                        )}
                      </div>
                    </div>
                    <span
                      className={`text-sm ${
                        isClosed ? "text-muted-foreground" : ""
                      }`}
                    >
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
