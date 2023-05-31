
import PropTypes from 'prop-types';
import { ErrorWrap, Img } from './ErrorMessage.styled';
import  errorIMG from 'components/errorIMG.png';

const ErrorMessage = ({message}) => {
  return (
    <ErrorWrap>
      <Img src={errorIMG} alt="error" />
      <p>{message}</p>
    </ErrorWrap>
  );
};
ErrorMessage.propTypes = {
  message: PropTypes.string,
}
export default ErrorMessage;

