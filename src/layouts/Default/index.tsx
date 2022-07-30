interface Props {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return <>{children}</>;
};
