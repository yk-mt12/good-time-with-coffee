import * as React from "react"
import { Helmet } from "react-helmet"

const Head = (props) => {
    const {title} = props
    return (
        <Helmet>
            <title>{title}</title>
            <meta
                name="description"
                content="Good Time with Coffee"
            />
            <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0"></meta>
	    {/* // OGPやフォントの記述も共通化するとGOOD! */}
            {/* OGP ここから */}
            <head prefix="og: https://good-time-with-coffee.netlify.app/" />
            <meta property="og:url" content="https://good-time-with-coffee.netlify.app/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Good Time with Coffee" />
            <meta property="og:description" content="コーヒーの抽出量を入力するだけで、豆の量を計算できます。コーヒーにとって重要な抽出時間もタイマーによって測れます。" />
            <meta property="og:site_name" content="Good Time with Coffee" />
            <meta property="og:image" content="../assets/image/ogp_coffee.png" />
            {/* OGP ここまで */}
	    {/* Google Font ここから */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600&family=Montserrat:wght@700&display=swap" rel="stylesheet" />
	    {/* Google Font ここまで */}
        </Helmet>
    )
}

export default Head