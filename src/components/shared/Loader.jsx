import { Circles } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Circles
      height="20"
      width="20"
      color="white"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      />
  )
}

export default Loader