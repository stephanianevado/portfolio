import { Box } from 'components/common/box/Box'
import { IconButton } from 'components/common/iconButton/IconButton'
import { Close } from 'components/icons/icons'
import { Items } from 'components/navigation/Items'
import { Theme } from 'components/Theme'

type Props = {
  open: boolean
  onClose: () => void
}

export const Menu = ({ open, onClose }: Props) => {
  const { primaryWhite } = Theme.colors

  if (!open) {
    return null
  }
  return (
    <Box
      bg={primaryWhite}
      display="flex"
      position="fixed"
      maxHeight="100%"
      top={0}
      left={0}
      right={0}
      bottom={0}
      overflow="hidden">
      <Box alignSelf="flex-end" marginTop={6} marginRight={4}>
        <IconButton name="close-menu-button" onClick={onClose} icon={Close} />
      </Box>
      <Items />
    </Box>
  )
}
