import {Link} from "react-router-dom";

function GebeurtenisArtikel({ id, naam, waar, naamwaar, straat, plaats, organisator, opmerking }) {

    return (
        <article className="subreddit-article">

            {/*We gebruiken hier een <a> ipv <Link> omdat we naar een webpagina buiten onze applicatie linken */}
            <a href={url} className="subreddit-article-title-link">
                <h3>{formatEllipsis(title)}</h3>
            </a>

            <span>
        <p><Link to={`/Gebeurtenis/${subredditName}`}>{subredditNamePrefixed}</Link></p>

      </span>
        </article>
    );
}

export default SubredditArticle;
