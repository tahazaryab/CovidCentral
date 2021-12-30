import Router from 'next/router';
import styles from '../../styles/Feed.module.css';
import { useRouter } from 'next/router';
import { Toolbar } from '../../components/toolbar';


export const Feed = ({ pageNumber, articles }) => {
const router = useRouter();


if(articles) {
    return (
        <div className='page-container'>
           
    

            <div className = {styles.toolbar}>
                <div className={styles.home} onClick={() => router.push('/')}>Home</div>
                <div className={styles.feed} onClick={() => router.push('/feed/1')}>Feed</div>
                <div onClick={() => window.location.href = 'https://github.com/tahazaryab'}>Github</div>
            </div>
  
            <div className={styles.break}>
            <br></br>
            <br></br>
            </div>

            <div className={styles.break2}>
            <br></br>
            </div>


            <div className={styles.main}>
                {articles.map((article, index) => (
                    <div key={index} className={styles.post}>
                        <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
                        <p>{article.description}</p>
                        {!!article.urlToImage && <img src={article.urlToImage}></img>}
                    </div>

                ))}
        </div>

        <div className={styles.bottombar}>
            <div className={styles.paginator}> 
                    <div 
                    onClick={() => {
                        if(pageNumber > 1) {
                            router.push('/feed/' + (pageNumber - 1)).then(() => window.scrollTo(0,0));
                        }

                    }}
                    className={pageNumber === 1? styles.disabled : styles.active}>
                        Previous Page
                    </div>

                    <div>{pageNumber}</div>

                    <div 
                    onClick={() => {
                        if(pageNumber < 5) {
                            router.push('/feed/' + (pageNumber + 1)).then(() => window.scrollTo(0,0));
                        }

                    }}
                    className={pageNumber === 5? styles.disabled : styles.active}>
                        Next Page
                    </div>

            </div>
        </div>
    </div>
    );
}
else {
    return <h3>No Articles</h3>
}
};

export const getServerSideProps = async pageContext => {

    const pageNumber = pageContext.query.page;

    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
        return {
            props: {
                articles: [],
                pageNumber: 1,
            }
        }
    }

    const apiResponse = await fetch(
        
        'https://newsapi.org/v2/top-headlines?country=ca&pageSize=5&page=' + pageNumber,
        {
            headers: {
                Authorization: '8d7684022c7c4a4382d2e8e641f1faa4',
            },
        },
    );

    const apiJson = await apiResponse.json();
        

    const { articles } = apiJson;

    return {
        props: {
            articles: articles || null,
            pageNumber: Number.parseInt(pageNumber) || null,
        }
    }
};

export default Feed;