import { useForm } from "@modular-forms/preact";
import { Foo } from "@app/schemas/foo.ts";
import BarIsland from "./bar-island.tsx";

export default function Form() {
  const [exampleForm, { Form, Field }] = useForm<Foo>();

  return (
    <Form onSubmit={(values: any) => console.log(values)}>
      <Field name="bar">
        {(field, props) => (
          <>
            <BarIsland label="Bar Island" others={props} />
            <p>{field.value.value}</p>
          </>
        )}
      </Field>
    </Form>
  );
}
