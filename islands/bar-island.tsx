type Props = {
  label: string;
  others: any;
};

export default function BarIsland({ label, others }: Props) {
  return (
    <>
      <label for="bar-input">{label}</label>
      <input id="bar-input" type="text" {...others} />
    </>
  );
}
