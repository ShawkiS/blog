import Post from "../../components/layouts/post";
import P from "../../components/post/paragraph";
import Header from "../../components/post/header";
import { H2, H3 } from "../../components/post/heading";
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
        <Header title="Some Advice for your Next Internship" date="December 28, 2020" views={views} />
        <Head>
            <meta property="og:title" content="Some Advice for your Next Internship" />
            <meta property="og:site_name" content="Shawki Sukkar's website" />
            <meta
                property="og:description"
                content="Lessons learned from my internship experiences"
            />
            <meta name="twitter:site" content="@shawkisukkar" />
        </Head>



        <P>
            I am currently doing my 4th internship at Conflux Network, other than spending some months with other projects, startups, and programs, I failed a lot and learned a lot, and that what mattered to me, it was all a learning experience, if I didn't do those experiences I won't know the wrong things! the article has some stuff I learned that will help you to get most out of your internship!
        </P>

        <H3 id="static-is-the-new-dynamic"><b>Pre-Internship Part (If you didn't get an internship yet):</b></H3>
        <UL>
            <LI>
                You should learn how to reach out that will get you more interviews, you should at least cold reach out a 100 people to get 5 offers at the end, you have to know that startups/companies won't give you an internship only to learn, you have to show your potential and what value you're capable of delivering.
  </LI>

            <LI>
                If you're in a conference, think about a way to make a fast impression, most of the people will take your resume and that's it so you have to do your research before to be able to hack them.
  </LI>

            <LI>
                Don't just accept your first internship offer, go into details about what you'll work on, who will mentor you, and place culture, sometimes building things by yourself will make you grow more so getting an internship won't be always the best option to grow.
  </LI>

        </UL>
        <H3 id="static-is-the-new-dynamic"><b>When you Get the Internship:</b></H3>
        <UL>
            <LI>
            Meet everyone, you don't know who knows who and what you can get out of a meeting, if you don't get a mentor, try to get one, find someone who cares about you and who has the experience you want to get.
  </LI>

            <LI>
            If you get to intern at a startup, probably they're so busy and you won't be a priority so you should be driven and find something to work on by yourself and that's the only way that you'll get the trust to work on important things.

  </LI>

            <LI>
            If you are interning at a startup, probably they have some extra money for now and in the soon future they may not so you have to find things that make you important if you're planning to get a job there.
  </LI>

  <LI>
  Don't take very big projects, I am not saying you have to stay in your comfort zone, push yourself but you have to take things that can be delivered at the end of the internship.
  </LI>

  <LI>
  Start building a soon as possible and take as much feedback as you can, maybe try to have daily sync with someone, for me after trying multiple ways, this one is the best that will allow you to get constant feedback, you don't want only to get feedback when you kicked out.
  </LI>
  <LI>
  Clear communication is much harder than you think, in the end, if you don't communicate well with your mentors and things don't get done that's your problem.
  </LI>  

    <LI>
    It requires some ego to get things done, get a reputation that you're a person who gets things done, if you lose your reputation it's hard to get back.
  </LI>

      <LI>
      Read the Deep Work book, deep work will help you deliver, you have to be so focused, everything else during those months shouldn't be important, you should use Saturday and Sunday for learning the things you will need during the week, something else to learn is how to ask good questions, ask a lot of them.
  </LI>     

        </UL>
    </Post>
));

export default Page;
