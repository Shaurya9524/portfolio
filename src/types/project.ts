export interface Project {
  index: number,
  title: string,
  description: string,
  href: string,
  tags: string[],
  tech: string[],
  category: string,
  accentRgb: string,
  links: Record<string, string>,
  statusLabel: string
}
