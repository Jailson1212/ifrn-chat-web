import React from "react";
export const AppContainer = props => <div>{props.children}</div>
import Document, {Html, Head, Main, NextScript} from "next/document";
import { render } from "react-dom";

class MyDocument extends Document {
    static async initialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {... this.initialProps}
    }
    render() {
        return(
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto:300.400.500.700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
    
                    />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}


export default MyDocument