import { extendTheme } from "@chakra-ui/react"

export const AppTheme = extendTheme({
  fonts: {
    heading: '"Josefin Sans", sans-serif',
    body: '"Josefin Sans", sans-serif',
    mono: '"Josefin Sans", monospace',
  },
  styles: {
    global: {
      table: {
        display: {
          base: 'block',
          md: 'table',
        },
        caption: {
          width: {
            base: '90vw',
            md: '100%',
          }
        }
      },
      thead: {
        display: {
          base: 'block',
          md: 'table-header-group',
        },
        tr: {
          position: {
            base: 'absolute',
            md: 'relative'
          },
          top: {
            base: '-9999px',
          },
          left: {
            base: '-9999px',
          }
        }
      },
      tbody: {
        display: {
          base: 'block',
          md: 'table-row-group',
        }
      },
      th: {
        display: {
          base: 'block',
          md: 'table-cell',
        }
      },
      td: {
        display: {
          base: 'block',
          md: 'table-cell',
        },
        position: {
          base: 'relative',
        },
        textAlign: {
          base: 'right !important',
          md: 'left !important',
        },
      },
      'td[data-is-numeric=true]': {
        textAlign: {
          base: 'right !important',
          md: 'right !important',
        },
      },
      'td:before': {
        position: {
          base: 'absolute',
        },
        top: '6px',
        left: '6px',
        width: '45%',
        paddingRight: '10px',
        whiteSpace: 'nowrap',
        textAlign: 'left',
        fontWeight: 'bold',
        content: {
          base: 'attr(data-title)',
          md: 'none'
        }
      },
      tr: {
        display: {
          base: 'block',
          md: 'table-row',
        },
        marginBottom: {
          base: '1px',
        },
        borderTop: {
          base: '2px',
          md: 'none'
        },
        borderTopColor: {
          base: 'teal.200',
        }
      }
    }
  }
})
