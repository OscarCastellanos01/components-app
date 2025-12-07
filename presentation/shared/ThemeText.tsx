import { Text, TextProps } from 'react-native';

interface Props extends TextProps {
    clasnName?: string;
    type?: 'normal' | 'h1' | 'h2' | 'semi-bold' | 'link'
}

const ThemeText = ({
    className,
    type,
    ... rest
}: Props) => {
  return (
      <Text
        className={[
          "text-light-text dark:text-dark-text",
          type === "normal" ? "font-normal" : undefined,
          type === "h1" ? "text-3xl" : undefined,
          type === "h2" ? "text-xl" : undefined,
          type === "semi-bold" ? "font-semibold" : undefined,
          type === "link" ? "font-normal underline" : undefined,
          className,
        ].join(" ")}
        {...rest}
      />
  );
}

export default ThemeText;