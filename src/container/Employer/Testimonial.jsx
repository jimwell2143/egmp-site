import React from "react";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <>
    <Navigation />
    <div className="h-screen">
    <div className="w-full">
        <div className="inset-0 z-0">
          <img
            src="/about-header.png"
            alt="about-header"
            width={1512}
            height={280}
            className="top-0 w-full object-cover"
          />
          <div className="bg-white" id="button-1">
            <div className="container mx-auto p-10">
              <div className="flex rounded-lg justify-center items-start gap-4">
                <Link
                   to="#button-1"
                 >
                <div className="flex bg-stone-400 rounded-lg flex-col justify-start items-start">
                  <div className="flex px-6 py-2 bg-stone-100 justify-start items-start gap-2">
                    <div className="text-stone-400 text-xs font-semibold leading-none">
                      Our Story
                    </div>
                  </div>
                </div>
                </Link>
                <Link
                   to="#button-2"
                 >
                <div className="flex bg-stone-400 rounded-lg flex-col justify-start items-start">
                  <div className="flex px-6 py-2 bg-stone-100 justify-start items-start gap-2">
                    <div className="text-stone-400 text-xs font-semibold leading-none">
                      Why Choose Us?
                    </div>
                  </div>
                </div>
                </Link>
                <Link
                   to="#button-3"
                 >
                <div className="flex bg-stone-400 rounded-lg flex-col justify-start items-start">
                  <div className="flex px-6 py-2 bg-stone-100 justify-start items-start gap-2">
                    <div className="text-stone-400 text-xs font-semibold leading-none">
                      Vision & Mission
                    </div>
                  </div>
                </div>
                </Link>
                <Link
                   to="#button-4"
                 >
                <div className="flex bg-stone-400 rounded-lg flex-col justify-start items-start">
                  <div className="flex px-6 py-2 bg-stone-100 justify-start items-start gap-2">
                    <div className="text-stone-400 text-xs font-semibold leading-none">
                      Core Values
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-20 pb-28">
            <div className="flex px-20 pb-24 pt-5 justify-center items-center gap-10">
              <div className="flex grow shrink basis-0 flex-col justify-center items-start gap-6">
                <div className="self-stretch h-12 flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch text-zinc-700 text-3xl font-semibold leading-10">
                    Our Story
                  </div>
                  <div className="w-14 h-2 bg-stone-400" />
                </div>
                <div className="self-stretch text-justify text-zinc-700 text-sm font-normal leading-7">
                  Founded in 2003 by President Alexander Tan, EGMP International
                  Corporation has established itself as a trusted and reputable
                  licensed recruitment agency from the Philippines. With more
                  than 20 years of experience in the industry, EGMP is an well
                  recognized recruitment powerhouse that has grown from serving
                  Southeast Asian markets to expanding its dominant presence in
                  the Middle East. Now, we are setting our sights on Europe, the
                  United States, and Canada, aiming to replicate our success and
                  deliver exceptional recruitment services across borders.
                </div>
              </div>
              <div className="w-96 h-80 p-10 bg-brand-base rounded-full justify-center items-center flex">
                <div className="grow shrink basis-0 self-stretch pr-px bg-white rounded-full border-8 border-white justify-start items-center inline-flex">
                  <img
                    src="/egmp-image.png"
                    alt="about-header"
                    width={407}
                    height={272}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-20 pb-28" id="button-2">
            <div className="flex pb-24 justify-center items-center gap-10">
              <div className="w-96 h-72 p-10 bg-brand-base rounded-full justify-center items-center flex">
                <div className="grow shrink basis-0 self-stretch pr-px bg-white rounded-full border-8 border-white justify-start items-center inline-flex">
                  <img
                    src="/egmp-employee.png"
                    alt="about-header"
                    width={346}
                    height={231}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-center items-start gap-6 inline-flex">
                <div className="self-stretch h-12 flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch text-zinc-700 text-3xl font-semibold leading-10">
                    Why Choose Us?
                  </div>
                  <div className="w-14 h-2 bg-stone-400" />
                </div>
                <div className="self-stretch text-justify text-zinc-700 text-sm font-normal leading-7">
                  {`Over the course of our 20 years of operation, we take immense
                  pride in facilitating the deployment of approximately 30,000
                  workers to date, connecting them with quality jobs that
                  directly contribute to the improvement of their respective
                  families' lives. Our unwavering commitment to excellence has
                  garnered recognition within the industry, placing our CEO
                  among the esteemed leaders as the Vice President of PEACEME
                  (Philippine Employment Agency for Corporate Employers in the
                  Middle East).`}
                  <br /> Furthermore, we have solidified our position as early
                  innovators in the field of business processes. By introducing
                  automation, we have not only benefited 200 other recruitment
                  agencies in the Philippines but also elevated the overall
                  recruitment process within our industry. This accomplishment
                  showcases our dedication to staying at the forefront of
                  advancements and continuously enhancing our services.
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-20 pb-28" id="button-3">
            <div className="px-20 pb-24 flex-col justify-center items-center gap-10 inline-flex">
              <div className="self-stretch h-12 flex-col justify-start items-center gap-1 flex">
                <div className="self-stretch text-center text-zinc-700 text-3xl font-semibold leading-10">
                  Vision & Mission
                </div>
                <div className="w-14 h-2 bg-stone-400" />
              </div>
              <div className="self-stretch h-96 flex-col justify-start items-start gap-10 flex">
                <div className="self-stretch p-6 bg-white rounded-2xl justify-center items-center gap-6 inline-flex">
                  <div className="w-28 h-28 px-3.5 py-3.5 rounded-2xl justify-center items-center flex">
                    <div className="w-24 h-24 relative flex-col justify-start items-start flex">
                      <img
                        src="/arrow-icon.png"
                        alt="about-header"
                        width={92}
                        height={92}
                      />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-stone-400 text-xl font-semibold leading-7">
                      Our Mission
                    </div>
                    <div className="self-stretch text-zinc-700 text-sm font-normal leading-7">
                      Our Mission is to make life better - one job, one family
                      at a time.
                      <br />
                      To achieve this mission, we ensure we provide quality
                      employment that lives up to its promise while
                      simultaneously connecting families to valuable livelihood
                      programs within the Philippine business community as an
                      alternative potential source that may lead the worker and
                      his family to another path of opportunity as entrepreneur.
                    </div>
                  </div>
                </div>
                <div className="self-stretch p-6 bg-white rounded-2xl justify-center items-center gap-6 inline-flex">
                  <div className="w-28 h-28 relative rounded-2xl">
                    <img
                      src="/eye-icon.png"
                      alt="about-header"
                      width={120}
                      height={120}
                    />
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-stone-400 text-xl font-semibold leading-7">
                      Our Vision
                    </div>
                    <div className="self-stretch text-zinc-700 text-sm font-normal leading-7">
                      Our vision is to be the premier recruitment gateway in the
                      Philippines, known for our dedication to excellence that
                      exemplifies the best of what Philippine recruitment has to
                      offer.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-20 pb-28" id="button-4">
            <div className="px-20 pb-24 flex-col justify-center items-center gap-10 inline-flex">
              <div className="self-stretch h-12 flex-col justify-start items-center gap-1 flex">
                <div className="self-stretch text-center text-zinc-700 text-3xl font-semibold leading-10">
                  Core Values
                </div>
                <div className="w-14 h-2 bg-stone-400" />
              </div>
              <div className="self-stretch text-center text-zinc-700 text-sm font-normal leading-none">
                At EGMP, we hold a set of core values that shape our approach
                and guide our actions.
              </div>
              <div className="self-stretch justify-start items-start gap-10 inline-flex">
                <div className="grow shrink basis-0 h-52 p-6 bg-white rounded-2xl justify-start items-start gap-6 flex">
                  <div className="w-20 h-20 px-2.5 pt-3.5 pb-4 bg-gradient-to-b from-white to-amber-300 rounded-lg justify-center items-center flex">
                    <div className="w-14 h-12 relative"></div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
                      ETHICAL, RULE BASED PRACTICES
                    </div>
                    <div className="self-stretch text-justify text-zinc-700 text-sm font-normal leading-7">
                      We uphold the highest ethical standards in all our
                      endeavors. Integrity, honesty, and respect for all
                      stakeholders are the foundation of our operations. We
                      prioritize fairness, transparency, and compliance with
                      laws and regulations, ensuring that our interactions and
                      decisions are guided accordingly.
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-52 p-6 bg-white rounded-2xl justify-start items-start gap-6 flex">
                  <div className="w-20 h-20 px-2.5 pt-3 pb-2.5 bg-gradient-to-b from-white to-amber-300 rounded-lg justify-center items-center flex">
                    <div className="w-14 h-14 relative"></div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
                      QUALITY JOBS THAT UPLIFT LIVES
                    </div>
                    <div className="self-stretch text-justify text-zinc-700 text-sm font-normal leading-7">
                      We are committed to offering job opportunities that have a
                      positive impact on the lives of jobseekers. We understand
                      that employment is not only a means of income but also a
                      crucial factor in personal growth and fulfillment. By
                      connecting candidates with quality employment that lives
                      up to its promise.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-10 inline-flex">
                <div className="grow shrink basis-0 self-stretch p-6 bg-white rounded-2xl justify-start items-start gap-6 flex">
                  <div className="w-20 h-20 px-2.5 pt-4 pb-3.5 bg-gradient-to-b from-white to-amber-300 rounded-lg justify-center items-center flex">
                    <div className="w-14 h-12 relative"></div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
                      EXCELLENCE IN BUSINESS
                    </div>
                    <div className="self-stretch text-justify text-zinc-700 text-sm font-normal leading-7">
                      We pursue excellence in all aspects of our operations.
                      From our customer service to our recruitment processes, we
                      strive to exemplify the best practices in the industry.
                      Through continuous improvement, technological innovation,
                      and a commitment to delivering exceptional results, we aim
                      to set new standards of excellence in the recruitment
                      sector.
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-60 p-6 bg-white rounded-2xl justify-start items-start gap-6 flex">
                  <div className="w-20 h-20 px-4 py-2.5 bg-gradient-to-b from-white to-amber-300 rounded-lg justify-center items-center flex">
                    <div className="w-12 h-14 relative"></div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
                      GETTING THE JOB DONE
                    </div>
                    <div className="self-stretch text-justify text-zinc-700 text-sm font-normal leading-7">
                      We take pride in getting the job done that meet or exceed
                      client expectations. This is the bottom line. We
                      understand the importance of timely and efficient
                      delivery, and we are dedicated to meeting our commitments.
                      By closely collaborating with our clients and maintaining
                      open communication, we ensure that their recruitment needs
                      are understood and fulfilled to their satisfaction.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-10 inline-flex">
                <div className="grow shrink basis-0 h-52 p-6 bg-white rounded-2xl justify-start items-start gap-6 flex">
                  <div className="w-20 h-20 px-2.5 pt-3.5 pb-3 bg-gradient-to-b from-white to-amber-300 rounded-lg justify-center items-center flex">
                    <div className="w-14 h-14 relative"></div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
                      PROFESSIONALISM
                    </div>
                    <div className="self-stretch text-justify text-zinc-700 text-sm font-normal leading-7">
                      We maintain a high level of professionalism in all our
                      interactions. Our team members are knowledgeable,
                      courteous, and dedicated to providing the best possible
                      service. We treat all individuals with respect, act with
                      integrity, and maintain confidentiality to build trust and
                      establish long-lasting relationships.
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch p-6 bg-white rounded-2xl justify-start items-start gap-6 flex">
                  <div className="w-20 h-20 px-2.5 py-2.5 bg-gradient-to-b from-white to-amber-300 rounded-lg justify-center items-center flex">
                    <div className="w-14 h-14 relative"></div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
                      SERVICE TO THE COMMUNITY
                    </div>
                    <div className="self-stretch text-justify text-zinc-700 text-sm font-normal leading-7">
                      To live up to our mission, we do not just focus on
                      providing quality jobs but also reach out to the workers
                      families by connecting them to business opportunities in
                      the hope of introducing entrepreneurship as an alternative
                      livelihood.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-20 pb-10">
            <div className="grid grid-cols-2 pb-5">
              <div className="flex justify-end items-center px-10">
                <img
                  src="/1image.png"
                  alt="about-header"
                  width={185}
                  height={356}
                />
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="left-96 top-40 pb-10 text-stone-400 text-5xl font-normal leading-10">
                  20+ Years in the Recruitment
                  <br />
                  Business and Still Going
                </div>
                <div className="left-96 top-80 pb-10 text-stone-400 text-4xl font-normal leading-10">
                  {`The Filipino's choice...`}
                </div>
                <div className="left-96 top-96 pb-10 text-stone-500 text-3xl font-normal leading-10">
                  {`Changing one Filipino's life at a time,`}
                  <br />
                  Your Success, is Our Business...
                </div>
              </div>
            </div>
            <div className="h-1 left-80 top-10 bottom-5 bg-stone-400" />
          </div>
        </div>
      </div>
      <div className="bg-white bottom-0">
        <Footer />
      </div>
    </div>
    </>
  );
};

export default Testimonial;
