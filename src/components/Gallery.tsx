import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery images with descriptions in German and English
  const images = [
    {
      src: "/images/img-1.jpg",
      de: "Farbpalette & Skizzen",
      en: "Color Palette & Sketches",
    },
    {
      src: "/images/img-2.jpg",
      de: "Küchen Design",
      en: "Kitchen Design",
    },
    {
      src: "/images/img-3.jpg",
      de: "Schlafzimmer Gestaltung",
      en: "Bedroom Design",
    },
  ];

  const getDescription = (image: typeof images[0]) => {
    return lang === "de" ? image.de : image.en;
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="galerie" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">
            {t.gallery.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Slider for 3 images */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main image */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-6">
            <img
              src={images[currentIndex].src}
              alt={getDescription(images[currentIndex])}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent opacity-0 hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-6 left-6">
              <p className="text-lg font-medium text-white">
                {getDescription(images[currentIndex])}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={goToPrevious}
              className="flex items-center justify-center h-12 w-12 rounded-full border border-border bg-background hover:bg-primary hover:text-white transition-colors shadow-soft"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="text-sm text-muted-foreground">
              {currentIndex + 1} / {images.length}
            </div>

            <button
              onClick={goToNext}
              className="flex items-center justify-center h-12 w-12 rounded-full border border-border bg-background hover:bg-primary hover:text-white transition-colors shadow-soft"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Thumbnail Preview */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4"
          >
            {images.map((image, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                  currentIndex === index
                    ? "border-primary shadow-medium"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <img
                  src={image.src}
                  alt={getDescription(image)}
                  className="h-full w-full object-cover"
                />
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
