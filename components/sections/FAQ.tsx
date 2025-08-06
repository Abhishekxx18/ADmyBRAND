"use client";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";

const faqs: { question: string; answer: string }[] = [
  {
    question: "What is the pricing structure?",
    answer:
      "We offer a flexible pricing structure that is based on the number of users and features you need.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time by contacting our support team.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept a range of payment methods, including credit cards, debit cards, and PayPal.",
  },
  {
    question: "Do you provide any discounts for students or educators?",
    answer:
      "Yes, we offer discounts for students and educators. Please contact us to learn more.",
  },
];

export default function Faq() {
  const [opened, setOpened] = useState<number | null>(null);

  const handleToggle = (index: number) =>
    setOpened((prev) => (prev === index ? null : index));

  return (
    <section
      id="faq"
      className="mx-auto bg-gradient-to-t from-background via-accent/15 via-40% to-background dark:from-[#18181b] dark:via-[#23232a]/40 dark:to-[#18181b] py-20 md:px-6"
    >
      <div className="mx-auto space-y-6 md:container">
        <div className="text-center">
          <motion.h1
            key={"faq-heading"}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-balance text-3xl font-bold tracking-tight dark:text-white"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            key={"faq-p"}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-lg text-muted-foreground dark:text-gray-300"
          >
            Get answers to the most common questions about our product.
          </motion.p>
        </div>
        <div className="space-y-4 px-10">
          {faqs.map((faq, i) => (
            <motion.div
              initial={{
                opacity: 0,
                x: i % 2 ? -50 : 50,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              key={`faq-${i}`}
              className="drop-shadow-primary/90 w-full rounded-sm bg-white dark:bg-[#23232a] px-6 py-4 drop-shadow-sm"
            >
              <div className="flex items-center justify-between text-left font-medium dark:text-white">
                {faq.question}
                <button
                  onClick={() => handleToggle(i)}
                  className="flex h-10 w-10 items-center justify-center rounded bg-secondary dark:bg-[#18181b] p-0 text-center"
                >
                  {opened == i ? <Minus /> : <Plus />}
                </button>
              </div>

              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -75 }}
                hidden={opened !== i}
                className="mt-4 px-4 pb-4 pt-2 text-muted-foreground dark:text-gray-300"
              >
                <p>{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
