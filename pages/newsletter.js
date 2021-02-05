import Layout from "../components/layouts/main";
import Link from "next/link";
import { newsletters } from "../newsletter.json";

export function getStaticProps() {
  return {
    props: {
      newsletters: newsletters.map(newsletter => ({
        ...newsletter,
        url: `${new Date(newsletter.date).getFullYear()}/${newsletter.id}`,
      })),
    },
  };
}

const Newsletter = ({ newsletters, date }) => (
  <Layout>
    <ul>
      {newsletters.map(newsletter => (
        <li key={newsletter.id}>
          <span>{newsletter.date}</span>
          <Link href={newsletter.url}>
            <a>{newsletter.title}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      ul li {
        padding: 10px 15px;
      }

      ul li span {
        color: #5b5b5b;
        display: block;
        font-size: 13px;
      }

      ul li a {
        font-weight: bold;
        color: var(--link-color);
        text-decoration: none;
      }

      @media (any-hover: hover) {
        ul li a:hover {
          background: #eee;
        }

        ul li a:active {
          background: #ccc;
        }
      }

      @media (min-width: 500px) {
        ul {
          padding: 20px 0;
          max-width: 42rem;
          margin: auto;
        }

        ul li {
          padding-left: 0;
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
  </Layout>
);

export default Newsletter;
