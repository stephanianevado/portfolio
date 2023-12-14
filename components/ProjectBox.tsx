import Image from 'next/image'

import { Box } from 'components/common/box/Box'
import { GitHub, Link } from 'components/icons/icons'
type Props = {
  image: string
  title: string
  description: string
  github: string
  pages?: string
}

export const ProjectBox = ({
  image,
  title,
  description,
  github,
  pages,
}: Props) => {
  return (
    <Box>
      <h5>{title}</h5>
      <Image src={image} alt={title} width={100} height={100} />
      <p>{description}</p>

      <a href={github} target="_blank" rel="noreferrer">
        <GitHub />
      </a>
      {pages && (
        <a href={pages} target="_blank" rel="noreferrer">
          <Link />
        </a>
      )}
    </Box>
  )
}
