import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const pricingPlans = [
    {
        name: 'Basic',
        price: '$100',
        description: 'Perfect for small projects',
        features: [
            'Responsive Design',
            'Up to 5 Pages',
            'Basic SEO',
            'Contact Form',
            '1 Month Support',
            'Mobile Optimized'
        ],
        popular: false,
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        name: 'Professional',
        price: '$200',
        description: 'Best for growing businesses',
        features: [
            'Everything in Basic',
            'Up to 10 Pages',
            'Advanced SEO',
            'CMS Integration',
            'E-commerce Ready',
            '3 Months Support',
            'Performance Optimization',
            'Analytics Setup'
        ],
        popular: true,
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        name: 'Premium',
        price: '$300',
        description: 'For complete solutions',
        features: [
            'Everything in Professional',
            'Unlimited Pages',
            'Custom Features',
            'API Integration',
            'Database Setup',
            '6 Months Support',
            'Priority Updates',
            'Dedicated Support',
            'Free Hosting Setup'
        ],
        popular: false,
        gradient: 'from-orange-500 to-red-500'
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="section-padding bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Pricing <span className="text-primary-600">Plans</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Choose the perfect plan for your project. All plans include modern design and clean code.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden ${plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                                    Popular
                                </div>
                            )}

                            <div className={`h-2 bg-gradient-to-r ${plan.gradient}`}></div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6">
                                    {plan.description}
                                </p>

                                <div className="mb-6">
                                    <span className="text-5xl font-bold text-slate-900 dark:text-white">
                                        {plan.price}
                                    </span>
                                    <span className="text-slate-600 dark:text-slate-400 ml-2">
                                        /project
                                    </span>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <FaCheck className="text-primary-600 mt-1 flex-shrink-0" />
                                            <span className="text-slate-700 dark:text-slate-300">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    className={`block w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center ${plan.popular
                                        ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                                        }`}
                                >
                                    Get Started
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <p className="text-slate-600 dark:text-slate-400">
                        Need a custom solution?{' '}
                        <a href="#contact" className="text-primary-600 hover:text-primary-700 font-semibold">
                            Contact me
                        </a>{' '}
                        for a personalized quote.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
