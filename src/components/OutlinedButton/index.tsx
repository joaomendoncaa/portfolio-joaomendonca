import { Button } from "./styles";

interface OutlinedButtonProps {
  height: "small" | "big";
  text: string;
}

export default function OutlinedButton<OutlinedButtonProps>({ ...rest }) {
  return <Button height={rest.height}>{rest.text}</Button>;
}
