import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { dark } from 'components/colors'
import { XIcon } from 'components/icons'
import { Items } from 'components/navigation/Items'

type Props = {
  open: boolean
  onClose: () => void
}

export const Menu = ({ open, onClose }: Props) => {
  if (!open) {
    return null
  }
  return (
    <Box bg={dark} position="fixed" top={0} left={0} right={0} bottom={0}>
      <Box position="fixed" right={0}>
        <Button name="close-menu-button" onClick={onClose}>
          <XIcon />
        </Button>
      </Box>
      <Items />
    </Box>
  )
}
