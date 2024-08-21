import clsx from 'clsx'

export function SlideWrapper({ hovering, index, children }) {
  const isActive = hovering === index
  const isAfter = hovering !== null && hovering < index
  const isBefore = hovering !== null && hovering > index

  return (
    <div
      className={clsx(
        'absolute',
        isActive ? 'opacity' : 'opacity_cero',
        isActive
          ? 'transform_cero'
          : isBefore
          ? 'shift_right'
          : isAfter
          ? 'shift_left'
          : null
      )}
    >
      {children}
    </div>
  )
}
