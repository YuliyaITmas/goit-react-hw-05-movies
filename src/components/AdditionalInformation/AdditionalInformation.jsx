
import { List, ListItem, StyledLink, Title } from './AdditionalInformation.styled'

const AdditionalInformatin = () => {
    return (
     <>
            <Title>Additional information</Title>
            <List>
              <ListItem>
                <StyledLink to={`cast`}>Cast</StyledLink>
              </ListItem>
              <li>
                <StyledLink to={`reviews`}>Reviews</StyledLink>
              </li>
            </List>
     </>
    )
}

export default AdditionalInformatin