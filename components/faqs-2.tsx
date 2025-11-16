'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQsTwo() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What is 5ClickResume?',
            answer: '5ClickResume is a fast and simple resume builder designed for college students, fresh graduates, and junior developers. You can create, edit, customize, save, and download a professional resume in minutes.',
        },
        {
            id: 'item-2',
            question: 'Who is this resume builder for?',
            answer: 'Its for students, bootcamp learners, & junior devs',
        },
        {
            id: 'item-3',
            question: 'What template does 5ClickResume use?',
            answer: 'We use the industry-recognized Jake’s Resume Template, a clean and recruiter-approved layout trusted by thousands of developers worldwide.',
        },
        {
            id: 'item-4',
            question: 'Is 5ClickResume free to use?',
            answer: "Yes! You can create, edit, customize, and download your resume for free.",
        },
        {
            id: 'item-5',
            question: 'Can I download my resume as a PDF?',
            answer: 'Yes — one click, instant PDF download.',
        },
    ]

    return (
        <section id='faq' className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 px-8">
                        Can't find what you're looking for? Contact our{' '}
                        <Link
                            href="#"
                            className="text-primary font-medium hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
