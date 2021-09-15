import styled from 'styled-components'
import {grey, pink, white} from './colors'
import {GitHubIcon, LinkedinIcon, LinkIcon} from "./Icons";

const WorkWrapper = styled.div`
  width: 50rem;
  font-size: 2rem;
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: ${grey};
  text-decoration: none;
  border: 1px solid ${white};
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  h5 {
    color: ${pink};
  }
  &:hover {
    color: ${pink};
    border-color: ${pink};
    cursor: pointer;
  }
`
const Img = styled.img`
  max-width: 60rem;
  max-height: 50rem;
  width: 40rem;
  height: 30rem;
`
export const WorkComp = ({imagen, title, description, github, pages}) => {
    return (
        <WorkWrapper>
            <Img src={imagen}/>
            <h5>{title}</h5>
            <p>{description}</p>
            <a href={github} target="_blank"><GitHubIcon/> </a>
            <a href={pages} target="_blank"><LinkIcon/></a>
        </WorkWrapper>
)
}
