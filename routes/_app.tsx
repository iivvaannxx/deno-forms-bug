import Center from "../layouts/center.tsx";

/** @brief Defines the default app wrapper. */
export default function App({ Component }: any) {

  return (

    <body>
      <main>
        <Center>
          <Component />
        </Center>
      </main>

      <footer>
        <Center>
          Footer
        </Center>
      </footer>
    </body>
  );
}
