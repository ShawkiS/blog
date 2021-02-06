import Post from "../../components/layouts/post";
import P from "../../components/post/paragraph";
import Header from "../../components/post/header";
import Quote from '../../components/post/quote'
import { H2, H3 } from "../../components/post/heading";
import withViews from "../../lib/with-views";
import Head from "next/head";
import getTweets from "../../lib/get-tweets";

export async function getStaticProps() {
    const tweets = await getTweets(Page);
    return { props: { tweets } };
}

const Page = withViews(({ tweets, views }) => (

    <Post tweets={tweets}>
        <Header title="Experiences You Should Seek" date="February 6, 2021" views={views} />
        <Head>
            <meta property="og:title" content="Experiences You Should Seek" />
            <meta property="og:site_name" content="Shawki Sukkar's website" />
            <meta
                property="og:description"
                content="What experiences you should try to get?"
            />
            <meta name="twitter:site" content="@shawkisukkar" />
        </Head>



        <P>
        I was trying to make a decision on accepting an extension to keep working on the same project I am working on or trying to have more unique experiences, some people told me that the extension will give you financial stability but taking the safe option was not exciting to me because there was no chance of failure or adding something new to my package of experiences.  
        </P>
        <P>I was thinking if I do the normal stuff that all other people are doing, I am not doing anything different to achieve different results so I decided not to accept the offer but during that time, I had a lot of thinking about the experiences I should be trying to get and I'll try in this article to go through some of the things that I think you should look into when searching for opportunities if you're a young ambitious person.</P>

        <H3 id="static-is-the-new-dynamic"><b>Be Around Smart, Ambitious People:</b></H3>
        <P>The most important is to put yourself around people that you want to be like, people who'll show you how little you know and stupid you're right now! you have to observe how they think, learn from them directly, avoid the mistakes they've done and push you to do a lot more than you think you can!
        </P>
        <P>One thing I found so helpful about being around people that I want to be like is verifying if I really want to be like them.</P>
        <P>You want to be around people that will encourage you to say crazy, stupid ideas, the people who take their mission so seriously and are so serious about doing great things! </P>
        <Quote>It matters a lot who you surround yourself with. If you're surrounded by conventional-minded people, it will constrain which ideas you can express, and that in turn will constrain which ideas you have. But if you surround yourself with independent-minded people, you'll have the opposite experience: hearing other people say surprising things will encourage you to, and to think of more. --Paul Graham</Quote>

        <H3 id="static-is-the-new-dynamic"><b>Work on Something Cool:</b></H3>

        <P>For me, something cool is either working on a hard engineering problem or building an interesting product!</P>

        <P>Working on solving a hard engineering problem will teach you a lot, how to solve problems, processes to build complex things, give you a unique experience and it's will be so interesting if the problem you're working on is an unsolved problem before, that will teach you how to approach these kinds of problems too.</P>

        <P>Building an interesting product will be a cool experience, you'll learn a lot of things, how to build successful products, how to solve user problems, talk to users, take their feedback, iterate, and a lot of things about startups!</P>


        <H3 id="static-is-the-new-dynamic"><b>Work on Something You Care About: </b></H3>

        <P>You want to be working on something that excites you, a mission that let you push yourself a lot more because it's a problem that you want it to be solved for some internal resoan! working on things that you're not excited about won't give you a resoan to work extra 20 hours a week or do a lot more efforts!</P>

        <H3 id="static-is-the-new-dynamic"><b>First Time:</b></H3>

        <P>Don't work on things that you know about, work on things that you'll be trying to for the first time, you don't want to work with/on things you know about! you want to try and explore new a lot of different things.</P>

        <P>I guess something successful people tell young people a lot is not to sell their time and I think working with something you know about or repeated will consider selling your time which I guess is not good as you don't have to get money now and you should be exploring.</P>


        <H2 id="static-is-the-new-dynamic"><b>Four Things to Say No to:</b></H2>

        <H3 id="static-is-the-new-dynamic"><b>Say No to Average Opportunities:</b></H3>
        <P>If you want to do great unconventional things, average opportunities, and the opportunities that everyone is taking will not get you there! you shouldn't accept an opportunity that you won't learn something unique from, it's not better than nothing, you're spending time on it in the end! if you use the same time building things yourself or reading, it may be a lot more valuable! </P>
        <Quote>If you want above average results, you have to say no to average opportunities. If you spend all of your time chasing average opportunities, you'll have no time for great one. --Shane Parrish</Quote>

        <H3 id="static-is-the-new-dynamic"><b>Say No to Long-Term Commitments:</b></H3>
        <P>You shouldn't be in a long-term commitment that will miss you a lot of exploration, you mostly don't know what you really want to do in life so you don't want to limit yourself in one place for a long-time! </P>

        <H3 id="static-is-the-new-dynamic"><b>Say No to Limits:</b></H3>
        <P>Don't be in a place that will set limits for you, limits are not good if you're trying to learn new things as much as possible, one of the things I guess is good about working at startups is that you can contribute a lot more to the thing you're going to build and you can have an impact on that! be in a place that you'll do both development and product management, in another word be in a place that will force you to wear a lot of hats! one of the reasons to work with smart people, that they're bold, they try new things and they're open-minded.</P>


        <H3 id="static-is-the-new-dynamic"><b>Say No to Money: </b></H3>

        <P>You shouldn't do an internship or work on something for the money early on, now you don't have children or responsibilities so you shouldn't care about money at all! don't allow money to be a factor when you're making a decision, looking in the long-term, unique experiences can pay a lot more! </P>

        <Quote>You should trade being short-term low-status for being long-term high-status. --Sam Altman</Quote>

    </Post>
));

export default Page;
