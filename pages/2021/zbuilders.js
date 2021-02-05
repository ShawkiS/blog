import Post from "../../components/layouts/post";
import P from "../../components/post/paragraph";
import Header from "../../components/post/header";
import { H3 } from "../../components/post/heading";
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
        <Header title="Why I am Creating Zbuilders?" date="January 17, 2021" views={views} />
        <Head>
            <meta property="og:title" content="Why I am Creating Zbuilders?" />
            <meta property="og:site_name" content="Shawki Sukkar's website" />
            <meta
                property="og:description"
                content="Zbuilders"
            />
            <meta name="twitter:site" content="@shawkisukkar" />

        </Head>



        <P>
            I was talking to a student at the University of Waterloo and I was asking him on how he got so good at building projects and products and one thing he mentioned that he build small projects for startups in his free time or in the weekend and he told me that one of the benefits is that you don’t have to make a long commitment to get the experience of working at x and you get to work with the engineers there and get experiences with different technologies rather than working in one place for 6 months other than you can do that with other commitments and as I am searching for an internship and trying to find a way to get as many experiences as possible, I thought this is so cool, instead of getting one unique experience in 6 months, you get 6 unique experiences if you build one project a month and this where Zbuilders project idea came from!
        </P>

        <P>Instead of working with 10 people for 4 or 6 months, you can get work with 10 people every month, instead of having one mentorship experience, you got mentorship from 6 people, instead of exploring one thing, you explored 6 things.</P>

        <P>My hope is that <a target="_blank" href="http://zbuilders.io/">Zbuilders</a> will help students to gain a lot of interesting experiences with mentorship and startups to build projects fastly by smart people and also instead of hiring interns right away, you can see how they perform in one project.</P>
    </Post>
));

export default Page;
