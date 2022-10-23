export const BlogListStyle = {
  display: 'flex',
  flexDirection: ['column', 'row'],
  alignItems: 'center',
  px: 2,
  py: 4,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'border',
  borderRadius: '6px',
  backgroundColor: 'backgroundSecondary',
  ":hover": {
    boxShadow: 'post'
  },
  "& > img": {
    flex: ['1 1', '0 0 180px'],
    width: ['100%', '180px'],
    height: ['45%', '101px'],
    mr: ['0px', 2],
    mb: [2, '0px'],
    borderRadius: '4px'
  },
  "& .date": {
    color: 'accent',
    fontSize: 3,
    fontWeight: 'bolder',
  },
  "& .title": {
    my: 0,
    fontSize: 4,
  },
  "& .excerpt": {
    lineHeight: '22px',
    fontSize: 2,
    color: 'textSecondary',
  },

}
