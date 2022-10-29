type logoProps = {
  children: string
}

const Logo = ({ children }: logoProps) => {
  return (
    <div className='mr-12'>
      <h1 className='text-3xl font-bold text-veryDarkBlue'>{children}</h1>
    </div>
  )
}

export default Logo
