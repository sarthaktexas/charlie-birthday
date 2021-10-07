import Head from 'next/head'

export default function HeadObject({children}) {
    const title = "The 17th Birthday of Charlie Brian Welsh.";
    const description = "A happy, happy birthday to Hack Club's local boomer: Charlie Brian Welsh!";
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={description} />
            {children}
        </Head>
    )
}
