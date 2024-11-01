'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.15,
        ease: [0.6, -0.05, 0.01, 0.99],
        when: 'beforeChildren',
        staggerChildren: 0.25,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.1)',
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 20,
    },
  };

  return (
    <motion.main
      className="flex items-center mt-80 justify-center p-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="max-w-3xl w-full p-10 sm:p-16"
        variants={containerVariants}
      >
        <section className="flex flex-col items-center space-y-12">
          <motion.header
            className="text-center space-y-4"
            variants={childVariants}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight drop-shadow-lg">
              Welcome to Masraf
            </h1>

            <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Discover a secure, seamless, and modern approach to managing your
              wealth with confidence and ease.
            </p>
          </motion.header>

          <motion.div
            className="flex flex-col sm:flex-row gap-8 mt-8"
            variants={containerVariants}
          >
            <motion.div variants={childVariants}>
              <Link href="/login" passHref>
                <motion.div
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto"
                >
                  <Button className="py-4 px-8 text-lg – rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow">
                    Login
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
            <motion.div variants={childVariants}>
              <Link href="/register" passHref>
                <motion.div
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    className="py-4 px-8 text-lg  rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow"
                  >
                    Register
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </motion.div>
    </motion.main>
  );
}
