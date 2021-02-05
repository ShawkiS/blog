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
        <Header title="January❄️️Newsletter" date="February 3, 2021" views={views} />
        <Head>
            <meta property="og:site_name" content="Shawki Sukkar's website" />
            <meta name="twitter:site" content="@shawkisukkar" />
        </Head>



        <P>
            <em>
                Welcome to My Journey to Invent the Future monthly newsletter where I share my journey as a 17 y/o aiming to lead the next big tech breakthrough!
      </em>
        </P>

        <H2 id="static-is-the-new-dynamic">Extend My Contract?</H2>

        <P>
            I was trying to make a decision on accepting an extension to keep working on the same project I am working on or I should be trying to have more unique experiences and work on the things that’ll help me to achieve my ambitious goals, some people told me that the extension will give you financial stability but taking the safe option was not exciting to me because there was no chance of failure or adding something new to my package of experiences.
        </P>

        <P>
            I came across a video and Vinod Khosla (I had a call with Vinod this month too! which I guess is insane 😜) and he said to the audience ''90% of you will end up doing what's expected but the other five or ten percent will change the world" and I was thinking if I do the normal stuff that all other people are doing, I am not doing anything different to achieve different results.
        </P>

        <H2 id="static-is-the-new-dynamic">Zbuilders 🏗️</H2>

        <P>
            As I was thinking that I want to have unique experiences as much as possible I recognized that the current internship model is limiting, you can get the most value in the first one or two months, so I am thinking about a new model, I called it Buildships which is a built and shipped project in less than two months by a mentored student for a startup experimental or small project. I wrote on how I got the idea here.
        </P>
        <P>
            I don’t know if this will work or not but I have two goals to achieve out of this projects:
        </P>
        <UL>
            <LI>
                I want to learn how to launch something so fast and how to talk to users and improve based on their feedback, I asked Garry Tan on how to become better at building products and he told me ‘making products requires practice: it can only happen with users and a problem so if you can code something and ship it and iterate, that's the most valuable cycle‘.
      </LI>

            <LI>
                I want to bring more builders to the world.
          </LI>

        </UL>

        <H2 id="static-is-the-new-dynamic">Serverless 👻</H2>

        <P>
        I was thinking it's so crazy how easy it's to build things nowadays and I am trying to use tools like Airtable, Algolia, Cloudinary, and Vercel building Zbuilders and it’s crazy how fast you can build and how much fewer things you have to care about so you can start focusing on the core of the product!
        </P>

        
        <H2 id="static-is-the-new-dynamic">Explore🧐</H2>

        <P>
        This month I explored and learned a bit about gene editing and nanotechnology.
        </P>
        <H2 id="static-is-the-new-dynamic">Next ⏭️</H2>
        <UL>
            <LI>
            I am helping to hire a new developer for the project I’ll leave which I guess is exciting as it’s the first time I’ll be doing :)
      </LI>

            <LI>
            I want to build a small AI project and I think it will be generating product descriptions from images.
          </LI>

          <LI>
          Build Zbuilders MVP.
          </LI>

        </UL>

    </Post>
));

export default Page;
