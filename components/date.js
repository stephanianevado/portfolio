
import styled from 'styled-components';

const DateContainer = styled.p`
  color: green;
  font-size: 17px;
`;

export const TodayDate = () => {
    const date = new Date()
    console.log('hello from date component');

    return (
        <DateContainer>
            {`${date.getUTCDate()} / ${date.getUTCMonth() + 1} / ${date.getUTCFullYear()}`}
        </DateContainer>
    )
}