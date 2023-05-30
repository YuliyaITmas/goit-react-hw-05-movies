import { Circles } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';
 const Loader = () => {
  return (
    <LoaderWrap>
      <Circles
        height="70"
        width="70"
        color="#FFB775"
        ariaLabel="circles-loading"
        visible={true}
      />
    </LoaderWrap>
  );
};

export default Loader