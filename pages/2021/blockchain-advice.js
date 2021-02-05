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
        <Header title="Things To Do When You Get Into Blockchain" date="January 17, 2021" views={views} />
        <Head>
            <meta property="og:title" content="Things To Do When You Get Into Blockchain" />
            <meta property="og:site_name" content="Shawki Sukkar's website" />
            <meta
                property="og:description"
                content="Some lessons learned from one year in blockchain"
            />
            <meta name="twitter:site" content="@shawkisukkar" />
        </Head>



        <P>
            I learned about Blockchain more than a year ago and during that time I learned a lot of things and I was thinking what is an article I wish I read that would help me to accelerate my learning and get more value and this is what is this article about.
        </P>

        <H3 id="static-is-the-new-dynamic"><b>Learn The Foundations:</b></H3>
        <P>I can't stress this enough but I think one of the things that could save me a lot of time if I spent some time, in the beginning, to become a better coder, have some understanding of some computer science stuff, and read some history, if you check the Bitcoin's Academic Pedigree, you see that Bitcoin was a result of a lot of research and experiments and understanding this can give you an idea how much computer science was used to have Bitcoin so for that resoan I think you should be spending a little time at the beginning on topics like Cryptography, Distributed Systems, and Security and some time on Economics and Game Theory and then keep learning more about them along the way. one thing that could help me if I knew what First Principles (check <a target="_blank" href="https://fs.blog/2018/04/first-principles/">this</a> article) are so I can have a tool to know what makes sense and what doesn't and it can help when you're trying to go deep into an idea. don't spend a lot of time on the theory, maybe just the first two months, and then only spend 20-30% of the time.
        </P>

        <H3 id="static-is-the-new-dynamic"><b>Build Things:</b></H3>
        <P>Richard Feynman said, “What I cannot create I do not understand” and that should be the rule you follow, you should be spending most of your time building Proof-of-Concepts of the ideas you're learning, things will be tough, it's not easy to build a bitcoin wallet, SegWit or a Proof-of-Work PoC but I guarantee you won't understand those things until you build them with the minimum amount of libraries. I think it feels a little bad at the beginning that you're building things that no one looking at or using but that's the only way you'll be building cool things in the future, start small and then build something cool. sometimes, I spent the whole day in the same function and nothing worked but when it worked a few days after it gets solved, you'll really understand that cryptography function or that networking part, the only thing that you have to do is don't stop. One other thing I learned it in the hard way, don't copy or look into other people's code why you're learning that won't give you the full value of the experience!</P>

        <H3 id="static-is-the-new-dynamic"><b>Contribute to Open Source:</b></H3>
        <P>The single most common advice that you'll get from people is contributing to open-source projects and this really the hardest part, I think one of the things you have to do after some few months is picking a project, you're really excited about, set a meeting with someone working on it and try to get some mentoring to contribute to it, the most important part here is the commitment, don't even try to set excuses, if you do, you'll find an excuse with every project you try to contribute to, so just commit for 3 months that you'll spend 6 hours a day trying to contribute to that project. one thing I think you should do is start with an issue right away, I guarantee you won't get value from reading the code as much as when you set it on your environment and start trying to do that issue. Also, I think this way that 90% of people in the crypto space got internships or jobs from.</P>
        <H3 id="static-is-the-new-dynamic"><b>Don't Get Distracted, Boring Stuff are More Exciting:</b></H3>
        <P>There will be a lot of hype (price, funding, celebrity tweeting, halving) and it's so distracting and may be exciting but the thing that really matters at the end is the code you push that people use! you should be focusing on the important stuff and not be following the trend, it mostly will disappear after a year or something, one of the reasons I mentioned first principles at the beginning is to find if this trend makes sense or not.</P>
        <H3 id="static-is-the-new-dynamic"><b>Be Always a Beginner:</b></H3>
        <P>Maybe Ethereum won't work, maybe it will, maybe Bitcoin is important, maybe it's not but none of that really matters because it will change the more you know, what matters is that you keep having the beginner mindset and be curious and learn about the technology, just don't be a maximalist, that also is not welcoming to people to space.</P>

    </Post>
));

export default Page;
