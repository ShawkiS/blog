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
    <Header title="#1 September 🦸‍♂️ Newsletter" date="September 30, 2020" views={views} />
    <Head>
      <meta property="og:site_name" content="Shawki Sukkar's website" />
      <meta name="twitter:site" content="@shawkisukkar" />

    </Head>

    <P>
      <em>
        A lot of coming ventures!
      </em>
    </P>

    <P>
      <em>
        Welcome to My Journey to Invent the Future monthly newsletter where I share my journey as a 17 y/o aiming to lead the next big tech breakthrough, so for this month, I've had a great one and it’s a beginning for a lot of cool things for the coming months!
      </em>
    </P>

    <H2 id="static-is-the-new-dynamic">What’s Special About this Month? 🚀</H2>
    <P>
      I Joined
    <a
        href="https://confluxnetwork.org/"
        target="_blank"
      >Conflux</a> which is a <b>$400 million</b> company building a breakthrough protocol as a <b>Consultant</b> (areas of blockchain architecture, distributed systems, consensus algorithms) and <b>Full-Stack Developer</b> supervised <b>by Prof. Andreas Veneris</b>!
    </P>
    <P>
      I’ll also start working with Prof. Andreas at <b>UofT</b> on research and development of stuff related to decentralized protocols, cryptoeconomics, and privacy!.
    </P>

    <P>
      I’ve started my program at     <a
        href="https://tks.world/"
        target="_blank"
      >The Knowledge Society</a> which is a 10-month accelerator program focusing on emerging technologies!
    </P>

    <P>Some updates for my fellowship at The DMZ with one month of my experiment, and here are some details:</P>
    <UL>
      <LI>
        The goal of my project is to make learning advanced topics more accessible and more scalable to have more deep-workers!
      </LI>

      <LI>
        I designed a model and I am testing it, I presented it to more than 20+ people working on top EdTech companies and 15+ user interviews and I learned a lot and got a lot of feedback.
      </LI>

      <LI>
        I got $10,000 of scholarships from ConsenSys to give via Brainia and to run the model I built.
      </LI>
      <LI>
        We had visiting instructors from Microsoft, IBM, and Ethereum Foundation and I am also so happy that we had our first supporting organization which is Baseline Protocol!
      </LI>
    </UL>
    <P>
      I also talked at the BSIC Annual Conference – Tools for an Inclusive Future about my experience during the Ethereum Foundation scholarship and after it and how blockchain companies can have a stronger impact in the MENA!
    </P>
    <H2 id="static-is-the-new-dynamic">What did I learn About? 📚</H2>
    <P>I am learning more about protocols and I am focusing on scalability and smart contracts language and surprisingly I am spending time on Enterprise Blockchain! a cool thing I’ve done, I edited the Libra Move language and added a new native function and adding the string type to the language as I am trying to go deep into the Libra Core Protocol!</P>
    <P>I started to learn about AI and trying to explore different areas and understand how it evolved and I am exploring other fields like Quantum Computing, Synthetic Biology, and Edge Computing, and I am also enjoying learning Rust and playing with different Rust protocol clients!</P>
    <H2 id="static-is-the-new-dynamic">What is Next for the Coming Month? 🧠</H2>
    <P>I’ll keep learning about AI to have enough theoretical knowledge to start building small things and I’ll also go deep into the problem of Oracles in the blockchain and keep learning and exploring different things, some stuff in mind: read a lot about Physics, learn about Mental Models, and finish reading the Out of Control Book and read Zero to One.</P>

  </Post>
));

export default Page;
