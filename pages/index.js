import Layout from "../components/layouts/main";
import NextImage from "next/image";
import { posts } from "../posts";

export function getStaticProps() {
  return {
    props: {
      posts: posts.map(post => ({
        ...post,
        url: `${new Date(post.date).getFullYear()}/${post.id}`,
      })),
    },
  };
}

const Home = ({ posts, date }) => (
  <Layout>
    <div className="column-left">
      <NextImage
        src="/images/shawki.jpg"
        width={180}
        height={180}
        layout="fixed"
      />
      <p class="bio">17 y/o blockchain researcher and software engineer</p>
      <p>have a challenge? 👇</p>
      <p>shawkisukkar@gmail.com</p>
    </div>


    <h2>Now: 🚀</h2>
    <p>In a 10-month accelerator program called <a target="_blank" href="https://tks.world/">The Knowledge Society</a>, Learning about AI.</p>
    <p>Creating <a target="_blank" href="https://zbuilders.io/">Zbuilders.io</a></p>

    <h2>Where I've Worked: ✔️</h2>
    <p><a target="_blank" href="https://confluxnetwork.org/">Conflux Network</a> - <i>Full-Stack Developer & Consultant
                        Intern</i></p>
    <ul>
      <li>
        Built a DeFi project to create, manage web3 assets, make it easier to invest in DeFi, build and
        manage a portfolio, the project became a startup (received $15k grant)
                    </li>
    </ul>
    <p><a target="_blank" href="https://www.utoronto.ca/">University of Toronto</a> - <i>Research Assistant</i></p>
    <ul>
      <li>Worked with Prof. Andreas Veneris group on protocols engineering and design (Virtual Machines
                        and Oracles)</li>
    </ul>
    <p><a target="_blank" href="https://oceanprotocol.com/">Ocean Protocol</a> - <i> Blockchain Researcher Intern</i>
    </p>
    <ul>
      <li>Worked on Web3 Development and Researched on integrating with with other platforms, data wallet
                        + tokens (built a POC).</li>
    </ul>
    <p><a target="_blank" href="https://wizme.com/">Wizme</a> - <i>Software & Infrastructure Developer Intern</i></p>
    <ul>
      <li>Built a testing, DevOps infrastructure, working on the engineering standards, moved the team
                        into an Agile, Scrum and OKRs and developed libraries for AWS.</li>
    </ul>
    <p><a>Craft Lab</a> - <i>Full Stack Developer Intern</i></p>
    <ul>
      <li>Built audiobooks application, started a LMS project, and developed
                        libraries from scratch.</li>
    </ul>

    <h2>Things I've Done: 👨‍💻🧱</h2>


    <p>Consulted to Instacart 🥕</p>
    <p>Was an Ethereum Foundation scholar (selected as 2nd top scholar, attend the program in Osaka, Japan, became ConsenSys certified developer)</p>
    <p>Worked on an EdTech project while I was a fellow at <a target="_blank" href="https://dmz.ryerson.ca/">The DMZ</a> + run an experiment with collaboration from  <a target="_blank" href="https://consensys.net/">ConsenSys</a> (received $10k grant)</p>
    <style jsx>{`
       .column-left {
        width:17%;
        height:auto;
        margin-left: 6%;
        float:left;
     }
      ul li {
        padding: 10px 15px;
      }

      ul li span {
        color: #5b5b5b;
        display: block;
        font-size: 13px;
      }

      p a {
        font-weight: bold;
        color: var(--link-color);
        text-decoration: none;
      }

      @media (any-hover: hover) {
        p a:hover {
          background: #eee;
        }

        p a:active {
          background: #ccc;
        }
      }

      @media (min-width: 500px) {
        ul, h2, p {
          max-width: 42rem;
          margin: auto;
        }
        
        p {
          padding: 5px 0;
          max-width: 42rem;
          margin: auto;
        }

        ul li {
          padding-left: 0;
          list-style-type: initial;
        }

        .column-left ul li {
          list-style-type: none;
        }

        ul{
          padding-left: 1.5rem;
         }

        ul li a {
          padding: 10px 15px;
          transition: 150ms background-color ease-in;
        }

        ul li span {
          display: inline-block;
          width: 160px;
          padding-right: 10px;
          text-align: right;
          font-size: inherit;
        }
      }
    `}</style>
  </Layout >
);

export default Home;
