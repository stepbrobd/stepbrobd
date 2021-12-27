import Head from "next/head"
import Link from "next/link"

import {Layout} from "../components/layout"

const GPG = () => {
    return (
        <Layout>
            <Head>
                <title>GPG | StepBroBD</title>
            </Head>
            <div className="font-bold text-3xl pb-8">
                <Link href="/gpg">
                    <a>GPG Public Key</a>
                </Link>
            </div>
            <code
                className="text-center block whitespace-pre overflow-x-scroll overflow-y-scroll sm:h-[750px] h-[450px] py-3">
                -----BEGIN PGP PUBLIC KEY BLOCK----- <br/>
                <br/>
                mQINBGGVsqcBEADk31meV9YH3J0auU9V6IG07oNW3WBOn9pLCaqOthWgdwG/H8yb<br/>
                FCTo+eKleE7o/n+DKMdDJzdFGif0vxPeH+AFyEg9zQr7F2/1fM5hwVrC3GdO1EZf<br/>
                KD0Re36wkW0Fqe80EuFmwMpJB9bWJ5qUAnoI+pghABLZtAWV2xV/4nelgq7qVGfE<br/>
                1lxcbwWE8oosbceHkUlHltyj7FB/1FWErwJYwfEVTUksxMt0yRqIiKYSt7CzUVq6<br/>
                mzI40t1MfyJ558r+lsfBJxJdHYkvBB42GsLRukTFK7agbEJUEeZjR5AU1VrbgH+L<br/>
                NTp4ZhSPugesVPL09neAhgCsZg9Ga4pG1t3VbhoDIBHRLbRRM8eM1GgcyCToFn1u<br/>
                AZvdQdNb+rGy8y/yUrcXUNh4kSGk4ZsejVI4BIgwPM+QIx87li5eG8Jc6Vop0KBH<br/>
                QiNqVplggSAPulY+asGU7ytcGVScbXe9qynVuIicsPbhpnu6C2HwRJQcjNITv4L4<br/>
                S275IvZvGXOWSI1D5ZTWVgNfzZ2tHGQRZroRpTBAFoCnEr8zhXn+oZUkOv2Tj7cq<br/>
                uDfcBBoSWWyKZLosiM82GJadHQ2zC9efARUQPBQdINcyAnJ/ZIHA2DrU6EiTF5Uf<br/>
                hr+Ma3RUo18l9ZO5B4ACxb9gRXhozqoNRLN/B9LNk+7ExndjcXGBpRlVtQARAQAB<br/>
                tBxTdGVwQnJvQkQgPEhpQFN0ZXBCcm9CRC5jb20+iQJOBBMBCAA4FiEEXYv6iyhq<br/>
                wu9u5IWY90K3LIkmGlEFAmGVsqcCGwMFCwkIBwIGFQoJCAsCBBYCAwECHgECF4AA<br/>
                CgkQ90K3LIkmGlH2OA/+MwpSsnT4q0pJQDupYH4gyL7W5jc47hqEwsiT0TPnyteu<br/>
                7bGa9eOesE4lZjvutBDZMV3cXflOjjj3T6cVYa2GQznrW4iK/Rcv36HseReZfoTy<br/>
                Y5UwLkqZMveixUYHWwgpSXeN+QBrOpDQYG6hv8Ah2n16AoBtktvPxka2S9YuuPP5<br/>
                rEC/tUBk43Y1MlmEA8ngcCVEkjRZTvt+6TmQnnYW/Bdj6nDUvCq88zjKepZqbCWD<br/>
                1E7T77iabEsBnSW2POsXTWeidX2p7SxOwdXfEZk9WBah60DhPDhYYJxS4h0bIj0N<br/>
                e4nLxr07sucs2Jea4FG4lPP2mn1VPG+1T4cdHZzdz6mW7tJ+e+iDQCtgHEVUTnFk<br/>
                ADwOrJrUMpG3ybkDGmZrFAphnHhZo0R/wc7nB26SbnrDvAtBQIjCqp0H4Tp6HzTq<br/>
                Bo+PyYUL+uLN/CmObGRzYn1Q3lvajufkVuEzj9lvdbYdBKwfTuTHUb6wbhZVxL8x<br/>
                Y1yoKb32Sq7dYErsIWNo5nZcj+uRDHMVfoFgtavYhMrp9oPc4NLdgA0PNf4Ixwor<br/>
                jvxnLqwR8aRZqJuM2czquTm8R/Ltkvt6hu9e/gCXPT/5zvz9usOGm7p026a7JhfB<br/>
                X/XbmpB7t0Ne+keFuUc+3/NoVypd1AakhGUwQCWRNBsg3cb+rMl2Xby3pTRrTgSJ<br/>
                AjMEEAEIAB0WIQSGCPoez1Y2VqC2Qg3BGbq7zMyk0wUCYZWy3QAKCRDBGbq7zMyk<br/>
                05zBD/9pMgYuJTmI4bRfhFR/WuTNGvkHb2dHq55jE44X4C0fr27Gkln5IXU1Spkc<br/>
                MZwzF9njMJdAU6oek+OnWb3VJ9zEScMjVkUYfhFi83ivdcZTbZuToT9vtwnk4CFi<br/>
                A6mpEmCyU4B6+i+lAhRrQvc7HQferCb4hkJvOnRpPOq20iLQcBLu/aQcbczjBytH<br/>
                wuZmeZHM7yXzgBAlhnW1cUAz7ims2VZbn8/VB9hkvU9UL0Wuiobip1OKGiTeoIVj<br/>
                7/ISzE/hDtTFzMuI4tsMORLgCqGDCrJ/FDJbw7xRCPK7IFJwh/3R9tShMDWXcqR0<br/>
                CTqoplhfqohrzCnRKESaayRKmSKeHZBaZ4FHLNR+iafdLobITUrzEOizYRCQGmJN<br/>
                PEr/LoA3Qc9AK0XBk0EQHrxXgWbH/VMsEgOnTQCBF08gtRsuP5rwFqpmq5GnSo/2<br/>
                cOF6dzp8fQfzBEDpkGwWjdsqICW4KPHDDaWpIx9L9ShA35gkcRCop5RDNK0m7InE<br/>
                mdyTuwC/MU0TzkliXSdSm3iQr9JfUT08bm4T1TZU9g991ceN7PMB3tnyajoqo0G6<br/>
                hQcABNRg9a8gqZcaJW6z1ccswbqhMA34oE8i2mGeTglD5ejbYbWkIF8BJqWSJi5Y<br/>
                WNxVnEwcybKaOPrUwRpXrN75Sz17GmgdKfWK0kHgDNzJVLF7PrkCDQRhlbKnARAA<br/>
                5Pihq13IrL4uSW/YXr/iDGWl7TI/x+NrSIw1jUOt7+l0kT4v9raR9XnvvGf4UvSf<br/>
                By47kV/O/FcuJ8nMEb7SHHefT7sWPFUxe8HDVJKgZHYS2nZmjfeW4VEnuXx1hAnM<br/>
                SSpWWq/xydCkJqLg5aSKV5kDbQgfmGE7CbW+6T3l/UKwIAFCIfDXlxxeigWsb2OZ<br/>
                3dOzQvZLbJBQCljX4feVsWpCV8oC2syqkwfYXQ7+vErPqUvN4TpfKtYfYhS9d2Uk<br/>
                QOSKO9Vj/YG/jivIdlGhKsJBOHuEXJ+m8ofsfFePDxxFLIbFrjRPi5pxJprN7QaM<br/>
                h7K/PPyLA/ax8YI1KSIPzffyE20T6MwBFjmMXoYuAyxPBmqPoEQOGnx1jGSPLwdV<br/>
                LJqDx1Cji01amS0hM959IjeB1HgeHQea2O1h9GYIjeW3F3tRlKCFQN7mzhb9BJEo<br/>
                uT5oeCQhOl9KbqC/AUtNwY+LIBkQ+rkEWeWbQW3gWnSNirdRhpU+5GTe3HCUcWDO<br/>
                4OUtU7AdvEexO9fV9ubGgO788Q2VvbkhZc27PZo19EcM0t+bbL6+xwUpsSEdl5OK<br/>
                6F3vF7Qw6snmomzAtV1bYh34bNsO8LTYUnL7M9N/gIaWR95l08FAULFIIlO8kPl9<br/>
                67FP8y0X7Hxp97SpcEHHlu/q3R2SUUo9msnphOFkrmcAEQEAAYkCNgQYAQgAIBYh<br/>
                BF2L+osoasLvbuSFmPdCtyyJJhpRBQJhlbKnAhsMAAoJEPdCtyyJJhpR6b0QAOKL<br/>
                QFyGoSNJ/Ye9trcgIBnenOJK01dt281ph6ab+aSH8XCbcWxeXy5SCdPcy9LVu6fX<br/>
                VlODsiip41Wn0BMaXkl2ntQp2Y4WhW+1EAsQusACvyEvtGwlAHgt5lM5NTTbaFlL<br/>
                emvbd1lG6r9JyXzCIwjWNLmCx+dTRnXjph6DTidx205EMKoqPI7SyDuUvFrqh44k<br/>
                /12KQSBPl2TZa5x/dk7qyuZGjsK5I0ATCgZ7l8c4tWjMyAqA+V0x2wgoaRvSCxr4<br/>
                0DG9nP/PtUfMLh6MeSDAYNVGNBB9nKb65xFUeShBcz3cjTZFwUm8sjX3hO7c8D5L<br/>
                fvzE/+A4tEC9SXynByHUpO6PFWyxyRAZe5VRgc94/x1INz5c4A9i347CUikAp185<br/>
                CaFwPdlCieULfNmDzhGTh/YDlDNdBxmt9M4R5ccvWYaoY5ncnMj5a0yKNqFYeq/3<br/>
                +rakQCA7JFGq/558j1382y+TaP9IbAgNVWdjD4PeB/ZuoFfKxZNwOwxce/hK+4y3<br/>
                yDb3e1Vc0oVzSCPhvA4ccPKLp/z6T4gPRj8lw9mGsQPmYJj6qC32maZ2C/IapdBb<br/>
                tynn1/2QqvtSLerFf8HSqXGOKt0e0KHypYwKvFIhqnypPaOrahVbjDIo3uoDJ6kb<br/>
                migbhihVojxdz85us+jFfzdYbar0u/uHzKvlxCwz <br/>
                =QRJx <br/>
                -----END PGP PUBLIC KEY BLOCK----- <br/>
            </code>
        </Layout>
    )
}

export default GPG
