/** @brief Defines the default app wrapper. */
export default function App({ Component }: any) {

  return (

    <body>
      <main>
          <Component />
      </main>
    </body>
  );
}
