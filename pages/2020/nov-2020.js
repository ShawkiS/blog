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
        <Header title="#3 November🥕👨‍💻 Newsletter" date="December 5, 2020" views={views} />
        <Head>
            <meta property="og:site_name" content="Shawki Sukkar's website" />
            <meta name="twitter:site" content="@shawkisukkar" />
        </Head>



        <P>
            <em>
                Welcome to My Journey to Invent the Future monthly newsletter where I share my journey as a 17 y/o aiming to lead the next big tech breakthrough!
      </em>
        </P>

        <H2 id="static-is-the-new-dynamic">Instacart 🥕</H2>

        <P>
            One of the most exciting highlights of this month that I had an Instacart X TKS Project on improving the shopping experience for Instacart customers.
    </P>

        <H2 id="static-is-the-new-dynamic">Learning 📚</H2>

        <P>
            I don’t know what exactly happened but I am enjoying coding more than anything nowadays, maybe because my focus is getting better! I coded a handwritten digit recognition learner from scratch, a Proof-of-Concept for Operational Transformation, and learned a lot of React best practices while coding for my DeFi project.
        </P>
        <P>
            I also learned how to use PyTorch and started with Deep Learning for Coders with Fastai and PyTorch book and I think it’s the best resource I came across until now.
        </P>

        <H2 id="static-is-the-new-dynamic">Next Month ⏭️</H2>

        <P>
            I’ll continue reading the Deep Learning for Coders with Fastai and PyTorch book and I am planning to work on a small project :) I am also trying to spend 1 hour a day doing coding challenges and will be reading about Mental Models for this month.
    </P>

        <P>
            One thing I’ll try to do this month too is to publish some articles.
    </P>
    </Post>
));

export default Page;
