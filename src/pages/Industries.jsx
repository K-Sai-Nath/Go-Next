import React from "react";
import { Slide, Fade } from "react-awesome-reveal";
const industries = [
  {
    title: "Startups",
    subtitle: "Accelerating Startup Growth",
    description:
      "We partner with startups to build innovative, scalable, and market-ready applications. Our agile development process ensures rapid iteration and alignment with evolving market needs.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7OHL35eRmW17gLLZLWfjI6LLhtGA7QLSJ7iSMDkpEECcWfim8C4FkASOjckiyD7dU7v2-DbjHWBW0Zusry8GmT9xj5CAYSrUZhqlbk6ZB99gybsf0zW4aQaj5_BzGTM3W39ZPl18R8YVxvTTMoKhLvk0kCKVPx5dL4MQSNtNF6j0mOfFdDy7gbdp6Qag5FNV1jhOjOgOcvrsWAm279m1CxCq54D-GDyU5GN1PYpHvB1Tg0N40v63dgvpQGqE-862D__BQEQPkQZ8",
    reverse: false,
  },
  {
    title: "Enterprises",
    subtitle: "Transforming Enterprise Operations",
    description:
      "We help enterprises modernize their technology stack, optimize processes, and enhance customer experiences through custom software solutions and AI-driven insights.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDo9p6eQ37QkjSmBLy4GaZ83rC4xzhvrt5yIVeW5kproJosI3FX8gAqB6_NN4o-uSIE6ySQGQta9V-t_JMqzqL-7l7A-KvKeTUP2eYJDRVVgOKVSHDTIAEWXJXxai3QqEXzXJYdW3mLEoqpx8HkmTyeM-2xGh-ycKbLM4mBT1mmjIEu6rLUB1SCqBr9QkbTiVpZlVNhwekIfr9OmO_IifVYHfuiX9wA7JHGn0F3FcZDbxbqY1QEgCW6GbMbHO8dMP8QzpOuXLRNq0I",
    reverse: true,
  },
  {
    title: "Healthcare",
    subtitle: "Innovating Healthcare Solutions",
    description:
      "We develop healthcare applications that improve patient care, streamline workflows, and leverage data analytics for better health outcomes. Our solutions comply with industry regulations and prioritize data security.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFZmp1h9bWmr3wwnwaWsacevmat7ZVIoYnPEXEoJgN5Hly6pkUlyH6yAPRLGwCXXg5a5gOPjk6XpB6bqLSGDyDM4fNY3qQ9JNarfnGsZFpjYmW-YRjmsDdEUjYjBD5BKrG1vUfwUnuEk75S8Ef4gy2AnWHd12wA_CuWHtBHY7V85y3PIavYcjDMqwWMez2KssrTUnaJYXehsRKZvb0iN8aYArvIPTX2GQA4Ywo704xVWKT1QAn2LMbdXeO-xF_cYLE7yCgIALMKLc",
    reverse: false,
  },
  {
    title: "FinTech",
    subtitle: "Revolutionizing Financial Services",
    description:
      "We build secure, scalable, and user-friendly FinTech applications that drive financial inclusion, enhance transaction efficiency, and provide personalized financial services. Our expertise includes blockchain, payment gateways, and risk management systems.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQwM--4e9Te4w1n15XCISvLUz_eDIvjsQWQoN_gQ05gN4pY3JHjI4QNoMGbfgO3hEkywmNezoMX78f9A0E-ZQN4iFWtdfaVWbwXlpO5GRv1vyUYC-9K1qpI-GBPj5dp2tvIopr7oONvkGlvt5SxH1jcs5O0ngudEVRh2vRz8BZGKjbLOUGKc50HlvIORyQ319fy0sXVN4RRAYbnsreoznCwEslAqpwyn5OYrhA5bcT3TdwY7dfch7IsGBniSpYnCREZcOAj5TGwM8",
    reverse: true,
  },
  {
    title: "E-commerce",
    subtitle: "Enhancing E-commerce Experiences",
    description:
      "We create engaging and high-performing e-commerce platforms that boost sales, improve customer loyalty, and integrate seamlessly with existing systems. Our solutions focus on user experience, mobile optimization, and secure payment processing.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBL9TquF5F_XMAaV4f9iEYokwuRt6uRlcN62FLpeJk7FG_DWkxiFWOXv_XjlNdlPgM8KS3pc6eg8LfaOD_23IxdjVlcttqm331XC1j4Em77DAn-QdirY6G2L8hVXYLV5355_VZgelB-wrFrGBhMQHAL7HH05qDu6NwLq1BPrdb0w1Oad-G4_EfxqhRWeZKu-KE4EeOjFTmt1QO8wtZMI302ygWObv9ZdyBPjJdb2JRKM_3vVyuc7Psd1JMSraT1flHoqIdbTc9VSzg",
    reverse: false,
  },
];

export default function Industries({ id }) {
  return (
    <section id={id} className="px-4 md:px-10 lg:px-20 xl:px-40 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">Our Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tighter">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Go Next Technology empowers businesses across diverse sectors with
            cutting-edge digital solutions…
          </p>
        </div>

        <div className="space-y-20">
          {industries.map((industry, idx) => (
            <Slide
              key={idx}
              direction={industry.reverse ? "right" : "left"}
              cascade={false}
              duration={600}
              delay={idx * 200}
            >
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  industry.reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`rounded-xl overflow-hidden shadow-lg group ${
                    industry.reverse ? "order-2 md:order-2" : ""
                  }`}
                >
                  <div
                    className="w-full bg-center bg-cover aspect-video transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${industry.image})` }}
                  />
                </div>

                {/* Text */}

                <div
                  className={`${industry.reverse ? "order-1 md:order-1" : ""}`}
                >
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {industry.title}
                  </h3>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    {industry.subtitle}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {industry.description}
                  </p>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </section>
  );
}
