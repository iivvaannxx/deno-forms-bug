import { asset, Head } from "$fresh/runtime.ts";
import Form from "../islands/form.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href={asset("/app.css")} />
      </Head>

      <Form />
    </>
  );
}
