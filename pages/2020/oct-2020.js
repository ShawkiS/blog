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
        <Header title="#2 October 🎃 Newsletter" date="September 30, 2020" views={views} />
        <Head>
            <meta property="og:site_name" content="Shawki Sukkar's website" />
            <meta name="twitter:site" content="@shawkisukkar" />
        </Head>



        <P>
            <em>
                Welcome to My Journey to Invent the Future monthly newsletter where I share my journey as a 17 y/o aiming to lead the next big tech breakthrough!
      </em>
        </P>

        <H2 id="static-is-the-new-dynamic">Applied for my Visa to Canada</H2>

        <P>
            A great update about #BringShawkiToCanada, I applied for my student visa, I also traveled to Beirut, and gave my biometrics! 🚀
    </P>

        <H2 id="static-is-the-new-dynamic">Open Finance Project Grant 💰</H2>

        <P>
            So yes this is somehow shocking but I am working on an open-finance (DeFi) project with a team and we received a grant, I can’t say more but expect an MVP soon :)
    </P>

        <P>
            I know I’ve been always talking bad things about DeFi but a good way to really explore it is to build something!
    </P>


        <H2 id="static-is-the-new-dynamic">Learning 📚</H2>


        <UL>
            <LI>
                More AI Stuff 🤖 + 🏥, I started to learn some Machine Learning concepts and it seems cool, I tried to build different things and try to code the concepts I am learning, I also was exploring AI in healthcare and it seems the application area that excites me the most.
      </LI>

            <LI>
                I am becoming a lot better in the Move Language and I keep exploring virtual machines and compilers, trying to understand Libra more by going deeper into the protocol, and as I mentioned before I am spending time on the Oracles problem and understanding how Open-Finance works.
      </LI>

            <LI>
                I am also spending a lot of time trying to develop my focus, apply deep-work, become a more effective learner and I am trying to understand more what I really want to work on.
      </LI>
        </UL>

        <H2 id="static-is-the-new-dynamic">Some Great Advice I Got During the Month💡</H2>


        <UL>
            <LI>
                You get things done and enjoy what you’re doing by finding the desire and think in the long term, so if you struggle with doing the task you have to remember the end goal, the same for not getting distracted is by building the environment around you for achieving that desire.
  </LI>

            <LI>
                Great people don't need motivation because they're not driven by emotions, they're driven by discipline. (if you’re driven by motivation what will happen if you got depressed).
  </LI>

            <LI>
                There is nothing wrong with what you want, you just want it, you don't choose it so the thing is to use it.
  </LI>

            <LI>
                Having a high-level desire is not enough, you have to build a strategy for it to be able to use it during the day when you feel you want to stop or doing things you don't like, one cool thing is to try to put it everywhere so you keep getting reminded of it.

  </LI>
        </UL>

        <H2 id="static-is-the-new-dynamic">Next Month ⏭️</H2>

        <P>I’ll be focusing on getting the Deep Learning Specialization from Deeplearning.ai, making progress on the DeFi project I am working on with keeping studying some physics, and working on developing my focus, my ability to do deep-work and Build Good Habits (you know what I am going to read :)</P>

    </Post>
));

export default Page;
