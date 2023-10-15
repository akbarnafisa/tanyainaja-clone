import { ImageResponse } from "next/server";

import { BASEURL } from "@/lib/api";

// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

function LogoSvg({ width = 176, height = 100 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 591 336"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M275.401 0H81.5989C64.1491 0 50 13.4779 50 30.1V166.052C50 182.677 64.1464 196.155 81.5989 196.155H106.376L106.39 221L139.003 196.155H275.401C292.854 196.155 307 182.677 307 166.052V30.1C307 13.4779 292.854 0 275.401 0ZM188.829 162.476H161.618V136.553H188.829V162.476ZM207.649 97.5725C196.382 101.672 189.158 109.582 189.158 121.384H161.287C161.287 91.2997 181.439 82.2479 194.275 79.2954C202.146 77.4851 209.718 75.1205 210.145 64.9214C210.49 56.6984 205.436 46.5641 184.022 46.9707C160.292 47.4239 158.704 63.9838 158.628 69.477L130.756 69.806C130.721 68.0034 130.767 51.8164 143.97 38.9834C153.75 29.4758 167.614 24.656 185.175 24.656C226.119 24.656 236.314 49.4803 236.94 62.5879C237.984 84.5037 219.887 93.1204 207.649 97.5725Z"
        fill="#8ABCD7"
      />
      <path
        d="M4 230.182V211.909H82.6818V230.182H54.4545V305H32.2727V230.182H4ZM103.852 306.182C99.3977 306.182 95.4432 305.439 91.9886 303.955C88.5644 302.439 85.8523 300.167 83.8523 297.136C81.8826 294.076 80.8977 290.242 80.8977 285.636C80.8977 281.758 81.5795 278.485 82.9432 275.818C84.3068 273.152 86.1856 270.985 88.5795 269.318C90.9735 267.652 93.7311 266.394 96.8523 265.545C99.9735 264.667 103.307 264.076 106.852 263.773C110.822 263.409 114.019 263.03 116.443 262.636C118.867 262.212 120.625 261.621 121.716 260.864C122.837 260.076 123.398 258.97 123.398 257.545V257.318C123.398 254.985 122.595 253.182 120.989 251.909C119.383 250.636 117.216 250 114.489 250C111.549 250 109.186 250.636 107.398 251.909C105.61 253.182 104.473 254.939 103.989 257.182L83.4886 256.455C84.0947 252.212 85.6553 248.424 88.1705 245.091C90.7159 241.727 94.2008 239.091 98.625 237.182C103.08 235.242 108.428 234.273 114.67 234.273C119.125 234.273 123.231 234.803 126.989 235.864C130.746 236.894 134.019 238.409 136.807 240.409C139.595 242.379 141.746 244.803 143.261 247.682C144.807 250.561 145.58 253.848 145.58 257.545V305H124.67V295.273H124.125C122.883 297.636 121.292 299.636 119.352 301.273C117.443 302.909 115.186 304.136 112.58 304.955C110.004 305.773 107.095 306.182 103.852 306.182ZM110.716 291.636C113.11 291.636 115.261 291.152 117.17 290.182C119.11 289.212 120.655 287.879 121.807 286.182C122.958 284.455 123.534 282.455 123.534 280.182V273.545C122.898 273.879 122.125 274.182 121.216 274.455C120.337 274.727 119.367 274.985 118.307 275.227C117.246 275.47 116.155 275.682 115.034 275.864C113.913 276.045 112.837 276.212 111.807 276.364C109.716 276.697 107.928 277.212 106.443 277.909C104.989 278.606 103.867 279.515 103.08 280.636C102.322 281.727 101.943 283.03 101.943 284.545C101.943 286.848 102.761 288.606 104.398 289.818C106.064 291.03 108.17 291.636 110.716 291.636ZM181.398 265.182V305H159.17V235.182H180.307V248H181.08C182.625 243.727 185.261 240.379 188.989 237.955C192.716 235.5 197.155 234.273 202.307 234.273C207.216 234.273 211.473 235.379 215.08 237.591C218.716 239.773 221.534 242.833 223.534 246.773C225.564 250.682 226.564 255.258 226.534 260.5V305H204.307V264.864C204.337 260.985 203.352 257.955 201.352 255.773C199.383 253.591 196.64 252.5 193.125 252.5C190.792 252.5 188.731 253.015 186.943 254.045C185.186 255.045 183.822 256.485 182.852 258.364C181.913 260.242 181.428 262.515 181.398 265.182ZM251.386 331.182C248.72 331.182 246.205 330.97 243.841 330.545C241.477 330.152 239.447 329.621 237.75 328.955L242.659 312.818C244.841 313.545 246.811 313.97 248.568 314.091C250.356 314.212 251.886 313.924 253.159 313.227C254.462 312.561 255.462 311.364 256.159 309.636L257.023 307.545L232.205 235.182H255.477L268.341 285H269.068L282.114 235.182H305.523L279.205 311.682C277.932 315.5 276.129 318.864 273.795 321.773C271.492 324.712 268.508 327.015 264.841 328.682C261.205 330.348 256.72 331.182 251.386 331.182ZM331.852 306.182C327.398 306.182 323.443 305.439 319.989 303.955C316.564 302.439 313.852 300.167 311.852 297.136C309.883 294.076 308.898 290.242 308.898 285.636C308.898 281.758 309.58 278.485 310.943 275.818C312.307 273.152 314.186 270.985 316.58 269.318C318.973 267.652 321.731 266.394 324.852 265.545C327.973 264.667 331.307 264.076 334.852 263.773C338.822 263.409 342.019 263.03 344.443 262.636C346.867 262.212 348.625 261.621 349.716 260.864C350.837 260.076 351.398 258.97 351.398 257.545V257.318C351.398 254.985 350.595 253.182 348.989 251.909C347.383 250.636 345.216 250 342.489 250C339.549 250 337.186 250.636 335.398 251.909C333.61 253.182 332.473 254.939 331.989 257.182L311.489 256.455C312.095 252.212 313.655 248.424 316.17 245.091C318.716 241.727 322.201 239.091 326.625 237.182C331.08 235.242 336.428 234.273 342.67 234.273C347.125 234.273 351.231 234.803 354.989 235.864C358.746 236.894 362.019 238.409 364.807 240.409C367.595 242.379 369.746 244.803 371.261 247.682C372.807 250.561 373.58 253.848 373.58 257.545V305H352.67V295.273H352.125C350.883 297.636 349.292 299.636 347.352 301.273C345.443 302.909 343.186 304.136 340.58 304.955C338.004 305.773 335.095 306.182 331.852 306.182ZM338.716 291.636C341.11 291.636 343.261 291.152 345.17 290.182C347.11 289.212 348.655 287.879 349.807 286.182C350.958 284.455 351.534 282.455 351.534 280.182V273.545C350.898 273.879 350.125 274.182 349.216 274.455C348.337 274.727 347.367 274.985 346.307 275.227C345.246 275.47 344.155 275.682 343.034 275.864C341.913 276.045 340.837 276.212 339.807 276.364C337.716 276.697 335.928 277.212 334.443 277.909C332.989 278.606 331.867 279.515 331.08 280.636C330.322 281.727 329.943 283.03 329.943 284.545C329.943 286.848 330.761 288.606 332.398 289.818C334.064 291.03 336.17 291.636 338.716 291.636ZM407.307 305H383.125L414.534 211.909H444.489L475.898 305H451.716L429.852 235.364H429.125L407.307 305ZM404.08 268.364H454.625V285.455H404.08V268.364ZM485.92 235.182H508.148V307.909C508.148 313.667 506.966 318.242 504.602 321.636C502.269 325.03 498.966 327.47 494.693 328.955C490.42 330.439 485.375 331.182 479.557 331.182C478.769 331.182 478.027 331.167 477.33 331.136C476.633 331.106 475.875 331.076 475.057 331.045V314.182C475.602 314.242 476.087 314.288 476.511 314.318C476.936 314.348 477.36 314.364 477.784 314.364C480.845 314.364 482.966 313.788 484.148 312.636C485.33 311.515 485.92 309.788 485.92 307.455V235.182ZM497.011 227.045C493.89 227.045 491.208 226.015 488.966 223.955C486.723 221.864 485.602 219.348 485.602 216.409C485.602 213.5 486.723 211.015 488.966 208.955C491.208 206.864 493.89 205.818 497.011 205.818C500.163 205.818 502.845 206.864 505.057 208.955C507.299 211.015 508.42 213.5 508.42 216.409C508.42 219.348 507.299 221.864 505.057 223.955C502.845 226.015 500.163 227.045 497.011 227.045ZM541.977 306.182C537.523 306.182 533.568 305.439 530.114 303.955C526.689 302.439 523.977 300.167 521.977 297.136C520.008 294.076 519.023 290.242 519.023 285.636C519.023 281.758 519.705 278.485 521.068 275.818C522.432 273.152 524.311 270.985 526.705 269.318C529.098 267.652 531.856 266.394 534.977 265.545C538.098 264.667 541.432 264.076 544.977 263.773C548.947 263.409 552.144 263.03 554.568 262.636C556.992 262.212 558.75 261.621 559.841 260.864C560.962 260.076 561.523 258.97 561.523 257.545V257.318C561.523 254.985 560.72 253.182 559.114 251.909C557.508 250.636 555.341 250 552.614 250C549.674 250 547.311 250.636 545.523 251.909C543.735 253.182 542.598 254.939 542.114 257.182L521.614 256.455C522.22 252.212 523.78 248.424 526.295 245.091C528.841 241.727 532.326 239.091 536.75 237.182C541.205 235.242 546.553 234.273 552.795 234.273C557.25 234.273 561.356 234.803 565.114 235.864C568.871 236.894 572.144 238.409 574.932 240.409C577.72 242.379 579.871 244.803 581.386 247.682C582.932 250.561 583.705 253.848 583.705 257.545V305H562.795V295.273H562.25C561.008 297.636 559.417 299.636 557.477 301.273C555.568 302.909 553.311 304.136 550.705 304.955C548.129 305.773 545.22 306.182 541.977 306.182ZM548.841 291.636C551.235 291.636 553.386 291.152 555.295 290.182C557.235 289.212 558.78 287.879 559.932 286.182C561.083 284.455 561.659 282.455 561.659 280.182V273.545C561.023 273.879 560.25 274.182 559.341 274.455C558.462 274.727 557.492 274.985 556.432 275.227C555.371 275.47 554.28 275.682 553.159 275.864C552.038 276.045 550.962 276.212 549.932 276.364C547.841 276.697 546.053 277.212 544.568 277.909C543.114 278.606 541.992 279.515 541.205 280.636C540.447 281.727 540.068 283.03 540.068 284.545C540.068 286.848 540.886 288.606 542.523 289.818C544.189 291.03 546.295 291.636 548.841 291.636Z"
        fill="black"
      />
    </svg>
  );
}

function DefaultOg() {
  return (
    <div tw="flex p-8 flex-col w-full h-full items-center justify-between bg-white">
      <div></div>
      <div tw="flex flex-col justify-center items-center font-extrabold text-6xl tracking-tight w-full">
        <div tw="flex">
          <span>Tanyakan </span>
          <span tw="text-blue-500 ml-2 mr-2">apa aja</span>
        </div>
        <div tw="flex">
          <span>ke saya dengan </span>
          <span tw="text-blue-500 ml-2">anonim</span>
        </div>
      </div>
      <div tw="flex mb-2 items-center justify-center mt-10 w-full">
        <LogoSvg />
      </div>
    </div>
  );
}

function UserOg({ slug }: { slug: string }) {
  return (
    <div tw="flex p-8 flex-col w-full h-full items-center justify-between bg-white">
      <div tw="flex text-blue-500 font-bold text-2xl">
        {BASEURL.replace("https://www.", "")}/p/{slug}
      </div>
      <div tw="flex flex-col justify-center items-center font-extrabold text-6xl tracking-tight w-full">
        <div tw="flex">
          <span>Tanyakan </span>
          <span tw="text-blue-500 ml-2 mr-2">apa aja</span>
        </div>
        <div tw="flex">
          <span>ke saya dengan </span>
          <span tw="text-blue-500 ml-2">anonim</span>
        </div>
      </div>
      <div tw="flex mb-2 items-center justify-center mt-10 w-full">
        <LogoSvg />
      </div>
    </div>
  );
}

function QuestionOg({ question }: { question: string }) {
  return (
    <div tw="flex p-10 flex-col w-full h-full items-center justify-center bg-white">
      <div tw="flex flex-col justify-center items-center font-extrabold text-3xl tracking-tight w-full">
        <p>
        {question?.length > 500
            ? `${question?.substring(0, 500)}...`
            : `${question}`}
        </p>
      </div>
      <div></div>
    </div>
  );
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const type = searchParams.get("type");
  const slug = searchParams.get("slug");
  const question = searchParams.get("question");

  if (type === "user") {
    return new ImageResponse(<UserOg slug={slug || ""} />, {
      width: 800,
      height: 400,
    });
  } else if (type == "question") {
    return new ImageResponse(<QuestionOg question={question || ""} />, {
      width: 800,
      height: 600,
    });
  }

  return new ImageResponse(<DefaultOg />, {
    width: 800,
    height: 400,
  });
}
