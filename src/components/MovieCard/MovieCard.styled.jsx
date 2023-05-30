
import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  gap:20px;
  flex-direction: row;
  align-items: center;
  padding: 20px;
    margin: 20px 20px 20px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 780px
  & > div:first-child {
  flex: 0 0 auto;
  margin-right: 20px;
  margin-bottom: 20px;
}
&> div:last-child {
  flex: 1 1 auto;
}
`;

export const Title = styled.h1`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Image = styled.img`
  width: 300px;
  height: auto;
  // object-fit: cover;
  margin-bottom: 10px;
`;

export const Rating = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const ReleaseDate = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const GenresList = styled.ul`
 
  margin-bottom: 10px;
`;

export const Genre = styled.li`
  display: inline-block;
  font-size: 14px;
  margin-right: 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Overview = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  margin-bottom: 5px;
`;


export const Info = styled.div`
  width: 400px
`;
