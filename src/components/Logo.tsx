type logoProps = {
  children: string
}

const Logo = ({ children }: logoProps) => {
  return (
    <div>
      <h1 className='font-bold text-2xl'>{children}</h1>
    </div>
  )
}

export default Logo
