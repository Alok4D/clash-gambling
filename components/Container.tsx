export default function Container({ children }: React.PropsWithChildren) {
  return <div className="mx-auto max-w-350 px-6">{children}</div>;
}
