import Post from "../../components/layouts/post";
import P from "../../components/post/paragraph";
import Header from "../../components/post/header";
import { H2 } from "../../components/post/heading";
import UL, { LI } from "../../components/post/bullets-list";
import withViews from "../../lib/with-views";
import Head from "next/head";
import getTweets from "../../lib/get-tweets";

export async function getStaticProps() {
    const tweets = await getTweets(Page);
    return { props: { tweets } };
}

const Page = withViews(({ tweets, views }) => (

    <Post tweets={tweets}>
        <Header title="#4 December🏗️🏥 Newsletter" date="January 3, 2021" views={views} />
        <Head>
            <meta property="og:site_name" content="Shawki Sukkar's website" />
            <meta name="twitter:site" content="@shawkisukkar" />
        </Head>



        <P>
            <em>
                Welcome to My Journey to Invent the Future monthly newsletter where I share my journey as a 17 y/o aiming to lead the next big tech breakthrough!
      </em>
        </P>

        <H2 id="static-is-the-new-dynamic">AI For Medical Diagnosis 🏥</H2>

        <P>
            I worked on two projects this month that uses AI For medical diagnoses, I used Deep Learning to do brain tumor auto-segmentation for MRIs and chest x-ray diagnosis and it was a lot of learning! I’ll be writing an article about each of them soon to explain more :)
        </P>

        <H2 id="static-is-the-new-dynamic">Javascript 👨‍💻</H2>

        <P>
            Putting this image is shocking because I think I’ve told everyone how much I hate Javascript before, but a big part of this month was on Javascript, I was thinking that if I get so good at JS, it will help me to build products faster so I learned how to use NestJS, Next.js and learned how to work with TypeScript, I’ve worked with them before but it was only to do a specific task but this time it was so fun to go into details!
        </P>

        <H2 id="static-is-the-new-dynamic">Productivity 🤓</H2>

        <P>
            Elon Musk has the same 24 hours, exactly the same as all of us but he is like 20x more productive and I was thinking if you’re only 5x productive more than most people that mean you live and achieve 5x more than most people! I am spending time nowadays trying to build a framework for myself to be more productive, learn faster, and collect data as much as possible about how I spend time to improve (what you can't measure you can't improve)! btw, you have to take Ali Abdaal course about productivity, it’s really cool and it summarizes a lot of important stuff, you can check it here.
        </P>
        <H2 id="static-is-the-new-dynamic">Writing ✍️</H2>


        <P>
            I tried this month to write more, take notes, write reflections after meetings, end of the day, after reading or learning something and it was so cool and it feels so good! I didn’t add articles but I add an article, check ‘Some Advice for your Next Internship‘ <a target="_blank" href="./internship-advice.js">here</a>, I am also writing another one on how to offer a great internship and a one year guide to start with blockchain engineering.
        </P>

        <H2 id="static-is-the-new-dynamic">Explore🧐</H2>
        <P>
            I also spent some time learning about Longevity and Brain–computer interface and planing to explore other fields for the next month too!
        </P>
        <H2 id="static-is-the-new-dynamic">Next ⏭️</H2>
        <P>
        I’ll keep learning about deep learning, I am planing also to add Notes section to my website to share notes for courses and topics I am learning about, work on my self productivity framework and learn more about scientific thinking and probability!
        </P>
    </Post>
));

export default Page;
