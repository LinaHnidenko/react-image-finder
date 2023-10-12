import { Vortex } from 'react-loader-spinner';
import css from './Loader.modules.css';

export const Loader = () => {
  return (
    <>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </>
  );
};
