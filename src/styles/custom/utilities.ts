export const imgHack = {
  overflow: 'hidden',
  backfaceVisibility: 'hidden',
  transform: 'translate3d(0, 0, 0.1px)',
}

export const lineClamp = (line: number) => ({
  display: '-webkit-box',
  WebkitLineClamp: line,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden'
})
