export const BucketIcon = () => {
  return (
    <svg width='22' height='20' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
        fill='#69707D'
        fillRule='nonzero'
      />
    </svg>
  )
}

type Color = {
  color: string
}

export const CartIcon = ({ color }: Color) => {
  return (
    <svg width='22' height='20' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
        fill={color}
        fillRule='nonzero'
      />
    </svg>
  )
}

export const CloseIcon = () => {
  return (
    <svg width='14' height='15' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
        fill='#69707D'
        fillRule='evenodd'
      />
    </svg>
  )
}

export const DeleteIcon = ({ color }: Color) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill={color}
      className='h-6 w-6'
    >
      <path
        fillRule='evenodd'
        d='M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export const MenuIcon = () => {
  return (
    <svg width='16' height='15' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z'
        fill='#69707D'
        fillRule='evenodd'
      />
    </svg>
  )
}

export const MinusIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      className='h-5 w-5'
    >
      <path
        fillRule='evenodd'
        d='M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export const PlusIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      className='h-5 w-5'
    >
      <path d='M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z' />
    </svg>
  )
}

export const NextIcon = () => {
  return (
    <svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='m2 1 8 8-8 8'
        stroke='#1D2026'
        strokeWidth='3'
        fill='none'
        fillRule='evenodd'
      />
    </svg>
  )
}

export const PreviousIcon = () => {
  return (
    <svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M11 1 3 9l8 8'
        stroke='#1D2026'
        strokeWidth='3'
        fill='none'
        fillRule='evenodd'
      />
    </svg>
  )
}

export const CloseIconLarge = () => {
  return (
    <svg
      className='h-6 w-6'
      viewBox='0 0 15 15'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
        fill='#fff'
        fillRule='evenodd'
      />
    </svg>
  )
}
