import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import { TracingBeam } from '@/components/ui/TracingBeam'
import { HeroHighlight } from '@/components/ui/HeroHighlight'
import { Button, MovingBorder } from '@/components/ui/MovingBorder'

export default function Home() {
    return (
        <>
        
            <HeroHighlight>
                
                <div className='flex flex-col justify-center items-center min-h-screen pt-[-2%]'>
                <TracingBeam paddingTop='10rem'>
                    <MaxWidthWrapper className="mb-12 text-center">
                        {/* Your HeroHighlight content here */}
                        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/90">
                            <p className="text-sm font-semibold text-gray-700">
                                Make your own timetable!
                            </p>
                        </div>
                        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
                            Design your suitable
                            <span className="text-blue-600"> Timetable</span> in
                            seconds.
                        </h1>
                        <p className="mt-5 max-w-prose text-muted-foreground sm:text-lg ml-[14%]">
                            Introducing FFCS Helper VITV – practice mock timetables for course and slot selection effortlessly. Get ready for FFCS with ease and confidence!
                        </p>
                        <Link
                            className={buttonVariants({
                                size: 'lg',
                                className: 'mt-5',
                            })}
                            href="/dashboard"
                            target="_blank"
                        >
                            Get started <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </MaxWidthWrapper>
                    </TracingBeam>
                </div>
               
                
            </HeroHighlight>

            <HeroHighlight>
                {/* Value proposition section */}
                <div>
                   

                    {/* Image box */}
                    <div className="mx-auto max-w-6xl px-6 lg:px-8">
                        <div className="mt-16 flow-root sm:mt-24">
                            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                <Image
                                    src="/dashboard-preview.jpg"
                                    alt="product preview"
                                    width={1364}
                                    height={866}
                                    quality={100}
                                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                                />
                            </div>
                        </div>
                    </div>

                   
                </div>
            </HeroHighlight>

            {/* Feature section */}
            <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-50">
                <div className="mb-12 px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl sm:text-center">
                        {/* Feature section title and description */}
                        <h2 className="mt-2 font-bold text-4xl sm:text-5xl">
                            Make you timetable in minutes
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Designing you semester's timetable has never been easier!
                        </p>
                    </div>
                </div>

                {/* Steps */}
                <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
                    {/* Step 1 content */}
                    {/* Step 2 content */}
                    {/* Step 3 content */}
                </ol>

                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <div className="mt-16 flow-root sm:mt-24">
                        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                            <Image
                                src="/file-upload-preview.jpg"
                                alt="uploading preview"
                                width={1419}
                                height={732}
                                quality={100}
                                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                            />
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}
