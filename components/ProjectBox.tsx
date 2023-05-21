import styled from 'styled-components'

import { Breakpoints } from 'components/Breakpoints'
import { grey, pink, white } from 'components/colors'
import { GitHubIcon, LinkIcon } from 'components/icons'

const WorkWrapper = styled.div`
  width: 25rem;
  font-size: 2rem;
  margin: 1rem 0;
  padding: 0.8rem;
  color: ${grey};
  text-decoration: none;
  border: 1px solid ${white};
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  h5 {
    color: ${pink};
    text-align: center;
  }
  &:hover {
    color: ${pink};
    border-color: ${pink};
  }
  p {
    font-size: 1.2rem;
  }
  a {
    display: flex;
    justify-content: flex-end;
    margin-right: 0.5rem;
  }
  ${Breakpoints.laptop} {
    margin: 2rem;
    padding: 1.5rem;
    text-align: left;
  }
`
const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 0.5rem;
`

const Img = styled.img`
  width: 15rem;
  padding: 1rem;
  display: block;
  margin: auto;
  ${Breakpoints.laptop} {
    padding: 2rem;
    width: 20rem;
  }
`

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
    <WorkWrapper>
      <h5>{title}</h5>
      <Img src={image} />
      <p>{description}</p>
      <IconWrapper>
        <a href={github} target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        {pages && (
          <a href={pages} target="_blank" rel="noreferrer">
            <LinkIcon />
          </a>
        )}
      </IconWrapper>
    </WorkWrapper>
  )
}
