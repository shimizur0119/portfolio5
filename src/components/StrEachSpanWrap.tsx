type Props = {
  str: string;
};

export default function StrEachSpanWrap({ str }: Props) {
  const elm = str.split("").map((char, i) => {
    return <span key={i}>{char}</span>;
  });

  return elm;
}
