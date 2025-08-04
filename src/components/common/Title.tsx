export function Title({ title }: { title: string }) {
  return <h2 className="text-3xl font-bold mb-12">{title}</h2>;
}

export function SubTitle({ title }: { title: string }) {
  return <h3 className="text-xl font-semibold mb-3">{title}</h3>;
}
